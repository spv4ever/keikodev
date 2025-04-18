import dotenv
import os
import requests
from urllib.parse import quote_plus
import mysql.connector


class Database:
    def __init__(self):
        dotenv.load_dotenv()
        self.DBUSER = os.environ.get("DBUSER")
        self.DBPASS = os.environ.get("DBPASS")
        self.configdb = None
        print(self.DBUSER)
        #DBUSER = "ubv9kn85bcohp"
        #DBPASS = "Gasaal1972--"


    def connect(self):
        # Conectar a la base de datos
        print('Intento de conexión')
        print(self.DBUSER)
        try:
            self.configdb = mysql.connector.connect(
                host="gmadm1037.siteground.biz",
                user=self.DBUSER,
                password=self.DBPASS,
                database="db3egsikbjodij"
            )
            print('Conexión OK')
        except mysql.connector.Error as err:
            print(f'Error en modulo connect de db.py: {err} ')


    def close(self):
        # Cerrar la conexión con la base de datos
        if self.configdb:
            self.configdb.close()

    def insert(self, table, data):
        # Insertar datos en la tabla especificada
        try:
            self.connect()

            cursor = self.configdb.cursor()
            columns = ', '.join(data.keys())
            values = ', '.join(['%s'] * len(data))

            print(table)
            print(data)
            print("Intento justo antes de insertar de la nasa error de datos")

            sql = f"INSERT INTO {table} ({columns}) VALUES ({values})"
            cursor.execute(sql, list(data.values()))
            self.configdb.commit()
        finally:
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
        #sql = f"SELECT * FROM nasa_imagenes where copyright = '' and media_type = 'image' order by 2 desc"
        sql = f"SELECT * FROM nasa_imagenes where media_type = 'image' order by 2 desc limit 30"
        cursor.execute(sql)
        result = cursor.fetchall()
        cursor.close()
        self.close()
        return result
    
    def select_video(self, table):
        # Consultar todos los registros de la tabla especificada
        self.connect()
        cursor = self.configdb.cursor()
        #sql = f"SELECT * FROM nasa_imagenes where copyright = '' and media_type = 'image' order by 2 desc"
        sql = f"SELECT * FROM nasa_imagenes where media_type = 'video' order by 2 desc"
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
    
    def select_db(self, table):
        # Consultar todos los registros de la tabla especificada
        self.connect()
        cursor = self.configdb.cursor()
        sql = f"SELECT * FROM {table} order by date desc limit 20"
        cursor.execute(sql)
        result = cursor.fetchall()
        cursor.close()
        self.close()
        return result
    
    def select_next_launch(self, table):
        # Consultar todos los registros de la tabla especificada
        self.connect()
        cursor = self.configdb.cursor()
        sql = f"SELECT * FROM {table} where launch_date > NOW() order by launch_date asc limit 1"
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