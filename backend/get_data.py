import csv
from app import create_app
from app import db
from models import Restaurants, Reviews, Menus

app = create_app()
app.app_context().push()


def push_data():
    if Restaurants.query.first() is None:
        with app.app_context():
            with open("seoul_restaurants.csv", "r", encoding="CP949") as data:
                reader = csv.DictReader(data)
                for lines in reader:
                    status = lines["상세영업상태명"]
                    address = lines["지번주소"]
                    if status == "영업" and "강남구" in address:
                        name = lines["사업장명"].replace(" ", "")
                        res_type = lines["업태구분명"]
                        longitude_x = lines["좌표정보(X)"]
                        longitude_y = lines["좌표정보(Y)"]
                        restaurants = Restaurants(
                            name=name,
                            res_type=res_type,
                            longitude_x=longitude_x,
                            longitude_y=longitude_y,
                        )
                    db.session.add(restaurants)
                    db.session.commit()
                db.create_all(app=app)


def push_reviews(crawled_data):
    with app.app_context():
        # reviews_crawled 형식에 따라 변환 필요
        for data in crawled_data:
            date = data["date"]  # 받는 형식에 따라 변환 필요
            rating = data["rating"]  # 받는 형식에 따라 변환 필요
            content = data["content"]
            platform = data["platform"]
            name = data["name"].replace(" ", "")

            restaurant = Restaurants.query.filter_by(name=name).first()
            restaur_id = restaurant.id

            reviews = Reviews(
                date=date,
                rating=rating,
                content=content,
                platform=platform,
                restaur_id=restaur_id,
            )
            db.session.add(reviews)
            db.session.commit()
        db.create_all(app=app)
