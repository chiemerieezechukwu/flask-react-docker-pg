import os
from flask import Flask
from flask_restful import Api
from flask_cors import  CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app)
CORS(app)

DATABASE_URL = 'sqlite:///database.db'

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL') or DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from src import apis