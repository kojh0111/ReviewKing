# data를 insert 하기 위한 모듈
from set_data import Insert

insert_data = Insert()
if __name__ == "__main__":
    Insert().categories()
    Insert().restaurants(res_loc_cat_connected)
    Insert().crawled_reviews()
    Insert().total_rating()
