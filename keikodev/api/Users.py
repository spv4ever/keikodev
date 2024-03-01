import reflex as rx
import json
from keikodev.api.db import Database
from keikodev.models.user import User
from datetime import datetime

class UsersState(rx.State):
    name = str
    email = str
    token = dict

    def check_user(self,token):
        db = Database()
        self.email = token['email']
        self.name = token['name']
        # print(self.email)
        # print(self.name)
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
            print("insertando usuario", self.name)
            db.insert("usuarios", json.loads(json_user))
        else:
            print("El usuario ya existe: ",existe[0][2])




