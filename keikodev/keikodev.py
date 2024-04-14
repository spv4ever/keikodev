# chatapp.py
import reflex as rx
import keikodev.views.constants as const
import keikodev.styles.styles as styles
from keikodev.pages.index import index
from keikodev.pages.dev import dev
from keikodev.pages.constr import constr
from keikodev.pages.estafas import estafas
from keikodev.pages.utils_images import utils_images
from keikodev.pages.galeria import galeria
from keikodev.pages.galeria_nasa import galeria_nasa
from keikodev.pages.galeria_nasa_video import galeria_nasa_video
from keikodev.pages.cookies import cookies
from keikodev.pages.privacidad import privacidad
from keikodev.pages.cursos import cursos
from keikodev.pages.trucos import trucos
from keikodev.pages.keiko import keiko
from keikodev.pages.keiko_interes import keiko_interes
from keikodev.pages.keiko_cuidados import keiko_cuidados
from keikodev.pages.google_auth import index_login
from keikodev.pages.cocina import cocina
from keikodev.state.PageState import PageState
from google.auth.transport import requests
from google.oauth2.id_token import verify_oauth2_token
from keikodev.data.info_interes import leerPost
from keikodev.pages.spacex import spacex
from keikodev.pages.galeria_starship_video import galeria_starship_video
from keikodev.pages.user_page import user_page
from keikodev.pages.iatools import ia_tools

import dotenv

from keikodev.api.api import repo as repo
from keikodev.api.api import live as live
from keikodev.api.api import hello as hello
from keikodev.api.api import foto as foto
from keikodev.api.api import consultaDB as consultaDB
import functools
import json
import os
import time
from .pages.react_oauth_google import GoogleOAuthProvider, GoogleLogin
from keikodev.componentes.adsscript import ads_script


dotenv.load_dotenv()
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "")

#leerPost()



class State(rx.State):
    id_token_json: str = rx.LocalStorage()

    def on_success(self, id_token: dict):
        self.id_token_json = json.dumps(id_token)

    @rx.cached_var
    def tokeninfo(self) -> dict[str, str]:
        try:
            return verify_oauth2_token(
                json.loads(self.id_token_json)["credential"],
                requests.Request(),
                GOOGLE_CLIENT_ID,
            )
        except Exception as exc:
            if self.id_token_json:
                print(f"Error verifying token: {exc}")
        return {}

    def logout(self):
        self.id_token_json = ""

    @rx.var
    def token_is_valid(self) -> bool:
        try:
            return bool(
                self.tokeninfo
                and int(self.tokeninfo.get("exp", 0)) > time.time()
            )
        except Exception:
            return False

    @rx.cached_var
    def protected_content(self) -> str:
        if self.token_is_valid:
            return f"This content can only be viewed by a logged in User. Nice to see you {self.tokeninfo['name']}"
        return "Not logged in."


def user_info(tokeninfo: dict) -> rx.Component:
    return rx.chakra.hstack(
        rx.chakra.avatar(
            name=tokeninfo["name"],
            src=tokeninfo["picture"],
            size="lg",
        ),
        rx.chakra.vstack(
            rx.chakra.heading(tokeninfo["name"], size="md"),
            rx.chakra.text(tokeninfo["email"]),
            align_items="flex-start",
        ),
        rx.chakra.button("Logout", on_click=State.logout),
        padding="10px",
    )


def login() -> rx.Component:
    return rx.chakra.vstack(
        GoogleLogin.create(on_success=State.on_success),
    )


def require_google_login(page) -> rx.Component:
    @functools.wraps(page)
    def _auth_wrapper() -> rx.Component:
        return GoogleOAuthProvider.create(
            rx.cond(
                State.is_hydrated,
                rx.cond(State.token_is_valid, page(), login()),
                rx.chakra.spinner(),
            ),
            client_id=GOOGLE_CLIENT_ID,
        )
    return _auth_wrapper


def index():
    return rx.chakra.vstack(
        rx.chakra.heading("Google OAuth", size="lg"),
        rx.chakra.link("Protected Page", href="/protected"),
    )


@rx.page(route="/protected")
@require_google_login
def protected() -> rx.Component:
    return rx.chakra.vstack(
        user_info(State.tokeninfo),
        rx.chakra.text(State.protected_content),
        rx.chakra.link("Home", href="/"),
    )
##### Formación de backend


app = rx.App(
        head_components=[ads_script,
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
    style = styles.BASE_STYLE,
    stylesheets=styles.STYLESHEETS,
)

app.head_components.append(
    rx.script(
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7920736444321179",
        custom_attrs={"async": "", "crossorigin": "anonymous"}
    )
)



# app.api.add_api_route("/hello",hello)
# app.api.add_api_route("/db",consultaDB)
# app.api.add_api_route("/repo", repo)
# app.api.add_api_route("/live/{user}", live)

# app.api.add_api_route("/foto", foto)


