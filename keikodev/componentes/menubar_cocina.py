import reflex as rx

def menubar_cocina()->rx.Component:
    return rx.flex(
        rx.checkbox(
            "Todas",
            default_checked=True,
            spacing="2",
            ),
        rx.checkbox(
            "Postres",
            default_checked=True,
            spacing="2",
            ),

        direction="column",
        align="start",
        justify="start",
        margin_top = "5em"

    )
    
