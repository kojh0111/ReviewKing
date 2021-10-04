# data를 insert 하기 위한 모듈
from insert_data_queries import Insert
from process_data import con_res_loc, con_res_loc_cat

# 음식점-위도-경도 데이터
res_loc_connected = con_res_loc()
# 음식점-위도-경도-카테고리 데이터
res_loc_cat_connected = con_res_loc_cat(res_loc_connected)

insert_data = Insert()
if __name__ == "__main__":
    Insert().categories()
    Insert().res_cats_menus(res_loc_cat_connected)
    Insert().crawled_reviews()
    Insert().total_rating()
