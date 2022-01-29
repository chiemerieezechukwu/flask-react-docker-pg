from src import api, db
from flask import request, jsonify
from flask_restful import Resource
from .models import Items

class HelloWorld(Resource):
    def get(self):
        return HelloWorld.return_all()

    def post(self):
        item = Items(name=request.json['item'])
        db.session.add(item)
        db.session.commit()
        return HelloWorld.return_all()

    def put(self, id):
        item = Items.query.get(id)
        if not item:
            self.post()
        else:
            item.name = request.json['item']
            db.session.add(item)
            db.session.commit()
        return HelloWorld.return_all()

    def delete(self, id):
        item = Items.query.filter_by(id=id)
        if item.count():
            item.delete()
            db.session.commit()
            return HelloWorld.return_all()
        return 'Nothing to delete'

    @staticmethod
    def return_all():
        items: Items = Items.query.all()
        return  jsonify([e.serialize() for e in items])

api.add_resource(HelloWorld, '/', '/<int:id>')
