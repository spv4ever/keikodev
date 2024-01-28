import reflex as rx
import datetime
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
import keikodev.styles.styles as styles

from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.ant_components import Float_Button 
import keikodev.utils as utils
import keikodev.views.constants as const
from keikodev.componentes.steps import steps as steps
from keikodev.styles.fonts import Fuentes as Fuentes

def footer_resp()-> rx.Component:
    return rx.vstack(
                rx.avatar(name="Albert García",
                        size="xl", 
                        src = "/keiko_manga.png",
                        padding="2px",
                        border="4px",
                        border_color = Color.PRIMARY.value,
                        ),
                rx.link(f'© 1991-{datetime.date.today().year} Blog personal de Albert García.',
                        href="https://github.com/spv4ever",
                        is_external=True,
                        font_size = Size.MEDIUM.value),
                    Float_Button(
                         icon = rx.Image (src="/img/bmc-logo.svg"),
                         href = const.DONACIONES_URL,
                         target='_blank',
                        #disabled = False,
                         ),
                                 rx.box(
                        rx.vstack(
                        
                            rx.text("Renuncia de responsabilidad: ",font_family=Fuentes.TITLE.value, ),
                            rx.text("""Keikodev.es no se hace responsable de cualquier 
                                    daño o pérdida de información. Nuestra intención solo es informar, 
                                    utilizando contenido de Internet. Keikodev.es y todo el 
                                    material aquí mencionado no es oficial."""),
                            rx.text("""No estamos vinculados con ningún vendedor de servicio IPTV, 
                                    el contenido mencionado en Keikodev.es es gratuito a menos 
                                    que se indique lo contrario"""),
                            rx.text("""Cualquier complemento que elija agregar es bajo su 
                                    propia responsabilidad. La información que proporcionamos en 
                                    los complementos está disponible gratuitamente en Internet y 
                                    de los propios desarrolladores de complementos. No ofrecemos 
                                    soporte para ninguno de los complementos ya que no nos pertenecen."""),
                        
                        spacing=Size.ZERO.value,
                        font_size = Size.SMALL.value,
                        text_align= "justify",
                        text_justify= "inter-word",
                        align_items="start",
                        width = "100%",
                        margin_bottom = Size.LARGE.value,
                        padding = Size.MEDIUM.value,
                        ),
                ),
                margin_bottom=Size.BIG.value,
                padding_bottom = Size.BIG.value,
                color = TextColor.FOOTER.value,
                font_family = Fuentes.DEFAULT.value,
        
    )