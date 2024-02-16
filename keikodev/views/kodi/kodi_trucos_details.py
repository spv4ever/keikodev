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
from keikodev.routes import Route
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.card import card as card

def kodi_trucos_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Trucos para Kodi'),
                ),
            margin_bottom = Size.BIG.value,
            ),
        
            card(url="", title="Problemas con la sincronización del sonido", 
                lista_imagenes=[('/img/trucos/kodi_truco1-1.png'),('/img/trucos/kodi_truco1-2.png'),('/img/trucos/kodi_truco1-3.png')],
                body="""Para solucionar el problema de sincronización en nuestro kodi, basta con ir a ajustes, 
                sistema. En la opción Pantalla cambiamos el 'nº de buferes utilizados por el controlador gráfico' de 3 a 2.
                Una vez cambiada la opción basta con volver al menú principal. Si no aparece la opción dentro de pantalla, recordad
                cambiar en la parte inferior izquierda el menú a 'Avanzado'""",
                color=TextColor.PRIMARY, 
                badge_text="Sonido", 
                featured=False,
                ),
            
        rx.hstack(
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
                padding = Size.BIG.value,
                
            ),
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )