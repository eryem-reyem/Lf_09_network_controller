"""Module starts WebApp"""
from app import app
import logging

# https://codeburst.io/full-stack-single-page-application-with-vue-js-and-flask-b1e036315532

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    app.run(port=5000, debug=True)