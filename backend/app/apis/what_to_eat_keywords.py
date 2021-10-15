from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, KeyResLink, Keywords

what_to_eat_keywords = Blueprint("what-to-eat-keywords", __name__)
api = Api(what_to_eat_keywords)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("subcategory", type=str)


class WhatToEatKeywords(Resource):
    def get(self, subcategory=None):
        restaurants = Restaurants.query.filter_by(subcategory=subcategory).all()

        if restaurants:
            tmp = []
            for restaurant in restaurants:
                keyword_data = KeyResLink.query.filter_by(
                    restaurant_id=restaurant.id
                ).all()
                for data in keyword_data:
                    key = Keywords.query.filter_by(id=data.keyword_id).first()
                    if key:
                        tmp.append(key.keyword)

            return jsonify(status=200, keywords=sorted(tmp))

        else:
            return jsonify(status=404)


api.add_resource(WhatToEatKeywords, "/what-to-eat/<string:subcategory>")
