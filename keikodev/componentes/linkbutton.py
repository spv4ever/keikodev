import reflex as rx
import keikodev.styles.styles as styles

def linkbutton(title: str, body: str, url: str)->rx.Component:
    return rx.link(
                rx.button(
                    rx.hstack(
                        rx.icon(
                            tag="arrow_forward",
                            width=styles.Size.BIG.value,
                            height=styles.Size.BIG.value,                        ),
                        rx.vstack(
                            rx.text(title,style=styles.button_title_style),
                            rx.text(body,style=styles.button_body_style),
                            align_items="start"
                            
                        )
                    ),
                ),  
                href=url,
                button=True,
                is_external=True,
                width="100%",
                text_decoration="none",


    )