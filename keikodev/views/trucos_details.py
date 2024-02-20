import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.componentes.title import title as title
from keikodev.componentes.steps import steps as steps
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.imagenes import dosimagenes as dosimagenes
from keikodev.componentes.imagenes import unaimagen as unaimagen
from keikodev.componentes.noticias import noticias as noticias
from keikodev.componentes.card import card as card

def trucos_details()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.box(
            title(
                rx.chakra.center('Página para difundir trucos que vaya recopilando de la web'),
                ),
            width = "100%",
            margin_bottom = Size.BIG.value,
        ),

        card(url="https://www.hdd-tool.com/index.html", title="La mejor herramienta de clonación de discos duros... Gratis", 
                lista_imagenes=[('/img/trucos/trucos-2-1.jpg'),('/img/trucos/trucos-2-2.jpg')],
                body="""Hoy traigo una herramienta para clonar discos duros que me ha solucionado un problema. Se llama Niubi y
                 se puede descargar desde https://www.hdd-tool.com/index.html. Tiene una versión casera totalmente gratuita y funcional.
                  Con la opción de Asistente para migrar SO podrás mover tu windows al disco duro que quieras y evitarte tener que instalar todo desde 0. 
                  Impresionante... """,
                color=TextColor.PRIMARY, 
                badge_text="Herramientas PC", 
                featured=False, external=True
                ),

        card(url="https://12ft.io/", title="Navega sin publicidad y sin bloqueos de pago", 
                lista_imagenes=[('/img/trucos/truco1-1.png'),('/img/trucos/truco1-3.png'),('/img/trucos/truco1-2.png')],
                body="""Hoy os traigo una web: http://12ft.io que os servirá para entrar en webs que tienen banners
                de obligación de pago o publicidad hasta el infinito sin problemas. Entrad en la url o haciendo clic en 
                la noticia, pega la url de la web que quieres visitar en 'Clean Webpage' e intro... es maravilloso""",
                color=TextColor.PRIMARY, 
                badge_text="Navegación WEB", 
                featured=False, external=True
                ),

            


        spacing=Size.DEFAULT.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",
        
    )