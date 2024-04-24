import datetime as datetime
from keikodev.models.iatools_model import Iatools
from keikodev.api.conectdb import connect
from sqlmodel import Session, select, desc, asc, func

def select_all():
    engine = connect()
    with Session(engine) as session:
        query = select(Iatools)
        return session.exec(query).all()
    
def select_last():
    engine = connect()
    with Session(engine) as session:
        query = select(Iatools).order_by(desc(Iatools.id)).limit(1)

    return session.exec(query).all()




def select_type(type:str):
    engine = connect()
    with Session(engine) as session:
        query = select(Iatools).where(Iatools.tipo==type)
        return session.exec(query).all()
    
def create_iatool(iatool:Iatools):
    engine = connect()
    with Session(engine) as session:
        session.add(iatool)
        session.commit()
        query = select(Iatools)
        return session.exec(query).all()
    
def select_tipos():
    engine = connect()
    with Session(engine) as session:
        query = select(Iatools.tipo, func.count().label("numero")).group_by(Iatools.tipo)
        return session.exec(query).all()

