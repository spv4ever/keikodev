import asyncio
import keikodev.views.constants as const
import time
from .Twitch import TwitchAPI
from .nasa import nasaApi
from .db import Database
from keikodev.models.live import Live
from keikodev.data.info_interes import leerPost
from keikodev.data.cuidados import leerPostCuidados
from keikodev.data.next_launch import next_launch
from keikodev.models.info_interes_models import InfoInteresCabecera
from keikodev.models.cuidados_models import CuidadosDetalles
from keikodev.models.launches import Launches
from keikodev.api.Users import Users

#from .supabase import SupabaseApi

TWITCH_API = TwitchAPI()
NASA_API = nasaApi()
DB_API = Database()
USERS = Users()

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

async def launches() -> Launches:
    return next_launch()











