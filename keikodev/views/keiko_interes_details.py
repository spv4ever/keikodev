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
from keikodev.componentes.post_info import post_info
from keikodev.componentes.heading import heading
from keikodev.componentes.linkbutton import linkbutton
from keikodev.routes import Route

# def prueba(item:InfoInteresCabecera)->rx.Component:
#     return rx.text(item.title, color_scheme="red")  

def keiko_interes_details()->rx.Component:
    return rx.chakra.vstack(
                heading("Información de interes y noticias destacadas sobre nuestras mascotas", size="xl"),
                rx.text("""¡Bienvenidos a nuestra sección de "Noticias de Interés para Nuestras Mascotas"! 
                        Aquí encontrarán una recopilación cuidadosamente seleccionada de información relevante y 
                        noticias destacadas que afectan a nuestros fieles compañeros peludos. Desde descubrimientos científicos 
                        hasta historias conmovedoras, exploraremos el fascinante mundo de las mascotas para mantenerlos informados y 
                        conectados con las últimas novedades que afectan a nuestros adorables amigos de cuatro patas. Prepárense para 
                        sumergirse en un universo de descubrimientos, eventos y acontecimientos que giran en torno al bienestar y 
                        la felicidad de las mascotas. ¡Acompáñennos en este emocionante viaje para conocer y celebrar el mundo de nuestras queridas mascotas!""",
                        style={"color": TextColor.BODY.value}
                        ),
                rx.flex(
                    rx.box(
                        linkbutton("Inicio Keikodev",
                            "Menú principal de keikodev",
                            "/img/dev.svg",
                            "/",
                            is_external=False),
                            
                        ),
                    rx.box(
                        linkbutton("El rincón de keiko",
                            "Nueva sección del mundo animal",
                            "/img/paw-solid.svg",
                            Route.KEIKO.value,
                            is_external=False),
                            
                        ),
                    display="flex",
                    width = "100%",
                    align="center",
                    justify="between",
                    class_name="flex-container",
                ),

                rx.foreach(InfoInteresState.info_post,lambda item: post_info(item)),
                #on_mount=InfoInteresState.leepostinteres(),
                align_items="Start",
                width="100%",
    )
