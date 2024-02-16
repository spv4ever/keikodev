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
from keikodev.componentes.noticias import noticias as noticias
from keikodev.componentes.card import card as card

def trucos_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Página para difundir trucos que vaya recopilando de la web'),
                ),
            width = "100%",
            margin_bottom = Size.BIG.value,
        ),
        # steps("""Sección dedicada a la difusión de los intentos de estafa que recibamos, con el objetivo de compartir
        #     con todo el mundo, aquellos pequeños intentos de fraude donde podemos caer de forma muy fácil."""),
        # steps(rx.span("""Si alguien quiere colaborar con estos intentos de fraude, me puede enviar un email con los detalles, fotos, capturas, 
        #     o simplemente explicando lo que le ha pasado a """, 
        #     rx.span(rx.link("info@keikodev.es",href="mailto:info@keikodev.es"),font_family = Fuentes.TITLE.value),
        #     rx.span(" indicando si prefiere permanecer en el anonimato o quiere aparecer como fuente de la noticia."))),
            
        card(url="https://12ft.io/", title="Navega sin publicidad y sin bloqueos de pago", 
                lista_imagenes=[('/img/trucos/truco1-1.png'),('/img/trucos/truco1-3.png'),('/img/trucos/truco1-2.png')],
                body="""Hoy os traigo una web: http://12ft.io que os servirá para entrar en webs que tienen banners
                de obligación de pago o publicidad hasta el infinito sin problemas. Entrad en la url o haciendo clic en 
                la noticia, pega la url de la web que quieres visitar en 'Clean Webpage' e intro... es maravilloso""",
                color=TextColor.PRIMARY, 
                badge_text="Navegación WEB", 
                featured=False, external=True
                ),
            


        spacing=Size.DEFAULT.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",
        
    )