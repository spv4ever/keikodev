import reflex as rx
from keikodev.styles.colors import Color as Color, TextColor
from keikodev.state.ModalState import ModalStateFull as ModalStateFull
from keikodev.state.PageState import PageState as PageState
import keikodev.styles.styles as styles



def visualiza_modal()->rx.Component:
    return rx.chakra.modal(
                                rx.chakra.modal_overlay(
                                        rx.chakra.modal_content(
                                                rx.chakra.modal_body(
                                                        rx.chakra.center(
                                                                rx.chakra.vstack(
                                                                        rx.chakra.button(
                                                                        "Cerrar ventana",
                                                                        size = "lg",
                                                                        variant= "outline",
                                                                        border_width = "3px",
                                                                        width="30%",
                                                                        border_color = Color.PRIMARY.value,
                                                                        on_click=ModalStateFull.change(""),                                                                      
                                                                        ),
                                                                        rx.chakra.image(
                                                                                src=ModalStateFull.hdurl,
                                                                                width="100%",
                                                                                height="auto",
                                                                        ),
                                                                        rx.chakra.text(PageState.title,
                                                                                color = TextColor.PRIMARY.value),
                                                                        rx.chakra.text(PageState.explanation,
                                                                                color = TextColor.PRIMARY.value),

                                                                        max_width = styles.CONTENT_WIDTH,
                                                                ),

                                                        ),

                                                        style = styles.background_pattern_style,
                                                        
                                                ),
                                                bg = Color.BACKGROUND.value,
                                        ),
                                        
                                ),
                                is_open=ModalStateFull.show,
                                size="full",
                        ),