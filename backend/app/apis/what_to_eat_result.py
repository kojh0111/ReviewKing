from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, TotalRating, Menus
from app import db
import random

eat_result = Blueprint("what-to-eat-result", __name__)
api = Api(eat_result)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class WhatToEatResult(Resource):
    def get(self, id=None):
        category = Categories.query.filter_by(id=id).first()

        if category:
            category_id = category.id
            # 해당 카테고리의 상위 평점 3개의 음식점 제공
            restaurants_rated = (
                Restaurants.query.join(TotalRating)
                .filter(Restaurants.category_id == category_id)
                .order_by(TotalRating.integrated_rating.desc())[:3]
            )
            # 상위 3개 가져오기
            rank = 1
            result = []
            for restaurant in restaurants_rated:
                total_rating = TotalRating.query.filter_by(
                    restaurant_id=restaurant.id
                ).first()
                tmp = {
                    "name": restaurant.name,
                    "restaurnt_id": restaurant.id,
                    "integrated_rating": total_rating.integrated_rating,
                    "rank": rank,
                }
                result.append(tmp)
                rank += 1

            return jsonify(status=200, data=result)
        else:
            return jsonify(status=404)


api.add_resource(WhatToEatResult, "/what-to-eat/<int:id>")
