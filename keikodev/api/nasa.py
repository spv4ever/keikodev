import reflex as rx
import json
import dotenv
import os
import requests
import keikodev.views.constants as const


class nasaApi(rx.State):
    dotenv.load_dotenv()
    NASA_KEY = os.environ.get("NASA_KEY_ID")

    def tomaFoto(self, fecha):
        
        if fecha != None:
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha}').text
        else:
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}').text

        response = json.loads(raw_response)
        date = response['date']
        hdurl = response['hdurl']
        title = response['title']
        explanation = response['explanation']
        url = response['url']
        dia = date[8:10]
        mes = date[5:7]
        ano = date[0:4]
        date = f"{dia}/{mes}/{ano}"
        print("Tomando foto !!!!!!!!")
        print(url)
        return True, hdurl, date, title, explanation, url
    

    
