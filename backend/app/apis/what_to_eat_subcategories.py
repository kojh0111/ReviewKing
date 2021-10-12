from flask import Blueprint, jsonify
from flask_restful import Resource, Api
from models import Keywords

what_to_eat_subcategories = Blueprint("what-to-eat-subcategories", __name__)
api = Api(what_to_eat_subcategories)


class WhatToEatSubCategories(Resource):
    def get(self):
        keywords_data = Keywords.query.all()
        subcategories = list(set([data.subcategory for data in keywords_data]))
        return jsonify(status=200, subcategory=subcategories)


api.add_resource(WhatToEatSubCategories, "/what-to-eat")
