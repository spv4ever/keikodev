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



def kodi_addons_details()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.box(
            title(
                rx.chakra.center('Tutorial instalación de complementos en Kodi'),
                ),
                
            margin_bottom = Size.BIG.value,
            ),
        
        
        steps(rx.chakra.span(
                "La instalación de programas externos o complementos, también llamados ", 
                    rx.chakra.span("add-ons",font_family=Fuentes.TITLE.value),
                    rx.chakra.span("en Kodi, se puede realizar de varias formas: Desde un "),
                    rx.chakra.span("repositorio",font_family=Fuentes.TITLE.value),
                    rx.chakra.span(" ya instalado o desde un "),
                    rx.chakra.span("archivo",font_family=Fuentes.TITLE.value),
                    rx.chakra.span(" comprimido ZIP."),
            ),
        ),
        unaimagen(f"{const.KODI_IMAGES}kodi_tutorial12.png","900px"),        
        
        steps(rx.chakra.span("Los repositorios son complementos a modo de ",
                rx.chakra.span("bibliotecas de programas ",font_family=Fuentes.TITLE.value),
                rx.chakra.span("que nos permiten instalar add-ons concretos listos para ser usados."),
            ),
        ),
                
        steps("""Existen add-ons para cambiar Kodi a modo visual, añadir características para visualizar videos, bibliotecas de imagenes, 
                sonido y todo lo que puede necesitar nuestro centro multimedia, incluyendo programas de mantenimiento que nos ayudarán con la configuración"""),
        
        steps("""Kodi instala los complementos desde un archivo .ZIP. Existen dos formas de añadir los archivos La primera forma y más cómoda 
                será realizar la instalación desde un fichero ZIP que se encuentre en internet, por lo que necesitaremos la dirección donde se encuentre 
                la carpeta pública con el archivo que necesitamos."""),

        steps("""Además, los creadores de este tipo de complementos, van a indicar en los procesos de instalación, las dependencias o requisitos que sean necesarios
            para el correcto, por lo que la instalación suele agregar todas las dependencias necesarias."""),

        steps("""Es muy importante que dejemos que Kodi complete los procesos de instalación y que no se 
            haga nada hasta que veamos que la instalación ha sido un exitosa"""),

        steps(rx.chakra.span("Los complementos que se instalen, se podrán encontrar en la opción ",
                rx.chakra.span("Add-ons",font_family=Fuentes.TITLE.value),
                rx.chakra.span(" del menú principal."),
            ),
        ),

        steps("""Desde el menú principal deberemos volver a ir al engranaje, para entrar en el menú de sistema y seleccionar el menú explorador de archivos."""),
        dosimagenes("/img/kodi_images/kodi_tutorial4.png","/img/kodi_images/kodi_tutorial13.png"),
        steps("""En la opción Explorador de archivos podremos asociar carpetas de internet para poder instalar los add-ons 
                desde estas carpetas. Esto es muy útil para no tener que estar descargando ficheros de forma independiente y 
                sobretodo para Android TV no tener que estar guardando los ficheros en un pendrive para conectarlo de forma externa 
                al dispositivo."""),
        unaimagen(f'{const.KODI_IMAGES}kodi_tutorial14.png',"900px"),
        steps("""También se pueden usar ubicaciones de la red local, de forma que podríamos descargar ficheros en un ordenador 
            y una vez compartidos, podrían ser instalados desde cualquier carpeta. No vamos a entrar en estos detalles por ahora,
            si necesitáis más información, me lo solicitais por email."""),

        steps("""Como ejemplo vamos a instalar un add-on que permite cargar en Kodi la mayoría de plataformas de video actuales,
              HBO, Disney+, etc en nuestro Kodi. Para que funcione deberás tener una cuenta activa en la plataforma que desees. También 
              hay plataformas gratuitas como Pluto.TV."""),
        steps("""Hacemos doble clic en Añadir fuente y en la ventana que nos aparece volvemos a hacer clic. Nos indicará que escribamos la dirección http 
              donde esté el respositorio: https://k.slyguy.xyz/ y nombre slyguy, aceptamos y le damos un nombre a la fuente para 
              para poder después seleccionarla cuando vayamos a instalar, dar a ok Kodi revisará que la carpeta destino es accesible y nos 
              nos la añadirá a la lista de unidades seleccionables."""),

        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial15.png',f'{const.KODI_IMAGES}kodi_tutorial41.png'),
        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial29.png',f'{const.KODI_IMAGES}kodi_tutorial42.png'),
        
        steps("""Ahora ya tenemos la carpeta origen desde donde vamos a instalar el primer add-on. Si necesitamos editarlo, 
              con botón derecho de ratón nos aparecería una menú contextual para editar, eliminar, etc.."""),

        steps("""Ahora nos podemos ir al Explorador de add-ons, desde el menú principal add-ons."""),
        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial12.png',f'{const.KODI_IMAGES}kodi_tutorial19.png'),

        steps("Seleccionamos Instalar desde un archivo .ZIP"),

        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial30.png',f'{const.KODI_IMAGES}kodi_tutorial31.png'),

        steps("""Esperamos a que salga en la pantalla que el add-on ha sido instalado con éxito y ya tendemos un nuevo 
                repositorio instalado en nuestro Kodi."""),
        
        steps("""El siguiente pasó será, volver al Explorador de add-ons y escoger la opción instalación desde repositorio. Veremos que tenemos más repositorios,
              algunos los instala Kodi de inicio. Elegimos el repositorio Slyguy y seleccionaremos Add-ons de video"""),          
        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial33.png',f'{const.KODI_IMAGES}kodi_tutorial34.png'),
        steps("""Nos aparecerá el listado de add-ons que podemos instalar, entre ellos HBO Max, con el que vamos a seguir el ejemplo"""),
        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial35.png',f'{const.KODI_IMAGES}kodi_tutorial36.png'),
        steps("Seleccionamos HBO Max, aceptamos la instalación de dependencias y esperamos a que salga el popup de fin de instalación"),
        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial37.png',f'{const.KODI_IMAGES}kodi_tutorial38.png'),
            steps("""Ahora ya podemos entrar en el add-on, entrar usuario y contraseña para entrar en HBO Max. Es muy interesante ver otro tipo de 
              organización más simple del contenido. Sin tanta publicidad."""),
        dosimagenes(f'{const.KODI_IMAGES}kodi_tutorial39.png',f'{const.KODI_IMAGES}kodi_tutorial40.png'),
        rx.chakra.hstack(
            rx.chakra.responsive_grid(
                linkbutton("Instalación de Kodi",
                    "",
                    "/img/kodi2.png",
                    Route.KODI_PC.value,
                    is_external=False
                    ),
                linkbutton("Menú Principal Kodi",
                    "",
                    "/img/kodi2.png",
                    Route.KODI.value,
                    is_external=False
                    ),
                columns = [1,2],
                spacing=Size.DEFAULT.value,
            ),
            spacing=Size.DEFAULT.value,
            ),
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )