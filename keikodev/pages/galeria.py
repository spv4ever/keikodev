import reflex as rx
import keikodev.views.constants as constants
from keikodev.routes import Route
import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.footer import footer
#from keikodev.componentes.ant_components import Float_Button
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.views.galeria_links import galeria_links
from keikodev.state.ModalState import ModalState
from keikodev.state.PageState import PageState as PageState



@rx.page(
    route=Route.GALERIA.value,
    title=utils.galeria_title,
    description=utils.galeria_description,
    image= utils.preview,
    meta=utils.galeria_meta,
    on_load=[PageState.galeria_fotos_load]
    
)

def galeria() -> rx.Component:
    return rx.chakra.box(
        utils.lang(),
        navbar(),
        rx.chakra.center(
            rx.chakra.vstack(
                #header(False),
                galeria_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
                style=styles.background_gradient_style,
            ),
        footer(),
        #style = styles.background_pattern_style,
    )