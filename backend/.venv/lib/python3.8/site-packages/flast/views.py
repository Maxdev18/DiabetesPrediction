import os
from abc import ABCMeta, abstractproperty

from flast.conf import settings
from jinja2 import Environment, FileSystemLoader
from werkzeug.utils import redirect
from werkzeug.wrappers import Response


class View(object):
    @property
    def authorized_method(self):
        authorized_methods = ["GET", "POST", "PUT", "DELETE", "PATCH"]

        return [method for method in authorized_methods
                if hasattr(self, method.lower())]

    def as_view(self, request, *args, **kwargs):
        template_path = os.path.join(
            os.path.dirname("."), settings.TEMPLATE_DIR)
        self.jinja_env = Environment(
            loader=FileSystemLoader(template_path), autoescape=True)
        return self.dispatch(request, *args, **kwargs)

    def render_template(self, template_name, **context):
        t = self.jinja_env.get_template(template_name)
        return Response(t.render(context), mimetype='text/html')

    def dispatch(self, request, *args, **kwargs):
        if request.method in self.authorized_method:
            return getattr(self, request.method.lower())(request, *args,
                                                         **kwargs)


class CreateView(View):
    """
    This class implement the common create worflow.
    - GET: show the form
    - POST:
      - validate the form
      - save something somewhere
      - redirect to an url
      - or re-render the form with errors
    """
    __metaclass__ = ABCMeta

    @abstractproperty
    def form(self):
        pass

    @abstractproperty
    def template(self):
        pass

    @abstractproperty
    def redirect(self):
        pass

    def get(self, request):
        return self.render_template(self.template)

    def post(self, request):
        form_class = self.form
        form = form_class(request.form)
        if form.validate():
            form.save()
            return redirect(self.redirect)
        else:
            return self.render_template(self.template, errors=form.errors)
