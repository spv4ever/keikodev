import reflex as rx
import keikodev.styles.styles as Styles
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.styles import Size as Size



def noticias()->rx.Component:
    return  rx.hstack(
                    rx.box("Imagen",bg="blue",
                           width= "10em",
                            height="20em",
                            ),
                    rx.box("Texto", bg="white",width = "100%", heigth = "100%"),
            align_items="start",
            width="100%",
            heigth = "auto",
            )