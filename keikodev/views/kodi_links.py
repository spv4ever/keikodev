import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def kodi_links()-> rx.Component:
        return rx.vstack(
                title("Manuales Kodi"),
                linkbutton("Instalación en Windows y Android TV",
                "Primeros pasos para la instalación de kodi en Windows y Android TV.",
                "/img/windows.svg",
                Route.KODI_PC.value,
                is_external=False
                ),
                linkbutton("Instalación de Addons --> Luar",
                "Instalación de Luar paso a paso como estandar de instalación de addons desde una carpeta de la red",
                "/img/kodi2.png",
                Route.KODI_LUAR.value, #### Cambiar a Route.KODI_LUAR.value ####
                is_external=False
                ),


        width = "100%",
        spacing=Size.MEDIUM.value,
    )