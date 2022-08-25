
from flask import Flask
from flask_restful import Api, Resource, reqparse, inputs
from flask_sqlalchemy import SQLAlchemy
from datetime import date


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./bug-tracker.sqlite3'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['BUNDLE_ERRORS'] = True #global setting for all the reqparsers in the app

db = SQLAlchemy(app)
api = Api(app)


class BugModel(db.Model):
    
    __tablename__ = 'bugs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    is_closed = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, default=date.today())

    def __repr__(self):
        return '<Bug %r>' % self.name

    @classmethod
    def get_all(cls):
        return cls.query.all()



#_new_bug_parser = reqparse.RequestParser(bundle_errors=True)
_new_bug_parser = reqparse.RequestParser()
_new_bug_parser.add_argument('name', 
                            type=str, 
                            help='The field cannot be blank', 
                            required=True
                            )
_new_bug_parser.add_argument('isClosed',
                            type=inputs.boolean,
                            default=False
                            )

_bug_parser = _new_bug_parser.copy()
_bug_parser.add_argument('id',
                         type=int,
                         required=True,
                         help='Invalid data'
                         )
_bug_parser.replace_argument('isClosed',
                            type=inputs.boolean,
                            required=True,
                            help = 'Invalid data'
                            )



class Bugs(Resource):

    def get(self): # <- will be invoked when a GET request is made for '/bugs'
        return BugModel.get_all()

    def post(self):
        data = _new_bug_parser.parse_args()
        print(data)
        return f'bug [{data["name"]}] - is created'

class Bug(Resource):

    def get(self, id):
        return f'Bug-{id} will be returned'

    def put(self, id):
        bug_to_update = _bug_parser.parse_args()
        print(bug_to_update)
        return f'Bug-{bug_to_update["id"]} will be updated'

    def delete(self, id):
        return f'Bug-{id} will be removed'


api.add_resource(Bugs, '/bugs')
api.add_resource(Bug, '/bugs/<int:id>')


if __name__ == '__main__':
    app.run(port = 8080, debug = True)