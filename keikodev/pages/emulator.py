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
from keikodev.views.emulator_links import emulator_links



@rx.page(
    route=Route.EMULATOR.value,
    title=utils.emulator_title,
    description=utils.emulator_description,
    image= utils.preview,
    meta=utils.emulator_meta,
    

)

def emulator() -> rx.Component:
    return rx.chakra.box(
        utils.lang(),
        navbar(),
        Float_Button(
            icon = rx.chakra.Image(src="/avatar.png"),
            href = Route.INDEX.value,
            target = "_top",
            ),
        rx.chakra.center(
            rx.chakra.vstack(
                header(False),
                emulator_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
            style=styles.background_gradient_style,
            ),
            

        
        footer(),
        style = styles.background_pattern_style,
        
        
    )