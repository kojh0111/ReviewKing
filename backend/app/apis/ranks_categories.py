from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, TotalRating, Menus
from sqlalchemy.sql import func
from app import db

ranks_categories = Blueprint("ranks_categories", __name__)
api = Api(ranks_categories)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class RanksCategories(Resource):
    # 음식 카테고리 제공
    def get(self):
        # 카테고리들 모두 불러오기
        categories_data = Categories.query.all()

        result = []
        for category_data in categories_data:
            restaurant = Restaurants.query.filter_by(
                category_id=category_data.id
            ).first()
            tmp = {
                "category_id": category_data.id,
                "category": category_data.category,
                "img_url": restaurant.img_url,
            }
            result.append(tmp)

        return jsonify(status=200, data=result)


api.add_resource(RanksCategories, "/ranks")
