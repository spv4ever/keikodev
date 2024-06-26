import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
# from keikodev.componentes.ant_components import Float_Button
# from keikodev.componentes.ant_components import FloatButton
from keikodev.state.PageState import PageState as PageState
from keikodev.styles.colors import Color
from keikodev.views.spacex_links import spacex_links

@rx.page(
    route=Route.SPACEX.value,
    title=utils.spacex_title,
    description=utils.spacex_description,
    image= utils.preview,
    meta=utils.spacex_meta,
)

def spacex() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        #Float_Button(disabled=False),
        # Float_Button(
        #         icon = rx.chakra.Image(src="/avatar.png"),
        #         href = Route.INDEX.value,
        #         target = "_top",
                # ),
        rx.chakra.center(
            rx.chakra.vstack(
                #header(False,live_status=PageState.live_status),
                spacex_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
        #style = styles.background_pattern_style,
        style = {"background-image":"url('/img/starship.svg')","background-position":"top left","background-attachment":"fixed"},
        width = "100%",
    )