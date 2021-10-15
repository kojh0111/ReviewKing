from flask import Blueprint, jsonify
from flask_restful import Resource, Api
from models import Restaurants

what_to_eat_subcategories = Blueprint("what-to-eat-subcategories", __name__)
api = Api(what_to_eat_subcategories)


class WhatToEatSubCategories(Resource):
    def get(self):
        restaurants = Restaurants.query.all()
        subcategories = list(
            set(
                [
                    restaurant.subcategory
                    for restaurant in restaurants
                    if restaurant.subcategory != ""
                ]
            )
        )
        return jsonify(status=200, subcategory=subcategories)


api.add_resource(WhatToEatSubCategories, "/what-to-eat")
