import os
import dotenv

dotenv.load_dotenv()
PASSWORD = os.environ.get("DB_PASSWORD")
HOST = os.environ.get("HOST")


db_info = {
    "user": "jihun",
    "password": PASSWORD,
    "host": HOST,
    "port": 3306,
    "database": "reviewking",
}

SQLALCHEMY_DATABASE_URI = f"mysql+pymysql://{db_info['user']}:{db_info['password']}@{db_info['host']}:{db_info['port']}/{db_info['database']}?charset=utf8mb4"
SQLALCHEMY_POOL_RECYCLE = 28  # value less than backend’s timeout
SQLALCHEMY_POOL_TIMEOUT = 120  # session 연결까지 얼마나 기다릴 지를 의미
SQLALCHEMY_PRE_PING = True
SQLALCHEMY_ENGINE_OPTIONS = {
    "pool_recycle": SQLALCHEMY_POOL_RECYCLE,
    "pool_timeout": SQLALCHEMY_POOL_TIMEOUT,
    "pool_pre_ping": SQLALCHEMY_PRE_PING,
    "pool_size": 500,
    "max_overflow": 0,
}


SQLALCHEMY_TRACK_MODIFICATIONS = False
SECRET_KEY = "b'\x0b,\x96\xdf\x9f\x85\xb2\xedj\x86\xe2\x9a\xae\x17\xa2\xdd'"
