from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, TotalRating
from sqlalchemy.sql import func
from app import db

ranks_result = Blueprint("ranks_result", __name__)
api = Api(ranks_result)


class RanksResult(Resource):
    def get(self, id=None):
        # 해당 카테고리의 상위 평점 3개의 음식점 제공
        category = Categories.query.filter_by(id=id).first()
        if category:
            category_id = category.id
            restaurants_rated = (
                Restaurants.query.join(TotalRating)
                .filter(Restaurants.category_id == category_id)
                .order_by(TotalRating.integrated_rating.desc())
            )

            rank = 1
            result = []
            for restaurant in restaurants_rated:
                if rank == 4:
                    break
                total_rating = TotalRating.query.filter_by(
                    restaurant_id=restaurant.id
                ).first()
                tmp = {
                    "name": restaurant.name,
                    "integrated_rating": round(
                        float(total_rating.integrated_rating), 2
                    ),
                    "img_url": restaurant.img_url,
                    "lat": restaurant.latitude_y,
                    "lng": restaurant.longitude_x,
                    "rank": rank,
                }
                result.append(tmp)
                rank += 1

            return jsonify(status=200, category=category.category, result=result)
        else:
            return jsonify(status=404)


api.add_resource(RanksResult, "/ranks/<int:id>")
