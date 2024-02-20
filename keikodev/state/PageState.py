import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
#from keikodev.api.api import featured
from keikodev.api.api import galeria_load
from keikodev.models.Nasalink import Nasalink
from pydantic import BaseModel
from keikodev.data.data_galeria_nasa import Datagalerianasa
#from keikodev.data.data_galeria_nasa import items_galeria
#from keikodev.api.supabase import SupabaseApi
from keikodev.data.reflex_class import Datagalerianasarx
from keikodev.componentes.tutiempo import tutiempo

import json

import datetime as dt

USER = "mouredev"


class PageState(rx.State):
        is_live: tuple
        link: dict
        featured_info = list
        date: str
        url: str
        title: str
        explanation: str
        hdurl: str
        #items_galeria: list[Datagalerianasarx]
        featured_info: list[Datagalerianasarx]
        featured_details: list[Datagalerianasarx]
        galeria_fotos: list[Datagalerianasarx]
        galeria_fotos_db : list[Datagalerianasarx]

        async def check_live(self):
                self.is_live = await live(USER)
                tutiempo()
                #url = await foto("")
                # is_valid, json_data, json_data_db = url
                # data = json.loads(json_data)
                # datadb = json.loads(json_data_db)
                # for item in data:
                #         self.date = item["date"]
                #         self.url = item["url"]
                #         self.title = item["title"]
                #         self.explanation = item["explanation"]
                #         self.hdurl = item["hdurl"]

                # self.date = datadb["date"]
                # self.url = datadb["url"]
                # self.title = datadb["title"]
                # self.explanation = datadb["explanation"]
                # self.hdurl = datadb["hdurl"]
                
                

        async def tomaFoto(self,date):
                url = await foto(date)
                is_valid, json_data = url
                data = json.loads(json_data)
                for item in data:
                        self.date = item["date"]
                        self.url = item["url"]
                        self.title = item["title"]
                        self.explanation = item["explanation"]
                        self.hdurl = item["hdurl"]

        # async def featured_links(self):
        #         #print('Entrando en featured')
        #         self.featured_info = await featured()
        #         #print(self.featured_info)
        #         self.featured_details = [
        #                 Datagalerianasarx(
        #                         date=item["date"], 
        #                         url=item["url"],
        #                         title=item["title"],
        #                         explanation=item["explanation"],
        #                         hdurl = item["hdurl"]
        #                         ) 
        #                         for item in self.featured_info
        #                 ]
        #         #fechas = [item.date for item in self.featured_details]
                
        async def galeria_fotos_load(self):
                print("entrando por galeria")
                self.galeria_fotos_db = await galeria_load()
                keys = ["id","date","url","title","explanation","hdurl"]
                galeria_json = []
                for lista in self.galeria_fotos_db:
                        galeria_json.append(dict(zip(keys, lista)))
                self.galeria_fotos = [
                        Datagalerianasarx(
                                date=item["date"].strftime("%Y-%m-%d"), 
                                url=item["url"],
                                title=item["title"],
                                explanation=item["explanation"],
                                hdurl = item["hdurl"]
                                ) 
                                for item in galeria_json
                        ]
                fechas = [item.date for item in self.galeria_fotos]
                url = [item.url for item in self.galeria_fotos]
                
                
        
