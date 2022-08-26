
from flask import Flask, jsonify
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

@jwt.additional_claims_loader
def add_claims_to_jwt(identity):
    if identity == 1:
        return { 'is_admin' : True }
    return { 'is_admin' : False }

@jwt.invalid_token_loader # we have to keep the argument here, since it's passed in by the caller internally
def invalid_token_callback(error):
    return jsonify({
        'message': 'Signature verification failed.',
        'error': 'invalid_token'
    }), 401

#customizing the standard error when no token in the request
@jwt.unauthorized_loader
def missing_token_callback(error):
    return jsonify({
        'description' : 'Request does not contain an access token',
        'error' : 'authorizatin_required'
    }), 401



api.add_resource(Bugs, '/bugs')
api.add_resource(Bug, '/bugs/<int:id>')
api.add_resource(UserRegister, '/register')
api.add_resource(UserLogin, '/login')

if __name__ == '__main__':
    db.init_app(app)
    app.run(port = 8080, debug = True)


""" 
Header
    Authorization
    Bearer <access_token>

 """