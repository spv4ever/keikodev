import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.componentes.title import title as title
from keikodev.componentes.steps import steps as steps
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.imagenes import unaimagen, dosimagenes, tresimagenes as unaimagen,dosimagenes, tresimagenes
from keikodev.routes import Route
from keikodev.componentes.linkbutton import linkbutton



def kodi_addons_luar()->rx.Component:
    return rx.vstack(
                rx.box(
                    title(
                        rx.center('Cómo instalar el complemento Luar en Kodi: La guía completa de instalación y uso en 2024'),
                    ),
                    margin_bottom = Size.BIG.value,
                    ),
            steps(
                rx.span(
                    rx.span(
                    "Luar",font_family=Fuentes.TITLE.value
                    ),
                    rx.span(""" es un complemento no oficial para """),
                    rx.span("Kodi", font_family=Fuentes.TITLE.value), 
                    rx.span(""" que tiene como objetivo principal simplificar la instalación de otros """), 
                    rx.span("complementos y repositorios.",font_family=Fuentes.TITLE.value),
                    rx.span(""" Esta herramienta se encarga de instalar automáticamente los repositorios y 
                    dependencias necesarios para que otros complementos funcionen correctamente en Kodi. 
                    En pocas palabras, Luar evita que tengas que hacer todo el trabajo manualmente y 
                    te ahorra tiempo y esfuerzo.""")
                    ),
                ),

            steps("""Una de las ventajas de Luar es que es compatible con todas las plataformas y funciona con las últimas 
                versiones de Kodi. Además, este complemento también muestra información de compatibilidad de los plugins, 
                lo que te ayuda a evitar errores y problemas de funcionamiento. En comparación con otras alternativas en el mercado, 
                como Kelebek, Luar destaca por su facilidad de uso y su capacidad para simplificar la instalación de complementos en Kodi."""),
            title("Cómo instalar Luar addon en Kodi 2024"),
            steps(rx.span("""Antes de comenzar con la instalación de Luar, es importante tener en cuenta que este complemento no es oficial, 
                por lo que deberás habilitar los permisos necesarios en Kodi para poder instalarlo. Si ya has habilitado los permisos, 
                puedes saltar directamente a los pasos de instalación. """,
                rx.link(
                    rx.span('Manual de instalación de Kodi',font_family= Fuentes.TITLE.value,),
                    href=Route.KODI_PC.value,
                    ),
                    ),
                    ),

            steps("""Una vez que hayas habilitado los permisos necesarios, puedes proceder a la instalación del complemento Luar:"""),
            rx.box(
                width="100%",
                height = "20px",
            ),
            rx.card(
                rx.card_body(
                    rx.list(
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%"
                                    ),
                                rx.text('Abre Kodi y dirígete a los "Ajustes" (la rueda dentada en la parte superior izquierda).'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%"
                                    ),
                                rx.text('Dentro de los ajustes, abre el "Administrador de archivos".'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%"
                                    ),
                                rx.span('Se te pedirá una URL y un nombre. En el campo de la URL, ingresa ',
                                        rx.span('https://luarsource.github.io/Fuente/', font_family= Fuentes.TITLE.value,),
                                        rx.span(' y en el campo del nombre, ingresa "luar". Pulsa "OK" y regresa a la pantalla principal.'
                                        ),
                                ),
                            ),
                        ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Ve al apartado "Add-ons" y luego al "Explorador de add-ons" (la cajita abierta en la parte superior izquierda).'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Haz clic en la opción "Instalación desde archivo zip".'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Se abrirá una ventana. Debes seleccionar "luar" y luego "script.luar-x.x.x.zip" (donde "x.x.x" representa la versión actual de Luar).'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Cuando la instalación termine, recibirás una notificación y eso es todo. ¡Luar está instalado en Kodi!.'),
                                ),
                            ),
                        
                        color = TextColor.PRIMARY.value,
                        font_size = Size.DEFAULT.value,
                        spacing="1em",
                        ),
                    ),
                bg=Color.CONTENT.value,
                font_family = Fuentes.DEFAULT.value,
                border_width = "2px",
                border_color = Color.PRIMARY.value,
                border_radius = "10px",
                width = "100%",
                padding_y = Size.MEDIUM.value,
                margin = Size.BIG.value,
                box_shadow= f"5px 5px 20px {Color.PRIMARY.value}"
                ),
            rx.box(
                width="100%",
                height = "20px",
            ),
            steps("""Ahora puedes acceder al complemento Luar para ver todo su contenido. Se encuentra en el submenú "Add-ons" de programas, dentro de "Add-ons"."""),
            title("¿Cómo usar el complemento Luar?"),
            steps("""Una vez que hayas instalado el complemento Luar en Kodi, es importante conocer cómo utilizarlo para aprovechar 
                todas sus funcionalidades. Luar es un repositorio repleto de complementos útiles, scripts y herramientas organizadas 
                de manera adecuada. Aquí te explico cómo acceder y utilizar Luar:"""),
            rx.box(
                width="100%",
                height = "20px",
            ),
            rx.card(
                rx.card_body(
                    rx.list(
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Accede al complemento Luar desde el apartado "Add-ons de programas" que se encuentra en el menú "Add-ons" de Kodi.'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Dentro de Luar, encontrarás una amplia variedad de complementos, scripts y repositorios organizados por categoría.'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Cada complemento aparecerá en diferentes colores para indicar su estado:'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.box(
                                    width = "10%"
                                ),

                                rx.vstack(
                                    rx.text('* Blanco para los complementos que no tienes instalados.'),
                                    rx.text('* Amarillo para los que tienes instalados pero requieren una actualización.'),
                                    rx.text('* Verde para los que están instalados y actualizados.'),
                                    align_items="start",
                                    max_width = "90%"
                                    ),
                                ),
                        ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Para instalar nuevos complementos, simplemente haz clic en ellos y presiona el botón de "Instalar". Luar se encargará de instalar todas las dependencias necesarias para que el complemento funcione correctamente.'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Una vez que todas las dependencias estén instaladas, podrás utilizar los nuevos complementos desde el menú principal de Kodi.'),
                                ),
                            ),
                        
                        color = TextColor.PRIMARY.value,
                        font_size = Size.DEFAULT.value,
                        spacing="1em",
                        ),
                    ),
                bg=Color.CONTENT.value,
                font_family = Fuentes.DEFAULT.value,
                border_width = "2px",
                border_color = Color.PRIMARY.value,
                border_radius = "10px",
                width = "100%",
                padding_y = Size.MEDIUM.value,
                margin = Size.BIG.value,
                box_shadow= f"5px 5px 20px {Color.PRIMARY.value}"
                ),
            rx.box(
                width="100%",
                height = "20px",
            ),
            title("Instalación alternativa de Luar (desde archivo)"),
            steps("""Si por alguna razón la instalación de Luar a través del método anterior no funciona, puedes probar una alternativa: 
                la instalación desde un archivo."""),
            steps("""Aquí te explico cómo hacerlo:"""),
            rx.box(
                width="100%",
                height = "20px",
            ),
            rx.card(
                rx.card_body(
                    rx.list(
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text(
                                    rx.span(
                                    'Descarga el archivo de instalación de Luar a tu dispositivo. Puedes obtenerlo desde este enlace: ',
                                    rx.link(rx.span('https://luarsource.github.io/Fuente/'),
                                            href='https://luarsource.github.io/Fuente/', 
                                            is_external=True),
                                ),),
                            ),
                        ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('También puedes transferir el archivo a un pendrive y luego instalarlo en Kodi mediante USB.'),
                                ),
                            ),
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Ahora, en Kodi, dirígete al apartado "Add-ons" y luego a "Instalación desde archivo zip".'),
                                ),
                            ),
                        
                        rx.list_item(
                            rx.hstack(
                                rx.icon(
                                    tag="arrow_right", 
                                    color = TextColor.SECONDARY.value,
                                    width = "5%",
                                    ),
                                rx.text('Selecciona el archivo de instalación de Luar que descargaste previamente y haz clic para instalarlo.'),
                                ),
                            ),

                        
                        color = TextColor.PRIMARY.value,
                        font_size = Size.DEFAULT.value,
                        spacing="1em",
                        ),
                    ),
                bg=Color.CONTENT.value,
                font_family = Fuentes.DEFAULT.value,
                border_width = "2px",
                border_color = Color.PRIMARY.value,
                border_radius = "10px",
                width = "100%",
                padding_y = Size.MEDIUM.value,
                margin = Size.BIG.value,
                box_shadow= f"5px 5px 20px {Color.PRIMARY.value}"
                ),
            rx.box(
                width="100%",
                height = "30px",
            ),

            steps("""Es posible que debas reiniciar Kodi para que los cambios surtan efecto y puedas visualizar 
                el complemento Luar correctamente."""),
            title("Conclusión"),
            steps("""Luar es un complemento imprescindible para Kodi, ya que simplifica enormemente la instalación de otros 
                complementos y repositorios. Su compatibilidad con todas las plataformas y su capacidad para mostrar información 
                de compatibilidad de los plugins lo convierten en una herramienta única en su clase."""),
            steps("""Si bien Luar puede ser una excelente opción para facilitar la instalación de complementos en Kodi, 
                no debes limitarte solo a este complemento. Algunos contenidos pueden variar de un addon a otro, por lo que es 
                recomendable tener instalados varios complementos para cubrir todas tus necesidades."""),
            steps("""Espero que esta guía te haya sido útil y que puedas aprovechar al máximo el complemento Luar en Kodi. 
                ¡Disfruta de tu experiencia multimedia!"""),
            title("Otros links Relacionados"),
            rx.hstack(
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
                padding = Size.BIG.value,
                
            ),
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )