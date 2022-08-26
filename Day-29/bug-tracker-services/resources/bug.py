from flask import jsonify
from flask_restful import Resource, reqparse, inputs
from flask_jwt_extended import jwt_required, get_jwt

from models.bugs import BugModel
from resources.bugs import new_bug_parser

_bug_parser = new_bug_parser.copy()
_bug_parser.add_argument('id',
                         type=int,
                         required=True,
                         help='Invalid data'
                         )
_bug_parser.replace_argument('is_closed',
                             type=inputs.boolean,
                             required=True,
                             help='Invalid data'
                             )
_bug_parser.replace_argument('created_at',
                             type=inputs.date,
                             required=True,
                             help='Invalid data'
                             )
class Bug(Resource):

    @jwt_required()
    def get(self, id):
        bug_from_db = BugModel.get_by_id(id)  # data from db
        return jsonify(bug_from_db.to_json())

    @jwt_required()
    def put(self, id):
        bug_to_update = _bug_parser.parse_args()  # data from user (postman)
        bug_from_db = BugModel.get_by_id(id)  # data from db
        # updating the data from the db
        bug_from_db.name = bug_to_update['name']
        # updating the data from the db
        bug_from_db.is_closed = bug_to_update['is_closed']
        bug_from_db.save()  # save the data back to the db
        return jsonify(bug_from_db.to_json())

    @jwt_required()
    def delete(self, id):
        #get the user info from the claim
        claims = get_jwt()
        if not claims['is_admin']:
            return {'message' : 'Admin privilege required'}, 401
        return f'Bug-{id} will be removed'
