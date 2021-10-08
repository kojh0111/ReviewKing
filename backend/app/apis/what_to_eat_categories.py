from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, TotalRating, Menus
from app import db
import random

what_to_eat_categoreis = Blueprint("what_to_eat_categoreis", __name__)
api = Api(what_to_eat_categoreis)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class WhatToEatCategories(Resource):
    def get(self):
        categories = Categories.query.all()
        category_ids = [cat.id for cat in categories]
        random_ids = random.sample(category_ids, 10)  # 무작위로 10개 뽑기

        data = dict()
        for random_id in random_ids:
            restaurant = (
                Restaurants.query.join(Categories)
                .filter(Restaurants.category_id == random_id)
                .first()
            )
            category = Categories.query.filter_by(id=random_id).first().category
            img_url = restaurant.img_url
            data[f"{category}"] = img_url

        return jsonify(status=200, data=data)


api.add_resource(WhatToEat, "/what-to-eat")
