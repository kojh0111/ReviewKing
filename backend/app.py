from flask import Flask, render_template
from flask_cors import CORS
import config

# ------------------------------------------
# 오류 페이지 정의
# def page_not_found(e):
#     return render_template('404.html'), 404
# ------------------------------------------


def create_app():
    app = Flask(__name__, static_url_path='')
    CORS(app)
    # app.config.from_object(config)

    # blueprint
    from views import test
    app.register_blueprint(test.bp)

    # 오류 페이지 등록
    # app.register_error_handler(404, page_not_found)

    return app


if __name__ == '__main__':
    create_app().run(port=5000, debug=True)
