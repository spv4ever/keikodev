import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def cursos_links()-> rx.Component:
        return rx.chakra.vstack(
                title("Cursos "),
                linkbutton("Primer listado",
                "Tipología de primeros cursos",
                "/img/windows.svg",
                Route.CONSTR.value,
                is_external=True
                ),




        width = "100%",
        spacing=Size.MEDIUM.value,
    )