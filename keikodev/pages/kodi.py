import reflex as rx
import keikodev.views.constants as constants
from keikodev.routes import Route
import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.footer import footer
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.views.kodi_links import kodi_links
from keikodev.state.PageState import PageState
import functools
from keikodev.pages.google_auth import require_google_login


@rx.page(
    route=Route.KODI.value,
    title=utils.kodi_title,
    description=utils.kodi_description,
    image= utils.preview,
    meta=utils.kodi_meta,
    

)

#@require_google_login
def kodi() -> rx.Component:
    return rx.chakra.box(
        utils.lang(),
        navbar(),
        rx.chakra.center(
            rx.chakra.vstack(
                kodi_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
    )