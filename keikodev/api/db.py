import dotenv
import os
import requests
from urllib.parse import quote_plus
import mysql.connector

import os
import dotenv
import mysql.connector
from urllib.parse import quote_plus

class Database:
    def __init__(self):
        dotenv.load_dotenv()
        self.DBUSER = os.environ.get("DBUSER")
        self.DBPASS = os.environ.get("DBPASS")
        self.configdb = None

    def connect(self):
        # Conectar a la base de datos
        self.configdb = mysql.connector.connect(
            host="PMYSQL101.dns-servicio.com",
            user=self.DBUSER,
            password=self.DBPASS,
            database="10252826_keikodeves"
        )

    def close(self):
        # Cerrar la conexión con la base de datos
        if self.configdb:
            self.configdb.close()

    def insert(self, table, data):
        # Insertar datos en la tabla especificada
        self.connect()
        cursor = self.configdb.cursor()
        columns = ', '.join(data.keys())
        values = ', '.join(['%s'] * len(data))
        sql = f"INSERT INTO {table} ({columns}) VALUES ({values})"
        cursor.execute(sql, list(data.values()))
        self.configdb.commit()
        cursor.close()
        self.close()

    def delete(self, table, condition):
        # Eliminar registros de la tabla especificada con la condición dada
        self.connect()
        cursor = self.configdb.cursor()
        sql = f"DELETE FROM {table} WHERE {condition}"
        cursor.execute(sql)
        self.configdb.commit()
        cursor.close()
        self.close()

    def select(self, table):
        # Consultar todos los registros de la tabla especificada
        self.connect()
        cursor = self.configdb.cursor()
        sql = f"SELECT * FROM nasa_imagenes where copyright = '' and media_type = 'image' order by 2 desc"
        cursor.execute(sql)
        result = cursor.fetchall()
        cursor.close()
        self.close()
        return result
    
    def where(self, table, where):
        # Consultar todos los registros de la tabla especificada
        self.connect()
        cursor = self.configdb.cursor()
        sql = f"SELECT * FROM {table} where {where}"
        cursor.execute(sql)
        result = cursor.fetchall()
        cursor.close()
        self.close()
        return result

# Ejemplo de uso:


# class db():
#     dotenv.load_dotenv()
#     DBUSER = os.environ.get("DBUSER")
#     DBPASS = os.environ.get("DBPASS")

#     #escaped_username = quote_plus(DBUSER)
#     #escaped_password = quote_plus(DBPASS)

#     configdb = mysql.connector.connect(
#         host="PMYSQL101.dns-servicio.com",
#         user=DBUSER,
#         password=DBPASS,
#         database="10252826_keikodeves")

#     cursor = configdb.cursor()
#     cursor.execute("SELECT * FROM nasa_imagenes")
#     result = cursor.fetchall()
#     print(result)

#     cursor.close()
#     configdb.close()