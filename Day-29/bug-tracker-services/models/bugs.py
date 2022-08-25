from db import db
from datetime import datetime
class BugModel(db.Model):

    __tablename__ = 'bugs'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    is_closed = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.today())

    def __repr__(self):
        return '<Bug %r>' % self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'is_closed': self.is_closed,
            'created_at': self.created_at
        }

    def save(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def get_all(cls):
        return cls.query.all()

    @classmethod
    def get_by_id(cls, id):
        return cls.query.filter_by(id=id).first()
