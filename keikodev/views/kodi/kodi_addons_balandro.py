import reflex as rx
from reflex import chakra as rxch
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.componentes.title import title as title
from keikodev.componentes.steps import steps as steps
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.imagenes import unaimagen, dosimagenes, tresimagenes
from keikodev.routes import Route
from keikodev.componentes.linkbutton import linkbutton

KODI_IMAGES = "/img/kodi_images/"



def kodi_addons_balandro()->rx.Component:
    return rx.chakra.vstack(
                rx.chakra.box(
                    title(
                        rx.chakra.center('Cómo instalar el complemento Balandro en Kodi'),
                    ),
                    margin_bottom = Size.BIG.value,
                    ),
            steps(rxch.span('En esta ocasión la instalación de Balandro es muy parecida a otras instalaciones donde primero añadimos el repositorio y después instalamos el addon de video ',
                rxch.span('Balandro',font_family=Fuentes.TITLE.value),
                rxch.span(' tiene su propio repositorio. Si no sabes como instalar repositorios puedes revisar '),
                rx.chakra.link(rxch.span('Instalación de addons',font_family=Fuentes.TITLE.value),href=Route.KODI_ADDONS.value),
                rxch.span(' para ver los puntos importantes.'),
                ),
            ),


            steps(rxch.span('Para instalar este addon deberemos primero añadir la fuente, para ello nos vamos a  ',
                    rxch.span('Sistema, Explorador de archivos y añadir fuente ',font_family=Fuentes.TITLE.value),
                    rxch.span(' y añadimos la fuente: '),
                    rxch.span('https://repobal.github.io/base/',font_family=Fuentes.TITLE.value),
                    rxch.span(' seleccionando el repositorio, para después poder elegir el addon de video.'),),),

            tresimagenes(f'{KODI_IMAGES}kodi_tutorial12.png', f'{KODI_IMAGES}kodi_tutorial13.png',f'{KODI_IMAGES}kodi_tutorial14.png'),

            steps("De esta forma nos quedará la fuente instalada, para poder instalar el repositorio."),

            dosimagenes(f'{KODI_IMAGES}kodi_tutorial59.png', f'{KODI_IMAGES}kodi_tutorial60.png'),

            steps(rxch.span('Ahora pasaremos al menú de addons, instalación desde archivo zip y elegimos la fuente instalada anteriormente'),),
            
            tresimagenes(f'{KODI_IMAGES}kodi_tutorial19.png', f'{KODI_IMAGES}kodi_tutorial61.png', f'{KODI_IMAGES}kodi_tutorial62.png'),

            steps(rxch.span("""El siguiente paso será instalar el addon de video, por lo que volvermos al menú de addons, 
                            pero esta vez seleccionaremos instalación desde repositorio y escogeremos el repositorio de Balandro."""),),

            tresimagenes(f'{KODI_IMAGES}kodi_tutorial63.png', f'{KODI_IMAGES}kodi_tutorial64.png', f'{KODI_IMAGES}kodi_tutorial65.png'),

            dosimagenes(f'{KODI_IMAGES}kodi_tutorial66.png', f'{KODI_IMAGES}kodi_tutorial67.png'),
                        

            steps(rxch.span('Dejamos que acabe el proceso de instalación y ya tendremos nuestro ',
                rxch.span('Balandro', font_family=Fuentes.TITLE.value),
                rxch.span(' instalado.'),
                ),
            ),

            steps(rxch.span('Si tienes algún problema con la instalación de addons, puedes revisar el ',
                    rx.chakra.link(rxch.span('Tutorial de instalación de addon',font_family=Fuentes.TITLE.value),
                            href=Route.KODI_ADDONS.value),
                ),
            ),

            title("Otros links Relacionados"),
            rx.chakra.hstack(
            rx.chakra.responsive_grid(
                
                linkbutton("Instalación en Windows y Android TV",
                    "",
                    "/img/windows.svg",
                    Route.KODI_PC.value,
                    is_external=False
                    ),
                linkbutton("Instalación de Addons",
                    "",
                    "/img/kodi2.png",
                    Route.KODI_ADDONS.value,
                    is_external=False
                    ),
                linkbutton("Menú Principal Kodi",
                    "",
                    "/img/kodi2.png",
                    Route.KODI.value,
                    is_external=False
                ),
                align="start",
            spacing=Size.DEFAULT.value,
            columns=[1,2,3] 
            ),
            
            ),
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )