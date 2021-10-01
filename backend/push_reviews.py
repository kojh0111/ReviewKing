import csv
from app import create_app
from app import db
from models import Restaurants, Reviews, Menus

app = create_app()
# app.app_context().push()


def push_crawled_reviews(website):
    with app.app_context():
        with open(f"./dataset/{website}_reviews.csv", "r", encoding="utf8") as data:
            reader = csv.DictReader(data)
            for lines in reader:
                platform = lines["platform"]
                name = lines["name"].replace(" ", "")
                date = lines["date"][:-1].replace(".", "-")
                rating = float(lines["rating"])
                content = lines["content"]

                restaurant = Restaurants.query.filter_by(name=name).first()
                if restaurant:
                    restaurant_id = restaurant.id

                    reviews = Reviews(
                        platform=platform,
                        name=name,
                        date=date,
                        rating=rating,
                        content=content,
                        restaurant_id=restaurant_id,
                    )
                    db.session.add(reviews)
                    db.session.commit()
        db.create_all(app=app)


# -------------------------------------
# 여러 파일이 생길 경우 반복문으로 돌리기 위한 코드
# -------------------------------------
# for _ in range(n):
# push_crawled_reviews(reviews)

push_crawled_reviews("kakao")
