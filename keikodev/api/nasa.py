import reflex as rx
import json
import dotenv
import os
import requests
import keikodev.views.constants as const
from ftplib import FTP
from ftplib import FTP_TLS
import datetime as datetime



class nasaApi():
    dotenv.load_dotenv()
    NASA_KEY = os.environ.get("NASA_KEY_ID")
    SFTP_HOST = os.environ.get("SFTP_HOST")
    SFTP_USER = os.environ.get("SFTP_USER")
    SFTP_PASSWORD = os.environ.get("SFTP_PASSWORD")
    SFTP_FOLDER = os.environ.get("SFTP_FOLDER")

    def tomaFoto(self, fecha):
        if len(fecha)  > 0:
            print("entrando por fecha "+fecha)
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
        return True, hdurl, date, title, explanation, url
    
    def fotoFTP(self, fecha):
        if len(fecha)  > 0:
            print("entrando por fecha función fotoFTP "+fecha)
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
        nombre_fichero = ano+mes+dia
        date = f"{dia}/{mes}/{ano}"
        contenido = json.dumps(response, indent=4)
        try:
            with open("{}.txt".format(nombre_fichero), "wb") as f:
                f.write(contenido.encode("utf-8"))

            with FTP_TLS() as ftp:
                ftp.connect(self.SFTP_HOST)
                ftp.login(user=self.SFTP_USER, passwd=self.SFTP_PASSWORD)
                ftp.cwd(self.SFTP_FOLDER)
                
                with open("{}.txt".format(nombre_fichero), "rb") as f:
                    ftp.storlines("STOR {}.txt".format(nombre_fichero), f)
        except Exception as e:
            print("Error al subir el archivo al servidor FTP:", e)


        # with FTP(self.SFTP_HOST) as ftp:
        #     ftp.login(user=self.SFTP_USER, passwd=self.SFTP_PASSWORD)
        
        # # Cambiar al directorio especificado
        # ftp.cwd(self.SFTP_FOLDER)
        
        # # Subir el archivo de texto
        # with ftp.storlines("STOR {}.txt".format(nombre_archivo), open("{}.txt".format(nombre_archivo), "rb")) as f:
        #     f.write(contenido.encode("utf-8"))

        # with open(nombre_archivo + ".txt", "w") as archivo:
        #     archivo.write(contenido)
        print("Tomando foto !!!!!!!!")
        print(response)
        return True, hdurl, date, title, explanation, url

    
