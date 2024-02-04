import json
import dotenv
import os
import requests


class nasaApi():
    dotenv.load_dotenv()
    NASA_KEY = os.environ.get("NASA_KEY_ID")

    def __init__(self) -> None:
        self.url = None
        self.fecha = None

    def tomaFoto(self, fecha):
        print(fecha)
        print(self.fecha)
        if fecha != None:
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha}').text
        else:
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}').text

        response = json.loads(raw_response)
        date = response['date']
        url = response['hdurl']
        title = response['title']
        explanation = response['explanation']
        # print(date)
        # print(url)
        # print(response)
        return True, url, date, title, explanation, response
    

    
