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
from keikodev.componentes.receta import receta
import keikodev.recetas.torrijas as torrijas
import keikodev.recetas.canelones as canelones

def cocina_details()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.box(
            title(
                rx.chakra.center('Cocina casera. Canal de youtube Keikodev Recetas'),
                ),
            width = "100%",
            margin_bottom = Size.BIG.value,
        ),
        steps("""Sección de recetas del canal de youtube Keikodev Recetas, donde publicaremos desde las recetas y secretos más preciados de 
            la familia, hasta cocina tradicional, moderna, rápida, especiales alimentación sana, etc"""),

        receta(title = torrijas.titulo, ingredientes=torrijas.ingredientes, explicacion=torrijas.explicacion, url=torrijas.url, tipo=torrijas.tipo),
        receta(title = canelones.titulo, ingredientes=canelones.ingredientes, explicacion=canelones.explicacion, url=canelones.url, tipo=canelones.tipo),

        spacing=Size.DEFAULT.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",

    )