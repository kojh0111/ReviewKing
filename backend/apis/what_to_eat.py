from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, Menus
from app import db
import random

what_to_eat = Blueprint("what-to-eat", __name__)
api = Api(what_to_eat)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class WhatToEat(Resource):
    def get(self):
        categories = Categories.query.all()
        category_ids = [cat.id for cat in categories]
        random_ids = random.sample(category_ids, 10)  # 무작위로 10개 뽑기

        data = dict()
        for id in random_ids:
            restaurant = (
                Restaurants.query.join(Categories).filter(category_id == id).first()
            )
            category = restaurant.category
            img_url = restaurant.img_url
            data[f"{category}"] = img_url

        return jsonify(status=200, data=data)

    # 선택한 카테고리에 대한 결과 전송
    def post(self):
        args = parser.parse_args()
        category = args["category"].strip()

        category_id = Categories.query.filter_by(category=category).first().id

        # 해당 카테고리의 상위 평점 3개의 음식점 제공
        restaurants_rated = (
            Restaurants.query.join(TotalRating)
            .filter(Restaurants.category_id == category_id)
            .order_by(TotalRating.integrated_rating.desc())[:4]
        )

        data = dict()
        # 상위 3개 가져오기
        for restaurant in restaurants_rated:
            tmp = {
                "name": restaurant.name,
                "integrated_rating": restaurant.integrated_rating,
                "longitude": restaurant.longitude_x,
                "latitude": restaurant.latitude_y,
                "naver": restaurant.naver,
                "kakao": restaurant.kakao,
                "mango": restaurant.mango,
                "siksin": restaurant.siksin,
            }
            data[f"{restaurant.name}"] = tmp

        return jsonify(status=200, data=data)


api.add_resource(WhatToEat, "/what-to-eat")
