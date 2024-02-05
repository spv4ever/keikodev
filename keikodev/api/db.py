import dotenv
import os
import requests
from urllib.parse import quote_plus

dotenv.load_dotenv()
DBUSER = os.environ.get("DBUSER")
DBPASSWORD = os.environ.get("DBPASSWORD")

escaped_username = quote_plus(DBUSER)
escaped_password = quote_plus(DBPASSWORD)

#db_url=f"mysql://{escaped_username}:{escaped_password}@PMYSQL101.dns-servicio.com:3306/10252826_keikodeves"

