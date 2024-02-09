import asyncio
import keikodev.views.constants as const
import time
from .Twitch import TwitchAPI
from .nasa import nasaApi
from .db import Database
from .supabase import SupabaseApi

TWITCH_API = TwitchAPI()
NASA_API = nasaApi()
DB_API = Database()
SUPABASE_API = SupabaseApi()

def ejemploDB():
    if __name__ == "__main__":
        db = Database()
        data = {
            "column1": "value1",
            "column2": "value2"
        }
        db.insert("nombre_tabla", data)
        db.delete("nombre_tabla", "condicion")
        result = db.select("nombre_tabla")
        print(result)


def hello() -> str:
    time.sleep(10)
    return "Albert!"


async def repo() -> str:
    return const.GITHUB_URL

async def live(user: str) -> bool:

    return TWITCH_API.live(user)


async def foto(fecha):
    return NASA_API.tomaFoto(fecha)

async def fotoFTP(fecha):
    return NASA_API.fotoFTP(fecha)

async def featured() -> list:
    return SUPABASE_API.featured()




