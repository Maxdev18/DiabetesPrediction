#!/usr/bin/env python

import argparse
import os

from jinja2 import Template

from flast import templates

parser = argparse.ArgumentParser()
parser.add_argument('project', help='Name of the project to create')
parser.add_argument("--pg",
                    required=False,
                    dest="pg",
                    action='store_true',
                    help="create a project with postgresql support")
parser.add_argument("--redis",
                    required=False,
                    dest="rs",
                    action='store_true',
                    help="create a project with redis support")
templates_path = templates.__path__[0]

args = parser.parse_args()

os.mkdir(args.project)
cur_dir = os.path.abspath(args.project)

for elem in os.listdir(templates_path):
    if not elem.endswith("py"):
        continue
    path = os.path.join(templates_path, elem)
    target = os.path.join(cur_dir, elem)

    if not os.path.exists(target):
        template = Template(open(path).read())
        app_type = ["BaseApp"]
        if args.pg:
            app_type.append("PostgreSQLApp")
        if args.rs:
            app_type.append("RedisApp")
        app_type.reverse()
        render = template.render(app_type=app_type, project=args.project)
        with open(target, "w") as fd:
            fd.write(render)

for elem in ["sql", "templates", "statics"]:
    target = os.path.join(cur_dir, elem)
    if not os.path.exists(target):
        os.mkdir(target)
