from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Keywords

what_to_eat_keywords = Blueprint("what-to-eat-keywords", __name__)
api = Api(what_to_eat_keywords)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("subcategory", type=str)


class WhatToEatKeywords(Resource):
    def get(self, subcategory=None):
        keywords_data = Keywords.query.filter_by(subcategory=subcategory).all()

        if keywords_data:
            keywords = [data.keyword for data in keywords_data]
            return jsonify(status=200, keywords=sorted(keywords))

        else:
            return jsonify(status=404)


api.add_resource(WhatToEatKeywords, "/what-to-eat/<string:subcategory>")
