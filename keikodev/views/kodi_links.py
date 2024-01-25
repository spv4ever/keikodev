import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def kodi_links()-> rx.Component:
        return rx.vstack(
        title("Manuales Kodi"),
                linkbutton("Instalación en Windows",
                "Primeros pasos para la instalación de kodi en Windows.",
                "/img/windows.svg",
                Route.CONSTR.value,
                ),
                linkbutton("Instalación en Android TV",
                "Primeros pasos para la instalación de kodi en Android TV.",
                "/img/android.svg",
                Route.CONSTR.value,
                ),


        width = "100%",
        spacing=Size.MEDIUM.value,
    )