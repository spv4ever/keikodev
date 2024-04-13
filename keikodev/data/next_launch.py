from keikodev.models.launches import Launches
from keikodev.api.db import Database
from datetime import datetime
import asyncio
from keikodev.api.next_launch import select_all, create_launch, delete_launch, select_launch_by_id, update_launch, select_future, select_launch_by_mision
from keikodev.models.launches import Nextlaunches
from keikodev.data.youtube_services import links_youtube_service

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
    #print(nextLaunch[0].id)
    #nextLaunch[0].mission = "Starlink"
    links = links_youtube_service(nextLaunch[0].mission[:10])
    nextLaunch[0].url_live=links["url"]
    nextLaunch[0].streamer=links["streamer"]
    if links["streamer"] != "":
        nextLaunch[0].channel="https://www.youtube.com/@"+links["streamer"]

    #print(links)

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
