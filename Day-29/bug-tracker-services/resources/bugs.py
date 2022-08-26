from flask import  jsonify
from flask_restful import  Resource, reqparse, inputs
from flask_jwt_extended import jwt_required, get_jwt_identity

from models.bugs import BugModel

new_bug_parser = reqparse.RequestParser()
new_bug_parser.add_argument('name',
                             type=str,
                             help='The field cannot be blank',
                             required=True
                             )
new_bug_parser.add_argument('is_closed',
                             type=inputs.boolean,
                             default=False
                             )


class Bugs(Resource):

    @jwt_required()
    def get(self):  # <- will be invoked when a GET request is made for '/bugs'
        identity = get_jwt_identity()
        print(identity) # => user id
        
        return jsonify([bug.to_json() for bug in BugModel.get_all()])

    @jwt_required()
    def post(self):
        new_bug = new_bug_parser.parse_args()
        #new_bug_model = BugModel(name = new_bug['name'], is_closed = new_bug['is_closed'])
        new_bug_model = BugModel(**new_bug)
        new_bug_model.save()
        return jsonify(new_bug_model.to_json())



