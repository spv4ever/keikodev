import dotenv
import os
import requests
import time

class TwitchAPI:

    dotenv.load_dotenv()
    CLIENT_ID = os.environ.get("CLIENT_ID")
    CLIENT_SECRET = os.environ.get("SECRET_ID")

    def __init__(self) -> None:
        self.token = None
        self.token_exp = 0

    def generate_token(self):

        response = requests.post(
            "https://id.twitch.tv/oauth2/token",
            data={
                "client_id" : self.CLIENT_ID,
                "client_secret" : self.CLIENT_SECRET,
                "grant_type" : "client_credentials"
            }
        )
        #print(response.json()) #Revisar respuesta de token
        if response.status_code == 200:
            data = response.json()
            self.token = data["access_token"]
            self.token_exp = time.time() + data["expires_in"]
        else:
            self.token = None
            self.token_exp = 0

    
    def token_valid(self)-> bool:
        return time.time() < self.token_exp
    

    def live(self, user: str)-> bool:
        #print(self.token_valid())
        if not self.token_valid():
            #print("token no válido")
            self.generate_token()

        response = requests.get(
            f"https://api.twitch.tv/helix/streams?user_login={user}",
            headers={
                "Client-ID" : self.CLIENT_ID,
                "Authorization": f"Bearer {self.token}"
            }
    

        )
        

        if response.status_code == 200 and response.json()["data"]:
            data = response.json()["data"]
            url = data[0]['thumbnail_url']
            url = url.replace('{width}', '800').replace('{height}', '600')
            #print(url)
            #print(data)
            return True, url
        
        return False, ""


    