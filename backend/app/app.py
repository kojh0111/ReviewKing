from flask import Flask
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import config

# ------------------------------------------
# 오류 페이지 정의
# def page_not_found(e):
#     return render_template('404.html'), 404
# ------------------------------------------

db = SQLAlchemy()
migrate = Migrate()


def create_app():
    load_dotenv()
    app = Flask(__name__, static_url_path="/")
    app.config.from_object(config)

    CORS(app)

    # ORM
    db.init_app(app)
    migrate.init_app(app, db)

    import models

    # blueprint
    from apis.restaurants_all import restaurants_all

    app.register_blueprint(restaurants_all)

    from apis.restaurants_reviews import restaurants_reviews

    app.register_blueprint(restaurants_reviews)

    from apis.ranks_result import ranks_result

    app.register_blueprint(ranks_result)

    from apis.ranks_categories import ranks_categories

    app.register_blueprint(ranks_categories)

    from apis.what_to_eat_subcategories import what_to_eat_subcategories

    app.register_blueprint(what_to_eat_subcategories)

    from apis.what_to_eat_keywords import what_to_eat_keywords

    app.register_blueprint(what_to_eat_keywords)

    from apis.what_to_eat_result import what_to_eat_result

    app.register_blueprint(what_to_eat_result)

    return app


if __name__ == "__main__":
    create_app().run(host="0.0.0.0", port=5000, debug=False)
