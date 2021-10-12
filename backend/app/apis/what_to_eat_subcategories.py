from flask import Blueprint, jsonify
from flask_restful import Resource, Api
from models import Keywords
from app import db
import random


what_to_eat_subcategories = Blueprint("what-to-eat-subcategories", __name__)
api = Api(what_to_eat_subcategories)


class WhatToEatSubCategories(Resource):
    def get(self):
        keywords_data = Keywords.query.all()
        subcategories = [data.subcategory for data in keywords_data]
        rand_subcategories = random.sample(subcategories, 10)  # 무작위로 10개 뽑기

        return jsonify(status=200, subcategory=rand_subcategories)


api.add_resource(WhatToEatSubCategories, "/what-to-eat")
