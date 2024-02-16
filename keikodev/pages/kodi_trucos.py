import reflex as rx

import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer_resp import footer_resp
from keikodev.routes import Route
from keikodev.views.kodi.kodi_pc_details import kodi_pc_details as kodi_pc_details
import keikodev.styles.styles as styles
from keikodev.state.PageState import PageState
from keikodev.views.kodi.kodi_trucos_details import kodi_trucos_details

@rx.page(
    route=Route.KODI_TRUCOS.value,
    title=utils.kodi_trucos_title,
    description=utils.kodi_trucos_description,
    image= utils.preview,
    meta=utils.kodi_trucos_meta,
    on_load=PageState.check_live
)

def kodi_trucos()-> rx.Component:
    return rx.chakra.vstack(
        utils.lang(),
        navbar(),
        rx.chakra.center(
            kodi_trucos_details(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer_resp(),
        style = styles.background_pattern_style,
    )


