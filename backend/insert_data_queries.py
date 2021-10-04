import csv
from app import create_app
from app import db
from models import Restaurants, Reviews, Categories, TotalRating

app = create_app()


class Insert:
    def categories(self):
        with app.app_context():
            with open(
                f"./dataset/restaurant_categories.csv", "r", encoding="utf8"
            ) as data:
                reader = csv.DictReader(data)
                categories = set([lines["category"] for lines in reader])
            categories = list(categories)
            for category in categories:
                category_data = Category(category=category)
                db.session.add(category_data)
                db.session.commit()
            db.create_all(app=app)

    # 음식점과 위치, 업종, 데이터 넣기
    def res_cats_menus(self, res_loc_cat_connected):
        with app.app_context():
            for key, val in res_loc_cat_connected.items():
                name = key
                latitude_x = val[0]
                longitutde_y = val[1]
                category = val[2]
                category_id = Categories.query.filter_by(category=category).first().id

                restaurants = Restaurants(
                    name=name,
                    longitude_x=longitude_x,
                    latitude_y=latitude_y,
                    category_id=category_id,
                )

                db.session.add(restaurants)
                db.session.commit()
            db.create_all(app=app)

    # 플랫폼별 크롤링한 리뷰 넣기
    def crawled_reviews(self):
        with app.app_context():
            with open(f"./dataset/reviews.csv", "r", encoding="utf8") as data:
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

    # 플랫폼별 총 평점 넣기
    def total_rating(self):
        with app.app_context():
            with open(
                f"./dataset/total_rating_platform.csv", "r", encoding="utf8"
            ) as data:
                reader = csv.DictReader(data)
                for lines in reader:
                    name = lines["name"]
                    restaurant_id = Restaurants.query.filter_by(name=name).first().id

                    naver = lines["naver"]
                    kakao = lines["kakao"]
                    mango = lines["mango"]
                    sikshin = lines["sikshin"]

                    total_rating = TotalRating(
                        naver=naver,
                        kakao=kakao,
                        mango=mango,
                        sikshin=sikshin,
                        restaurant_id=restaurant_id,
                    )
                    db.session.add(total_rating)
                    db.session.commit()
            db.create_all(app=app)

    # Total_rating을 토대로 integrated_rating 생성하기
    def get_integrated_rating(self):
        with app.app_context():
            total_ratings = TotalRating.query.all()
            for total_rating in total_ratings:
                restaurant_id = total_rating.restaurant_id
                integrated_rating = (
                    total_rating.naver
                    + total_rating.kakao
                    + total_rating.mango
                    + total_rating.sikshin
                ) / 4
                restaurant = Restaurants.query.filter_by(id=restaurant_id).first()

                restaurant.integrated_rating = integrated_rating
                db.session.commit()
            db.create_all(app=app)
