import reflex as rx

import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer_resp import footer_resp
from keikodev.routes import Route
from keikodev.views.kodi_pc_details import kodi_pc_details as kodi_pc_details
import keikodev.styles.styles as styles

@rx.page(
    route=Route.KODI_PC.value,
    title=utils.kodi_pc_title,
    description=utils.kodi_pc_description,
    image= utils.preview,
    meta=utils.kodi_pc_meta,
)

def kodi_pc()-> rx.Component:
    return rx.vstack(
        utils.lang(),
        navbar(),
        rx.center(
            kodi_pc_details(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer_resp(),
        style = styles.background_pattern_style,
    )


