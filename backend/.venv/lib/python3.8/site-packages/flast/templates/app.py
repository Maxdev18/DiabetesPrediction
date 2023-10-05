from flast.conf import settings
from flast.app import {{ app_type|join(', ') }}, create_app

from {{project}}.urls import url_map
from {{project}} import views


class App({{ app_type|join(', ') }}):
    def __init__(self):
        self.url_map = url_map
        self.views = views
        super(App, self).__init__()

if __name__ == '__main__':
    from werkzeug.serving import run_simple
    app = create_app(App)
    run_simple('0.0.0.0', 5000, app, use_debugger=True, use_reloader=True)

app = create_app(App,with_static=settings.DEBUG)
