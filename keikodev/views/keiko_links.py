import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route
import keikodev.data.anuncios as anuncios


def keiko_links()-> rx.Component:
        return rx.chakra.vstack(
                title("El rincón de keiko"),

                linkbutton("Información de interés",
                "Toda la información de interés y recomendaciones de keiko",
                "/img/paw-solid.svg",
                Route.KEIKO_INTERES.value,
                is_external=False,
                ),

                linkbutton("Recetas de cocina para perros",
                "Comida casera para nuestros fieles compañeros, chuches...",
                "/img/bone-solid.svg",
                Route.CONSTR.value,
                is_external=False,
                ),
                rx.link(
                        rx.image(
                                src=anuncios.keiko_uno_imagen,
                                border_radius="15px",
                        ),
                        href=anuncios.keiko_uno_url,
                        is_external=True,
                ),

                linkbutton("Como cuidar de nuestros peludos",
                "Explora los desafíos de salud más comunes que pueden afectar a nuestros peludos.",
                "/img/shield-dog-solid.svg",
                Route.KEIKO_CUIDADOS.value,
                is_external=False,
                ),


                linkbutton("Los amigos de keiko",
                "Sección dedicada a divulgar casos de necesidad de protectoras.",
                "/img/handshake-angle-solid.svg",
                Route.CONSTR.value,
                is_external=False,
                ),

                linkbutton("La vida de Keiko",
                "Para quien quiera saber más de Keiko, porque es tan especial",
                "/img/dog-solid.svg",
                Route.CONSTR.value,
                is_external=False,
                ),





        width = "100%",
        spacing=Size.MEDIUM.value,
    )