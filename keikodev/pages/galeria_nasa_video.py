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
from keikodev.views.galeria_nasa_video_details import galeria_nasa_video_details







@rx.page(
    route=Route.GALERIA_NASA_VIDEO.value,
    title=utils.galeria_nasa_title,
    description=utils.galeria_nasa_description,
    image= utils.preview,
    meta=utils.galeria_nasa_meta,    
)

def galeria_nasa_video() -> rx.Component:
    return rx.chakra.box(
        utils.lang(),
        navbar(),
        # Float_Button(
        #     icon = rx.chakra.Image(src="/avatar.png"),
        #     href = Route.INDEX.value,
        #     target = "_top",
        #     ),
        rx.chakra.center(
            rx.chakra.vstack(
                galeria_nasa_video_details(),
                max_width=styles.CONTENT_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                
                on_mount=PageState.galeria_fotos_load_video,
                ),
                style=styles.background_gradient_style,

            ),
        footer(),
        
        style = styles.background_pattern_style,
    )