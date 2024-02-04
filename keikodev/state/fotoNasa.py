import reflex as rx
from keikodev.api.api import foto

class fotoNasa(rx.State):
    url: tuple

    async def tomaFoto(self):
        self.url = foto("")


class Image_Load(rx.State):
    url: tuple  

    async def tomaFotoEsp(self,fecha):
        self.url = foto(fecha)
        #print(self.url)

