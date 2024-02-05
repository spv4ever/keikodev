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
from keikodev.state.fotoNasa import Image_Load as Image_Load

def galeria_nasa_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Biblioteca de fotos de la nasa en alta resolución'),
                ),
            margin_bottom = Size.BIG.value,
            ),
        #dameUltimosCincoDias(),
        rx.image(src=Image_Load.url[1], on_load=Image_Load.tomaFoto("2024-01-01")),
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )