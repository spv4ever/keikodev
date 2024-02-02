import reflex as rx
from keikodev.api.api import live

USER = "Brixoow"


class PageState(rx.State):
    is_live: bool

    async def check_live(self):
        self.is_live = await live(USER)