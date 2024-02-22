import reflex as rx

import dotenv
import os
dotenv.load_dotenv()
DBUSER = os.environ.get("DBUSER")
DBPASS = os.environ.get("DBPASS")


config = rx.Config(
    app_name="keikodev",
    api_url="https://api.keikodev.es",
    db_url="mysql+mysqlconnector://{DBUSER}:{DBPASS}@PMYSQL101.dns-servicio.com:3306/10252826_keikodeves",
    cors_allowed_origins=[
        "https://keikodev.es",
        "https://keikodev.vercel.app",
        "http://localhost:3000"
    ],
)


