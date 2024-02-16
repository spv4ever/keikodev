# chatapp.py
import reflex as rx
import keikodev.views.constants as const
import keikodev.styles.styles as styles
from keikodev.pages.index import index
from keikodev.pages.dev import dev
from keikodev.pages.constr import constr
from keikodev.pages.kodi import kodi
from keikodev.pages.kodi_addons import kodi_addons
from keikodev.pages.kodi_pc import kodi_pc
from keikodev.pages.kodi_luar import kodi_luar
from keikodev.pages.estafas import estafas
from keikodev.pages.utils_images import utils_images
from keikodev.pages.galeria import galeria
from keikodev.pages.galeria_nasa import galeria_nasa
from keikodev.pages.emulator import emulator
from keikodev.pages.cookies import cookies
from keikodev.pages.privacidad import privacidad
from keikodev.pages.cursos import cursos
from keikodev.pages.trucos import trucos
from keikodev.pages.kodi_trucos import kodi_trucos

from keikodev.api.api import repo as repo
from keikodev.api.api import live as live
from keikodev.api.api import hello as hello
from keikodev.api.api import foto as foto




##### Formación de backend


app = rx.App(
    style = styles.BASE_STYLE,
    stylesheets=styles.STYLESHEETS,
        head_components=[
        rx.script(
            src=f"https://www.googletagmanager.com/gtag/js?id={const.G_TAG}"),
        rx.script(
            f"""
                window.dataLayer = window.dataLayer || [];
                function gtag(){{dataLayer.push(arguments);}}
                gtag('js', new Date());
                gtag('config', '{const.G_TAG}');
            """
        ),
    ],
)

#app.api.add_api_route("/hello",hello)
app.api.add_api_route("/repo", repo)
app.api.add_api_route("/live/{user}", live)
app.api.add_api_route("/foto", foto)


