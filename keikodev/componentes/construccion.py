import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles
from keikodev.state.fotoNasa import Image_Load as Image_Load
from keikodev.state.PageState import PageState as PageState
from keikodev.componentes.card import card as card





def construccion(featured=[])->rx.Component:
    PageState.featured_links
    return rx.vstack(
        rx.heading(
            "Todavía no estamos listos",
            size = "lg",
            style=styles.title_center_style,
            ),
        rx.image(
            src="/en-construccion.webp.png",
        ),
        
        rx.button("clic me",
                  on_click=Image_Load.tomaFoto("2024-01-31")


        ),
        rx.button("clic me db",
                  on_click=PageState.featured_links
        ),

        rx.text(f'{featured}'),
        
        rx.image(src=Image_Load.url[1]),

        width = "100%",
    )