import os
import dotenv
from supabase import Client, create_client
from keikodev.models.nasa_images import nasaLink
import datetime as datetime
import json
class SupabaseApi:
    dotenv.load_dotenv()
    SUPABASE_URL = os.environ.get("SUPABASE_URL")
    SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
    
    

    def insert(self, url, date, hdurl, explanation, title):
            date_str = date.isoformat()
            data = {"url": url,
                    "date": date_str,
                    "hdurl": hdurl,
                    "explanation": explanation,
                    "title": title}
            response = self.supabase.table('links').insert(data).execute()

    
    def check_existe(self, date):
        response = self.supabase.table('links').select("date").eq('date', date).execute()
        if len(response.data)<1:
            return False
        else:
            return True

    def carga_foto(self, date):
        print("entro en carga foto")
        print(date)
        response = self.supabase.table('links').select("*").eq('date', date).execute()
        data = response.data
        json_data = json.dumps(data)
        
        # for item in response.data:
        #     nasaLink.id = item['id']
        #     nasaLink.date = item['date']
        #     nasaLink.url = item['url']
        #     nasaLink.title = item['title']
        #     nasaLink.explanation = item['explanation']
        #     nasaLink.hdurl = item['hdurl']
        
        return json_data






    def featured(self) -> list:
        return
        # response = self.supabase.table('links').select("*").execute()   
        # featured_data = []
        # if len(response.data) > 0:
        #     for featured_item in response.data:
        #         featured_data.append(featured_item)
        #self.insert()
        #eturn #featured_data




