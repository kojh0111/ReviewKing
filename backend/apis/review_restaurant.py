from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Reviews, TotalRating

reviews = Blueprint("reviews", __name__)
api = Api(reviews)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("restaurant_name", type=str)


class ReviewRestaurant(Resource):
    # 음식점 검색창 제공
    def get(self, id=None):
        # 지도 제공
        restaurant_data = Restaurants.query.filter(id == Restaurants.id).one_or_none()
        if restaurant_data:
            total_rating = TotalRating.query.filter(
                TotalRating.restaurant_id == restaurant_data.id
            ).first()
            restaurant_reviews = Reviews.query.filter(
                restaurant_data.id == Reviews.restaurant_id
            ).all()

            data = {
                "name": restaurant_data.name,
                "lat": restaurant_data.latitude_y,
                "lng": restaurant_data.longitude_x,
                "naver": total_rating.naver,
                "kakao": total_rating.kakao,
                "mango": total_rating.mango,
                "siksin": total_rating.siksin,
                "reviews": [
                    [restaurant_review.content, restaurant_review.platform]
                    for restaurant_review in restaurant_reviews
                ],
                "id": restaurant_data.id,
            }
            return jsonify(status=200, data=data)
        else:
            return jsonify(status=404)


api.add_resource(ReviewRestaurant, "/reviews/<int:id>")
