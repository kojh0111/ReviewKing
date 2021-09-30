import csv
from app import create_app
from app import db
from models import Restaurants, Reviews, Menus
from dataset import crawled_data

app = create_app()
# app.app_context().push()

# 수정 예정
with app.app_context():
    with open("../data/crawled_reviews.csv", "r", encoding="CP949") as data:
        reader = csv.DictReader(data)
        for lines in reader:
            date = lines["date"]  # 받는 형식에 따라 변환 필요
            rating = lines["rating"]  # 받는 형식에 따라 변환 필요
            content = lines["content"]
            platform = lines["platform"]
            name = lines["name"].replace(" ", "")

            restaurant = Restaurants.query.filter_by(name=name).first()
            restaur_id = restaurant.id

            reviews = Reviews(
                date=date,
                name=name,
                rating=rating,
                content=content,
                platform=platform,
                restaur_id=restaur_id,
            )
            db.session.add(reviews)
            db.session.commit()
    db.create_all(app=app)
