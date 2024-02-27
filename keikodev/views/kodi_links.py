import reflex as rx
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
                                src='/img/xiaomi.gif',
                                border_radius="15px",
                        ),
                        href="https://www.amazon.es/Xiaomi-Box-2nd-Gen-procesador/dp/B0C1DJWGYV?crid=R57GB4XBUFHV&dib=eyJ2IjoiMSJ9.f0xFT-wMbQk7B6HftgmqbFGXQ6ZhCj_zvqEfiFHgdJWfgXfjHl1OtJLs4gNWQIc5BEmZDPSGUD7OJ1D6sz8HAdV0PUNJBHngJXY_N5I5VWUAPmjBZ7KT-uL7_SvKYC0UHU_vgeG5b07h6mKfptjidcTLOHJq0VUDHy8QpPa4E0g1PxXIYT_eap3S8hBHOTrRrMU0lygAIPK_SCec6cdChA.bPKXl0sr_22eFjj4YFV-BIEI_ukMeJTsdsX1PG1UBWI&dib_tag=se&keywords=android+tv+box&qid=1709066864&refinements=p_123%3A338933&rnid=91049100031&s=electronics&sprefix=android+%2Caps%2C149&sr=1-1&linkCode=ll1&tag=keikodev-21&linkId=d2e5d56e702db348ced662b4c4b6df5e&language=es_ES&ref_=as_li_ss_tl",
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