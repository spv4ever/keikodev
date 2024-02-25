import reflex as rx
import datetime
import keikodev.styles.styles as Styles
from keikodev.routes import Route
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.ant_components import Float_Button 
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.temas_legales import privacy_policy_link, privacy_policy_script, cookie_policy_link, iubenda_script, iubenda_external_scripts, iubenda_script_cookies


def footer()-> rx.Component:
    return rx.chakra.box(
        rx.chakra.vstack(

        rx.chakra.avatar(
            name="Albert García",
            size="xl", 
            src = "/keiko_manga_sd.png",
            padding="2px",
            border="4px",
            border_color = Color.PRIMARY.value,
            ),
        rx.chakra.link(f'© 1991-{datetime.date.today().year} Blog personal de Albert García.',
                href="https://github.com/spv4ever",
                is_external=True,
                font_size = Size.MEDIUM.value),
                rx.chakra.hstack(
                    rx.chakra.text(
                        "Aprendiendo desarrollo web.",
                        font_size = Size.MEDIUM.value,
                        width = "100%",
                        class_name="marquee-content",
                        
                        ),
                    margin_top=Size.ZERO.value,
                    class_name="marquee-container",
                    width="300px",
                    ),

                    Float_Button(
                         icon = rx.chakra.Image (src="/img/bmc-logo.svg",alt="Café"),
                         href = const.DONACIONES_URL,
                         target='_blank',
                        #disabled = False,
                         ),
                rx.chakra.vstack(
                    privacy_policy_link(),
                    privacy_policy_script(),
                    cookie_policy_link(),
                    iubenda_script(),
                    iubenda_external_scripts(),
                    iubenda_script_cookies(),

                ),
                #margin_bottom=Size.BIG.value,
                padding_bottom = Size.MEDIUM_BIG.value,
                color = TextColor.FOOTER.value,
                font_family = Fuentes.DEFAULT.value,
    ),
    width = "100%",
    bg = Color.IMAGE_BOX.value,
    #height = "400px"

    )