import json
from flask import Flask, redirect, request
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"])

@app.route("/")
@cross_origin()
def get_users():
  users = [
    { "name": "John Doe" },
    { "name": "Jane Doe" },
  ]

  return json.dumps(users)

@app.route("/get-result", methods=['POST'])
@cross_origin()
def getUsers():
  res = request
  print(res)

  result = {
    "accuracy": "98%"
  }

  return redirect("127.0.0.1:3000", code=200, json=result)

if __name__ == "__main__":
  app.run()