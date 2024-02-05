import reflex as rx
import dotenv
import os
from urllib.parse import quote_plus
import mysql.connector



dotenv.load_dotenv()
DBUSER = os.environ.get("DBUSER")
DBPASS = os.environ.get("DBPASS")

escaped_username = quote_plus(DBUSER)
escaped_password = quote_plus(DBPASS)


config = rx.Config(
    app_name="keikodev",
    cors_allowed_origins=[
        "https://keikodev.es",
        "https://keikodev.vercel.app",
        "http://localhost:3000"
    ],
  #  db_url="mysql://{escaped_username}:{escaped_password}@PMYSQL101.dns-servicio.com:3306/10252826_keikodeves"
)


configdb = mysql.connector.connect(
    host="PMYSQL101.dns-servicio.com",
    user=DBUSER,
    password=DBPASS,
    database="10252826_keikodeves"

)

cursor = configdb.cursor()
cursor.execute("SELECT * FROM nasa_imagenes")
result = cursor.fetchall()
print(result)

cursor.close()
configdb.close()