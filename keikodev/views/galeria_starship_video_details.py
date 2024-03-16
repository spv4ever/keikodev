import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.componentes.title import title as title
from keikodev.componentes.steps import steps as steps
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.imagenes import dosimagenes as dosimagenes
from keikodev.componentes.imagenes import unaimagen as unaimagen
import keikodev.componentes.imagenes as imagenes
from keikodev.api.funciones import dameUltimosCincoDias as dameUltimosCincoDias
from keikodev.componentes.card_galery_video import card_galery_video
from keikodev.state.PageState import PageState
from keikodev.componentes.linkbutton import linkbutton
from keikodev.routes import Route


def galeria_starship_video_details()->rx.Component:
        return rx.vstack(
                rx.heading("Videos de los lanzamientos de la Starship",
                        color = TextColor.PRIMARY.value),

                
                rx.flex(
                        linkbutton("Inicio Keikodev",
                                "Menú principal de keikodev",
                                "/img/dev.svg",
                                "/",
                                is_external=False),

                        linkbutton("SpaceX - Rumbo a Marte",
                                "",
                                "/img/rocket-solid.svg",
                                Route.SPACEX.value,
                                is_external=False),
                        spacing = "4",
                        flex_direction=["column","row"],
                        width = "100%",
                        justify="between",
                ),

                rx.tablet_and_desktop(                
                        rx.text("14/03/2024 - Tercer Intento",
                                color = TextColor.PRIMARY.value,
                                width = "100%",
                                align="center",
                                size="5",
                                padding_y=Size.DEFAULT.value),

                        rx.video(url=const.STARSHIP_TERCER_TEST,
                                ),

                        rx.text("18/11/2023 - Segundo Intento",
                                color = TextColor.PRIMARY.value,
                                width = "100%",
                                align="center",
                                size="5",
                                padding_y=Size.DEFAULT.value),
                        rx.video(url=const.STARSHIP_SEGUNDO_TEST,
                                ),
                        rx.text("20/04/2023 - Primer Intento",
                                color = TextColor.PRIMARY.value,
                                width = "100%",
                                align="center",
                                size="5",
                                padding_y=Size.DEFAULT.value),
                        rx.video(url=const.STARSHIP_PRIMER_TEXT,
                                ),
                ),
                rx.mobile_only(                
                        rx.text("14/03/2024 - Tercer Intento",
                                color = TextColor.PRIMARY.value,
                                width = "100%",
                                align="center",
                                size="5"),

                        rx.video(url=const.STARSHIP_TERCER_TEST,
                                width="350px",
                                height="240px",                        
                                ),
                        rx.text("18/11/2023 - Segundo Intento",
                                color = TextColor.PRIMARY.value,
                                width = "100%",
                                align="center",
                                size="5"),
                        rx.video(url=const.STARSHIP_SEGUNDO_TEST,
                                width="350px",
                                height="240px",                        
                                ),
                        rx.text("20/04/2023 - Primer Intento",
                                color = TextColor.PRIMARY.value,
                                width = "100%",
                                align="center",
                                size="5"),
                        rx.video(url=const.STARSHIP_PRIMER_TEXT,
                                width="350px",
                                height="240px",
                                ),
                ),
                spacing="3",
                align = "center",
                max_width = styles.MAX_WIDTH,
        )   