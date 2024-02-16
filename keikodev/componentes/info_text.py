import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor

def info_text(title: str, body: str)->rx.Component:
    return rx.chakra.box(
            rx.chakra.span(
                title,
                font_weight = "bold",
                color = Color.PRIMARY.value
                ),
            f" {body}",
            font_size=Size.MEDIUM.value,
            color = TextColor.BODY.value,

            )   