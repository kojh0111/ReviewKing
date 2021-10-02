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
        mango = total_rating_res_id.mango
        sikshin = total_rating_res_id.sikshin

        rating_sum = 0
        reviews_total = 0
        for web in webs:
            # 검색엔진 별 리뷰 수 구하기
            reviews = Reviews.query.filter_by(web=web, restaurant_id=res_id).all()
            reviews_total += len(reviews)
            # 각 검색엔진 별 리뷰 수 가중치 주어 전체 검색엔진 수로 나누기
            # sum((검색엔진 별 평점) * (검색엔진 별 리뷰 수)) / reveiws_total
            if web == "naver":
                rating_sum += naver * len(reviews)
            if web == "kakao":
                rating_sum += kakao * len(reviews)
            if web == "mango":
                rating_sum += mango * len(reviews)
            if web == "sikshin":
                rating_sum += sikshin * len(reviews)

        if res.integrated_rating is None:
            # integrated_rating 데이터 추가
            res.integrated_rating = rating_sum / reviews_total
            db.session.commit()
