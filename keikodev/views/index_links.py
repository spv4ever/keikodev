import reflex as rx
import reflex_webcam as webcam
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
from keikodev.pages.iatools import Iatoolstate
from keikodev.models.iatools_model import Iatools, Tipo
from keikodev.data.email_services import enviar_correo_services

class Lastpicturestate(rx.State):
    lastPicture: list[Nasa_imagenes]
    url:str
    date:str

    @rx.background
    async def get_last_picture(self):
        async with self:
            self.lastPicture = nasa_last_picture_service()
            self.url = self.lastPicture.url
            self.date = datetime.datetime.strftime(self.lastPicture.fecha, "%d/%m/%Y")
            #enviar_correo_services("info@keikodev.es","Test")


def index_links()-> rx.Component:
    return rx.chakra.vstack(
        rx.foreach(Nextlaunch.next_launch,lambda item: next_live(item)),

        title("Secciones Keikodev"),

        linkbutton("Keikodev Store",
            "Puerta de la nuestra tienda de personalización y Arte Digital",
            "/img/store-solid.svg",
            constants.KEIKODEV_STORE_URL,
            is_external=True),

        
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
        index_colabora(),
            rx.flex(
                index_nasa(),
                #index_lanzamientos(),
                index_iatools(),
                index_recetas(),
                index_kodi(),
                index_store(),
                index_mg(),
                index_colaboradores(),
                direction="row",
                wrap="wrap",
                spacing="5",
                justify="between",
            ),
        margin_top = Size.BIG.value,
        margin_x = Size.MEDIUM_BIG.value,
        min_height = "700px",
        #on_mount=Lastpicturestate.get_last_picture,
    )
def index_colabora()-> rx.Component:
    return rx.hstack(
            rx.heading("Estoy buscando financiación para mejorar el rendimiento del servidor. Se agredece cualquier tipo de apoyo. Puedes ayudarme en...",
                    style={"color":"yellow"},
                    size="4"),
            rx.link(
                rx.image(src="/img/bmc-button.png",width="100px",height="auto"),
                href=constants.DONACIONES_URL,
                is_external=True,
                style=styles.links_without_decoration,
            ),
        direction="row",
        spacing="3",
        justify="center",
        style={"width":"100%","margin-bottom":Size.DEFAULT.value},
    )

def index_recetas()->rx.Component:
    return rx.card(   
                # rx.link(     
                    rx.vstack(
                        rx.link(
                            rx.heading("Recetas Keikodev",
                                    style={"color":Color.SECONDARY.value},
                                    size="7"),
                            href=Route.COCINA.value,
                            style=styles.links_without_decoration,
                        ),
                        rx.link(
                            rx.text("""¡Bienvenido a nuestra vibrante comunidad culinaria! Desde recetas familiares que han 
                                    resistido el paso del tiempo hasta nuevas y emocionantes creaciones, nuestro canal de YouTube y 
                                    TikTok es tu destino para inspiración culinaria. Explora cientos de recetas detalladas en nuestro 
                                    canal de YouTube, donde te llevamos paso a paso a través de sabores deliciosos y técnicas culinarias. 
                                    Además, en TikTok, disfruta de momentos culinarios rápidos y entretenidos que te inspirarán en segundos. 
                                    Únete a nosotros en este viaje gastronómico y descubre el placer de cocinar de manera fácil y divertida""",
                                    size="1",
                                    style={"color":TextColor.PRIMARY.value,
                                    "text-align":"justify",
                                    "font-weight": "bold"},
                                ),
                            href=Route.COCINA.value,
                            style=styles.links_without_decoration,
                        ),
                        rx.grid(
                             rx.link(
                                rx.hstack(
                                    rx.icon("youtube",size=30,color="red"),
                                    rx.heading("Keikodev Recetas",size="3"),
                                    justify="center",
                                    align="center",
                                    #style={"margin-top":Size.MEDIUM.value},
                                    ),
                                href=constants.YOUTUBE_URL,
                                style=styles.links_without_decoration,
                            ),
                            rx.link(
                                rx.hstack(
                                    rx.image(src="/img/tiktok_red.svg", width="25px",height="25px"),
                                    rx.heading("@Keikodev.recetas",size="3"),
                                    justify="center",
                                    align="center",
                                    #style={"margin-top":Size.MEDIUM.value},
                                ),
                                href=constants.TIKTOK_RECETAS,
                                style=styles.links_without_decoration,
                            ),
                            columns="2",
                            width = "100%",
                            style={"margin-top":Size.MEDIUM.value},
                        ),
                        height = "100%",
                        width="100%",
                        direction="column",
                        align="center",
                        justify="start",
                    # ),
                    # href=Route.COCINA.value,
                    # style=styles.links_without_decoration,
                ),
                style=styles.index_cards,
                class_name=styles.TITLE_INDEX,
    )

def index_kodi()->rx.Component:
    return rx.card(
        rx.link(
        rx.vstack(
            rx.heading("Keikodev Kodi",
                    style={"color":Color.SECONDARY.value},
                    size="7"),
            rx.text("""Tutoriales completos sobre KODI: aprende a instalar, configurar y mantener este potente centro multimedia en tu dispositivo. 
                    Descubre los mejores addons y cómo instalarlos paso a paso. Mantente al día con las últimas actualizaciones y 
                    optimiza tu experiencia de entretenimiento digital con nuestra guía detallada.""",
                                    size="1",
                                    style={"color":TextColor.PRIMARY.value,
                                    "text-align":"justify",
                                    "font-weight": "bold"},
                                ),
            rx.box(
                rx.image(
                src="/img/kodi_images/kodi_tutorial4.png",
                margin_bottom = Size.SMALL.value,
                style={"width": "100%", "height": "100%","object-fit": "contain"},
                        ),
                    style={"width":"250px","height":"100px"},
                    ),
            
            
            height = "100%",
            width="100%",
            direction="column",
            align="center",
            justify="start",
            ),
        href=Route.KODI.value,
        style=styles.links_without_decoration,
        ),
    style=styles.index_cards,
    class_name=styles.TITLE_INDEX_BIS,
    )

def index_store()->rx.Component:
    return rx.card(
        rx.link(
        rx.vstack(
            rx.heading("Keikodev Store",
                    style={"color":Color.SECONDARY.value},
                    size="7"),
            rx.text("Todas las novedades, arte digital, camisetas de diseño, en Keikodev Store. Diseños exclusivos y personalizados.",
                                    size="1",
                                    style={"color":TextColor.PRIMARY.value,
                                    "text-align":"justify",
                                    "font-weight": "bold"},
                                ),
            
                rx.box(
                    rx.hstack(
                        rx.image(
                            src="/img/keiko_store.gif",
                            margin_bottom = Size.SMALL.value,
                            style={"width": "50%", "height": "50%","object-fit": "contain","padding":Size.MEDIUM.value},
                        ),
                        rx.image(
                            src="/img/keiko_store2.gif",
                            margin_bottom = Size.SMALL.value,
                            style={"width": "50%", "height": "50%","object-fit": "contain","padding":Size.MEDIUM.value},
                        ),
                        direction="row",
                        justify="between",
                    ),
                    style={"width":"250px","height":"100px"},
                    ),
                

            height = "100%",
            width="100%",
            direction="column",
            align="center",
            justify="start",
            ),
        href=constants.KEIKODEV_STORE_URL,
        is_external=True,
        style=styles.links_without_decoration,
        ),
    style=styles.index_cards,
    class_name=styles.TITLE_INDEX_BIS,
    )

def index_colaboradores()->rx.Component:
    return rx.card(
        rx.vstack(
            rx.heading("Colaboradores Keikodev",
                    style={"color":Color.SECONDARY.value},
                    size="7"),
            rx.text("Gracias por la colaboración",
                    align="center",
                    style={"color":TextColor.HEADER.value}),
            rx.text("@iron4ever",
                    align="center",
                    style={"color":TextColor.HEADER.value}),

            height = "100%",
            width="100%",
            direction="column",
            align="center",
            justify="start",
            ),
    style=styles.index_cards,
    class_name=styles.TITLE_INDEX_BIS,
    )

def index_mg()->rx.Component:
    return rx.card(
            rx.link(
                rx.vstack(
                    rx.heading("MG Training y Nutrición",
                            style={"color":Color.SECONDARY.value},
                            size="6"),

                    rx.text("""Manu, un apasionado del fitness de Tarragona, comparte su historia de transformación 
                            y dedicación al ejercicio. A pesar de los desafíos, su determinación lo llevó a sumergirse en 
                            el mundo del fitness. Ahora, está listo para guiar a otros, mostrándoles que con determinación 
                            y esfuerzo, es posible superar metas y transformar vidas.""",
                            size="3",
                            style={"color":TextColor.HEADER.value,"text-align":"justify"},
                            ),
                    
                    #height = "100%",
                    width="100%",
                    direction="column",
                    align="center",
                    justify="start",
                    ),
                href=constants.MG_URL,
                is_external=True,
                style=styles.links_without_decoration,
            ),
            rx.hstack(
                rx.link(
                    rx.icon("instagram", 
                            color="red",
                            size=28),
                href="https://instagram.com/manugarciachacon?utm_source=qr",
                is_external=True,
                style=styles.links_without_decoration,
                ),
                rx.link(    
                        rx.icon("youtube", 
                                size=36, 
                                color="red",
                                style={"padding-bottom":Size.SMALL.value}),
                    href="https://www.youtube.com/@manugarciachacon",
                    is_external=True,
                    style=styles.links_without_decoration,
                    ),
                rx.link(
                    rx.image(src="/img/tiktok_red.svg", width="23px",height="23px"),
                    href="https://www.tiktok.com/@manugarciachacon",
                    is_external=True,
                    style=styles.links_without_decoration,
                ),
                direction="row",
                justify="between",
                style={"padding-left":Size.MEDIUM_BIG.value, "padding-right":Size.MEDIUM_BIG.value}
                
            ),

    style=styles.index_cards,
    class_name=styles.TITLE_INDEX_BIS,
    )



def index_iatools()->rx.Component:
    return rx.card(
        rx.link(
        rx.vstack(
            rx.heading("Herramientas IA",
                    style={"color":Color.SECONDARY.value},
                    size="7"),
            rx.flex(
                rx.badge(f"Total ({Iatoolstate.total})",
                        size="1", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.badge_title),
                rx.foreach(Iatoolstate.tipos,badge_title),
                width="100%",
                direction="row",
                wrap="wrap",
                spacing="2",
                align="center",
                justify="between",
                ),
            rx.text(f"Última IA añadida: {Iatoolstate.iatool_name}",
                    size="3",
                    style={"color":Color.SECONDARY.value}),

            rx.text(Iatoolstate.iatool_description, 
                    size="1",
                    style={"color":TextColor.PRIMARY.value,
                        "text-align":"justify",
                        "font-weight": "bold"},
                    ),
            height = "100%",
            width="100%",
            direction="column",
            align="center",
            justify="start",
            ),
        href=Route.IA_TOOLS.value,
        style=styles.links_without_decoration,
        ),
    style=styles.index_cards,
    class_name=styles.TITLE_INDEX_BIS,
    on_mount=Iatoolstate.get_all_iatools,
    )

def badge_title(tipos)->rx.Component:
    return rx.box(
                rx.badge(f"{tipos.nombre} ({tipos.numero})",size="1", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.badge_title,),
            )


def index_lanzamientos()->rx.Component:
    return rx.card(
                rx.vstack(
                    rx.link(    
                        rx.heading("Rumbo a Marte",
                            style={"color":Color.SECONDARY.value},
                            size="7"),
                        href=Route.SPACEX.value,
                        style=styles.links_without_decoration,
                    ),
                    rx.heading("Próximo lanzamiento",
                        style={"color":TextColor.HEADER.value},
                        size="7"),
                    rx.heading(Nextlaunch.next_launche["mission"],
                        style={"color":TextColor.HEADER.value},
                        size="6"),
                    rx.heading(f"{Nextlaunch.next_launche['company']} - {Nextlaunch.next_launche['rocket']}",
                            style={"color":TextColor.HEADER.value},
                            size="4",
                            align="center"),
                    rx.text(f"{Nextlaunch.date[8:10]}/{Nextlaunch.date[5:7]}/{Nextlaunch.date[:4]} - {Nextlaunch.date[11:16]}",
                            style={"color":TextColor.HEADER.value}),
                    rx.cond(Nextlaunch.next_launche['streamer']!="",
                        rx.text(f"Sigue el lanzamiento con {Nextlaunch.next_launche['streamer']}",
                            style={"color":TextColor.HEADER.value}),
                    
                    ),
                    #rx.spacer(),
                    rx.hstack(
                        rx.link(
                            rx.badge('Detalles de misión',size="2", 
                                color_scheme="pink", 
                                variant="outline",
                                style=styles.main_menu_badge_style,),
                            href=Nextlaunch.url_details,
                            is_external=True,
                            style=styles.links_without_decoration,),

                        
                        rx.link(
                            rx.cond(Nextlaunch.next_launche['url_live']!="",
                                rx.badge('Directo',size="2", 
                                    color_scheme="pink", 
                                    variant="outline",
                                    style=styles.main_menu_badge_style,),
                                ),
                                href=Nextlaunch.url_live,
                                is_external=True,
                                style=styles.links_without_decoration,
                        ),
                        rx.link(
                            rx.cond(Nextlaunch.next_launche['channel']!="",
                                rx.badge('Canal',size="2", 
                                    color_scheme="pink", 
                                    variant="outline",
                                    style=styles.main_menu_badge_style,),
                                ),
                                href=Nextlaunch.channel,
                                is_external=True,
                                style=styles.links_without_decoration,
                        ),
                        width="100%",
                        align="center",
                        justify="center",
                    ),
                    height = "100%",
                    width="100%",
                    direction="column",
                    align="center",
                    justify="start",
            ),
            style=styles.index_cards,
            class_name=styles.TITLE_INDEX_BIS,
            on_mount=Nextlaunch.next_launch_select
    )

def index_nasa()->rx.Component:
    return rx.card(
            rx.link(
                rx.vstack(
                        rx.heading("Fotos desde la Nasa",
                                style={"font-family":Fuentes.NASA.value,
                                "color":Color.SECONDARY.value}
                                ),
                        rx.text("Últimas fotos en alta resolución desde La Nasa",
                                style={"color":TextColor.BODY.value}),
                        rx.text(Lastpicturestate.date,
                                style={"color":TextColor.BODY.value}),
                        rx.box(
                            rx.image(
                                src=Lastpicturestate.url,
                                margin_bottom = Size.SMALL.value,
                                style={"width": "100%", "height": "100%","object-fit": "contain"},
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
                style=styles.links_without_decoration,
                ),      
            style=styles.index_cards,
            class_name=styles.TITLE_INDEX,
            on_mount=Lastpicturestate.get_last_picture
    ),


# Plantilla nuevos marcos
# def index_colaboradores()->rx.Component:
#     return rx.card(
#         rx.link(
#         rx.vstack(
#             rx.heading("Colaboradores Keikodev",
#                     style={"color":Color.SECONDARY.value},
#                     size="7"),
#             height = "100%",
#             width="100%",
#             direction="column",
#             align="center",
#             justify="start",
#             ),
#         href=Route.KEIKO.value,
#         style=styles.links_without_decoration,
#         ),
#     style=styles.index_cards,
#     class_name=styles.TITLE_INDEX_BIS,
#     )

