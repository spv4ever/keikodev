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
        linkbutton("Trucos de todo tipo",
            "Trucos y herramientas recopiladas de la web",
            "/img/image-solid.svg",
            Route.TRUCOS.value,
            "Retoca tus fotos con resultados expectaculares",
            is_external=False,
            ),

        # linkbutton('Catálogo de cursos y formaciones', 
        #     "Catálogo de cursos recomendados para todos", 
        #     "/img/tag-solid.svg",
        #     Route.CURSOS.value,
        #     is_external=False),
        
        title("Otras recursos de interes"),
        linkbutton('Ciberestafas', 
            "Toda la actualidad de los intentos de fraude que recibamos", 
            "/img/user-secret-solid.svg",
            Route.ESTAFAS.value,
            "Noticias sobre intentos de estafa en internet",
            is_external=False),

        linkbutton("Todo lo relacionado con Kodi",
            "Apartado destinado a mantener la configuración de kodi",
            "/img/tv-solid.svg",
            Route.KODI.value,
            is_external=False),

        linkbutton("MG Todo en nutrición y fitness",
            "Apartado para mantenerte en forma, entrenamientos, etc",
            "/img/dumbbell-solid.svg",
            constants.MG_URL,
            is_external=True),

        linkbutton("Biblioteca de imágenes",
            "Crear biblioteca de imágenes con fotografía propia",
            "/img/images.svg",
            Route.GALERIA.value,
            is_external=False),

        linkbutton('Mundo de la emulación', 
            "Todo lo relativo al mundo de la emulación Consola", 
            "/img/gamepad-solid.svg",
            Route.EMULATOR.value,
            is_external=False),

        linkbutton('Servicios personalizados', 
            "Servicios IT personalizados, macros, excel, python, web.", 
            "/img/dev.svg",
            Route.CONSTR.value,
            is_external=False),
    )