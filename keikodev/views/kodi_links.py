import reflex as rx
import keikodev.data.anuncios as anuncios
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route
from keikodev.pages.kodi_kodivertido import kodi_kodivertido
from keikodev.pages.kodi_cristalazul import kodi_cristalazul
from keikodev.pages.kodi_tvchopo import kodi_tvchopo
from keikodev.pages.kodi_balandro import kodi_balandro

from keikodev.pages.google_auth import require_google_login

#@require_google_login
def kodi_links()-> rx.Component:
        return rx.chakra.vstack(
                title("Sección dedicada a Kodi"),
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
                linkbutton("Trucos para kodi",
                "Mejora el rendimiento, soluciona problemas de configuración...",
                "/img/kodi2.png",
                Route.KODI_TRUCOS.value,
                is_external=False
                ),

                rx.link(
                        rx.image(
                                src=anuncios.anuncio_kodi_imagen,
                                border_radius="15px",
                        ),
                        href=anuncios.anuncio_kodi_url,
                        is_external=True,
                ),
                linkbutton("Instalación de Addon Luar",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.KODI_LUAR.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Kodivertido",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.KODI_KODIVERTIDO.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Cristal Azul",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.KODI_CRISTALAZUL.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Tv Chopo",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.KODI_TVCHOPO.value,
                is_external=False
                ),
                linkbutton("Instalación de Addon Balandro",
                "Instalación, gestión, mantenimento, actualización de complementos para kodi.",
                "/img/kodi2.png",
                Route.KODI_BALANDRO.value,
                is_external=False
                ),

        width = "100%",
        spacing=Size.MEDIUM.value,
        )