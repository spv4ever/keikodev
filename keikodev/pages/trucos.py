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
from keikodev.state.PageState import PageState
from keikodev.views.trucos_details import trucos_details



@rx.page(
    route=Route.TRUCOS.value,
    title=utils.trucos_title,
    description=utils.trucos_description,
    image= utils.preview,
    meta=utils.dev_meta,
    on_load=PageState.check_live,

)

def trucos() -> rx.Component:
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
                #header(False),
                trucos_details(),
                max_width=styles.CONTENT_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
        style = styles.background_pattern_style,
        
        
    )