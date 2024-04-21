import reflex as rx
from keikodev.api.api import foto, fotoFTP
from datetime import datetime, timedelta

class fotoNasa(rx.State):
    url: tuple
    async def tomaFoto(self):
        self.url = await foto()


class Image_Load(rx.State):
    url: tuple  
    async def tomaFoto(self,fecha):
        #fecha =  datetime.today().date() - timedelta(days=1)
        print(fecha)
        self.url = await foto(fecha)
        #print(self.url)    

