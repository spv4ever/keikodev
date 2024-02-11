import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
from keikodev.api.api import featured
from keikodev.models.Nasalink import Nasalink
from pydantic import BaseModel
import json

import datetime as dt

USER = "gerardromero"


class PageState(rx.State):
        is_live: tuple
        link: dict
        featured_info = list
        date: str
        url: str
        title: str
        explanation: str
        hdurl: str

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
                print(self.featured_info)
        
        
