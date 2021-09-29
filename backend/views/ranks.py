from flask import Blueprint, jsonify
from flask_restful import Resource, Api
from db_connect import get_connection

ranks = Blueprint("ranks", __name__)
api = Api(ranks)

# db = DB()
class Ranks(Resource):
    def get(self):
        return jsonify(status="200", result="success")


api.add_resource(Ranks, "/ranks/")
