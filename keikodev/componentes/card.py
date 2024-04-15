import reflex as rx
import keikodev.styles.styles as styles

from keikodev.styles.styles import Size
from keikodev.styles.colors import Color,TextColor
import keikodev.views.constants as const
from keikodev.componentes.imagenes import unaimagen, dosimagenes, tresimagenes
from keikodev.state.ModalState import ModalState as ModalState

from .heading import heading
from .badge import badge

from keikodev.models.iatools_model import Iatools
from keikodev.componentes.puntuacion import estrellas

def card(url: str, title: str, lista_imagenes , body="", color=TextColor.PRIMARY, badge_text="", featured=False, external=False) -> rx.Component:
    return rx.chakra.link(
        rx.chakra.vstack(
            rx.cond(
                badge_text != "",
                rx.chakra.box(
                    badge(badge_text),
                    width="100%"
                )
            ),
            rx.chakra.hstack(
                heading(
                    title,
                    color,
                    size="lg",
                ),
            width="100%"
            ),
            rx.cond(
                body != "",
                rx.chakra.text(
                    body,
                    font_size=Size.DEFAULT.value,
                    color=TextColor.SECONDARY.value,
                    width="100%"
                ),
            ),

            rx.match(
                len(lista_imagenes), 
                (1, unaimagen(lista_imagenes[len(lista_imagenes)-1],"300")),
                #(2, rx.chakra.text(len(lista_imagenes))),
                (2, dosimagenes(lista_imagenes[len(lista_imagenes)-1],lista_imagenes[len(lista_imagenes)-2])),
                #(len(lista_imagenes)==3, rx.chakra.text(lista_imagenes)),                
                (3, tresimagenes(lista_imagenes[0],lista_imagenes[len(lista_imagenes)-1],lista_imagenes[len(lista_imagenes)-2])),                
                rx.chakra.text("Sin imagenes"),
                ),
            
            height="100%",
            style=styles.featured_container_style if featured else styles.container_style,
        ),
        href=url,
        is_external=external,
        width="100%"
    )

def card_ia(iatool:Iatools) -> rx.Component:
    return  rx.box(
                rx.flex(
                    rx.hstack(
                        rx.cond(
                            iatool.tipo != "",
                            rx.chakra.box(
                                badge(iatool.tipo),
                                width="100%"
                            )
                        ),
                            rx.cond(
                                "/img/"+iatool.icon!="/img/null", 
                                rx.avatar(src="/img/"+iatool.icon, size="4", radius="medium"),
                            ),
                        justify="between",
                    ),
                    rx.link(
                        rx.hstack(
                            rx.heading(iatool.herramientaAI,
                                size="8",
                                align = "center",
                                style={"color":TextColor.HEADER.value}
                                ),
                            justify="center",
                            ),
                            href=iatool.url,
                            style={"text-decoration":"none"},
                            is_external=True,
                    ),
                    rx.box(
                        rx.text(iatool.descripcion,
                                
                                size="2",
                                style={"color":TextColor.BODY.value,"text-align": "justify"},
                                ),
                        height = "140px",
                    ),
                    rx.hstack(
                        rx.cond(
                            iatool.planGratuito,
                            rx.badge("Plan Gratuito",variant="soft",color_scheme="orange", size="2"),
                            rx.badge("De pago",variant="soft",color_scheme="orange", size="2")
                            ),
                        rx.cond(
                            " "+iatool.url_formacion!=" null", 
                            rx.link(rx.icon("graduation-cap",size=30,color="Green"),href=iatool.url_formacion,is_external=True)

                        ),
                        estrellas(iatool.estrellas),
                        align="center",
                        justify="between",

                    ),
                    spacing="2",
                    direction="column", 
                    style=styles.cardia_style,
                    max_width="400px",
                    max_height="300px"
                ),
                # href=iatool.url,
                # style={"text-decoration":"none"},
                # is_external=True,
                # width="400px",
                # height="300px"
            )