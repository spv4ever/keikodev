import reflex as rx
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.linkbutton import linkbutton
from keikodev.routes import Route

def video_preview(title="", small = False, url_video="" )->rx.Component:
    return rx.vstack(
        rx.text(title,
                color = TextColor.PRIMARY.value,
                width = "100%",
                align="center",
                size="5",
                padding_y=Size.DEFAULT.value,
            ),
        rx.cond(
            small,
            rx.video(
                url=url_video,
                width="350px",
                height="240px",
                ),
            rx.video(
                url=url_video,
            )
        ),
    )