import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles


def info_box(title: str)->rx.Component:
    return rx.chakra.box(
             rx.chakra.text(
                title,
                style=styles.infobox_body_style,
                width = "100%",
                padding = Size.SMALL.value,
                text_align = "center",
                ),
        display="flex",
        align_items = "center",
        bg = Color.CONTENT.value,
        border_radius=Size.SMALL.value,
    )