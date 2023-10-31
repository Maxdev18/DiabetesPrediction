import json
from flask import Flask, redirect, request, jsonify
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
def getResult():
  res = request.get_json()

  for question in res["questions"]:
    for input in question["inputs"]:
      print("Value " + str(res["questions"].index(question) + 1) + ": " + input)

  result = {
    "accuracy": "98%"
  }

  return jsonify(result)

if __name__ == "__main__":
  app.run()
