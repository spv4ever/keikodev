import reflex as rx 
from keikodev.componentes.linkicon import linkicon
from keikodev.componentes.info_text import info_text
from keikodev.componentes.info_box import info_box
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes



import keikodev.views.constants as const


def header()-> rx.Component:
    return rx.vstack(
            rx.hstack(
                rx.avatar(name="Albert García",
                          size="xl", 
                          src = "avatar3.png",
                          padding="2px",
                          border="4px",
                          border_color = Color.PRIMARY.value,
                          ),
                rx.vstack(
                    rx.heading(
                        'Alberto García',
                        size = "lg"
                        ),
                    rx.text(
                        "@spv4ever",
                        margin_top=Size.ZERO.value,
                        color = TextColor.BODY.value,
                        ),
                    rx.hstack(
                        linkicon(
                            "icons/email.svg",
                            f"mailto:{const.EMAIL}",
                            ),
                        linkicon(
                            "icons/github.svg",
                            const.GITHUB_URL,
                            ),
                        linkicon(
                            "icons/x.svg",
                            const.TWITTER_X_URL,
                            ),
                        linkicon(
                            "icons/instagram.svg",
                            const.INSTAGRAM_URL,
                            ),
                        linkicon(
                            "icons/flickr.svg",
                            const.FLICKR_URL,
                            ),
                        linkicon(
                            "icons/linkedin.svg",
                            const.LINKEDIN_URL,
                            ),
                        
                    spacing=Size.DEFAULT.value,
                    ),
                    
                    align_items="start",
                ),
                spacing=Size.BIG.value,
            ),
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
            info_box('Excel'),
            info_box('Python'),
            columns = [1,2,3,4],
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
                
                ),
        font_family = Fuentes.DEFAULT.value,
        spacing=Size.BIG.value,
        align_items="start",
        padding_x=Size.MEDIUM.value
        )
    