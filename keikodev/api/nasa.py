import reflex as rx
import json
import dotenv
import os
import requests
import keikodev.views.constants as const
import datetime as datetime
from ftplib import FTP_TLS, error_perm, error_proto
import paramiko
import logging
from io import BytesIO


# paramiko.util.log_to_file("paramiko.log")
# paramiko_logger = logging.getLogger("paramiko")
# paramiko_logger.setLevel(logging.DEBUG)


class nasaApi():
    dotenv.load_dotenv()
    NASA_KEY = os.environ.get("NASA_KEY_ID")
    SFTP_HOST = os.environ.get("SFTP_HOST")
    SFTP_USER = os.environ.get("SFTP_USER")
    SFTP_PASSWORD = os.environ.get("SFTP_PASSWORD")
    SFTP_FOLDER = os.environ.get("SFTP_FOLDER")
    response = str
    date = str

    def tomaFoto(self, fecha):
        if len(fecha)  > 0:
            print("entrando por fecha "+fecha)
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}&date={fecha}').text
        else:
            raw_response = requests.get(f'https://api.nasa.gov/planetary/apod?api_key={self.NASA_KEY}').text
        self.response = json.loads(raw_response)
        date = self.response['date']
        self.date = self.response['date']
        hdurl = self.response['hdurl']
        title = self.response['title']
        explanation = self.response['explanation']
        url = self.response['url']
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
        #def subir_json_a_sftp(nombre_fichero, response, SFTP_HOST, SFTP_USER, SFTP_PASSWORD, SFTP_FOLDER):
        # contenido = json.dumps(response, indent=4)
        # try:
        #     # Establecer conexión FTP
        #     with FTP_TLS() as ftp:
        #         ftp.connect(self.SFTP_HOST)
        #         ftp.login(user=self.SFTP_USER, passwd=self.SFTP_PASSWORD)
        #         ftp.prot_p()  # Activar protección de datos
        #         ftp.cwd(self.SFTP_FOLDER)
                
        #         with BytesIO(contenido.encode('utf-8')) as file_obj:
        #             ftp.storlines(f"STOR {nombre_fichero}.json", file_obj)
                    
        #             print("Archivo JSON subido exitosamente al servidor FTP")
        # except Exception as e:
        #     print("Error al subir el archivo JSON al servidor FTP:", e)

        # try:
        #     # Establecer la conexión SFTP
            

        #     transport = paramiko.Transport((self.SFTP_HOST, 22))
        #     transport.connect(username=self.SFTP_USER, password=self.SFTP_PASSWORD)
        #     sftp = paramiko.SFTPClient.from_transport(transport)
            
        #     # Subir el contenido JSON directamente al servidor SFTP
        #     with sftp.open(f"{self.SFTP_FOLDER}/{nombre_fichero}.json", "w") as f:
        #         f.write(contenido)
            
        #     # Cerrar la conexión SFTP
        #     sftp.close()
        #     transport.close()
        #     print("Archivo JSON subido exitosamente al servidor SFTP")
        # except Exception as e:
        #     print("Error al subir el archivo JSON al servidor SFTP:", e)

# Uso de la función subir_json_a_sftp -<
# nombre_fichero = "ejemplo"
# response = {"clave": "valor"}
# SFTP_HOST = "sftp.example.com"
# SFTP_USER = "usuario"
# SFTP_PASSWORD = "contraseña"
# SFTP_FOLDER = "/ruta/a/carpeta"

#subir_json_a_sftp(nombre_fichero, response, SFTP_HOST, SFTP_USER, SFTP_PASSWORD, SFTP_FOLDER)

        # try:
        #     with open("{}.txt".format(nombre_fichero), "wb") as f:
        #         f.write(contenido.encode("utf-8"))

        #     with FTP_TLS() as ftp:
        #         ftp.connect(self.SFTP_HOST)
        #         ftp.login(user=self.SFTP_USER, passwd=self.SFTP_PASSWORD)
        #         ftp.cwd(self.SFTP_FOLDER)

        #         with open("{}.txt".format(nombre_fichero), "rb") as f:
        #             try:
        #                 ftp.storlines("STOR {}.txt".format(nombre_fichero), f)
        #                 print("Archivo subido exitosamente al servidor FTP")
        #             except error_perm as e:
        #                 print("Error de permisos al subir el archivo:", e)
        #             except error_proto as e:
        #                 print("Error de protocolo al subir el archivo:", e)
        #             except Exception as e:
        #                 print("Error desconocido al subir el archivo:", e)

        # except Exception as e:
        #                 print("Error al crear o abrir el archivo:", e)
        # finally:
        #     # Elimina el archivo local después de la transferencia exitosa
        #     try:
        #         os.remove("{}.txt".format(nombre_fichero))
        #     except FileNotFoundError:
        #         pass  # El archivo puede no existir si ha ocurrido un error antes


        # try:
        #     with open("{}.txt".format(nombre_fichero), "wb") as f:
        #         f.write(contenido.encode("utf-8"))

        #     with FTP_TLS() as ftp:
        #         ftp.connect(self.SFTP_HOST)
        #         ftp.login(user=self.SFTP_USER, passwd=self.SFTP_PASSWORD)
        #         ftp.cwd(self.SFTP_FOLDER)
                
        #         with open("{}.txt".format(nombre_fichero), "rb") as f:
        #             ftp.storlines("STOR {}.txt".format(nombre_fichero), f)
        # except Exception as e:
        #     print("Error al subir el archivo al servidor FTP:", e)


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
        print(self.response['date'])
        return True, hdurl, date, title, explanation, url

    
