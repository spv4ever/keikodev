import reflex as rx
import json
import dotenv
import os
import requests
import keikodev.views.constants as const
import datetime as datetime
from keikodev.api.supabase import SupabaseApi
from keikodev.models.Nasalink import Nasalink




class nasaApi():
    dotenv.load_dotenv()
    NASA_KEY = os.environ.get("NASA_KEY_ID")
    SFTP_HOST = os.environ.get("SFTP_HOST")
    SFTP_USER = os.environ.get("SFTP_USER")
    SFTP_PASSWORD = os.environ.get("SFTP_PASSWORD")
    SFTP_FOLDER = os.environ.get("SFTP_FOLDER")
    response = str
    

    def tomaFoto(self, fecha):
        if fecha == "":
            fecha = datetime.datetime.now().date()
        else:
            fecha_creada = datetime.datetime.strptime(fecha, '%Y-%m-%d')
            fecha = fecha_creada.date()

        supabase_api = SupabaseApi()
        existe_foto = supabase_api.check_existe(fecha)
        print(existe_foto)
        if existe_foto is False:
            fecha_str = fecha.strftime('%Y-%m-%d')
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha_str}').text
            self.response = json.loads(raw_response)
            if len(self.response) == 3:
                fecha = fecha - datetime.timedelta(days=1)
                fecha_str = fecha.strftime('%Y-%m-%d')
                raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha_str}').text   
                self.response = json.loads(raw_response)
            
            
            
            

            date = fecha
            self.date = self.response['date']
            hdurl = self.response['hdurl']
            title = self.response['title']
            explanation = self.response['explanation']
            url = self.response['url']
            existe_foto = supabase_api.check_existe(fecha)
            if existe_foto is False:
                supabase_api.insert(url, date, hdurl, explanation, title)
            else:
                print("Dia anterior no insertar")
        

        datos_foto=supabase_api.carga_foto(fecha)
        datos_json=json.loads(datos_foto)
        datos_json = datos_json[0]
        model = Nasalink(**datos_json)
        return True, datos_foto #, hdurl, date, title, explanation, url

    
    def fotoFTP(self, fecha):
        if len(fecha)  > 0:
            print("entrando por fecha función fotoFTP "+fecha)
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha}').text
        else:
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}').text
        self.response = json.loads(raw_response)
        date = self.response['date']
        hdurl = self.response['hdurl']
        title = self.response['title']
        explanation = self.response['explanation']
        url = self.response['url']
        dia = date[8:10]
        mes = date[5:7]
        ano = date[0:4]
        nombre_fichero = ano+mes+dia
        date = f"{dia}/{mes}/{ano}"
        print("Tomando foto !!!!!!!!")
        print(self.response['date'])
        return True, hdurl, date, title, explanation, url

