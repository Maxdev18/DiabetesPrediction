import os
{% if "PostgreSQLApp" in app_type %}

POSTGRESQL = {'database': "",
              'user': "",
              'port': 5432
              }
{% endif %}

{% if "RedisApp" in app_type %}

REDIS = {
    "host":'localhost',
    "port": 6379,
    "db": 0
}

{% endif %}

DEBUG = True
TEMPLATE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "templates")
STATIC_DIR = "statics"
STATIC_PATH = "/static"
