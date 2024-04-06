import reflex as rx
import json
import dotenv
import os
import requests
import keikodev.views.constants as const
import datetime as datetime
from keikodev.api.db import Database
from keikodev.models.Nasalink import Nasalink





class nasaApi():
    dotenv.load_dotenv()
    NASA_KEY = os.environ.get("NASA_KEY_ID")
    SFTP_HOST = os.environ.get("SFTP_HOST")
    SFTP_USER = os.environ.get("SFTP_USER")
    SFTP_PASSWORD = os.environ.get("SFTP_PASSWORD")
    SFTP_FOLDER = os.environ.get("SFTP_FOLDER")
    response = str
    tabla = "nasa_imagenes"
    

    def tomaFoto(self, fecha=""):
        #fecha = "2024-02-12"
        if fecha == "":
            fecha = datetime.datetime.now().date()
        else:
            fecha_creada = datetime.datetime.strptime(fecha, '%Y-%m-%d')
            fecha = fecha_creada.date()
        
        mysql_api = Database()
        
        resultado = mysql_api.where("nasa_imagenes",f"fecha='{fecha}'")
        

        if not resultado:
            #print("Resultado ",resultado)
            fecha_str = fecha.strftime('%Y-%m-%d')
            try:
                raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha_str}').text

            except requests.RequestException as e:
                print("Error al hacer la solicitud a la API de la NASA:", e)
            #print(raw_response)
            carga_ok = False
            if raw_response:
                try:
                    # Intenta cargar la respuesta como JSON
                    response_dict = json.loads(raw_response)
                    # Verifica si es un diccionario (JSON)
                    if isinstance(response_dict, dict):
                        # Verifica si el código de estado es 400
                        if response_dict.get("code") == 404 or response_dict.get("code") == 400:
                            fecha = fecha - datetime.timedelta(days=1)
                            fecha_str = fecha.strftime('%Y-%m-%d')
                            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha_str}').text  
                            carga_ok = False
                        else:
                            # Verifica si la clave "fecha" está presente
                            if "date" in response_dict:
                                # Si la clave "fecha" está presente, asigna el diccionario a self.response
                                carga_ok = True
                                print("Conexión exitosa a la API de la NASA")
                            else:
                                print("La respuesta JSON no contiene la clave 'fecha'")
                    else:
                        print("La respuesta no es un JSON válido")
                except json.JSONDecodeError:
                    print("Error al decodificar la respuesta JSON de la API de la NASA")
            else:
                print("La respuesta está vacía")
            
            #print(raw_response)
            
            if carga_ok is True:
                self.response = json.loads(raw_response)
                #date = fecha
                self.date = self.response['date']
                self.media_type = self.response['media_type']
                if self.response['media_type'] == "video":
                    self.hdurl = ""
                else:
                    self.hdurl = self.response['hdurl']
                self.title = self.response['title']
                self.explanation = self.response['explanation']
                self.url = self.response['url']

                if 'copyright' in self.response:
                    self.copyright = self.response['copyright']
                else:
                    self.copyright = ""
                foto_details = {
                    "fecha": self.date,
                    "url": self.url,
                    "titulo": self.title,
                    "descripcion": self.explanation,
                    "hdurl": self.hdurl,
                    "media_type": self.media_type,
                    "copyright" : self.copyright
                }
                json_tabla = json.dumps(foto_details)
                print("Insertando nueva foto")
                mysql_api.insert("nasa_imagenes",json.loads(json_tabla))
        else:
            print("Dia anterior no insertar")
        

    
    
    # def fotoFTP(self, fecha):
    #     if len(fecha)  > 0:
    #         print("entrando por fecha función fotoFTP "+fecha)
    #         raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha}').text
    #     else:
    #         raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}').text
    #     self.response = json.loads(raw_response)
    #     date = self.response['date']
    #     hdurl = self.response['hdurl']
    #     title = self.response['title']
    #     explanation = self.response['explanation']
    #     url = self.response['url']
    #     dia = date[8:10]
    #     mes = date[5:7]
    #     ano = date[0:4]
    #     nombre_fichero = ano+mes+dia
    #     date = f"{dia}/{mes}/{ano}"
    #     print("Tomando foto !!!!!!!!")
    #     print(self.response['date'])
    #     return True, hdurl, date, title, explanation, url

