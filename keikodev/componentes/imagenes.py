import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.styles.fonts import Fuentes as Fuentes

class ModalState(rx.State):
    show: bool = False
    count: str
    def change(self, count:str):
        self.show = not (self.show)
        self.count = count



def unaimagen(imagen1: str, tamaño: str, alt="")->rx.Component:
    return rx.box(
            rx.center(
                rx.image(src=imagen1,
                    width=tamaño,
                    heigth="auto",
                    border="2px solid",
                    border_radius="10px",
                    border_color = Color.IMAGE_BOX.value,
                    margin_y = Size.MEDIUM.value,
                    on_click=ModalState.change(imagen1), 
                    ),
            ),
        width = "100%",
    )


def dosimagenes(imagen1: str, imagen2: str)->rx.Component:
    return rx.box(rx.responsive_grid(
                rx.center(
                    rx.image(src=imagen1,
                            width="450px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_y = Size.MEDIUM.value,
                            on_click=ModalState.change(imagen1)
                            ),

                ),
                rx.center(
                    rx.image(src=imagen2,
                            width="450px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_y = Size.MEDIUM.value,
                            on_click=ModalState.change(imagen2)
                            ),
                ),
            columns=[1,2],
            spacing=Size.SMALL.value,
            width = "100%",
            padding = Size.SMALL_LARGE.value,
            ),
            rx.modal(
            rx.modal_overlay(
                rx.modal_content(
                    rx.modal_body(
                        rx.box(
                            rx.image(
                                src=ModalState.count,
                                width="800px",
                                heigth = "auto"
                                ),
                        ),
                    rx.modal_footer(
                            rx.button(
                                "Close",
                                on_click=ModalState.change(""),
                            ),
                            ),
                        
                    ),
                ),
            ),
        is_open=ModalState.show,
        size="xl",
        ),
    )
