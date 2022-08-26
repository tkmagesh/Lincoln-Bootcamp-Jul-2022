
from flask import Flask
from flask_restful import Api
from resources.bugs import Bugs
from resources.bug import Bug
from resources.users import UserRegister, UserLogin
from flask_jwt_extended import JWTManager

from db import db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./bug-tracker.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['BUNDLE_ERRORS'] = True #global setting for all the reqparsers in the app
api = Api(app)

app.config['JWT_SECRET_KEY'] = 'lincoln'
jwt = JWTManager(app)

api.add_resource(Bugs, '/bugs')
api.add_resource(Bug, '/bugs/<int:id>')
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')

if __name__ == '__main__':
    db.init_app(app)
    app.run(port = 8080, debug = True)