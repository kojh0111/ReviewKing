from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Keywords, KeyResLink, TotalRating, Restaurants
from sqlalchemy import and_
import pandas as pd

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
        restaurants = Restaurants.query.filter_by(subcategory=subcategory).all()
        keywords = args["key"]

        if len(keywords) != 0:
            df_all = pd.DataFrame(columns=["restaurant_id", "rating", "word"])
            for keyword in keywords:
                key_data = Keywords.query.filter(Keywords.keyword == keyword).first()
                if key_data:
                    tmp = []
                    for restaurant in restaurants:
                        key_res_link = KeyResLink.query.filter(
                            and_(
                                KeyResLink.keyword_id == key_data.id,
                                KeyResLink.restaurant_id == restaurant.id,
                            )
                        ).first()
                        if key_res_link:
                            total_rating = TotalRating.query.filter_by(
                                restaurant_id=restaurant.id
                            ).first()
                            tmp.append(
                                [
                                    restaurant.id,
                                    total_rating.integrated_rating,
                                    True,
                                ]
                            )
                    df = pd.DataFrame(tmp, columns=["restaurant_id", "rating", "word"])
                    df_all = df_all.merge(
                        df,
                        how="outer",
                        on=["restaurant_id", "rating"],
                    )
            df_cnt = (
                pd.DataFrame(
                    df_all.set_index(["restaurant_id", "rating"]).sum(axis=1),
                    columns=["count"],
                )
                .reset_index("rating")
                .sort_values(by=["count", "rating"], ascending=False)
            )
            id_list = [value[0] for _, value in df_cnt.reset_index().iterrows()]

            result = list()
            for res_id in id_list:
                total_rating = TotalRating.query.filter_by(restaurant_id=res_id).first()
                restaurant = Restaurants.query.filter_by(id=res_id).first()

                tmp = {
                    "name": restaurant.name,
                    "restaurant_id": restaurant.id,
                    "naver": total_rating.naver,
                    "kakao": total_rating.kakao,
                    "mango": total_rating.mango,
                    "siksin": total_rating.siksin,
                    "img_url": restaurant.img_url,
                    "integrated_rating": round(
                        float(total_rating.integrated_rating), 2
                    ),
                }
                result.append(tmp)

            return jsonify(status=200, result=result)
        else:
            return jsonify(status=404)


api.add_resource(WhatToEatResult, "/what-to-eat/<string:subcategory>/")
