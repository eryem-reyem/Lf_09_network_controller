from flask import Flask
from app.python_scripts.networkcontroller_api import Api

api = Api()

app = Flask(__name__)
            # static_folder = "../dist\static",
            # template_folder = "../dist")
app.config['SECRET_KEY'] = 'any secret string'

from app import routes
