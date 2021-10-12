from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories, TotalRating
from sqlalchemy.sql import func
from app import db

ranks_categories = Blueprint("ranks_categories", __name__)
api = Api(ranks_categories)


class RanksCategories(Resource):
    def get(self):
        categories_data = Categories.query.all()

        result = []
        for category_data in categories_data:
            restaurant = Restaurants.query.filter_by(
                category_id=category_data.id
            ).first()
            tmp = {
                "category_id": category_data.id,
                "category": category_data.category,
                "img_url": restaurant.img_url,
            }
            result.append(tmp)
        return jsonify(status=200, categories=result)


api.add_resource(RanksCategories, "/ranks")
