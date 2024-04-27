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



def kodi_addons_tvchopo()->rx.Component:
    return rx.chakra.vstack(
                rx.chakra.box(
                    title(
                        rx.chakra.center('Cómo instalar el complemento Tv Chopo en Kodi'),
                    ),
                    margin_bottom = Size.BIG.value,
                    ),
            steps(rxch.span('Este addon es uno de los más completos que conozco ',
                rxch.span('Tv Chopo',font_family=Fuentes.TITLE.value),
                rxch.span(' tiene su propio repositorio donde podrás escoger que tipo de addon quieres acabar instalando. Si no sabes como instalar repositorios puedes revisar '),
                rx.chakra.link(rxch.span('Instalación de addons',font_family=Fuentes.TITLE.value),href=Route.KODI_ADDONS.value),
                rxch.span(' para ver los puntos importantes.'),
                ),
            ),
            steps(rxch.span('Para instalar este addon deberemos primero añadir la fuente, para ello nos vamos a  ',
                    rxch.span('Sistema, Explorador de archivos y añadir fuente ',font_family=Fuentes.TITLE.value),
                    rxch.span(' y añadimos la fuente: '),
                    rxch.span('https://fuente-tvchopo.github.io/',font_family=Fuentes.TITLE.value),
                    rxch.span(' seleccionando el repositorio, para después poder elegir el addon que necesitemos.'),),),

            tresimagenes(f'{KODI_IMAGES}kodi_tutorial53.png', f'{KODI_IMAGES}kodi_tutorial54.png',f'{KODI_IMAGES}kodi_tutorial55.png'),

            steps(rxch.span('Ahora pasaremos a addons, instalación desde respositorio donde tendremos todo un listado donde escoger.'),),
            
            tresimagenes(f'{KODI_IMAGES}kodi_tutorial56.png', f'{KODI_IMAGES}kodi_tutorial57.png', f'{KODI_IMAGES}kodi_tutorial58.png'),

            steps(rxch.span('Dejamos que acabe el proceso de instalación y ya tendremos nuestro ',
                rxch.span('Tv Chopo', font_family=Fuentes.TITLE.value),
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