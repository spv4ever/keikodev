import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def dev_links()-> rx.Component:
    return rx.vstack(
        title("Recursos para programación"),
        linkbutton("Reflex",
                   "Entorno para programación WEB desde Python con hosting incluido (Alpha)",
                   "/icons/dev.svg",
                   constants.REFLEX_URL,
                   ),
        linkbutton("MoureDev",
                   "El maestro. Todo tipo de cursos relacionados con la programación",
                   "/icons/dev.svg",
                   constants.MOUREDEV_URL,
                   ),
        linkbutton("W3School",
                   "Tutorial CSS",
                   "/icons/dev.svg",
                   constants.W3SCHOOLS_URL,
                   ),
        linkbutton("MDN",
                   "Tutoriales para desarrollo WEB",
                   "/icons/dev.svg",
                   constants.MDM_URL,
                   ),
        linkbutton("Radix UI",
                   "Recursos para desarrollo WEB",
                   "/icons/dev.svg",
                   constants.RADIX_URL,
                   ),

        width = "100%",
        spacing=Size.MEDIUM.value,
    )