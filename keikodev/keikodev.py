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
from keikodev.pages.estafas import estafas
from keikodev.pages.utils_images import utils_images

##### Formación de backend


app = rx.App(
    style = styles.BASE_STYLE,
    stylesheets=["fonts/Fonts.css"],
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
