import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
import datetime as dt

USER = "gerardromero"


class PageState(rx.State):
    is_live: tuple
    url=[False]

    async def check_live(self):
        self.is_live = await live(USER)
#        print(f"vengo de check live ",self.url[0])
        fecha_string = dt.date.today().strftime("%d/%m/%Y")


#        print(fecha_string)
        if self.url[0] is False:
            self.url = await foto("")
#            print(self.url[2])
        elif fecha_string != self.url[2]:   
            self.url = await foto("")
        
        
