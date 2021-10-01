import csv
from app import create_app
from app import db
from models import Restaurants, Reviews

app = create_app()
# app.app_context().push()


def push_restaurants(business_type):
    with app.app_context():
        with open(
            f"./dataset/seoul_{business_type}.csv", "r", encoding="CP949"
        ) as data:
            reader = csv.DictReader(data)
            for lines in reader:
                status = lines["상세영업상태명"]
                address = lines["지번주소"]  # 도로명 주소는 없는 경우도 있음
                if status == "영업" and "강남구" in address:
                    name = lines["사업장명"].replace(" ", "")
                    res_type = lines["업태구분명"]  # 수정 필요
                    longitude_x = lines["좌표정보(X)"]
                    latitude_y = lines["좌표정보(Y)"]
                    restaurants = Restaurants(
                        name=name,
                        res_type=res_type,
                        longitude_x=longitude_x,
                        latitude_y=latitude_y,
                    )
                    restaurant_exists = Restaurants.query.filter_by(name=name).first()
                    if not restaurant_exists:
                        db.session.add(restaurants)
                        db.session.commit()
        # db.create_all(app=app)


# Insert data
business_types = ["restaurants", "refreshment_shop"]
for business_type in business_types:
    push_restaurants(business_type)
