import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size

def linkbutton(title: str, body: str, image: str, url: str)->rx.Component:
    return rx.link(
                rx.button(
                    rx.hstack(
                        rx.image(
                            src=image,
                            width=styles.Size.LARGE.value,
                            height=styles.Size.LARGE.value,
                            margin=Size.MEDIUM.value,
                            ),
                        rx.vstack(
                            rx.text(title,style=styles.button_title_style),
                            rx.text(body,style=styles.button_body_style),
                            align_items="start",
                            spacing=Size.ZERO.value,
                            padding_y = Size.SMALL.value,
                            padding_right = Size.SMALL.value,
                            
                        )
                    ),
                    
                ),  
                href=url,
                button=True,
                is_external=True,
                width="100%",
                text_decoration="none",


    )