import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.routes import Route
from keikodev.componentes.main_menu import main_menu as main_menu
from keikodev.state.PageState import PageState as PageState
from keikodev.state.fotoNasa import fotoNasa as fotoNasa
from keikodev.state.ModalState import ModalStateFull
from keikodev.componentes.visualiza import visualiza_modal as visualiza_modal


def navbar():
        return rx.hstack(
                rx.box(
                main_menu(),
                heigth = "3em",
                ),
                rx.image(src="/avatar.png",
                        width="50px",
                        height="auto",
                        border_radius="15px 50px",
                        border="5px solid #555",
                        box_shadow="lg"),
                rx.link(
                        rx.box(
                                rx.span("Keiko",
                                        color=Color.PRIMARY.value,
                                        ),
                                rx.span("Dev",
                                        color=Color.SECONDARY.value
                                ),
                                style=styles.navbar_title_style
                        ), 
                        href=Route.INDEX.value,
                ),

                rx.box(
                        #visualiza_modal(),
                        rx.text(f"Foto desde Nasa diaria: {PageState.date}" ,
                                margin=Size.DEFAULT.value,
                                display = "flex",
                                align_items = "center",
                                justify_content = "center",
                                color = TextColor.BODY.value,
                                size = Size.VERY_SMALL.value,
                                ),
                        rx.image(
                                src=PageState.url,
                                html_height = "800px",
                                html_width= "600px",
                                width = "auto",
                                height = "50px",
                                on_click=ModalStateFull.change(PageState.hdurl),
                                _hover = {"cursor": "pointer"},
                                ),
                                

                        
                        rx.modal(
                                rx.modal_overlay(
                                        rx.modal_content(
                                                rx.modal_body(
                                                        rx.center(
                                                                rx.vstack(
                                                                        rx.button(
                                                                        "Cerrar ventana",
                                                                        size = "lg",
                                                                        variant= "outline",
                                                                        border_width = "3px",
                                                                        width="30%",
                                                                        border_color = Color.PRIMARY.value,
                                                                        on_click=ModalStateFull.change(""),                                                                      
                                                                        ),
                                                                        rx.image(
                                                                                src=ModalStateFull.hdurl,
                                                                                width="100%",
                                                                                height="auto",
                                                                        ),
                                                                        rx.text(PageState.title,
                                                                                color = TextColor.PRIMARY.value),
                                                                        rx.text(PageState.explanation,
                                                                                color = TextColor.PRIMARY.value),

                                                                        max_width = styles.CONTENT_WIDTH,
                                                                ),

                                                        ),

                                                        style = styles.background_pattern_style,
                                                        
                                                ),
                                                bg = Color.BACKGROUND.value,
                                        ),
                                        
                                ),
                                is_open=ModalStateFull.show,
                                size="full",
                        ),
                        width = "100%",
                        display = "flex",
                        align_items = "right",
                        justify_content = "right",
                ),
        spacing = Size.LARGE.value,
        position="sticky", #Deja la barra arriba y se mueve el head y footer
        bg=Color.CONTENT.value,
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        width="100%",
        z_index = "999",
        top="0"
        )