import reflex as rx
import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer_resp import footer_resp
from keikodev.routes import Route
from keikodev.views.kodi.kodi_addons_kodivertido import kodi_addons_kodivertido
import keikodev.styles.styles as styles
from keikodev.state.PageState import PageState

@rx.page(
    route=Route.KODI_KODIVERTIDO.value,
    title=utils.kodi_title, 
    description=utils.kodi_description,
    image= utils.preview,
    meta=utils.kodi_meta,
    on_load=PageState.check_live,
    
)

def kodi_kodivertido()-> rx.Component:
    return rx.chakra.vstack(
        utils.lang(),
        navbar(),
        rx.chakra.center(
            kodi_addons_kodivertido(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer_resp(),
        style = styles.background_pattern_style,
    )


