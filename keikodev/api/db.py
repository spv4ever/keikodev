import dotenv
import os
import requests
from urllib.parse import quote_plus
import mysql.connector

class db():
    dotenv.load_dotenv()
    DBUSER = os.environ.get("DBUSER")
    DBPASS = os.environ.get("DBPASS")

    #escaped_username = quote_plus(DBUSER)
    #escaped_password = quote_plus(DBPASS)

    # configdb = mysql.connector.connect(
    #     host="PMYSQL101.dns-servicio.com",
    #     user=DBUSER,
    #     password=DBPASS,
    #     database="10252826_keikodeves")

    # cursor = configdb.cursor()
    # cursor.execute("SELECT * FROM nasa_imagenes")
    # result = cursor.fetchall()
    # print(result)

    # cursor.close()
    # configdb.close()