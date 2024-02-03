import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto

USER = "gerardromero"


class PageState(rx.State):
    is_live: tuple
    url:tuple

    async def check_live(self):
        self.is_live = await live(USER)
        self.url = await foto("")
        print(self.url)
        print(self.is_live)
    
