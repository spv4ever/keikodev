import reflex as rx
import keikodev.styles.styles as styles
import keikodev.utils as utils
from keikodev.state.PageState import PageState
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.routes import Route
from keikodev.views.estafas_details import estafas_details as estafas_details


@rx.page(
    route=Route.ESTAFAS.value,
    title=utils.estafas_title, 
    description=utils.estafas_description,
    image= utils.preview,
    meta=utils.estafas_meta,
    on_load=PageState.check_live,
)

def estafas()-> rx.Component:
    return rx.vstack(
        utils.lang(),
        navbar(),
        rx.center(
            estafas_details(),
            max_width=styles.CONTENT_WIDTH,
            ),
        footer(),
        style=styles.background_gradient_style,
        #style = styles.background_pattern_style,
    )


