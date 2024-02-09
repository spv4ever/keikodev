import reflex as rx
from keikodev.api.api import live
from keikodev.api.api import foto
from keikodev.api.api import featured

import datetime as dt

USER = "mouredev"


class PageState(rx.State):
        is_live: tuple
        url=[False]
        featured_info = list

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

        async def featured_links(self):
                self.featured_info = await featured()
                print(self.featured_info)
        
        
