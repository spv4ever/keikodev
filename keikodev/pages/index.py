import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.index_links import index_links, index_links_desktop, Lastpicturestate
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
from keikodev.api.api import live
from keikodev.api.api import repo
from keikodev.api.api import foto
from keikodev.state.PageState import PageState as PageState
from keikodev.state.fotoNasa import  fotoNasa as fotoNasa
from keikodev.styles.colors import TextColor, Color
from keikodev.models.Nasalink import Nasalink
from keikodev.state.ModalState import modal_small
#from keikodev.componentes.adsscript import ads_script
from keikodev.state.alllinks import Alllinks
from keikodev.componentes.facebook import facebook_sdk
from keikodev.data.recetas_json import recetas_andaluzas
from keikodev.state.countdown import CountdownState
from keikodev.pages.iatools import Iatoolstate


@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    image=utils.preview,
    meta=utils.index_meta,
    on_load=Iatoolstate.get_all_iatools,

)

def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        #utils.cookies(),
        #facebook_sdk(),
        navbar(),
        rx.mobile_only(
            rx.chakra.center(
                rx.chakra.vstack(
                    #header(live_status = PageState.live_status),
                    index_links(),
                    spacing=Size.DEFAULT.value,
                    max_width=styles.MAX_WIDTH,
                    width="100%",
                    margin_y=Size.BIG.value
                    ),
                    style=styles.background_gradient_style,
                    on_mount=CountdownState.start_countdown,
                ),
        ),
        rx.tablet_and_desktop(
            rx.cond(Iatoolstate.total!=0,
                    index_links_desktop(),
                    rx.center(
                        rx.hstack(
                            rx.chakra.spinner(color="pink", size="xl",style={"margin":Size.DEFAULT.value}),
                            rx.heading("Loading...",
                                size="9",
                                style={"color":Color.PRIMARY.value,"magin":Size.VERY_BIG.value,}
                                ),
                            direction="row",

                        )
                    )
            ),
            style=styles.background_gradient_style,
        ),
        footer(),
        min_height = "650px",
        on_mount=PageState.check_live,
        #style = styles.background_pattern_style,
    )

