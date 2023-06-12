from app import app, api
from flask import render_template, jsonify, request
from random import *
from flask_cors import CORS
import requests
import logging


cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route('/api/random')
def random_number():
    response = {
        'randomNumber': randint(1, 100)
    }
    logging.info(response)
    return jsonify(response)

@app.route('/api/network-devices')
def get_network_devices():
    response = api.get_network_devices()
    return jsonify(response['response'])

@app.route('/api/hosts')
def get_hosts():
    response = api.get_hosts()
    return jsonify(response['response'])

@app.route('/api/users')
def get_users():
    response = api.get_users()
    return jsonify(response['response'])

@app.route('/api/add_user', methods=['POST'])
def add_user():
    data = request.data
    response = api.add_user(data.get('username'), data.get('password'), data.get('role'))
    return jsonify(response['response'])

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    if app.debug:
        return requests.get('http://localhost:8080/{}'.format(path)).text
    return render_template("index.html")