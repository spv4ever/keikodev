import reflex as rx
from keikodev.api.api import cargaInfo
from keikodev.models.info_interes_models import InfoInteresCabecera, InfoInteresDetalles

class InfoInteresState(rx.State):
    info_post: list[InfoInteresCabecera] = []

    @rx.background
    async def leepostinteres(self):
        async with self:
            self.info_post = await cargaInfo()

            # for item in self.info_post:
            #     print(item.title)



