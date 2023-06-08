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

@app.route('/api/network-device', methods=['GET', 'POST'])
def get_network_device():
    data = request.json
    response = api.get_device_by_id(data['id'])
    return jsonify(response['response'])

@app.route('/api/host', methods=['GET', 'POST'])
def get_host():
    data = request.json
    response = api.get_host_by_ip(data['hostIp'])
    return jsonify(response['response'])

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    # if app.debug:
    #     return requests.get('http://localhost:8080/{}'.format(path)).text
    if path == '':
        logging.info(True)
    return render_template("index.html")