from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, Reviews, Menus
from app import db
import random
import heapq

what_to_eat = Blueprint("what-to-eat", __name__)
api = Api(what_to_eat)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("category", type=str)


class WhatToEat(Resource):
    def get(self):
        data = dict()
        categories = Categories.query.all()
        category_ids = [cat.id for cat in categories]
        random_ids = random.sample(category_ids, 10)  # 무작위로 10개 뽑기

        randomly_selected_cats = [
            Categories.query.filter_by(id=random_id).first().category for random_id in random_ids
        ]

        img_urls = [
            Menus.query.filter_by(category_id=random_id).first().img_url
            for random_id in random_ids
        ]

        data = dict()
        for cat, url in zip(categories, img_urls):
            data[f"{cat}"] = url

        return jsonify(status=200, data=data)

    # 선택한 카테고리에 대한 결과 전송
    def post(self):
        args = parser.parse_args()
        category = args["category"].strip()

        # 해당 카테고리의 상위 평점 5개? 정도의 음식점 제공
        restaurants = Restaurants.query.filter_by(category=category).all()

        # 상위 랭킹만 전달하기 위해 heap 사용
        heap = []
        for res in restaurants:
            heapq.heappush(heap, (-(res.integrated_rating), res)) 

        data = dict()
        # 상위 5개 가져오기
        for _ in range(5):
            res_rating, res = heapq.heappop(heap)
            total_rating = TotalRating.query.filter_by(restaurant_id=res.id).first()
            tmp = {
                "name": res.name,
                "integrated_rating": -(res_rating),
                "longitude": res.longitude_x,
                "latitude": res.latitude_y
                "naver": total_rating.naver,
                "kakao": total_rating.kakao,
                "mango": total_rating.mango,
                "sikshin": total_rating.sikshin
            }
            data[f'{res.name}'] = tmp

        return jsonify(status=200, data=data)


api.add_resource(WhatToEat, "/what-to-eat")
