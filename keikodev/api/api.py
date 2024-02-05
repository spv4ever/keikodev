import asyncio
import keikodev.views.constants as const
import time
from .Twitch import TwitchAPI
from .nasa import nasaApi
from .db import db

TWITCH_API = TwitchAPI()
NASA_API = nasaApi()
DB_API = db()


def hello() -> str:
    time.sleep(10)
    return "Albert!"


async def repo() -> str:
    return const.GITHUB_URL

async def live(user: str) -> bool:

    return TWITCH_API.live(user)


async def foto(fecha):
    return NASA_API.tomaFoto(fecha)






