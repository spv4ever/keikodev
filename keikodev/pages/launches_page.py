import reflex as rx
import keikodev.views.constants as constants
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.routes import Route
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.componentes.ant_components import Float_Button
from keikodev.styles.styles import Size as Size
from keikodev.state.PageState import PageState
from keikodev.views.launches_page_details import launches_page_details
from keikodev.models.launches import Nextlaunches
from keikodev.data.launch_services import select_all_launches_service

class LaunchesState(rx.State):
    list_launches:list[Nextlaunches]
    #buscarEmail: str
    error: str = ""
    #email: str

    @rx.background
    async def get_all_launches(self):
        async with self:
            self.list_launches = select_all_launches_service()
            #print(self.list_launches)

@rx.page(
    route=Route.LAUNCH_PAGE.value,
    title=utils.launches_title,
    description=utils.launches_description,
    image= utils.preview,
    meta=utils.launches_meta,
    on_load=LaunchesState.get_all_launches,
)
def launches_page() -> rx.Component:
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
                launches_page_details(LaunchesState.list_launches),
                max_width=styles.CONTENT_WIDTH,
                width="100%",
                margin_y=Size.BIG.value,
                min_height = "650px",
                ),
            style=styles.background_gradient_style,
            ),
        footer(),
        style = styles.background_pattern_style,
        
        
    )