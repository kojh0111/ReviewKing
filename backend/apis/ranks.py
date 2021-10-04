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

        # 해당 카테고리를 가진 restaurant_id 찾기
        categories_data = Categories.query.filter_by(category=category).all()
        restaurant_ids = list(set([data.restaurant_id for data in categories_data]))

        # restaurant_id 이용 전체 평점 기준 ordering
        integrated_rating_ordred = []
        for id in restaurant_ids:
            res = Restaurants.query.filter_by(id=id).first()
            # 평점, 이름, id 추가
            integrated_rating_ordred.append((res.integrated_rating, res.name, id))
        # print(integrated_rating_ordred)

        # integrated_rating 기준으로 내림차순 정렬
        integrated_rating_ordred = sorted(integrated_rating_ordred, key=lambda x: -x[0])

        top_ranked_res = []
        for rating, res_name, res_id in integrated_rating_ordered:
            menus = Menu.query.filter_by(restaurant_id=res_id).all()
            tmp = {
                "name": res_name,
                "integrated_rating": rating,
                "menus": [menu.name for menu in menus],
            }
            top_ranks_res.append(tmp)

        data = {"result": top_ranked_res}

        return jsonify(status=200, data=data)


api.add_resource(Ranks, "/ranks")
