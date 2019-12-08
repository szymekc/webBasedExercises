from flask import Flask
import os
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, template_folder='.')
app.config['SECRET_KEY'] = 'dupa.8'
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' +    os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True

db = SQLAlchemy(app)