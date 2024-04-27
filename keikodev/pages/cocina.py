import reflex as rx
import keikodev.styles.styles as styles
import keikodev.utils as utils
from keikodev.state.PageState import PageState
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.routes import Route
from keikodev.views.cocina_details import cocina_details
from keikodev.componentes.menubar_cocina import menubar_cocina



@rx.page(
    route=Route.COCINA.value,
    title=utils.cocina_title,
    description=utils.cocina_description,
    image= utils.preview,
    meta=utils.cocina_meta, 
)

def cocina()-> rx.Component:
    return rx.chakra.vstack(
            utils.lang(),
            navbar(),
            rx.chakra.center(
                cocina_details(),
                max_width=styles.CONTENT_WIDTH,
                ),
                
            footer(),
            style = styles.background_gradient_style,
            
        ),


