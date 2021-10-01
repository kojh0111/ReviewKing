from flask import Blueprint, jsonify
from flask_restful import Resource, Api
from models import Restaurants, Reviews
from sqlalchemy.sql import func
from app import db

ranks = Blueprint("ranks", __name__)
api = Api(ranks)

# db = DB()
class Ranks(Resource):
    def get(self):
        restaurant_cnt = (
            db.session.query(func.count(Reviews.restaurant_id))
            .group_by(Reviews.restaurant_id)
            .all()
        )

        res = dict()
        res["인허가된 서울시 음식점과 겹치는 크롤링 된 음식점 수"] = len(restaurant_cnt)
        # for restaurant in restaurants:
        #     tmp = dict()
        #     tmp["name"] = restaurant.name
        #     tmp["res_type"] = restaurant.res_type
        #     tmp["total_rating"] = restaurant.total_rating
        #     tmp["longitude_x"] = restaurant.longitude_x
        #     tmp["latitude_y"] = restaurant.latitude_y

        #     res["restaurant"] = tmp

        return res, 200


api.add_resource(Ranks, "/ranks")
