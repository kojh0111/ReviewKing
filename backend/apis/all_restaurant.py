from flask import Blueprint, jsonify
from flask_restful import Resource, Api, reqparse
from models import Restaurants, Categories

restaurantlist = Blueprint("restaurantlist", __name__)
api = Api(restaurantlist)

# request를 받기 위해서는 parser에 argument 추가 필요
parser = reqparse.RequestParser()
parser.add_argument("restaurant_name", type=str)


class Restaurantlist(Resource):
    # 음식점 검색창 제공
    def get(self):
        # 지도 제공
        restaurant_data = Restaurants.query.all()
        data = list()
        for restaurant in restaurant_data:
            category = Categories.query.filter(
                Categories.id == restaurant.category_id
            ).first()
            tmp = {
                "name": restaurant.name,
                "lat": restaurant.latitude_y,
                "lng": restaurant.longitude_x,
                "img": restaurant.img_url,
                "category": category.category,
                "id": restaurant.id,
            }
            data.append(tmp)

        return jsonify(status=200, data=data)


api.add_resource(Restaurantlist, "/reviews")
