import reflex as rx
import json
from keikodev.api.db import Database
from keikodev.models.user import User
from datetime import datetime
from keikodev.state.user_logged import Userlevel

class Users():
    name: str
    email: str
    token: dict
    user: User

    def __init__(self):
        pass

    def check_user(self,token):
        db = Database()
        self.email = token['email']
        self.name = token['name']
        existe = db.where("usuarios",f"email='{self.email}'")
        
        if not existe:
            user_temp = {
                "name": self.name,
                "email": self.email,
                "password": "",
                "user_type": 0,
                "active": True,
                "dateRegister": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
            }
            json_user = json.dumps(user_temp)
            db.insert("usuarios", json.loads(json_user))
        else:
            print(f"El usuario ya existe: {existe[0][2]} tipo: {existe[0][4]}")
            self.name = existe[0][1]
            print(self.name)
            self.user = User(
                    id = existe[0][0],
                    name = existe[0][1],
                    email = existe[0][2],
                    password = existe[0][3],
                    user_type = f"{existe[0][4]}")
        return self.user.user_type





