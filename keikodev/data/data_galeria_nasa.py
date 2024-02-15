import reflex as rx
from keikodev.api.supabase import SupabaseApi
import json

class Datagalerianasa():
    def __init__(
            self,
            date: str,
            url: str,
            title: str,
            explanation: str,
            hdurl: str):

        
        self.date = date
        self.url = url
        self.title = title
        self.explanation = explanation
        self.hdurl = hdurl


supabase = SupabaseApi()
response = supabase.allLinks()

items_galeria = [
    Datagalerianasa(
        date=item["date"], 
        url=item["url"],
        title=item["title"],
        explanation=item["explanation"],
        hdurl = item["hdurl"]
        ) 
        for item in response
]




