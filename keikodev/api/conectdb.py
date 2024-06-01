from sqlmodel import create_engine
import dotenv
import os

def connect():
    dotenv.load_dotenv()
    DBUSER = os.environ.get("DBUSER")
    DBPASS = os.environ.get("DBPASS")
    engine = create_engine(f"mysql+pymysql://{DBUSER}:{DBPASS}@keikodev.es:3306/db3egsikbjodij", pool_recycle=3600, pool_size=20)
    return engine



