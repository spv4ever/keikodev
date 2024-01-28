import reflex as rx

import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.routes import Route
from keikodev.views.kodi_luar_details import kodi_luar_details as kodi_luar_details
import keikodev.styles.styles as styles

@rx.page(
    route=Route.KODI_LUAR.value,
    title=utils.kodi_luar_title, 
    description=utils.kodi_luar_description,
    image= utils.preview,
    meta=utils.kodi_luar_meta,
)

def kodi_luar()-> rx.Component:
    return rx.vstack(
        utils.lang(),
        navbar(),
        rx.center(
            kodi_luar_details(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer(),
    )


