import reflex as rx
from keikodev.api.api import cargaInfo
from keikodev.models.info_interes_models import InfoInteresCabecera, InfoInteresDetalles

class InfoInteresState(rx.State):
    info_post: list[InfoInteresCabecera]

    async def leepostinteres(self):
            self.info_post = await cargaInfo()

