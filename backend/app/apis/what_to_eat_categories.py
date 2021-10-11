from flask import Blueprint, jsonify, request
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, TotalRating, Menus
from app import db
import random
import heapq

eat_categories = Blueprint("eat-categories", __name__)
api = Api(eat_categories)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str, location="json", action="append")


class WhatToEatCategories(Resource):
    def get(self):
        categories = Categories.query.all()
        category_ids = [cat.id for cat in categories]
        random_ids = random.sample(category_ids, 10)  # 무작위로 10개 뽑기
        #
        result = []
        for random_id in random_ids:
            restaurant = Restaurants.query.filter_by(category_id=random_id).first()
            category = Categories.query.filter_by(id=random_id).first()
            tmp = {
                "category_id": category.id,
                "category": category.category,
                "subcategory": category.subcategory,
                "img_url": restaurant.img_url,
            }
            result.append(tmp)

        return jsonify(status=200, data=result)

    def post(self):
        args = parser.parse_args()

        categories = args["category"]
        return
        # categories_data = Categories.query.filter(Categories.id.in_(categories)).all()

        # heap = []
        # for category in categories_data:
        #     restaurant = (
        #         Restaurants.query.filter_by(category_id=category.id)
        #         .order_by(Restaurants.integrated_rating.desc())
        #         .first()
        #     )
        #     heapq.heappush(heap, (restaurant.integrated_rating, restaurant))

        # result = []
        # while heap:
        #     integrated_rating, restaurant = heapq.happop(heap)
        #     tmp = {
        #         "name": restaurant.name,
        #         "restaurnt_id": restaurant.id,
        #         "integrated_rating": round(float(total_rating.integrated_rating), 2),
        #         "rank": rank,
        #     }
        #     result.append(tmp)

        # return jsonify(status=200, data=result)
        return


api.add_resource(WhatToEatCategories, "/what-to-eat")
