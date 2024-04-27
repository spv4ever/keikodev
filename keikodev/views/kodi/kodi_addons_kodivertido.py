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



def kodi_addons_kodivertido()->rx.Component:
    return rx.chakra.vstack(
                rx.chakra.box(
                    title(
                        rx.chakra.center('Cómo instalar el complemento Kodivertido en Kodi'),
                    ),
                    margin_bottom = Size.BIG.value,
                    ),
            steps(rxch.span('El repositorio completo de ',
                rxch.span('kodivertido',font_family=Fuentes.TITLE.value),
                rxch.span(' lo podrás encontrar en el gestor Luar, si no lo tienes, pásate por la sección '),
                rx.chakra.link(rxch.span('Instalación de Luar',font_family=Fuentes.TITLE.value),href=Route.KODI_LUAR.value),
                rxch.span(' para instalarlo.'),
                ),
            ),
            steps(rxch.span('Desde el menú principal de nuestro Kodi, iremos a Addons > Addons de programas y abriremos Luar ',
                    rxch.span('donde escogeremos '),
                    rxch.span('Por categorias',font_family=Fuentes.TITLE.value),
                    rxch.span(' y seleccionaremos '),
                    rxch.span('Recomendadas',font_family=Fuentes.TITLE.value),),),

            tresimagenes(f'{KODI_IMAGES}kodi_tutorial43.png', f'{KODI_IMAGES}kodi_tutorial44.png',f'{KODI_IMAGES}kodi_tutorial45.png'),

            steps(rxch.span('Seleccionamos de la lista Kodivertido, nos aparecerá la pantalla de confirmación del addon para instalar y aceptamos la opción de instalar'),),
            
            dosimagenes(f'{KODI_IMAGES}kodi_tutorial46.png', f'{KODI_IMAGES}kodi_tutorial47.png'),

            steps(rxch.span('Dejamos que acabe el proceso de instalación y ya tendremos nuestro ',
                rxch.span('Kodivertido', font_family=Fuentes.TITLE.value),
                rxch.span(' instalado.'),
                ),
            ),

            dosimagenes(f'{KODI_IMAGES}kodi_tutorial49.png',f'{KODI_IMAGES}kodi_tutorial48.png'),

            steps(rxch.span('El propio addon contiene más librerias y todo lo necearios para funcionar'),),

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