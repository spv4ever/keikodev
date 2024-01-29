import reflex as rx
import keikodev.styles.styles as Styles
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.styles import Size as Size



def noticias()->rx.Component:
    return  rx.hstack(
                    rx.box(
                    rx.text("Imagen", color = TextColor.HEADER.value),
                    width = "300px",
                    height = "300px"
                    ),
                        rx.vstack(
                            
                            rx.text("Cabecera", color = TextColor.HEADER.value),
                            rx.text("Detalle", color = TextColor.HEADER.value),
                            ),
                        align_content = "up",
                        width="100%",
                        ),
