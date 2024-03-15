import reflex as rx
from keikodev.api.api import cargaCuidado
from keikodev.models.cuidados_models import CuidadosCabecera, CuidadosDetalles

class CuidadosState(rx.State):
    info_post: list[CuidadosCabecera] = []

    @rx.background
    async def leepostcuidados(self):
        async with self:
            self.info_post = await cargaCuidado()





