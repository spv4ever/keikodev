import keikodev.views.constants as const
import time
from .Twitch import TwitchAPI
from .nasa import nasaApi

TWITCH_API = TwitchAPI()
NASA_API = nasaApi()


def hello() -> str:
    time.sleep(10)
    return "Albert!"


async def repo() -> str:
    return const.GITHUB_URL

async def live(user: str) -> bool:

    return TWITCH_API.live(user)

async def foto(fecha) -> bool:
    return NASA_API.tomaFoto(fecha)






