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
    from apis.all_restaurant import restaurantlist

    app.register_blueprint(restaurantlist)

    from apis.ranks_result import ranks_result

    app.register_blueprint(ranks_result)

    from apis.ranks_categories import ranks_categories

    app.register_blueprint(ranks_categories)

    from apis.what_to_eat_categories import eat_categories

    app.register_blueprint(eat_categories)

    from apis.what_to_eat_result import eat_result

    app.register_blueprint(eat_result)

    from apis.review_restaurant import reviews

    app.register_blueprint(reviews)

    return app


if __name__ == "__main__":
    create_app().run(host="0.0.0.0", port=5000, debug=True)
