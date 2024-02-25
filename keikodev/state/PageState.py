import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
from keikodev.api.api import galeria_load
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.data.reflex_class import Datagalerianasarx
from keikodev.componentes.tutiempo import tutiempo
from keikodev.models.live import Live
import json
import datetime as dt

USER = "afor_digital"

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
        


        async def check_live(self):
                print("pidiendo estado")
                self.live_status = await live(USER)
                #print(self.live_status)

        async def tomaFoto(self):
                print("Actualizando fotos")
                url = await foto()
                # is_valid, json_data = url
                # data = json.loads(json_data)
                # for item in data:
                #         self.date = item["date"]
                #         self.url = item["url"]
                #         self.title = item["title"]
                #         self.explanation = item["explanation"]
                #         self.hdurl = item["hdurl"]

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
                
                
        
