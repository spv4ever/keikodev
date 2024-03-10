import reflex as rx
import keikodev.data.anuncios as anuncios
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
import keikodev.recetas.saludable as saludable
import keikodev.recetas.alioli as alioli
import keikodev.recetas.fideua as fideua
from keikodev.componentes.menubar_cocina import menubar_cocina
from keikodev.componentes.menubar_cocina import SelectState3
from keikodev.data.recetas_json import recetas_andaluzas, recetas_alemanas, recetas_catalanas, recetas_japonesas, recetas_mexicanas, recetas_veganas, recetas_asturianas, recetas_francesas, recetas_italianas, recetas_marroquies, recetas_valencianas
#from keikodev.data.recetas_andaluzas import Receta

from keikodev.componentes.receta_text import recetatext
from keikodev.componentes.linkbutton import linkbutton


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

        rx.flex(
            menubar_cocina(),
            linkbutton("Página inicial",
                "Página inicial de keikodev",
                "/img/house-solid.svg",
                "/",
                is_external=False,
                ),
            width = "100%",
            spacing="8",
            margin_x = Size.BIG.value,
            flex_direction = ["column-reverse","row"],
        ),
        
        #rx.text(SelectState3.value),

        rx.cond((SelectState3.value == torrijas.tipo) | (SelectState3.value == "Todas"),
            receta(title = torrijas.titulo, ingredientes=torrijas.ingredientes, explicacion=torrijas.explicacion, url=torrijas.url, tipo=torrijas.tipo),
        ),
    
        rx.box(
            rx.link(
                    rx.image(
                            src=anuncios.anuncio_torrijas_imagen,
                            border_radius="15px",
                    ),
                    href=anuncios.anuncio_torrijas_url,
                    is_external=True,
            ),
        display = "flex",
        width = "100%",
        justify_content="center",
        lign_items="center",
        ),
    

        rx.cond((SelectState3.value == canelones.tipo) | (SelectState3.value == "Todas"),
            receta(title = canelones.titulo, ingredientes=canelones.ingredientes, explicacion=canelones.explicacion, url=canelones.url, tipo=canelones.tipo),
        ),



        rx.cond((SelectState3.value == alioli.tipo) | (SelectState3.value == "Todas"),
            receta(title = alioli.titulo, ingredientes=alioli.ingredientes, explicacion=alioli.explicacion, url=alioli.url, tipo=alioli.tipo),
        ),

        rx.cond((SelectState3.value == fideua.tipo) | (SelectState3.value == "Todas"),
            receta(title = fideua.titulo, ingredientes=fideua.ingredientes, explicacion=fideua.explicacion, url=fideua.url, tipo=fideua.tipo),
        ),
        rx.cond((SelectState3.value == saludable.tipo) | (SelectState3.value == "Todas"),
            receta(title = saludable.titulo, ingredientes=saludable.ingredientes, explicacion=saludable.explicacion, url=saludable.url, tipo=saludable.tipo),
        ),
                        # "Recetas Andaluzas",
                        # "Recetas Catalanas",
                        # "Recetas Alemanas",
                        # "Recetas Asturianas",
                        # "Recetas Francesas",
                        # "Recetas Italianas",
                        # "Recetas Japonesas",
                        # "Recetas Marroquís",
                        # "Recetas Mexicanas",
                        # "Recetas Valencianas",
                        # "Recetas Veganas"]


        
        *[
            recetatext(receta_data)
            for receta_data in recetas_andaluzas
        ],


        *[
            recetatext(receta_data)
            for receta_data in recetas_alemanas
        ],
        *[
            recetatext(receta_data)
            for receta_data in recetas_catalanas
        ],
        *[
            recetatext(receta_data)
            for receta_data in recetas_japonesas
        ],
        *[
            recetatext(receta_data)
            for receta_data in recetas_mexicanas
        ],
        *[
            recetatext(receta_data)
            for receta_data in recetas_veganas
        ],

        *[
            recetatext(receta_data)
            for receta_data in recetas_asturianas
        ],

        *[
            recetatext(receta_data)
            for receta_data in recetas_francesas
        ],

        *[
            recetatext(receta_data)
            for receta_data in recetas_italianas
        ],

        *[
            recetatext(receta_data)
            for receta_data in recetas_marroquies
        ],

        *[
            recetatext(receta_data)
            for receta_data in recetas_valencianas
        ],

        spacing=Size.DEFAULT.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",

    )

