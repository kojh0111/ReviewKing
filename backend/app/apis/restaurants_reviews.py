from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse, request
from models import Restaurants, TotalRating, Analysis

restaurants_reviews = Blueprint("restaurants-reviews", __name__)
api = Api(restaurants_reviews)


class RestaurantsReviews(Resource):
    # 음식점 검색창 제공
    def get(self, id=None):
        # 지도 제공
        restaurant_data = Restaurants.query.filter(id == Restaurants.id).one_or_none()
        if restaurant_data:
            total_rating = TotalRating.query.filter(
                TotalRating.restaurant_id == restaurant_data.id
            ).first()

            # order: naver, kakao, mango, siksin
            wordclouds = []

            for platform in ["naver", "kakao", "mango", "siksin"]:
                wordcloud = Analysis.query.filter_by(
                    restaurant_id=restaurant_data.id, platform=platform
                ).first()
                if wordcloud:
                    wordclouds.append(wordcloud.file_path)
                else:
                    wordclouds.append(None)

            data = {
                "name": restaurant_data.name,
                "lat": restaurant_data.latitude_y,
                "lng": restaurant_data.longitude_x,
                "naver": total_rating.naver,
                "kakao": total_rating.kakao,
                "mango": total_rating.mango,
                "siksin": total_rating.siksin,
                "integrated_rating": total_rating.integrated_rating,
                "naverWC": wordclouds[0],
                "kakaoWC": wordclouds[1],
                "mangoWC": wordclouds[2],
                "siksinWC": wordclouds[3],
                "id": restaurant_data.id,
            }
            return jsonify(status=200, restaurant=data)
        else:
            return jsonify(status=404)


api.add_resource(RestaurantsReviews, "/reviews/<int:id>")
