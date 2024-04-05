import reflex as rx
import functools
import json
import os
import time
import dotenv
from google.auth.transport import requests
from google.oauth2.id_token import verify_oauth2_token
from keikodev.pages.react_oauth_google import GoogleOAuthProvider, GoogleLogin
from keikodev.styles.colors import Color, TextColor
from keikodev.styles.styles import Size
from keikodev.api.Users import Users
from keikodev.state.user_logged import Userlevel
from keikodev.data.user_service import select_user_by_email_service, create_user_service
from keikodev.models.user import Usuarios



dotenv.load_dotenv()
GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "")


#user = UsersState()


class StateLogin(rx.State):
    id_token_json: str = rx.LocalStorage()
    user_level: str
    usuario_loggado: list[Usuarios]
    user_type: int
    email: str
    name: str
    password: str
    users_rights:int = 0

    def on_success(self, id_token: dict):
        self.id_token_json = json.dumps(id_token)
    
    @rx.var
    def users_rights(self):
        #print(self.email)
        if self.email != "":
            self.usuario_loggado = select_user_by_email_service(self.email)
        #print(self.usuario_loggado)
        self.user_type = 0
        if len(self.usuario_loggado) == 0:
            self.user_type = 0
            if self.email != "":
                create_user_service(self.name,self.email,self.password)
        else:
            #print("entrando a actualizar derechos")
            self.user_type = self.usuario_loggado[0].user_type
        #print(self.user_type)

        return self.user_type

    @rx.cached_var
    def tokeninfo(self) -> dict[str, str]:
        try:
            var = verify_oauth2_token(
                json.loads(self.id_token_json)["credential"],
                requests.Request(),
                GOOGLE_CLIENT_ID,
            )
            self.email = var['email']
            self.name = var['name']
            self.password = ""
            self.user_type=0
            
            return var 
        except Exception as exc:
            if self.id_token_json:
                print(f"GAuth.py Error verifying token: {exc}")
        return {}

    def logout(self):
        #print("cerrando sesión")
        self.id_token_json = ""
        self.email = ""
        self.usuario_loggado = []
        #Userlevel.set_user_level("")

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
        if self.token_is_valid is False:
            return "Not logged in."

            #return f"This content can only be viewed by a logged in User. Nice to see you {self.tokeninfo['name']}"
        


def user_info(tokeninfo: dict) -> rx.Component:
    return rx.chakra.box(
            rx.chakra.hstack(
                rx.chakra.avatar(
                    name=tokeninfo["name"],
                    src=tokeninfo["picture"],
                    size="md",
                    display=["none","none","flex","flex","flex"],
                    #on_mouse_over=UsersState.check_user(tokeninfo["email"]),
                ),
                rx.chakra.vstack(
                    rx.chakra.heading(tokeninfo["name"],
                                    font_size = Size.MEDIUM.value,
                                    size="xs",
                                    ),
                    rx.chakra.text(tokeninfo["email"],
                                color = Color.PRIMARY.value,
                                font_size = Size.MEDIUM.value,
                                margin=Size.ZERO.value,
                                display=["none","none","flex","flex","flex"],
                                ),
                    align_items="center",
                ),
                rx.chakra.button("Cerrar", 
                    size="xs",
                    margin=Size.ZERO.value,
                    on_click=StateLogin.logout
                ),
                align_items="center",
                justify_content = "center",
                padding="10px",
    ),
    height = "100%",
    display = "flex",
    align_items="center",
    justify_content = "center",


    )


def login() -> rx.Component:
    return rx.chakra.vstack(
        GoogleLogin.create(on_success=StateLogin.on_success),
    )


def require_google_login(page) -> rx.Component:
    @functools.wraps(page)
    def _auth_wrapper() -> rx.Component:
        return GoogleOAuthProvider.create(
            rx.cond(
                StateLogin.is_hydrated,
                rx.cond(StateLogin.token_is_valid, page(), login()),
                rx.chakra.spinner(),
            ),
            client_id=GOOGLE_CLIENT_ID,
        )
    return _auth_wrapper


def index_login():
    return rx.chakra.vstack(
        rx.chakra.heading("Google OAuth", size="lg"),
        rx.chakra.link("Protected Page", href="/protected"),
    )


#@rx.page(route="/protected")
@require_google_login
def protected() -> rx.Component:
    return rx.chakra.vstack(
        user_info(StateLogin.tokeninfo),
        rx.chakra.text(StateLogin.protected_content),
        #rx.chakra.link("Home", href="/"),
    )