# chatapp.py
import reflex as rx


from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.links import links
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size

#class State(rx.State):
#    """The app state."""
#    pass

def index() -> rx.Component:
    return rx.box(
        navbar(),
        rx.center(
            rx.vstack(
                header(),
                links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                )
            ),
        footer(),
    )

app = rx.App(
    style = styles.BASE_STYLE,
    stylesheets=["fonts/Fonts.css"],

)
app.add_page(
    index,
    title="KeikoDev. Primera página completamente en python",
    description="Soy técnico informático con más de 30 años de experiencia, fanático de la gestión de datos y Bigdata.",
    image='avatar3.png',
    )