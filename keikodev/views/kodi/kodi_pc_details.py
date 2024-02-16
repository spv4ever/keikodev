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

def kodi_pc_details()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.box(
            title(
                rx.chakra.center('Tutorial instalación Kodi para PC y Android TV'),
                ),
            margin_bottom = Size.BIG.value,
            ),
            steps(
                rx.chakra.span("En primer lugar podemos descargar el software desde el site oficial ",
                        rx.chakra.link(
                            rx.chakra.span("kodi.tv", 
                                    font_family=Fuentes.TITLE.value,
                                    color=Color.PRIMARY.value
                                    ),
                                href=const.KODI_URL,
                                is_external=True),
                            rx.chakra.span(" en el apartado de "),
                            rx.chakra.link(
                                rx.chakra.span("descargas ",
                                        font_family=Fuentes.TITLE.value,
                                        color=Color.PRIMARY.value
                                        ),
                                href=const.KODI_DESCARGAS_URL,
                                is_external=True),
                            rx.chakra.span(" están todas las versiones para "),
                            rx.chakra.link(
                                rx.chakra.span("Windows",
                                        font_family=Fuentes.TITLE.value,
                                        color=Color.PRIMARY.value),
                                href=const.KODI_WINDOWS_URL,
                                is_external=True
                            ),rx.chakra.span(", Android, etc. Aunque las versiones de Android se pueden descargar directamente desde Google Play"),),),
            rx.chakra.responsive_grid(
                    rx.chakra.link(
                        rx.chakra.image(
                            src="/img/kodi_images/kodi_web1.png",
                            width="300px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_x = Size.DEFAULT.value,
                            ),
                        href=const.KODI_URL,
                        is_external=True,
                        ),
                    rx.chakra.link(
                        rx.chakra.image(src="/img/kodi_images/kodi_web2.png",
                            width="300px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_x = Size.DEFAULT.value,
                            ),
                        href=const.KODI_DESCARGAS_URL,
                        is_external=True,
                    ),
                    rx.chakra.link(
                        rx.chakra.image(src="/img/kodi_images/kodi_web3.png",
                            width="300px",
                            heigth="auto",
                            border="2px solid",
                            border_radius="10px",
                            border_color = Color.IMAGE_BOX.value,
                            margin_x = Size.DEFAULT.value,
                            ),
                        href=const.KODI_WINDOWS_URL,
                        is_external=True,
                        ),
                columns = [1,2,3],
                padding = Size.SMALL_LARGE.value,
                margin = Size.ZERO.value
            ),
            steps(
                rx.chakra.span("Si la descarga se ha hecho por defecto, tendremos el fichero de instalación en la carpeta ",
                rx.chakra.span("descargas",
                        font_family=Fuentes.TITLE.value,),
                rx.chakra.span(" de nuestro ordenador. Solo tendremos que ejecutarlo, dejando todas las opciones por defecto y esperamos a que acabe el proceso de instalación, donde nos preguntará si quieres ejecutar Kodi."),
                ),),
            
            steps("""Al arrancar Kodi por primera vez, deberemos hacer unos ajustes antes de poder empezar a añadir los addons. 
                    Lo primero que suelo hacer, por comodidad es cambiar el idioma."""),
        
            steps(
                rx.chakra.span('Hacemos clic en el icono en forma de engranaje ',
                rx.chakra.span("Menú System", 
                        font_family=Fuentes.TITLE.value,
                        ),
                    ),
                ),
            
            unaimagen("/img/kodi_images/kodi_tutorial4.png","850px"),
            steps(rx.chakra.span('En la opción ',
                    rx.chakra.span('Interface',
                            font_family=Fuentes.TITLE.value,
                        ), 
                    rx.chakra.span(' tendremos todas las opciones de configuración de Kodi. Para cambiar el idioma seleccionamos la opción '),
                            rx.chakra.span("Regional",font_family=Fuentes.TITLE.value,),
                            rx.chakra.span(" y "),
                            rx.chakra.span("Languaje",font_family=Fuentes.TITLE.value,),
                            rx.chakra.span(". Kodi nos monstrará un desplegable donde podremos cambiar el idioma. (Aparece como Spanish)")

                    ),
            ),

            dosimagenes("/img/kodi_images/kodi_tutorial5.png","/img/kodi_images/kodi_tutorial6.png"),

            steps(rx.chakra.span("Lo siguiente que deberemos hacer es autorizar el uso de ",
                          rx.chakra.span("Origens desconocidos", font_family=Fuentes.TITLE.value,),
                          rx.chakra.span(" en nuestro KODI, podemos volver a la ventana de sistema haciendo clic en el ", 
                    rx.chakra.span("botón derecho", font_family=Fuentes.TITLE.value,),rx.chakra.span(" del ratón.")),
                ),
            ),
            

            steps(rx.chakra.span("A continuación seleccionaremos la opción ",
                    rx.chakra.span("Sistema",font_family=Fuentes.TITLE.value), 
                    rx.chakra.span(". Dentro de sistema escogemos la opción del menú de la izquierda "), 
                    rx.chakra.span("Add-ons", font_family=Fuentes.TITLE.value),
                    rx.chakra.span(" y activaremos la opción "),
                    rx.chakra.span("Origenes desconocidos", font_family=Fuentes.TITLE.value),
                    rx.chakra.span(" lo que permitirá cargar add-ons desarrollados fuera de Kodi.")
                    ),
                ),
            dosimagenes('/img/kodi_images/kodi_tutorial07.png','/img/kodi_images/kodi_tutorial08.png'),
            unaimagen('/img/kodi_images/kodi_tutorial10.png',"450px"),
            steps(rx.chakra.span("El siguiente paso recomendable será instalar el addon     ",
                  rx.chakra.span("Luar",font_family=Fuentes.TITLE.value),
                  rx.chakra.span(""" que será nuestro primer repositorio donde tendremos las primeras utilidades 
                          para nuestro Kodi, entra en la sección de instalación de luar para continuar.""")
                ),
            ),
        rx.chakra.hstack(
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