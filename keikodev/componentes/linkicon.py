import reflex as rx
from keikodev.styles.styles import Size as Size

def linkicon(image: str, url: str)->rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width = Size.DEFAULT.value,
        ),
        is_external=True,
        href=url,
    )