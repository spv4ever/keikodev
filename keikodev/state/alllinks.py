import reflex as rx
from keikodev.api.supabase import SupabaseApi
from keikodev.api.db import Database

class Alllinks(rx.State):
    json_output: list

    async def obteneralllinks(self):
        supabase_api = SupabaseApi()
        response = supabase_api.allLinks()
        
        #print(response)
