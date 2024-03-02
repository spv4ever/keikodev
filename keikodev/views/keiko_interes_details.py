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
from keikodev.componentes.card import card as card
from keikodev.state.info_interes_state import InfoInteresState,InfoInteresCabecera,InfoInteresDetalles

def prueba()->rx.Component:
    return rx.text("text")

def keiko_interes_details()->rx.Component:
    return rx.chakra.vstack(
            rx.text("Posts"),
                rx.foreach(InfoInteresState.info_post,lambda item: rx.text(f"{item.id}: {item.title}")),

            on_mount=InfoInteresState.leepostinteres(),
    )


# *[
#                     prueba()
#                     for data in 
#                 ],