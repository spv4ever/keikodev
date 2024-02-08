import os
import dotenv
from supabase import create_client, Client

class SupabaseApi:

    dotenv.load_dotenv()
    