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

# test = PageState()
# test.galeria_fotos_load()


def galeria_starship_video_details()->rx.Component:
    return rx.vstack(
                rx.heading("Videos de los lanzamientos de la Starship",
                    color = TextColor.PRIMARY.value),
                rx.tablet_and_desktop(                
                    rx.text("Primer Intento",
                            color = TextColor.PRIMARY.value,
                            width = "100%"),
                    
                    rx.video(url=const.STARSHIP_PRIMER_TEXT,
                            # style={
                            #     "width":["100%","50%","25%"]
                            # }
                            # width="350px",
                            # height="240px",                        
                            ),
                    rx.text("Segundo Intento",
                            color = TextColor.PRIMARY.value,
                            width = "100%"),
                    rx.video(url=const.STARSHIP_SEGUNDO_TEST,
                            # style={
                            #     "width":["100%","50%","25%"]
                            # }
                            # width="350px",
                            # height="240px",                        
                            ),
                    rx.text("Tercer Intento",
                            color = TextColor.PRIMARY.value,
                            width = "100%"),
                    rx.video(url=const.STARSHIP_TERCER_TEST,
                            # style={
                            #     "width":["100%","50%","25%"]
                            # }
                            # width="350px",
                            # height="240px",
                            ),
                ),
                spacing="4",
                align = "center",
                max_width = styles.MAX_WIDTH,
    )