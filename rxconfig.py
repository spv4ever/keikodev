import reflex as rx
import os


config = rx.Config(
    app_name="keikodev",
    frontend_port=3000,
    backend_port=8000,
    cors_allowed_origins=[
        "https://keikodev.es",
        "https://www.keikodev.es",
        "https://keikodev.vercel.app",
        "http://localhost:3000",
        "http://localhost:8000"

    ],
)

#db_url=f"mysql+mysqlconnector://{DBUSER}:{DBPASS}@PMYSQL101.dns-servicio.com:3306/10252826_keikodeves",

