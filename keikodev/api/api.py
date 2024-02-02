import keikodev.views.constants as const
import time
from .Twitch import TwitchAPI

TWITCH_API = TwitchAPI()


def hello() -> str:
    time.sleep(10)
    return "Albert!"


async def repo() -> str:
    return const.GITHUB_URL

async def live(user: str) -> bool:

    return TWITCH_API.live(user)






