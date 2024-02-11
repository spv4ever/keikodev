import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles
from keikodev.state.fotoNasa import Image_Load as Image_Load
from keikodev.state.PageState import PageState as PageState
from keikodev.componentes.card import card as card
from keikodev.state.alllinks import Alllinks
from keikodev.models.Nasalink import Nasalink
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.data.data_galeria_nasa import items_galeria
from typing import List
from keikodev.componentes.card_galery import card_galery


def construccion(date_income: list[Datagalerianasa])->rx.Component:
    return rx.vstack(
        rx.heading(
            "Todavía no estamos listos",
            size = "lg",
            style=styles.title_center_style,
            ),
        rx.image(
            src="/en-construccion.webp.png",
        ),
        
        rx.button("clic me",
                  on_click=PageState.tomaFoto("2024-02-08")
        ),
        rx.vstack(
            rx.responsive_grid(
                
                    *[
                        card_galery(data,
                        )
                        for index, data in enumerate(date_income)
                    ],
                
                columns=[1,2,3,4],
                spacing = "6"
            ),
        ),
        
        
        rx.image(src=PageState.hdurl),

        width = "100%",
    )