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
    return rx.vstack(
        rx.box(
            title(
                rx.center('Tutorial instalación Kodi para PC y Android TV'),
                ),
            margin_bottom = Size.BIG.value,
            ),
            steps(
                rx.span("En primer lugar podemos descargar el software desde el site oficial ",
                        rx.link(
                            rx.span("kodi.tv", 
                                    font_family=Fuentes.TITLE.value,
                                    color=Color.PRIMARY.value
                                    ),
                                href=const.KODI_URL,
                                is_external=True),
                            rx.span(" en el apartado de "),
                            rx.link(
                                rx.span("descargas ",
                                        font_family=Fuentes.TITLE.value,
                                        color=Color.PRIMARY.value
                                        ),
                                href=const.KODI_DESCARGAS_URL,
                                is_external=True),
                            rx.span(" están todas las versiones para "),
                            rx.link(
                                rx.span("Windows",
                                        font_family=Fuentes.TITLE.value,
                                        color=Color.PRIMARY.value),
                                href=const.KODI_WINDOWS_URL,
                                is_external=True
                            ),rx.span(", Android, etc. Aunque las versiones de Android se pueden descargar directamente desde Google Play"),),),
            rx.responsive_grid(
                    rx.link(
                        rx.image(
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
                    rx.link(
                        rx.image(src="/img/kodi_images/kodi_web2.png",
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
                    rx.link(
                        rx.image(src="/img/kodi_images/kodi_web3.png",
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
                rx.span("Si la descarga se ha hecho por defecto, tendremos el fichero de instalación en la carpeta ",
                rx.span("descargas",
                        font_family=Fuentes.TITLE.value,),
                rx.span(" de nuestro ordenador. Solo tendremos que ejecutarlo, dejando todas las opciones por defecto y esperamos a que acabe el proceso de instalación, donde nos preguntará si quieres ejecutar Kodi."),
                ),),
            
            steps("""Al arrancar Kodi por primera vez, deberemos hacer unos ajustes antes de poder empezar a añadir los addons. 
                    Lo primero que suelo hacer, por comodidad es cambiar el idioma."""),
        
            steps(
                rx.span('Hacemos clic en el icono en forma de engranaje ',
                rx.span("Menú System", 
                        font_family=Fuentes.TITLE.value,
                        ),
                    ),
                ),
            
            unaimagen("/img/kodi_images/kodi_tutorial4.png","850px"),
            steps(rx.span('En la opción ',
                    rx.span('Interface',
                            font_family=Fuentes.TITLE.value,
                        ), 
                    rx.span(' tendremos todas las opciones de configuración de Kodi. Para cambiar el idioma seleccionamos la opción '),
                            rx.span("Regional",font_family=Fuentes.TITLE.value,),
                            rx.span(" y "),
                            rx.span("Languaje",font_family=Fuentes.TITLE.value,),
                            rx.span(". Kodi nos monstrará un desplegable donde podremos cambiar el idioma. (Aparece como Spanish)")

                    ),
            ),

            dosimagenes("/img/kodi_images/kodi_tutorial5.png","/img/kodi_images/kodi_tutorial6.png"),

            steps(rx.span("Lo siguiente que deberemos hacer es autorizar el uso de ",
                          rx.span("Origens desconocidos", font_family=Fuentes.TITLE.value,),
                          rx.span(" en nuestro KODI, podemos volver a la ventana de sistema haciendo clic en el ", 
                    rx.span("botón derecho", font_family=Fuentes.TITLE.value,),rx.span(" del ratón.")),
                ),
            ),
            

            steps(rx.span("A continuación seleccionaremos la opción ",
                    rx.span("Sistema",font_family=Fuentes.TITLE.value), 
                    rx.span(". Dentro de sistema escogemos la opción del menú de la izquierda "), 
                    rx.span("Add-ons", font_family=Fuentes.TITLE.value),
                    rx.span(" y activaremos la opción "),
                    rx.span("Origenes desconocidos", font_family=Fuentes.TITLE.value),
                    rx.span(" lo que permitirá cargar add-ons desarrollados fuera de Kodi.")
                    ),
                ),
            dosimagenes('/img/kodi_images/kodi_tutorial07.png','/img/kodi_images/kodi_tutorial08.png'),
            unaimagen('/img/kodi_images/kodi_tutorial10.png',"450px"),
            steps(rx.span("El siguiente paso recomendable será instalar el addon     ",
                  rx.span("Luar",font_family=Fuentes.TITLE.value),
                  rx.span(""" que será nuestro primer repositorio donde tendremos las primeras utilidades 
                          para nuestro Kodi, entra en la sección de instalación de luar para continuar.""")
                ),
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