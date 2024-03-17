import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def spacex_links()-> rx.Component:
        return rx.chakra.vstack(
        title("SpaceX - Rumbo a Marte"),

                linkbutton("SpaceXstorm - Youtube",
                        "Canal para el seguimiento de noticias y lanzamientos en directo",
                        "/img/rocket-solid.svg",
                        constants.SPACEXSTORM_CHANNEL_URL,
                ),
                linkbutton("SpaceX",
                        "Página oficial de SpaceX con todos los detalles del proyecto",
                        "/img/rocket-solid.svg",
                        constants.SPACEX_URL,
                ),
                linkbutton("Star Ship",
                        "Recopilación de directos de SpaceXstorm relacionados con la StarShip",
                        "/img/rocket-solid.svg",
                        Route.SPACEX_STARSHIP.value,
                        is_external=False,
                ),
                linkbutton("NSF Próximos lanzamientos",
                        "Web para ver los próximos lanzamientos",
                        "/img/rocket-solid.svg",
                        constants.NEXT_LAUNCHS_URL,
                ),
                
                linkbutton(is_external=False),

        width = "100%",
        min_height = "650px",
        spacing=Size.MEDIUM.value,
        )