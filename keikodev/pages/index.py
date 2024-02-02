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
#from keikodev.api.api import hello
from keikodev.api.api import repo
from keikodev.state.PageState import PageState as PageState


# class IndexState(rx.State):
    
    
#     # @rx.var
#     # def say_hello(self):
#     #     return hello()

    

@rx.page(
    route=Route.INDEX.value,
    title=utils.index_title,
    description=utils.index_description,
    image= utils.preview,
    meta=utils.index_meta,
    on_load = PageState.check_live

)
def index() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        rx.center(
            rx.vstack(
                #rx.text(IndexState.say_hello),
                header(live=PageState.is_live),
                index_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                )
            ),
        footer(),
    )

