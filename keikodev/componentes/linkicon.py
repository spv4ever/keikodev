import reflex as rx
import keikodev.styles.styles as styles

def linkicon(url: str)->rx.Component:
    return rx.link(
        rx.icon(
            tag="link"
        ),
        is_external=True,
        href=url,
    )