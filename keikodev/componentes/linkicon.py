import reflex as rx
from keikodev.styles.styles import Size as Size

def linkicon(image: str, url: str, alt=str)->rx.Component:
    return rx.chakra.link(
        rx.chakra.image(
            src=image,
            width = Size.DEFAULT.value,
            alt=alt,
        ),
        is_external=True,
        href=url,
    )