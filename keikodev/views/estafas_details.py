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
from keikodev.componentes.noticias import noticias as noticias

def estafas_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Espacio dedicado a difundir los intentos de Ciberestafas'),
                ),
            margin_bottom = Size.BIG.value,
        ),
        noticias(),



        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",
    )