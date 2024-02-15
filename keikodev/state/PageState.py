import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
from keikodev.api.api import featured
from keikodev.models.Nasalink import Nasalink
from pydantic import BaseModel
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.data.data_galeria_nasa import items_galeria
from keikodev.api.supabase import SupabaseApi
from keikodev.data.reflex_class import Datagalerianasarx

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

        async def check_live(self):
                self.is_live = await live(USER)
                url = await foto("")
                is_valid, json_data = url
                data = json.loads(json_data)
                for item in data:
                        self.date = item["date"]
                        self.url = item["url"]
                        self.title = item["title"]
                        self.explanation = item["explanation"]
                        self.hdurl = item["hdurl"]

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

        async def featured_links(self):
                self.featured_info = await featured()
                
                self.featured_details = [
                        Datagalerianasarx(
                                date=item["date"], 
                                url=item["url"],
                                title=item["title"],
                                explanation=item["explanation"],
                                hdurl = item["hdurl"]
                                ) 
                                for item in self.featured_info
                        ]
                fechas = [item.date for item in self.featured_details]
                
        
        
