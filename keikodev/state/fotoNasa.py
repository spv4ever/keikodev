import reflex as rx
from keikodev.api.api import foto

class fotoNasa(rx.State):
    url: tuple

    async def tomaFoto(self):
        self.url = await foto()
        #print(self.is_live)