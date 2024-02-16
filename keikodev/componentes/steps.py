import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size

def steps(text: str)->rx.Component:
    return rx.chakra.box(
            rx.chakra.text(
                text,
                style = styles.steps_style,
                padding = Size.VERY_SMALL.value,
                text_align= "justify",
                text_justify= "inter-word",
                width="100%",
                ),
            width = "100%"
    )
