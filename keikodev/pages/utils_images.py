import reflex as rx
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.navbar import navbar
from keikodev.views.header import header
from keikodev.views.footer import footer
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route
from keikodev.componentes.ant_components import Float_Button
from keikodev.componentes.ant_components import FloatButton
from keikodev.views.utils_images_links import utils_images_links


@rx.page(
    route=Route.UTILS_IMAGES.value,
    title=utils.utils_images_title,
    description=utils.utils_images_description,
    image= utils.preview,
    meta=utils.utils_images_meta,
)

def utils_images() -> rx.Component:
    return rx.box(
        utils.lang(),
        navbar(),
        # Float_Button(
        #         icon = rx.Image(src="/avatar.png"),
        #         href = Route.INDEX.value,
        #         target = "_top",
        #         ),
        rx.center(
            rx.vstack(
                header(False),
                utils_images_links(),
                max_width=styles.MAX_WIDTH,
                width="100%",
                margin_y=Size.BIG.value
                )
            ),
        footer(),
    )