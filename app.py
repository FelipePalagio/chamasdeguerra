import sys

from flask import Flask, request, jsonify
from werkzeug.formparser import default_stream_factory
import json
from views import views

app = Flask(__name__)
app.register_blueprint(views,url_prefix= '/')

ACCEPTED = ['felipe','deia']

@app.route('/submit_username', methods=['POST'])
def submit_username():
    data = request.get_json()
    username = data.get("username")

    if username in ACCEPTED:
        # This would be a success response
        response = {
            "status": "success",
            "message": f"Olá, {username}!",
            "username": username
        }
    else:
        # This would be an error response
        response = {
            "status": "error",
            "message": "USUARIO INVALIDO."
        }

    # Send back the response as JSON
    return jsonify(response)


if __name__ == '__main__':
    app.run(host="0.0.0.0",debug=True,  port=8001)


