import reflex as rx
from keikodev.api.api import launches
from keikodev.models.launches import Launches

class Nextlaunch(rx.State):
    next_launch: list[Launches] = []
    next_launche: dict
    date:str
    url_details:str
    url_live:str

    @rx.background
    async def next_launch_select(self):
        async with self:
            self.next_launch = await launches()
            self.next_launche = self.next_launch[0]
            self.date = self.next_launche.launch_date
            self.url_details = self.next_launche.url_details
            self.url_live = self.next_launche.url_live
            
            






