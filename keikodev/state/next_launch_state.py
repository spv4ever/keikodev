import reflex as rx
from keikodev.api.api import launches
from keikodev.models.launches import Launches

class Nextlaunch(rx.State):
    next_launch: list[Launches] = []

    @rx.background
    async def next_launch_select(self):
        async with self:
            self.next_launch = await launches()





