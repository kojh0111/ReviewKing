import csv
import json

# 음식점-위치 연결
def con_res_loc():
    res_cat_loc_dict = dict()
    with open(f"./dataset/restaurant_lat_lon.csv", "r", encoding="utf8") as data:
        reader = csv.DictReader(data)
        res_lat_lon = sorted(
            [(lines["name"], lines["latitude"], lines["longitude"]) for lines in reader]
        )
        for res, lat, lon in res_lat_lon:
            tmp = [lat, lon]
            res_cat_loc_dict[f"{res}"] = tmp

    return res_cat_loc_dict


# 음식점-위치-카테고리 연결
def con_res_loc_cat(_dict):
    with open(f"./dataset/restaurant_categories.csv", "r", encoding="utf8") as data:
        reader = csv.DictReader(data)
        for lines in reader:
            if lines["name"] in _dict:
                _dict[lines["name"]].append(lines["category"])

    return _dict
