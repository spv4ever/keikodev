import reflex as rx
from keikodev.api.api import foto

class fotoNasa(rx.State):
    url: tuple

    async def tomaFoto(self):
        self.url = await foto()
        #print(self.is_live)

class Image_Load(rx.State):
    url: tuple  

    async def tomaFoto(self,fecha):
        self.url = await foto(fecha)
        print(self.url)

