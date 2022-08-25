from xmlrpc.client import Boolean
from flask import Flask
from flask_restful import Api, Resource, reqparse

app = Flask(__name__)

api = Api(app)

_new_bug_parser = reqparse.RequestParser()
_new_bug_parser.add_argument('name', 
                            type=str, 
                            help='The field cannot be blank', 
                            required=True
                            )
_new_bug_parser.add_argument('isClosed',
                            type=Boolean,
                            default=False
                            )

_bug_parser = _new_bug_parser.copy()
_bug_parser.add_argument('id',
                         type=int,
                         required=True,
                         help='Invalid data'
                         )



class Bugs(Resource):

    def get(self): # <- will be invoked when a GET request is made for '/bugs'
        return { 'bugs' : [] }

    def post(self):
        data = _new_bug_parser.parse_args()
        print(data)
        return f'bug [{data["name"]}] - is created'

class Bug(Resource):

    def get(self, id):
        return f'Bug-{id} will be returned'

    def put(self, id):
        bug_to_update = _bug_parser.parse_args()
        return f'Bug-{bug_to_update["id"]} will be updated'

    def delete(self, id):
        return f'Bug-{id} will be removed'


api.add_resource(Bugs, '/bugs')
api.add_resource(Bug, '/bugs/<int:id>')


if __name__ == '__main__':
    app.run(port = 8080, debug = True)