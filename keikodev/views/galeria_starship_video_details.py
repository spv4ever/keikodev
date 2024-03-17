import reflex as rx
import keikodev.styles.styles as styles
import keikodev.views.constants as const
import keikodev.utils as utils
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.linkbutton import linkbutton
from keikodev.routes import Route
from keikodev.componentes.video_preview import video_preview

#from keikodev.componentes.title import title as title
#from keikodev.componentes.steps import steps as steps
#from keikodev.componentes.imagenes import dosimagenes as dosimagenes
#from keikodev.componentes.imagenes import unaimagen as unaimagen
#import keikodev.componentes.imagenes as imagenes
#from keikodev.api.funciones import dameUltimosCincoDias as dameUltimosCincoDias
#from keikodev.componentes.card_galery_video import card_galery_video
#from keikodev.state.PageState import PageState



def galeria_starship_video_details()->rx.Component:
        return rx.vstack(
                rx.heading("Videos de los lanzamientos de la Starship",
                        color = TextColor.PRIMARY.value),

                rx.text("Recopilación de directos de SpaceXstorm, donde se puede ver la evolución de la Starship, desde sus inicios.",
                        color = TextColor.PRIMARY.value),
                rx.text("Estos tremendos documentos compartidos por SpaceXstorm son parte de la historia de la humanidad",
                        color = TextColor.PRIMARY.value),
                rx.flex(
                        linkbutton("Inicio Keikodev",
                                "Menú principal de keikodev",
                                "/img/dev.svg",
                                "/",
                                is_external=False),

                        linkbutton("SpaceX - Rumbo a Marte",
                                "",
                                "/img/rocket-solid.svg",
                                Route.SPACEX.value,
                                is_external=False),
                        spacing = "4",
                        flex_direction=["column","row"],
                        width = "100%",
                        justify="between",
                ),

                rx.tablet_and_desktop(
                        video_preview(
                                title="14/03/2024 - Tercer Vuelo",
                                url_video=const.STARSHIP_TERCER_TEST,
                        ),
                        video_preview(
                                title="18/11/2023 - Segundo Vuelo",
                                url_video=const.STARSHIP_SEGUNDO_TEST,
                        ),
                        
                        video_preview(
                                title="20/04/2023 - Primer Vuelo",
                                url_video=const.STARSHIP_PRIMER_TEST,
                        ),
                        video_preview(
                                title="5/05/2021 - SN15 Primer aterrizaje",
                                url_video=const.SN15_TEST,
                        ),
                        video_preview(
                                title="30/03/2021 - SN11",
                                url_video=const.SN11_TEST,
                        ),
                ),

                rx.mobile_only(   
                        video_preview(
                                title="14/03/2024 - Tercer Vuelo",
                                url_video=const.STARSHIP_TERCER_TEST,
                                small=True,
                        ),
                        video_preview(
                                title="18/11/2023 - Segundo Vuelo",
                                url_video=const.STARSHIP_SEGUNDO_TEST,
                                small=True,
                        ),
                        
                        video_preview(
                                title="20/04/2023 - Primer Vuelo",
                                url_video=const.STARSHIP_PRIMER_TEST,
                                small=True,
                        ),
                        video_preview(
                                title="5/05/2021 - SN15 Primer aterrizaje",
                                url_video=const.SN15_TEST,
                                small=True,
                        ),
                        video_preview(
                                title="30/03/2021 - SN11",
                                url_video=const.SN11_TEST,
                                small=True,
                        ),
                ),
                spacing="3",
                align = "center",
                max_width = styles.CONTENT_WIDTH,
        )   