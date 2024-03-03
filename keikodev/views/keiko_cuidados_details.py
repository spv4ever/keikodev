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

from keikodev.state.cuidados_state import CuidadosState,CuidadosCabecera,CuidadosDetalles
from keikodev.componentes.post_cuidados import post_cuidados
from keikodev.componentes.heading import heading
from keikodev.componentes.linkbutton import linkbutton
from keikodev.routes import Route



def keiko_cuidados_details()->rx.Component:
    return rx.chakra.vstack(
                heading("Bienvenidos a Nuestro Rincón Peludo: Cuidados y Mimos para Tus Compañeros de Vida", size="md"),
                rx.text("""En nuestra página dedicada a los cuidados de mascotas, nos sumergimos en un universo donde el amor y 
                        la atención se entrelazan para crear experiencias únicas con nuestros fieles compañeros. 
                        Exploraremos consejos prácticos, momentos emotivos y valiosa información para garantizar que cada aspecto 
                        de la vida de tus peludos esté lleno de bienestar y alegría. Desde la comodidad del hogar hasta los viajes en coche, 
                        aquí encontrarás todo lo necesario para nutrir ese vínculo especial que compartes con tus adorables amigos 
                        de cuatro patas. ¡Acompáñanos en este viaje peludo donde el cuidado y el cariño son la clave!""",
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

                rx.foreach(CuidadosState.info_post,lambda item: post_cuidados(item)),
                align_items="Start",
                width="100%",
    )
