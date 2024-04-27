from keikodev.api.userdb import select_all, select_user_by_email, create_user, delete_user, update_user
from keikodev.models.user import Usuarios
import datetime as datetime



def select_all_user_service():
    users = select_all()
    #print(users)
    return users

def select_user_by_email_service(email: str):
    if (len(email)!=0):
        return select_user_by_email(email)
    else:
        return select_all()
    
def login_user_by_email_service(email: str):
    if (len(email)!=0):
        return select_user_by_email(email)

    
def create_user_service(name: str, email: str, password: str):
        user = select_user_by_email(email)
        if len(user) == 0:
            new_user = Usuarios(name=name,email=email,password=password,user_type=1,active = 1, dateregister = datetime.datetime.now())
            return create_user(new_user)
        else:
            print("El usuario ya existe")
            raise BaseException("El usuario ya existe")

def delete_user_service(email:str):
    return delete_user(email=email)

def update_user_service(name: str, email: str, password: str, active: int):
        #print(email)
        user = select_user_by_email(email)
        if len(user) != 0:
            #updated_user = Usuarios(name=name,email=user[0].email,password=password,user_type=user[0].user_type, active=active, dateregister = user[0].dateregister)
            updated_user = Usuarios(name=name,password=password,active=active)
            return update_user(email, updated_user)
        else:
            print("El usuario no existe para ser editado")
            raise BaseException("El usuario no existe para ser editado")