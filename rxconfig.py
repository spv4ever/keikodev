import reflex as rx
import os


config = rx.Config(
    app_name="keikodev",
    cors_allowed_origins=[
        "https://keikodev.es",
        "https://keikodev.vercel.app",
        "http://localhost:3000"
    ],
)

#db_url=f"mysql+mysqlconnector://{DBUSER}:{DBPASS}@PMYSQL101.dns-servicio.com:3306/10252826_keikodeves",

