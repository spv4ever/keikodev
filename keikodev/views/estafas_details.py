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

def estafas_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Espacio dedicado a difundir los intentos de Ciberestafas'),
                ),
            width = "100%",
            margin_bottom = Size.BIG.value,
        ),
        steps("""Sección dedicada a la difusión de los intentos de estafa que recibamos, con el objetivo de compartir
            con todo el mundo, aquellos pequeños intentos de fraude donde podemos caer de forma muy fácil."""),
        steps(rx.span("""Si alguien quiere colaborar con estos intentos de fraude, me puede enviar un email con los detalles, fotos, capturas, 
            o simplemente explicando lo que le ha pasado a """, 
            rx.span(rx.link("info@keikodev.es",href="mailto:info@keikodev.es"),font_family = Fuentes.TITLE.value),
            rx.span(" indicando si prefiere permanecer en el anonimato o quiere aparecer como fuente de la noticia."))),
    
        noticias("30/01/2024", 
                "Estafa del mensaje pidiendo ayuda",
                """Resulta que un día recibí un mensaje de texto en mi celular que decía: 
                    Papá, necesito dinero para comprar libros para la universidad. 
                    Por favor, envíame 100 euros a esta cuenta bancaria: 1234567890. 
                    Al principio, me sorprendí y me alarmé un poco, pensando en cómo mi hija 
                    podría necesitar dinero para los libros de la universidad. Pero luego, 
                    al leer detenidamente el mensaje, me di cuenta de que algo no estaba del todo bien.""",
                "estafa-1-1.png",
                "estafa-1-2.png",
                "estafa-1-3.png",
                "Cosecha propia",
                ),

        spacing=Size.DEFAULT.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",
    )