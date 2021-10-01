from app import create_app
from app import db
from models import TotalRating, Reviews, Restaurants

app = create_app()

# ---------------------
# 받은 csv에 따라 수정 필요
# ---------------------

with app.app_context():
    restaurants = Restaurants.query.all()
    res_ids = [res.id for res in restaurants]

    webs = ["naver", "kakao", "mango_plate", "sikshin"]
    # webs, restaurant_id를 기준으로 filter
    for res_id in res_ids:
        res = Restaurants.query.filter_by(id=res_id).first()
        total_rating_res_id = TotalRating.query.filter_by(restaurant_id=res_id)

        naver = total_rating_res_id.naver
        kakao = total_rating_res_id.kakao
        mangp = total_rating_res_id.mango
        sikshin = total_rating_res_id.sikshin

        integrated_rating = 0
        for web in webs:
            # 검색엔진 별 리뷰 수 구하기
            reviews = Reviews.query.filter_by(web=web, restaurant_id=res_id).all()
            # 각 검색엔진 별 리뷰 수 가중치 주어 전체 검색엔진 수로 나누기
            # sum((검색엔진 별 평점) * (검색엔진 별 리뷰 수)) / len(webs)
            if web == "naver":
                integrated_rating += naver * len(reviews)
            if web == "kakao":
                integrated_rating += kakao * len(reviews)
            if web == "mango":
                integrated_rating += mango * len(reviews)
            if web == "sikshin":
                integrated_rating += sikshin * len(reviews)

        if res.integrated_rating is None:
            # integrated_rating 데이터 추가
            res.integrated_rating = integrated_rating / 4
            db.session.commit()
