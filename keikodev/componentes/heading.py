import reflex as rx
from keikodev.styles.styles import TextColor



def heading(text: str, color=TextColor.PRIMARY, size="2xl") -> rx.Component:
    return rx.chakra.heading(
        text,
        size=size,
        color=color.value,
        width="inherit"
    )