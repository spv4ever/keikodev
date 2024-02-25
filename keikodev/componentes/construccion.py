import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles
from keikodev.state.fotoNasa import Image_Load as Image_Load
from keikodev.state.PageState import PageState as PageState
from keikodev.componentes.card import card as card
#from keikodev.state.alllinks import Alllinks
from keikodev.models.Nasalink import Nasalink
from keikodev.data.data_galeria_nasa import Datagalerianasa
#from keikodev.data.data_galeria_nasa import items_galeria
from keikodev.componentes.card_galery import card_galery


def construccion()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.heading(
            "Todavía no estamos listos",
            size = "lg",
            style=styles.title_center_style,
            ),
        rx.chakra.image(
            src="/en-construccion.webp.png",
        ),
        
        

        width = "100%",
    )