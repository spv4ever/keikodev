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
import keikodev.componentes.imagenes as imagenes

def kodi_addons_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Tutorial instalación de complementos en Kodi'),
                ),
            margin_bottom = Size.BIG.value,
            ),
        
        unaimagen("/img/kodi_images/kodi_tutorial11.png","900px"),
        steps("""La instalación de programas externos o complementos, también llamados 'add ons' en Kodi, 
            se puede realizar de varias formas: Desde un repositorio ya instalado o desde un archivo comprimido ZIP."""),
        steps("""Los repositoros son complementos a modo de bibliotecas de programas, que nos permiten instalar add-ons concretos recopilados y listos para ser usados."""),
        steps("""Existen add-ons para cambiar Kodi a modo visual, añadir características para visualizar videos, bibliotecas de imagenes, sonido y todo
            lo que puede necesitar nuestro centro multimedia, incluyendo programas de mantenimiento que nos ayudarán con la configuración"""),
        steps("""Cuando instalamos un complemento desde archivo ZIP, también tendremos varias opciones para cargar el fichero a instalar, aunque normalmente usaremos dos."""),
        steps("""La primera forma y más cómoda será realizar la instalación desde un fichero ZIP que se encuentre en interntet, 
            para ello necesitaremos la dirección de internet donde se encuentre la carpeta pública donde está el fichero 
            o los ficheros necesarios."""),
        steps("""Además los creadores de este tipo de complementos, siempre van a indicar en los procesos de instalación que es necesario
            tener instalado para que su complemento funcione, por lo que la instalación suele agregar todas las dependencias 
            necesarias para el funcionamiento."""),
        steps("""Es muy importante que dejemos que Kodi complete los procesos de instalación y que no se 
            haga nada hasta que no veamos que la instalación ha sido un exitosa"""),
        steps("""Los complementos que se instalen, se podrán encontrar en la opción 'Add-ons' del menú principal."""),

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


        



        


        


        
        
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )