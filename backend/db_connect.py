import pymysql
from config import db_info

def get_connection():
    con = pymysql.connect(
            user=db_info["user"],
            host=db_info["host"],
            port=db_info["port"],
            password=db_info["password"],
            db=db_info["database"],
            charset="utf8mb4",
        )
    return con



# class DB:
#     def __init__(self):
#         self.db = pymysql.connect(
#             user=db_info["user"],
#             host=db_info["host"],
#             port=db_info["port"],
#             password=db_info["password"],
#             db=db_info["database"],
#             charset="utf8mb4",
#         )
#         self.cursor = self.db.cursor()

#     def execute(self, sql):
#         self.cursor.execute(sql)

#     def fetchall(self):
#         return self.cursor.fetchall()

#     def commit(self):
#         self.db.commit()

#     def close(self):
#         self.db.close()
