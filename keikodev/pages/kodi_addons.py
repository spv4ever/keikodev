import reflex as rx

import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer_resp import footer_resp
from keikodev.routes import Route
from keikodev.views.kodi_addons_details import kodi_addons_details as kodi_addons_details
import keikodev.styles.styles as styles

@rx.page(
    route=Route.KODI_ADDONS.value,
    title=utils.kodi_addons_title, 
    description=utils.kodi_addons_description,
    image= utils.preview,
    meta=utils.kodi_addons_meta,
)

def kodi_addons()-> rx.Component:
    return rx.vstack(
        utils.lang(),
        navbar(),
        rx.center(
            kodi_addons_details(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer_resp(),
    )

