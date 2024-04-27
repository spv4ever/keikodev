import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
import keikodev.styles.styles as styles
from keikodev.componentes.navbar import navbar
from keikodev.componentes.construccion import construccion
from keikodev.views.header import header
from keikodev.views.dev_links import dev_links
from keikodev.views.footer import footer
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
from keikodev.state.PageState import PageState


@rx.page(
    route=Route.ABOUT.value,
    title=utils.about_title,
    description=utils.about_description,
    image= utils.preview,
    meta=utils.about_meta,)
    

def about() -> rx.Component:
    return rx.chakra.box(
        utils.lang(),
        navbar(),
        rx.chakra.center(
            rx.chakra.vstack(
                rx.chakra.center(
                header(),
                ),

                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
    )