from flask import Blueprint, jsonify
from flask_restful import Resource, Api
from db_connect import get_connection

ranks = Blueprint("ranks", __name__)
api = Api(ranks)

# db = DB()
class Ranks(Resource):
    def get(self):
        con = get_connection()
        # cusor : 커서 생성
        cursor = con.cursor()
        # sql문 작성(데이터 read)
        sql = "SELECT * FROM reviews"
        # sql문 실행(데이터 read)
        cursor.execute(sql)
        # fetchall() : 전부 가져오기
        result = cursor.fetchall()
        # commit 및 연결 해제
        con.commit()  # 커밋은 반복할 필요 없음
        con.close()

        return jsonify(status="200", result=result)


api.add_resource(Ranks, "/ranks/")
