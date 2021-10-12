from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse, request
from models import Keywords, KeyResLink, TotalRating, Restaurants
from sqlalchemy import and_
import heapq

what_to_eat_result = Blueprint("what-to-eat-result", __name__)
api = Api(what_to_eat_result)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("key", action="append")


class WhatToEatResult(Resource):
    # 음식점 검색창 제공
    def get(self, subcategory=None):
        # 지도 제공
        # subcategory = request.path.split("/")[-1]
        args = parser.parse_args()
        keywords = args["key"]

        if len(keywords) != 0:
            # 해당 keyword를 가진 음식점들 중 평점 높은 것들 heap에 저장
            heap = []
            for keyword in keywords:
                key_data = Keywords.query.filter(
                    and_(
                        Keywords.keyword == keyword, Keywords.subcategory == subcategory
                    )
                ).first()
                key_res_links = KeyResLink.query.filter_by(keyword_id=key_data.id).all()
                if key_res_links:
                    for key_res_link in key_res_links:
                        res_id = key_res_link.restaurant_id
                        restaurant = Restaurants.query.filter_by(id=res_id).first()
                        total_rating = TotalRating.query.filter_by(
                            restaurant_id=res_id
                        ).first()
                        if (-total_rating.integrated_rating, restaurant) not in heap:
                            heapq.heappush(
                                heap, (-total_rating.integrated_rating, restaurant)
                            )
                        else:
                            pass

            # 상위 3개 가져오기
            rank = 1
            result = []
            while heap and rank <= 3:
                integrated_rating, restaurant = heapq.heappop(heap)
                total_rating = TotalRating.query.filter_by(
                    restaurant_id=restaurant.id
                ).first()
                tmp = {
                    "name": restaurant.name,
                    "naver": total_rating.naver,
                    "kakao": total_rating.kakao,
                    "mango": total_rating.mango,
                    "siksin": total_rating.siksin,
                    "integrated_rating": round(float(-integrated_rating), 2),
                    "rank": rank,
                }
                result.append(tmp)
                rank += 1

            return jsonify(status=200, result=result)
        else:
            return jsonify(status=404)


api.add_resource(WhatToEatResult, "/what-to-eat/<string:subcategory>/")
