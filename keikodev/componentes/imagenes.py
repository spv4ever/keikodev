import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.state.ModalState import ModalState as ModalState


def unaimagen(imagen1: str, tamaño: str, alt="")->rx.Component:
    return rx.chakra.box(
            rx.chakra.center(
                rx.chakra.image(src=imagen1,
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
    return rx.chakra.box(rx.chakra.responsive_grid(
                rx.chakra.center(
                    
                    rx.chakra.image(src=imagen1,
                            width="450px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_y = Size.MEDIUM.value,
                            on_click=ModalState.change(imagen1)
                            ),

                ),
                rx.chakra.center(
                    rx.chakra.image(src=imagen2,
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
            
            rx.chakra.modal(
            rx.chakra.modal_overlay(
                rx.chakra.modal_content(
                    rx.chakra.modal_body(
                        rx.chakra.box(
                            rx.chakra.image(
                                src=ModalState.count,
                                width="800px",
                                heigth = "auto"
                                ),
                        ),
                    rx.chakra.modal_footer(
                            rx.chakra.button(
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

def tresimagenes(imagen1: str, imagen2: str, imagen3: str)->rx.Component:
    return rx.chakra.box(rx.chakra.responsive_grid(
                rx.chakra.center(
                    rx.chakra.image(src=imagen1,
                            width="300px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_y = Size.MEDIUM.value,
                            on_click=ModalState.change(imagen1)
                            ),

                ),
                rx.chakra.center(
                    rx.chakra.image(src=imagen2,
                            width="300px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_y = Size.MEDIUM.value,
                            on_click=ModalState.change(imagen2)
                            ),
                ),
                rx.chakra.center(
                    rx.chakra.image(src=imagen3,
                            width="300px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_y = Size.MEDIUM.value,
                            on_click=ModalState.change(imagen3)
                            ),
                ),
                

            columns=[1,2,3],
            spacing=Size.SMALL.value,
            width = "100%",
            padding = Size.SMALL_LARGE.value,
            ),
            rx.chakra.modal(
                rx.chakra.modal_overlay(
                    rx.chakra.modal_content(
                        rx.chakra.modal_body(
                            rx.chakra.box(
                                rx.chakra.image(
                                    src=ModalState.count,
                                    width="800px",
                                    heigth = "auto"
                                    ),
                            ),
                        rx.chakra.modal_footer(
                                rx.chakra.button(
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
