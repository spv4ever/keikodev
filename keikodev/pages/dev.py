import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.dev_links import dev_links
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
from keikodev.componentes.ant_components import Float_Button
from keikodev.componentes.ant_components import FloatButton

@rx.page(
    route=Route.DEV.value,
    title=utils.dev_title,
    description=utils.dev_description,
    image= utils.preview,
    meta=utils.dev_meta,
)

def dev() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        #Float_Button(disabled=False),
         Float_Button(
                  icon = rx.Image(src="/avatar.png"),
                  href = Route.INDEX.value,
                  target = "_top",
                  #disabled = True,
         ),
        rx.center(
            rx.vstack(
                header(False),
                dev_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                )
            ),
        #footer(),
    )