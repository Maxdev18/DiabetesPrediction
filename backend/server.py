import json
from flask import Flask
import numpy as np
import pandas as pd

app = Flask(__name__)

@app.route("/")
def get_users():
  users = [
    { "name": "John Doe" },
    { "name": "Jane Doe" },
  ]

  return json.dumps(users)

if __name__ == "__main__":
  app.run()
