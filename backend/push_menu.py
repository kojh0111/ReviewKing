import csv
from app import create_app
from app import db
from models import Restaurants

app = create_app()
# app.app_context().push()

with app.app_context():
    with open("./dataset/seoul_restaurants.csv", "r", encoding="CP949") as data:
        reader = csv.DictReader(data)
        for lines in reader:
            status = lines["상세영업상태명"]
            address = lines["지번주소"]
            if status == "영업" and "강남구" in address:
                name = lines["사업장명"].replace(" ", "")
                res_type = lines["업태구분명"]
                longitude_x = lines["좌표정보(X)"]
                latitude_y = lines["좌표정보(Y)"]
                restaurants = Restaurants(
                    name=name,
                    res_type=res_type,
                    longitude_x=longitude_x,
                    latitude_y=latitude_y,
                )
                db.session.add(restaurants)
                db.session.commit()
        # db.create_all(app=app)
