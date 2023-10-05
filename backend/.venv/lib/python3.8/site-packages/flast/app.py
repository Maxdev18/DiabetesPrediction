import os

from flast.conf import settings
from werkzeug.exceptions import HTTPException
from werkzeug.wrappers import Request
from werkzeug.wsgi import SharedDataMiddleware

try:
    import psycopg2
    from psycopg2 import connect, extras
    PG_ENABLE = True
except ImportError:
    PG_ENABLE = False

try:
    import redis
    REDIS_ENABLE = True
except ImportError:
    REDIS_ENABLE = False


class BaseApp(object):
    def __init__(self):
        super(BaseApp, self).__init__()

    def dispatch_request(self, request):
        adapter = self.url_map.bind_to_environ(request.environ)
        try:
            endpoint, values = adapter.match()
            return getattr(self.views, endpoint.capitalize())().as_view(
                request, **values)
        except HTTPException as e:
            return e

    def wsgi_app(self, environ, start_response):
        request = Request(environ)

        if hasattr(self, "session"):
            sid = request.cookies.get('session')

            if sid is None:
                request.session = self.session.new()
            else:
                request.session = self.session.get(sid)

        response = self.dispatch_request(request)

        if hasattr(self, "session") and request.session.should_save:
            self.session.save(request.session)
            response.set_cookie('session', request.session.sid)
        return response(environ, start_response)

    def __call__(self, environ, start_response):
        return self.wsgi_app(environ, start_response)


class PostgreSQLApp(object):
    def __init__(self):
        if not PG_ENABLE:
            raise ImportError("please install the psycopg2 package in"
                              " order to use postgresql backend")
        self.postgresql = connect(**settings.POSTGRESQL)
        self.sql_path = os.path.join(os.path.dirname("."), 'sql')
        super(PostgreSQLApp, self).__init__()

    def write_pg(self, path, params=None):
        fd = os.path.join(self.sql_path, path)
        with open(fd) as fd:
            with connect(**settings.POSTGRESQL) as conn:
                with conn.cursor(
                        cursor_factory=extras.DictCursor) as cur:
                    cur.execute(fd.read(), params)

    def request_pg(self, path, params=None):
        fd = os.path.join(self.sql_path, path)
        with open(fd) as fd:
            with connect(**settings.POSTGRESQL) as conn:
                with conn.cursor(
                        cursor_factory=extras.DictCursor) as cur:
                    cur.execute(fd.read(), params)
                    return cur.fetchall()


class RedisApp(object):
    def __init__(self):
        if not REDIS_ENABLE:
            raise ImportError("please install the redis package"
                              " in order to use redis backend")
        self.redis = redis.Redis(**settings.REDIS)
        super(RedisApp, self).__init__()


def create_app(app, with_static=True):

    app = app()
    if with_static:
        app.wsgi_app = SharedDataMiddleware(app.wsgi_app, {
            settings.STATIC_PATH: os.path.join(
                os.path.dirname('.'), settings.STATIC_DIR)
        })
    return app
