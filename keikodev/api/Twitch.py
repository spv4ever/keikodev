import dotenv
import os
import requests



class TwitchAPI:
    dotenv.load_dotenv()
    CLIENT_ID = os.environ.get("MiClave")
    CLIENT_SECRET = os.environ.get("MiClave2")