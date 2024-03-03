import asyncio
import keikodev.views.constants as const
import time
from .Twitch import TwitchAPI
from .nasa import nasaApi
from .db import Database
from keikodev.models.live import Live
from keikodev.data.info_interes import leerPost
from keikodev.data.cuidados import leerPostCuidados
from keikodev.models.info_interes_models import InfoInteresCabecera
from keikodev.models.cuidados_models import CuidadosDetalles

#from .supabase import SupabaseApi

TWITCH_API = TwitchAPI()
NASA_API = nasaApi()
DB_API = Database()


#SUPABASE_API = SupabaseApi()

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

async def live(user: str) -> Live:
    return TWITCH_API.live(user)


async def foto():
    return NASA_API.tomaFoto()

async def fotoFTP(fecha):
    return NASA_API.fotoFTP(fecha)

# async def featured() -> list:
#     return SUPABASE_API.featured()

async def galeria_load() -> list:
    return DB_API.select("nasa_imagenes")

async def galeria_load_video() -> list:
    return DB_API.select_video("nasa_imagenes")

async def consultaDB() -> list:
    return DB_API.select("nasa_imagenes")

async def cargaInfo() -> InfoInteresCabecera:
    return leerPost()

async def cargaCuidado() -> CuidadosDetalles:
    return leerPostCuidados()








