import os
import dotenv
from supabase import Client, create_client, SupabaseRealtimeClient
from keikodev.models.Nasalink import Nasalink
import datetime as datetime
import json


class SupabaseApi:
    dotenv.load_dotenv()
    SUPABASE_URL = os.environ.get("SUPABASE_URL")
    SUPABASE_KEY = os.environ.get("SUPABASE_KEY")
    data: dict

    def insert(self, url, date, hdurl, explanation, title):
            supabase: Client = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)
            date_str = date.isoformat()
            data = {"url": url,
                    "date": date_str,
                    "hdurl": hdurl,
                    "explanation": explanation,
                    "title": title}
            response = supabase.table('links').insert(data).execute()
            supabase = None

    
    def check_existe(self, date):
        supabase: Client = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)
        response = supabase.table('links').select("date").eq('date', date).execute()
        supabase = None
        if len(response.data)<1:
            return False
        else:
            return True

    def carga_foto(self, date):
        supabase: Client = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)
        response = supabase.table('links').select("*").eq('date', date).execute()
        supabase = None
        data = response.data
        json_data = json.dumps(data)
        return json_data
    
    def allLinks(self):
        supabase: Client = create_client(self.SUPABASE_URL, self.SUPABASE_KEY)
        #response = supabase.table('links').select("*").execute() # Sin orden, tal como están dados de alta.
        response = supabase.table('links').select("*").order('date.desc').execute() #Ordenado de último a antiguo.
        supabase = None
        data = response.data
        return data







    def featured(self) -> list:
        return
        # response = self.supabase.table('links').select("*").execute()   
        # featured_data = []
        # if len(response.data) > 0:
        #     for featured_item in response.data:
        #         featured_data.append(featured_item)
        #self.insert()
        #eturn #featured_data




