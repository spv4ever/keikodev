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
from keikodev.state.user_logged import Userlevel
from keikodev.api.Users import Users
from keikodev.pages.google_auth import StateLogin


def construccion()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.heading(
            StateLogin.user_level,
            size = "lg",
            style=styles.title_center_style,
            on_mount=Userlevel.set_user_level(StateLogin.user_level)
            ),
        rx.chakra.image(
            src="/en-construccion.webp.png",
        ),
        
        

        width = "100%",
    )