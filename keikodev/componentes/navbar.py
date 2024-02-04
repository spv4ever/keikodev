import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.routes import Route
from keikodev.componentes.ant_components import Float_Button
from keikodev.componentes.main_menu import main_menu as main_menu
from keikodev.state.PageState import PageState as PageState
from keikodev.state.fotoNasa import fotoNasa as fotoNasa



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
                        rx.text(f"Imagen del día: {PageState.url[2]}" ,
                                margin=Size.DEFAULT.value,
                                display = "flex",
                                align_items = "center",
                                justify_content = "center",
                                color = TextColor.BODY.value,
                                size = Size.SMALL.value,
                                ),
                        rx.image(
                                src=PageState.url[5],
                                width = "75px",
                                height = "auto",
                                
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
    