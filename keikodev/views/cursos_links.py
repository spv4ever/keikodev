import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def cursos_links()-> rx.Component:
        return rx.chakra.vstack(
                title("Formaciones office"),
                linkbutton("Curso de excel básico",
                "Curso básico de excel, con ejemplos y ejercicios",
                "/img/windows.svg",
                constants.EXCEL_BASICO_URL,
                is_external=True
                ),
                linkbutton("Curso de excel avanzado",
                "Curso avanzado de excel, con ejemplos y ejercicios",
                "/img/windows.svg",
                constants.EXCEL_AVANZADO_URL,
                is_external=True
                ),
                linkbutton("Curso de excel experto",
                "Curso experto de excel, con ejemplos y ejercicios",
                "/img/windows.svg",
                constants.EXCEL_EXPERTO_URL,
                is_external=True
                ),
                linkbutton("Curso de Power Point Avanzado",
                "Curso avanzado de Power Point, con ejemplos y ejercicios",
                "/img/windows.svg",
                constants.PP_AVANZADO_URL,
                is_external=True
                ),




        width = "100%",
        spacing=Size.MEDIUM.value,
    )