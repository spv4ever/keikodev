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

import keikodev.views.constants as const


def header(details=True, live=False)-> rx.Component:
    return rx.vstack(
                rx.hstack(
                    rx.avatar(
                        rx.cond(
                                live,
                                rx.avatar_badge(
                                    rx.image(src="/img/twitch.svg"),
                                box_size = Size.MEDIUM.value,
                                bg = Color.PURPLE.value,
                                border_color = Color.PURPLE.value,
                                class_name="blink",
                            ),
                                
                                
                            ),
                            name="Albert García Sabadell",
                            size="xl", 
                            src = "/avatar3.png",
                            padding="2px",
                            border="4px",
                            border_color = Color.PRIMARY.value,
                            box_shadow = f"0px 0px 20px {Color.PRIMARY.value}"
                            ),
                    rx.vstack(
                        rx.heading(
                            'Alberto García',
                            size = "lg"
                            ),
                        rx.text(
                            "info@keikodev.es",
                            margin_top=Size.ZERO.value,
                            color = TextColor.BODY.value,
                            ),
                        rx.hstack(
                            linkicon(
                                "/img/email.svg",
                                f"mailto:{const.EMAIL}",
                                ),
                            linkicon(
                                "/img/github.svg",
                                const.GITHUB_URL,
                                ),
                            linkicon(
                                "/img/x.svg",
                                const.TWITTER_X_URL,
                                ),
                            linkicon(
                                "/img/instagram.svg",
                                const.INSTAGRAM_URL,
                                ),
                            linkicon(
                                "/img/flickr.svg",
                                const.FLICKR_URL,
                                ),
                            linkicon(
                                "/img/linkedin.svg",
                                const.LINKEDIN_URL,
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
            rx.accordion(
                rx.accordion_item(
                    rx.accordion_button(
                        rx.box(
                        rx.heading("Descubre más sobre mí",size="md",
                                    color=Color.PRIMARY.value,
                                    font_family = Fuentes.LOGO.value,
                                    #class_name="texto",
                                    ),
                                    #width = "250px"
                                    ),
                        rx.accordion_icon(),
                    ),
                    rx.accordion_panel(
                    rx.vstack(
                        rx.flex(
                            info_text("+30","años de experiencia"),
                            rx.spacer(),
                            info_text("5","lenguajes de programación"),
                            rx.spacer(),
                            info_text("+1000","informes"),
                            width = "100%"
                            ),
                        rx.responsive_grid(
                            info_box('PowerBI'),
                            info_box('Bussines Objects'),
                            columns = [1,2],
                            spacing= "4",
                            width = "100%",
                            ),
                        rx.responsive_grid(
                            info_box('Excel'),
                            info_box('Python'),
                            columns = [1,2],
                            spacing= "4",
                            width = "100%",
                            ),
                        rx.text("""Soy técnico informático con más de 30 años de experiencia, 
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
    