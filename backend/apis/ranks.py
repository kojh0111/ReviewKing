from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, Menus
from sqlalchemy.sql import func
from app import db

ranks = Blueprint("ranks", __name__)
api = Api(ranks)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class Ranks(Resource):
    # 음식 카테고리 제공
    def get(self):
        # 카테고리들 모두 불러오기
        categories_data = Categories.query.all()
        categories = list(set([data.category for data in categories_data]))

        # 해당 카테고리의 category_id에 해당하는 menu의 첫번째 img_url 가져오기
        category_ids = [
            Categories.query.filter_by(category=cat).first().id for cat in categories
        ]

        img_urls = [
            Menus.query.filter_by(category_id=cat_id).first().img_url
            for cat_id in category_ids
        ]

        data = dict()
        for cat, url in zip(categories, img_urls):
            data[f"{cat}"] = url

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
            .order_by(TotalRating.integrated_rating.desc())[:3]
        )

        data = dict()
        rank = 1
        for restaurant in restaurants_rated
            menus = Menus.query.filter_by(restaurant_id=restaurant.id).all()
            tmp = {
                "integrated_rating": restaurant.integrated_rating,
                "img_url": restaurant.img_url,
                "menus": [menu.name for menu in menus],
                "rank": rank
            }
            data[f"{restaurant.name}"] = tmp
            rank += 1

        return jsonify(status=200, data=data)


api.add_resource(Ranks, "/ranks")
