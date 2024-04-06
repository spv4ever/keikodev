import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
from keikodev.api.api import galeria_load, galeria_load_video
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.data.reflex_class import Datagalerianasarx
from keikodev.componentes.tutiempo import tutiempo
from keikodev.models.live import Live
import json
import datetime as dt

USER = "mouredev"

class PageState(rx.State):
        
        live_status = Live(live=False, title="")
        date: str = ""
        url: str = ""
        title: str = ""
        explanation: str = ""
        hdurl: str = ""
        copyright: str = ""
        media_type: str = ""
        galeria_fotos: list[Datagalerianasarx]
        galeria_fotos_db : list[Datagalerianasarx]
        galeria_videos: list[Datagalerianasarx]
        galeria_videos_db : list[Datagalerianasarx]
        


        async def check_live(self):
                #print("pidiendo estado")
                self.live_status = await live(USER)
                #print(self.live_status)

        async def tomaFoto(self):
                #print("Actualizando fotos")
                url = await foto()

        async def galeria_fotos_load(self):
                print("entrando por galeria")
                self.galeria_fotos_db = await galeria_load()
                keys = ["id","date","url","title","explanation","hdurl","copyright", "media_type"]
                galeria_json = []
                for lista in self.galeria_fotos_db:
                        galeria_json.append(dict(zip(keys, lista)))
                self.galeria_fotos = [
                        Datagalerianasarx(
                                date=item["date"].strftime("%Y-%m-%d"), 
                                url=item["url"],
                                title=item["title"],
                                explanation=item["explanation"],
                                hdurl = item["hdurl"],
                                copyright = item["copyright"],
                                media_type = item["media_type"]
                                ) 
                                for item in galeria_json
                        ]
                fechas = [item.date for item in self.galeria_fotos]
                url = [item.url for item in self.galeria_fotos]

        async def galeria_fotos_load_video(self):
                print("entrando por galeria")
                self.galeria_videos_db = await galeria_load_video()
                keys = ["id","date","url","title","explanation","hdurl","copyright", "media_type"]
                galeria_json = []
                for lista in self.galeria_videos_db:
                        galeria_json.append(dict(zip(keys, lista)))
                self.galeria_videos = [
                        Datagalerianasarx(
                                date=item["date"].strftime("%Y-%m-%d"), 
                                url=item["url"],
                                title=item["title"],
                                explanation=item["explanation"],
                                hdurl = item["hdurl"],
                                copyright = item["copyright"],
                                media_type = item["media_type"]
                                ) 
                                for item in galeria_json
                        ]
                fechas = [item.date for item in self.galeria_videos]
                url = [item.url for item in self.galeria_videos]

