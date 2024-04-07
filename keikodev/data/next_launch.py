from keikodev.models.launches import Launches
from keikodev.api.db import Database
from datetime import datetime
import asyncio

launches_table = "nextlaunches"
db = Database()

def next_launch():
    registros = db.select_next_launch(launches_table)
    #print(registros)
    nextLaunch = [Launches(
        id = item[0],
        company = item[2].capitalize(),
        rocket = item[3],
        mission = item[4],
        url_details = item[5],
        url_live = item[6],
        launch_date = item[7].strftime('%Y-%m-%d %H:%M:%S'),
        streamer = item[8],
        channel = item[9]) for item in registros
        ]
    #print(nextLaunch)
    return nextLaunch







    


    
# class InfoInteresDetalles(rx.Base):
#     id: int
#     parrafoId: int
#     tituloParrafo: str
#     parrafo: str
#     fotoParrafo: str
#     idCabecera: str


    # class InfoInteresCabecera(rx.Base):
    # id: int
    # create_time: str
    # title: str
    # date: str
    # introduction: str
    # conclusion: str
