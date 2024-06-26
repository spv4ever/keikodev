import reflex as rx
import datetime
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
# from keikodev.componentes.ant_components import Float_Button 
import keikodev.views.constants as const

def footer_pages()-> rx.Component:
    return rx.chakra.vstack(

        rx.chakra.avatar(name="Albert García",
                          size="xl", 
                          src = "/keiko_manga_sd.png",
                          padding="2px",
                          border="4px",
                          border_color = Color.PRIMARY.value,
                          ),
        rx.chakra.link(f'© 1991-{datetime.date.today().year} Blog personal de Albert García.',
                href="https://github.com/spv4ever",
                is_external=True,
                font_size = Size.MEDIUM.value),
                rx.chakra.hstack(
                    rx.chakra.text(
                        "Aprendiendo desarrollo web desde Catalunya.",
                        font_size = Size.MEDIUM.value,
                        class_name="marquee",
                        ),
                    margin_top=Size.ZERO.value,
                    ),
                margin_bottom=Size.BIG.value,
                padding_bottom = Size.BIG.value,
                color = TextColor.FOOTER.value,
                font_family = Fuentes.DEFAULT.value,

    )