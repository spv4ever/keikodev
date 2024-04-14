#imports standard
import reflex as rx
import keikodev.views.constants as constants
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.routes import Route
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color, TextColor
from keikodev.pages.google_auth import StateLogin
from keikodev.componentes.notify import notify_component
import asyncio

#imports para página
from keikodev.models.iatools_model import Iatools
from keikodev.data.iatools_services import select_all_iatools_service
from keikodev.componentes.card import card_ia

class Iatoolstate(rx.State):
    iatools:list[Iatools]
    # buscarEmail: str
    # error: str = ""
    # email: str

    @rx.background
    async def get_all_iatools(self):
        async with self:
            self.iatools = select_all_iatools_service()

@rx.page(
    route=Route.IA_TOOLS.value,
    title=utils.iatools_title,
    description=utils.iatools_description,
    image= utils.preview,
    meta=utils.iatools_meta,
    on_load=Iatoolstate.get_all_iatools,
)

def ia_tools() -> rx.Component:
    return rx.box(
            utils.lang(),
            navbar(),
            rx.flex(
                rx.heading("Biblioteca de recursos de Inteligencia Artificial",
                            align="center",
                            style={"color":TextColor.HEADER.value,"margin":Size.DEFAULT.value,"padding":Size.DEFAULT.value},
                            size="8",
                            ),

                # rx.spacer(direction="column",
                #         spacing="6"),
                rx.divider(color_scheme="pink"),
                rx.flex(
                        rx.foreach(Iatoolstate.iatools,card_ia),
                        wrap="wrap",
                        direction="row",
                        spacing="5",
                        style = {"margin":Size.DEFAULT.value}
                        ),
                direction="column",
                style={"width": "80vw", "margin":"auto"},
                
            ),
            footer(),
            align="center",
            justify="center",
            style = styles.background_gradient_style,
    )


