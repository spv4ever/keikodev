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
                linkbutton("Instalación de Addons",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.KODI_ADDONS.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Luar",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.CONSTR.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Kodivertido",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.CONSTR.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Cristal Azul",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.CONSTR.value,
                is_external=False
                ),



        width = "100%",
        spacing=Size.MEDIUM.value,
    )