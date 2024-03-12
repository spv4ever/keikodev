import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.index_links import index_links
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
from keikodev.api.api import live
from keikodev.api.api import repo
from keikodev.api.api import foto
from keikodev.state.PageState import PageState as PageState
from keikodev.state.fotoNasa import  fotoNasa as fotoNasa
from keikodev.styles.colors import TextColor as TextColor
from keikodev.models.Nasalink import Nasalink
from keikodev.state.ModalState import modal_small
from keikodev.componentes.adsscript import ads_script
from keikodev.state.alllinks import Alllinks
from keikodev.componentes.facebook import facebook_sdk
from keikodev.data.recetas_json import recetas_andaluzas
from keikodev.state.countdown import CountdownState


@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta,
)

def index() -> rx.Component:
    return rx.chakra.box(
        utils.lang(),
        #utils.cookies(),
        #facebook_sdk(),
        navbar(),
        rx.chakra.center(
            rx.chakra.vstack(
                header(live_status = PageState.live_status),
                index_links(),
                spacing=Size.DEFAULT.value,
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                ),
                style=styles.background_gradient_style,
                on_mount=CountdownState.start_countdown,
            ),
        footer(),
        
        
        on_mount=PageState.check_live,
        style = styles.background_pattern_style,
    )

