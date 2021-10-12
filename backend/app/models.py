from app import db


class Restaurants(db.Model):
    __tablename__ = "restaurants"

    id = db.Column(db.Integer, nullable=False, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=True)
    longitude_x = db.Column(db.String(100), nullable=True)  # 정확한 값이 필요하므로 String으로 저장
    latitude_y = db.Column(db.String(100), nullable=True)  # 정확한 값이 필요하므로 String으로 저장
    img_url = db.Column(db.String(3600), nullable=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)

    categories = db.relationship("Categories", backref=db.backref("restaurants_set"))


class Reviews(db.Model):
    __tablename__ = "reviews"

    id = db.Column(db.Integer, nullable=False, primary_key=True, autoincrement=True)
    name = db.Column(db.String(100), nullable=True)
    date = db.Column(db.DateTime, nullable=True)
    rating = db.Column(db.Float, nullable=True)
    content = db.Column(db.Text(), nullable=True)
    platform = db.Column(db.String(30), nullable=False)
    restaurant_id = db.Column(
        db.Integer, db.ForeignKey("restaurants.id", ondelete="CASCADE"), nullable=False
    )

    restaurants = db.relationship("Restaurants", backref=db.backref("reviews_set"))


class KeyResLink(db.Model):
    __tablename__ = "keyreslink"

    id = db.Column(db.Integer, nullable=False, primary_key=True, autoincrement=True)

    restaurant_id = db.Column(
        db.Integer, db.ForeignKey("restaurants.id"), nullable=False
    )
    keyword_id = db.Column(db.Integer, db.ForeignKey("keywords.id"), nullable=True)

    restaurants = db.relationship("Restaurants", backref=db.backref("keyreslink_set"))
    keywords = db.relationship("Keywords", backref=db.backref("keyreslink_set"))


class Categories(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer(), nullable=False, primary_key=True, autoincrement=True)
    category = db.Column(db.String(100), nullable=True)


class Keywords(db.Model):
    __tablename__ = "keywords"

    id = db.Column(db.Integer, nullable=False, primary_key=True, autoincrement=True)
    keyword = db.Column(db.String(100), nullable=False)
    subcategory = db.Column(db.String(100), nullable=True)


class Analysis(db.Model):
    __tablename__ = "analysis"

    id = db.Column(db.Integer(), nullable=False, primary_key=True, autoincrement=True)
    file_path = db.Column(db.String(300), nullable=True)
    platform = db.Column(db.String(30), nullable=False)

    restaurant_id = db.Column(
        db.Integer, db.ForeignKey("restaurants.id", ondelete="CASCADE"), nullable=False
    )

    restaurants = db.relationship("Restaurants", backref=db.backref("analysis_set"))


class TotalRating(db.Model):
    __tablename__ = "total_rating"

    id = db.Column(db.Integer(), nullable=False, primary_key=True, autoincrement=True)
    kakao = db.Column(db.Float, nullable=True)
    naver = db.Column(db.Float, nullable=True)
    siksin = db.Column(db.Float, nullable=True)
    mango = db.Column(db.Float, nullable=True)
    integrated_rating = db.Column(db.Float, nullable=True)

    restaurant_id = db.Column(
        db.Integer, db.ForeignKey("restaurants.id", ondelete="CASCADE"), nullable=False
    )

    restaurants = db.relationship("Restaurants", backref=db.backref("total_rating_set"))


class Users(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer(), nullable=False, primary_key=True, autoincrement=True)
    email = db.Column(db.String(150), nullable=False)
    password = db.Column(db.String(150), nullable=False)
    name = db.Column(db.String(30), nullable=False)

    def __init__(self, email, password, name):
        self.email = email
        self.password = password
        self.name = name
