import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
from keikodev.componentes.ant_components import Float_Button
from keikodev.componentes.ant_components import FloatButton
from keikodev.state.PageState import PageState as PageState
from keikodev.state.info_interes_state import InfoInteresState
from keikodev.views.keiko_interes_details import keiko_interes_details

@rx.page(
    route=Route.KEIKO_INTERES.value,
    title=utils.keiko_title,
    description=utils.keiko_description,
    image= utils.preview,
    meta=utils.keiko_meta,
    
)

def keiko_interes() -> rx.Component:
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
                #header(False,live_status=PageState.live_status),
                keiko_interes_details(),
                max_width=styles.CONTENT_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
        style = styles.background_pattern_style,
        on_mount=InfoInteresState.leepostinteres,
    )