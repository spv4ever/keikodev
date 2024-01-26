import reflex as rx

import keikodev.utils as utils
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.routes import Route


@rx.page(
    route=Route.KODI_PC.value,
    title=utils.kodi_pc_title,
    description=utils.kodi_pc_description,
    image= utils.preview,
    meta=utils.kodi_pc_meta,
)

def kodi_pc()-> rx.Component:
    return rx.vstack(
        utils.lang(),
        navbar(),
        footer()
    )


