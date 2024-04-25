from keikodev.models.user import Usuarios
from keikodev.api.conectdb import connect
from sqlmodel import Session, select

def select_all():
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Usuarios)
            return session.exec(query).all()
    finally:
        engine.dispose

def select_user_by_email(email: str):
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Usuarios).where(Usuarios.email == email)
            return session.exec(query).all()
    finally:
        engine.dispose

def create_user(user:Usuarios):
    engine = connect()
    try:
        with Session(engine) as session:
            session.add(user)
            session.commit()
            query = select(Usuarios)
            return session.exec(query).all()
    finally:
        engine.dispose

def delete_user(email:str):
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Usuarios).where(Usuarios.email == email)
            user_delete = session.exec(query).one()
            session.delete(user_delete)
            session.commit()
            query = select(Usuarios)
            return session.exec(query).all()
    finally:
        engine.dispose
        
def update_user(email:str, new_user:Usuarios):
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Usuarios).where(Usuarios.email == email)
            user_update = session.exec(query).one()
            user_update.name = new_user.name
            user_update.password = new_user.password
            user_update.active = new_user.active
            session.add(user_update)
            session.commit()
            session.refresh(user_update)
            query = select(Usuarios)
            return session.exec(query).all()
    finally:
        engine.dispose


