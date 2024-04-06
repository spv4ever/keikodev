from keikodev.models.launches import Nextlaunches
from keikodev.api.conectdb import connect
from sqlmodel import Session, select

def select_all():
    engine = connect()
    with Session(engine) as session:
        query = select(Nextlaunches)
        return session.exec(query).all()
    
