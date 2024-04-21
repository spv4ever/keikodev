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
from keikodev.views.galeria_starship_video_details import galeria_starship_video_details







@rx.page(
    route=Route.SPACEX_STARSHIP.value,
    title=utils.starship_video_title,
    description=utils.starship_video_description,
    image= utils.preview,
    meta=utils.starship_video_meta,    
)
def galeria_starship_video() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        # Float_Button(
        #     icon = rx.chakra.Image(src="/avatar.png"),
        #     href = Route.INDEX.value,
        #     target = "_top",
        #     ),
        rx.chakra.center(
            rx.chakra.vstack(
                galeria_starship_video_details(),
                max_width=styles.CONTENT_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                
                ),
                #style=styles.background_gradient_style,

            ),
        footer(),
        min_height = "650px",
        background = "center / contain no-repeat url('/img/starship.svg')",
        width = "100%",
        
        #style = styles.background_pattern_style,
    )