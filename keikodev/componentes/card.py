import reflex as rx
import keikodev.styles.styles as styles

from keikodev.styles.styles import Size
from keikodev.styles.colors import TextColor
import keikodev.views.constants as const
from keikodev.componentes.imagenes import unaimagen, dosimagenes, tresimagenes
from keikodev.state.ModalState import ModalState as ModalState

from .heading import heading
from .badge import badge

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