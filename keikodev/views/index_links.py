import reflex as rx
import datetime as datetime
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
from keikodev.styles.styles import SizeRx as SizeRx
from keikodev.styles.colors import Color, TextColor
from keikodev.styles.fonts import Fuentes
import keikodev.views.constants as constants
from keikodev.routes import Route
from keikodev.state.countdown import CountdownState
import keikodev.styles.styles as styles
from keikodev.componentes.next_live import next_live
from keikodev.state.next_launch_state import Nextlaunch
from keikodev.pages.google_auth import StateLogin
from keikodev.state.fotoNasa import fotoNasa
from keikodev.models.Nasalink import Nasa_imagenes
from keikodev.data.nasa_last_picture_service import nasa_last_picture_service

class Lastpicturestate(rx.State):
    lastPicture: list[Nasa_imagenes]
    url:str
    date:str

    @rx.background
    async def get_last_picture(self):
        async with self:
            self.lastPicture = nasa_last_picture_service()
                #print(self.lastPicture.url)
            self.url = self.lastPicture.url
            self.date = datetime.datetime.strftime(self.lastPicture.fecha, "%d/%m/%Y")


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
        
        linkbutton('Principales herramientas IA', 
            "Biblioteca de herramientas IA organizadas y clasificadas.", 
            "/img/dev.svg",
            Route.IA_TOOLS.value,
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
        rx.cond(
            StateLogin.users_rights == 999,
            linkbutton('Servicios personalizados', 
            "Servicios IT personalizados, macros, excel, python, web.", 
            "/img/dev.svg",
            Route.CONSTR.value,
            is_external=False),
            ),
                                
        

        on_mount=Nextlaunch.next_launch_select()
    )

def index_links_desktop()-> rx.Component:
    return rx.box(
            rx.flex(
                index_nasa(),
                direction="row",
                wrap="wrap",
                spacing="5",
            ),
        margin = Size.BIG.value,
        min_height = "700px",
        on_mount=Lastpicturestate.get_last_picture,
    )

def index_nasa()->rx.Component:
    return rx.card(
            rx.link(
                rx.vstack(
                        rx.heading("Fotos de la Nasa",
                                style={"color":TextColor.HEADER.value}),
                        rx.text("Últimas fotos en alta resolución desde La Nasa",
                                style={"color":TextColor.BODY.value}),
                        rx.text(Lastpicturestate.date,
                                style={"color":TextColor.BODY.value}),
                        rx.box(
                            rx.image(
                                src=Lastpicturestate.url,
                                margin_bottom = Size.SMALL.value,
                                style={"width": "100%", "height": "100%","object-fit": "contain"}
                            ),
                            style={"width":"370px","height":"170px"},
                        ),
                    width="100%",
                    direction="column",
                    align="center",
                    justify="center",
                    ),
                href=Route.GALERIA_NASA.value,
                is_external=False,
                ),      
            width = "400px",
            height = "300px",
            style={"bg":Color.CONTENT.value,"border": "2px solid #651249",
                    "_hover" : {
                            "background_color" : Color.BACKGROUND.value,
                            "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.SECONDARY.value},",
                            "cursor":"pointer",
                            }
                }
            
    ),

