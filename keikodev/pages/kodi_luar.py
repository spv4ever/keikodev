import reflex as rx
import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer_resp import footer_resp
from keikodev.routes import Route
from keikodev.views.kodi.kodi_addons_luar import kodi_addons_luar
import keikodev.styles.styles as styles
from keikodev.state.PageState import PageState

@rx.page(
    route=Route.KODI_LUAR.value,
    title=utils.kodi_luar_title, 
    description=utils.kodi_luar_description,
    image= utils.preview,
    meta=utils.kodi_luar_meta,
    on_load=PageState.check_live,
    
)

def kodi_luar()-> rx.Component:
    return rx.vstack(
        utils.lang(),
        navbar(),
        rx.center(
            kodi_addons_luar(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer_resp(),
        style = styles.background_pattern_style,
    )


