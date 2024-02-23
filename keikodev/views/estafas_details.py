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
    return rx.chakra.vstack(
        rx.chakra.box(
            title(
                rx.chakra.center('Espacio dedicado a difundir los intentos de Ciberestafas'),
                ),
            width = "100%",
            margin_bottom = Size.BIG.value,
        ),
        steps("""Sección dedicada a la difusión de los intentos de estafa que recibamos, con el objetivo de compartir
            con todo el mundo, aquellos pequeños intentos de fraude donde podemos caer de forma muy fácil."""),
        steps(rx.chakra.span("""Si alguien quiere colaborar con estos intentos de fraude, me puede enviar un email con los detalles, fotos, capturas, 
            o simplemente explicando lo que le ha pasado a """, 
            rx.chakra.span(rx.chakra.link("info@keikodev.es",href="mailto:info@keikodev.es"),font_family = Fuentes.TITLE.value),
            rx.chakra.span(" indicando si prefiere permanecer en el anonimato o quiere aparecer como fuente de la noticia."))),
        card(url="", title="Ojo con esta nueva modalidad. Spoofing", 
                lista_imagenes=[('/img/estafas/estafa3-1.jpg'),('/img/estafas/estafa3-2.jpg'),('/img/estafas/estafa3-3.jpg')],
                body="""Tenemos una nueva modalidad de estafa al teléfono. Los estafadores te llaman haciendose pasar
                por un empleado de tu banco, donde te indica que alguien está intentando transferir dinero y se ponen en contacto
                contigo para verificar la transacción. Te pedirán datos para confirmar tu identidad, pero realmente lo que estás dando
                son los datos para acceder a tu cuenta y con ello robarte tu dinero. Recuerda los básicos en estos casos. 1.- Les debes
                decir que ahora te pones tú en contacto con ellos. 2º Tu banco nunca te llamará y te pedirá claves de acceso para entrar
                 en tus cuentas ni a modo de verificación. En particular, prefiero siempre colgar y llamar yo, ya que los estafadores
                  son capaces de suplantar el nº de teléfono desde donde llaman y aparecer como tu entidad bancaria.""",
                color=TextColor.PRIMARY, 
                badge_text="16/02/2024", 
                featured=False,
                ),    
        card(url="", title="La llamada urgente porque te vamos a subir el precio", 
                lista_imagenes=[('/img/estafas/estafa-2-1.jpg'),('/img/estafas/estafa-2-2.jpg')],
                body="""Hoy comparto el penúltimo intento de fraude de las compañías telefónicas, no os podre
                    decir cual, porque colgué antes de darle opción. Me llaman al teléfono fijo y dicen que me llaman
                    de mi compañía de teléfono, hasta ahí todo normal. El caso es que me empiezan a explicar que: 
                    Como usted ya fue informado en Octubre del pasado año, vamos a subir las tarífas que tiene contratadas
                    a una cantidad que casi doblaba lo que pago... Pero, que me podía ofrecer otro servicio más barato, pero
                    si me interesa la oferta, tengo que contratarla inmediatamente, porque a las 12 de la noche ya será tarde. Y tendré
                    que pagar la barbaridad que me dijo. Le dije que no me interesaba seguir escuchando y que ya me pondría yo en contacto con la compañía... mano de santo.
                    Siempre que nos metan prisas o que sea la última oportunidad para que sea más barato... huele mal. Ha venido la siguiente factura y
                    adivinar que paso... nada""",
                color=TextColor.PRIMARY, 
                badge_text="08/02/2024", 
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