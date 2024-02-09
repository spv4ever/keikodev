import os
import dotenv
from supabase import Client, create_client

class SupabaseApi:
    dotenv.load_dotenv()
    SUPABASE_URL = os.environ.get("SUPABASE_URL")
    SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

    def featured(self) -> list:
        response = self.supabase.table('links').select("*").execute()   
        featured_data = []
        
        if len(response.data) > 0:
            for featured_item in response.data:
                featured_data.append(featured_item)
        return featured_data
    




