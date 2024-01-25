import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def index_links()-> rx.Component:
    return rx.vstack(
        title("Recursos para programación"),
        linkbutton("Mundo de la Programación",
            "Páginas relacionadas con el desarrollo de aplicaciones web, python, SQL",
            "/img/dev.svg",
            Route.DEV.value,
            "Aprende a programar",
            is_external=False
            ),

        linkbutton("Herramientas gráficas",
            "Herramientas gráficas y retoque fotográfico online",
            "/img/image-solid.svg",
            Route.UTILS_IMAGES.value,
            "Retoca tus fotos con resultados expectaculares",
            is_external=False,
            ),

        linkbutton('Tips e instrucciones más usadas', 
            "Como tengo memoria de pez, este será mi bloc de notas para", 
            "/img/tag-solid.svg",
            Route.CONSTR.value,
            is_external=False),
        
        title("Otras recursos de interes"),
        linkbutton('Cyber Estafas', 
            "Toda la actualidad de los intentos de fraude que recibamos", 
            "/img/user-secret-solid.svg",
            Route.CONSTR.value,
            "Noticias sobre intentos de estafa en internet",
            is_external=False),

        linkbutton("Configuración de kodi",
            "Apartado destinado a mantener la configuración de kodi",
            "/img/tv-solid.svg",
            Route.KODI.value,
            is_external=False),

        linkbutton("Biblioteca de imágenes",
            "Crear biblioteca de imágenes con fotografía propia",
            "/img/images.svg",
            constants.FLICKR_URL),

        linkbutton('Mundo de la emulación', 
            "Todo lo relativo al mundo de la emulación Consola", 
            "/img/gamepad-solid.svg",
            Route.CONSTR.value,
            is_external=False),

        linkbutton('Servicios personalizados', 
            "Servicios IT personalizados, macros, excel, python, web.", 
            "/img/dev.svg",
            Route.CONSTR.value,
            is_external=False),
    )