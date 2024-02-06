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
            
            
            card(url="", title="Recibo dos mensajes de alguien que dice que es mi hija", 
                lista_imagenes=[('/img/estafas/estafa-1-1.png'),('/img/estafas/estafa-1-2.png'),('/img/estafas/estafa-1-3.png')],
                body="""Hoy os traigo dos intentos seguidos, con una diferencia de 15 días, donde 
                alguien que dice que es mi hija me envía mensajes de texto con un enlace y me pide que haga clic.  
                La excusa, como siempre, es que le ha pasado algo, que se ha quedado sin teléfono, por el motivo que sea. 
                Los patrones siempre son los mismos, un familiar, un amigo y la urgencia. 'Rápido que es urgente'. No caigais en
                la trampa, usan la presión emocional para que no pensemos. A saber que hay detrás del enlace.""",
                color=TextColor.PRIMARY, 
                badge_text="30/01/2024", 
                featured=False,
                ),
                
            card(url="", title="Recibo dos mensajes de alguien que dice que es mi hija", 
                lista_imagenes=[('/img/estafas/estafa-1-1.png'),('/img/estafas/estafa-1-2.png'),('/img/estafas/estafa-1-3.png')],
                body="""Hoy os traigo dos intentos seguidos, con una diferencia de 15 días, donde 
                alguien que dice que es mi hija me envía mensajes de texto con un enlace y me pide que haga clic.  
                La excusa, como siempre, es que le ha pasado algo, que se ha quedado sin teléfono, por el motivo que sea. 
                Los patrones siempre son los mismos, un familiar, un amigo y la urgencia. 'Rápido que es urgente'. No caigais en
                la trampa, usan la presión emocional para que no pensemos. A saber que hay detrás del enlace.""",
                color=TextColor.PRIMARY, 
                badge_text="30/01/2024", 
                featured=False,
                ),

        # noticias("30/01/2024", 
        #         "Recibo dos mensajes de alguien que dice que es mi hija",
        #         """Hoy os traigo dos intentos seguidos, con una diferencia de 15 días, donde 
        #         alguien que dice que es mi hija me envía mensajes de texto con un enlace y me pide que haga clic.  
        #         La excusa, como siempre, es que le ha pasado algo, que se ha quedado sin teléfono, por el motivo que sea. 
        #         Los patrones siempre son los mismos, un familiar, un amigo y la urgencia. 'Rápido que es urgente'. No caigais en
        #         la trampa, usan la presión emocional para que no pensemos. A saber que hay detrás del enlace.""",
        #         "estafa-1-1.png",
        #         "estafa-1-2.png",
        #         "estafa-1-3.png",
        #         "Cosecha propia",
        #         ),

        spacing=Size.DEFAULT.value,
        padding = Size.MEDIUM.value,
        align_items="Start",
        width="100%",
        
    )