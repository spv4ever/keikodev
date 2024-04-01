import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
from keikodev.styles.styles import SizeRx as SizeRx
from keikodev.styles.colors import Color
from keikodev.styles.fonts import Fuentes
import keikodev.views.constants as constants
from keikodev.routes import Route
from keikodev.state.countdown import CountdownState
import keikodev.styles.styles as styles
from keikodev.componentes.next_live import next_live
from keikodev.state.next_launch_state import Nextlaunch



def index_links()-> rx.Component:
    return rx.chakra.vstack(
        rx.foreach(Nextlaunch.next_launch,lambda item: next_live(item)),

        title("Secciones Keikodev"),
        
        linkbutton("Sección de recetas de cocina",
            "Sección Recetas Caseras y cocina internacional",
            "/img/utensils-solid.svg",
            Route.COCINA.value,
            is_external=False),

        linkbutton("Canal de Youtube Recetas",
            "Sección del canal de youtube keikodev Recetas",
            "/img/youtube.svg",
            constants.YOUTUBE_URL,
            is_external=True),

        linkbutton("Canal de Youtube Novedades",
            "Sección del canal de youtube keikodev Novedades",
            "/img/youtube.svg",
            constants.YOUTUBE_URL_CANAL,
            is_external=True),

        linkbutton("El rincón de keiko",
            "Nueva sección del mundo animal",
            "/img/paw-solid.svg",
            Route.KEIKO.value,
            is_external=False),

        linkbutton("MG Todo en nutrición y fitness",
            "Apartado para mantenerte en forma, entrenamientos, etc",
            "/img/dumbbell-solid.svg",
            constants.MG_URL,
            is_external=True),


        title("Tecnología"),
        linkbutton('SpaceX - Rumbo a Marte', 
            "Información y videos sobre la evolución de SpaceX. Gracias a SpaceXstorm", 
            "/img/rocket-solid.svg",
            Route.SPACEX.value,
            is_external=False),

        linkbutton('Ciberestafas', 
            "Toda la actualidad de los intentos de fraude que recibamos", 
            "/img/user-secret-solid.svg",
            Route.ESTAFAS.value,
            "Noticias sobre intentos de estafa en internet",
            is_external=False),

        linkbutton("Mundo de la Programación",
            "Páginas relacionadas con el desarrollo de aplicaciones web, python, SQL",
            "/img/dev.svg",
            Route.DEV.value,
            "Aprende a programar",
            is_external=False
            ),

        linkbutton("Cursos y formación",
            "Enlaces a cursos y formaciones de herramientas en general.",
            "/img/graduation-cap-solid.svg",
            Route.CURSOS.value,
            "Formación general",
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
        linkbutton("Biblioteca de imágenes",
            "Crear biblioteca de imágenes con fotografía propia",
            "/img/images.svg",
            Route.GALERIA.value,
            is_external=False),

        linkbutton('Servicios personalizados', 
            "Servicios IT personalizados, macros, excel, python, web.", 
            "/img/dev.svg",
            Route.CONSTR.value,
            is_external=False),
        on_mount=Nextlaunch.next_launch_select()
    )