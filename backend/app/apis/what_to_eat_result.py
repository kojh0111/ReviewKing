from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, TotalRating, Menus
from app import db
import random

what_to_eat_result = Blueprint("what_to_eat_result", __name__)
api = Api(what_to_eat_result)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class WhatToEatResult(Resource):
    def post(self, id=None):
        category = Categories.query.filter_by(id=id).first()

        if category:
            category_id = category.id
            # 해당 카테고리의 상위 평점 3개의 음식점 제공
            restaurants_rated = (
                Restaurants.query.join(TotalRating)
                .filter(Restaurants.category_id == category_id)
                .order_by(TotalRating.integrated_rating.desc())[:3]
            )

            data = dict()
            # 상위 3개 가져오기
            rank = 1
            result = []
            for restaurant in restaurants_rated:
                total_rating = TotalRating.query.filter_by(
                    restaurant_id=restaurant.id
                ).first()
                tmp = {
                    "name": restaurant.name,
                    "integrated_rating": total_rating.integrated_rating,
                    "longitude": restaurant.longitude_x,
                    "latitude": restaurant.latitude_y,
                    "naver": total_rating.naver,
                    "kakao": total_rating.kakao,
                    "mango": total_rating.mango,
                    "siksin": total_rating.siksin,
                    "rank": rank,
                }
                result.append(tmp)
                rank += 1

            data["result"] = result

            return jsonify(status=200, data=data)
        else:
            return jsonify(status=404)


api.add_resource(WhatToEatResult, "/what-to-eat/<int:id>")
