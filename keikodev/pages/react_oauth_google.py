import reflex as rx
from google.auth.transport import requests
from google.oauth2.id_token import verify_oauth2_token
import dotenv
import os


class GoogleOAuthProvider(rx.Component):
    library = "@react-oauth/google"
    tag = "GoogleOAuthProvider"

    client_id: rx.Var[str]

class GoogleLogin(rx.Component):
    library = "@react-oauth/google"
    tag = "GoogleLogin"
    theme = "filled_blue"
    size = "small"
    text = "signin"

    def get_event_triggers(self):
        return {"on_success": lambda data: [data]}
    

