import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size

def steps(text: str)->rx.Component:
    return rx.box(
            rx.text(
                text,
                style = styles.steps_style,
                padding = Size.DEFAULT.value,
                )

    )
