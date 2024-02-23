import reflex as rx 
from keikodev.componentes.linkicon import linkicon
from keikodev.componentes.info_text import info_text
from keikodev.componentes.info_box import info_box
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
import keikodev.styles.styles as styles
from keikodev.componentes.title import title
from keikodev.models.live import Live

import keikodev.views.constants as const


def header(details=True, live_status=Live(live=False, title=""))-> rx.Component:
    return rx.chakra.vstack(
                rx.chakra.hstack(
                    rx.chakra.avatar(
                        rx.cond(
                                live_status.live,
                                rx.chakra.avatar_badge(
                                    rx.chakra.image(src="/img/twitch.svg",alt="Logo twitch"),
                                box_size = Size.MEDIUM.value,
                                bg = Color.PURPLE.value,
                                border_color = Color.PURPLE.value,
                                class_name="blink",
                            ),
                                
                                
                            ),
                            name="Albert García Sabadell",
                            size="xl", 
                            src = "/avatar3.png",
                            alt = "Logo",
                            padding="2px",
                            border="4px",
                            border_color = Color.PRIMARY.value,
                            box_shadow = f"0px 0px 20px {Color.PRIMARY.value}"
                            ),
                    rx.chakra.vstack(
                        rx.chakra.heading(
                            'Alberto García',
                            size = "lg"
                            ),
                        rx.chakra.text(
                            "info@keikodev.es",
                            margin_top=Size.ZERO.value,
                            color = TextColor.BODY.value,
                            ),
                        rx.chakra.hstack(
                            linkicon(
                                "/img/email.svg",
                                f"mailto:{const.EMAIL}",
                                "contact",
                                ),
                            linkicon(
                                "/img/github.svg",
                                const.GITHUB_URL,
                                "Github",
                                ),
                            linkicon(
                                "/img/x.svg",
                                const.TWITTER_X_URL,
                                "X - Twitter",
                                ),
                            linkicon(
                                "/img/instagram.svg",
                                const.INSTAGRAM_URL,
                                "Instagram",
                                ),
                            linkicon(
                                "/img/flickr.svg",
                                const.FLICKR_URL,
                                "Flickr",
                                ),
                            linkicon(
                                "/img/linkedin.svg",
                                const.LINKEDIN_URL,
                                "Linkedin"
                                ),
                            
                        spacing=Size.DEFAULT.value,
                        ),
                        
                        align_items="start",
                    ),
                    width = "100%",
                    spacing=Size.BIG.value,
                    font_family = Fuentes.DEFAULT.value,
                    align_items="start",
                    padding_x=Size.MEDIUM.value,
                    
                    
                
                    ),
        rx.cond(
            details,
            rx.chakra.accordion(
                rx.chakra.accordion_item(
                    rx.chakra.accordion_button(
                        rx.chakra.box(
                        rx.chakra.heading("Descubre más sobre mí",size="md",
                                    color=Color.PRIMARY.value,
                                    font_family = Fuentes.LOGO.value,
                                    #class_name="texto",
                                    ),
                                    #width = "250px"
                                    ),
                        rx.chakra.accordion_icon(),
                    ),
                    rx.chakra.accordion_panel(
                    rx.chakra.vstack(
                        rx.chakra.flex(
                            info_text("+30","años de experiencia"),
                            rx.chakra.spacer(),
                            info_text("5","lenguajes de programación"),
                            rx.chakra.spacer(),
                            info_text("+1000","informes"),
                            width = "100%"
                            ),
                        rx.chakra.responsive_grid(
                            info_box('PowerBI'),
                            info_box('Bussines Objects'),
                            columns = [1,2],
                            spacing= "4",
                            width = "100%",
                            ),
                        rx.chakra.responsive_grid(
                            info_box('Excel'),
                            info_box('Python'),
                            columns = [1,2],
                            spacing= "4",
                            width = "100%",
                            ),
                        rx.chakra.text("""Soy técnico informático con más de 30 años de experiencia, 
                                fanático de la gestión de datos y bigdata. Entre mis hobbies está seguir
                                aprendiendo cada día y python me está fascinando. Actualmente sigo desarrollando
                                principalmente rutinas y procesos en python que llevarían horas de trabajo y enormes
                                tablas dinámicas en excel. Entre mis últimos aprendizajes ha sido generar una app para
                                subir de forma masiva diferentes excels a una base de datos SQL.""",
                                font_size = Size.MEDIUM.value,
                                color = TextColor.BODY.value,
                                padding_top = Size.DEFAULT.value,
                                
                                
                        ),
            #spacing=Size.BIG.value,
                    padding_x=Size.MEDIUM.value,
                    width="100%",
            
            ),
            ),
            ),
            allow_toggle=True,
            variant = "ghost",
            color="white",
            border_color = Color.BACKGROUND.value,
            width="100%",
            ),

        ),
        width = "100%",
        font_family = Fuentes.DEFAULT.value,
        spacing=Size.BIG.value,
        align_items="start",
        padding_x=Size.MEDIUM.value,
        )
    