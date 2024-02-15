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
from keikodev.data.data_galeria_nasa import items_galeria
from keikodev.views.cookies_details import cookies_details



@rx.page(
    route=Route.COOKIES.value,
    title=utils.cookies_title,
    description=utils.cookies_description,
    image= utils.preview,
    meta=utils.dev_meta,
    on_load=PageState.check_live,

)

def cookies() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                rx.center(
                header(False),
                ),
                cookies_details(),
                max_width=styles.CONTENT_GALERY,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
    )