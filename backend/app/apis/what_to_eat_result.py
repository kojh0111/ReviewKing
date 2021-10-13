from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Keywords, KeyResLink, TotalRating, Restaurants
from sqlalchemy import and_
from collections import Counter


what_to_eat_result = Blueprint("what-to-eat-result", __name__)
api = Api(what_to_eat_result)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("key", action="append")


class WhatToEatResult(Resource):
    # 음식점 검색창 제공
    def get(self, subcategory=None):
        # 지도 제공
        args = parser.parse_args()
        keywords = args["key"]

        if len(keywords) != 0:
            for keyword in keywords:
                key_data = Keywords.query.filter(
                    and_(
                        Keywords.keyword == keyword, Keywords.subcategory == subcategory
                    )
                ).first()
                key_res_links = KeyResLink.query.filter_by(keyword_id=key_data.id).all()
                res_list = list()
                if key_res_links:
                    for key_res_link in key_res_links:
                        res_id = key_res_link.restaurant_id
                        restaurant = Restaurants.query.filter_by(id=res_id).first()
                        res_list.append(restaurant.id)
                    final_list = [x for x, _ in Counter(res_list).most_common(3)]

            # 상위 3개 가져오기
            rank = 1
            result = []
            for most_res_id in final_list:
                total_rating = TotalRating.query.filter_by(
                    restaurant_id=most_res_id
                ).first()
                tmp = {
                    "name": restaurant.name,
                    "naver": total_rating.naver,
                    "kakao": total_rating.kakao,
                    "mango": total_rating.mango,
                    "siksin": total_rating.siksin,
                    "integrated_rating": round(
                        float(total_rating.integrated_rating), 2
                    ),
                    "rank": rank,
                }
                result.append(tmp)
                rank += 1

            return jsonify(status=200, result=result)
        else:
            return jsonify(status=404)


api.add_resource(WhatToEatResult, "/what-to-eat/<string:subcategory>/")
