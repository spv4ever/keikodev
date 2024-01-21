import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles
from keikodev.routes import Route


def navbar():
    return rx.hstack(
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
                        )       ,
                        style=styles.navbar_title_style
                ), 
                href=Route.INDEX.value,
            ),
        position="sticky",

        bg=Color.CONTENT.value,
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        width="100%",
        z_index = "999",
        top="0"
        )
    