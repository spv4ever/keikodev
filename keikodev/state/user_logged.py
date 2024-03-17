import reflex as rx

class Userlevel(rx.State):
    user_level: str = rx.Cookie("", name="usuario")

    def set_user_level(self, value: str):
        self.user_level = value

