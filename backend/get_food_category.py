import csv


def categories_csv_to_list():
    with open(f"./dataset/categories.csv", "r", encoding="utf8") as data:
        reader = csv.DictReader(data)
        return [lines["업종"] for lines in reader]


# print(categories_csv_to_list())
