import reflex as rx
import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer_resp import footer_resp
from keikodev.routes import Route
from keikodev.views.kodi.kodi_addons_balandro import kodi_addons_balandro
import keikodev.styles.styles as styles
from keikodev.state.PageState import PageState

@rx.page(
    route=Route.KODI_BALANDRO.value,
    title=utils.kodi_title, 
    description=utils.kodi_description,
    image= utils.preview,
    meta=utils.kodi_meta,
    
    
)

def kodi_balandro()-> rx.Component:
    return rx.chakra.vstack(
        utils.lang(),
        navbar(),
        rx.chakra.center(
            kodi_addons_balandro(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer_resp(),
        style = styles.background_pattern_style,
    )


