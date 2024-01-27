import reflex as rx

import keikodev.views.constants as constants
from keikodev.routes import Route
import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.footer import footer
from keikodev.componentes.ant_components import Float_Button
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.views.kodi_links import kodi_links



@rx.page(
    route=Route.KODI.value,
    title=utils.kodi_title,
    description=utils.kodi_description,
    image= utils.preview,
    meta=utils.dev_meta,
)

def kodi() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        Float_Button(
            icon = rx.Image(src="/avatar.png"),
            href = Route.INDEX.value,
            target = "_top",
            ),
        rx.center(
            rx.vstack(
                header(False),
                kodi_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                )
            ),
        footer(),
    )