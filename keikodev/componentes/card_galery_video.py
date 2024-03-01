import reflex as rx
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.styles.fonts import Fuentes
from keikodev.styles.colors import Color, TextColor
from keikodev.styles.styles import Size
from keikodev.state.ModalState import ModalStateFull
from keikodev.state.PageState import PageState
from keikodev.data.reflex_class import Datagalerianasarx



def card_galery_video(data: Datagalerianasarx)-> rx.Component:
    return rx.chakra.box(
                rx.chakra.vstack(
                    rx.chakra.box(
                        
                    rx.chakra.text(data.date, 
                            font_size = Size.LARGE.value, 
                            font_family= Fuentes.NASA.value, 
                            color = TextColor.PRIMARY.value,
                            width = "100%",
                            display = "flex",
                            justify_content = "center",
                            align_items = "center",
                            padding_bottom = Size.SMALL.value,
                            ),
                    rx.video(url=data.url,
                            light=True,
                            width = "320px",
                            height= "240px",
                            playing=True,
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

