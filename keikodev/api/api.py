import keikodev.views.constants as const


async def repo() -> str:
    return const.GITHUB_URL

async def live(user: str) -> bool:
    if user == "Albert!":
        return True
    return False





