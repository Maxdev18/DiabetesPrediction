import importlib
import os


def get_settings():
    settings = os.environ.get("FLAST_SETTINGS")
    if settings is None:
        raise ValueError("you need to set the settings environment variable")
    else:
        return importlib.import_module(settings)


settings = get_settings()
