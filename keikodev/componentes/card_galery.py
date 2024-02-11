import reflex as rx
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.styles.fonts import Fuentes
from keikodev.styles.colors import Color, TextColor
from keikodev.styles.styles import Size
from keikodev.state.ModalState import ModalStateFull



def card_galery(data: Datagalerianasa)-> rx.Component:
    return rx.box(
                rx.vstack(
                    rx.box(
                    rx.text(data.date, 
                            font_size = Size.LARGE.value, 
                            font_family= Fuentes.NASA.value, 
                            color = TextColor.PRIMARY.value,
                            width = "100%",
                            display = "flex",
                            justify_content = "center",
                            align_items = "center",
                            padding_bottom = Size.SMALL.value,
                            ),
                    rx.image(src=data.url,
                             alt = data.title, 
                            object_fit = "contain",
                            _hover = {"cursor": "zoom-in"},
                            on_click=ModalStateFull.change(data.hdurl)
                            ),
                    border_width = "2px",
                    border_color = Color.PRIMARY.value,
                    border_radius = "5px",
                    box_shadow= f"5px 5px 20px 0px {Color.SECONDARY.value}",
                    align_items = "center",
                    background=Color.CONTENT.value,
                    padding=Size.MEDIUM.value,
                    ),  
                ),
    )

