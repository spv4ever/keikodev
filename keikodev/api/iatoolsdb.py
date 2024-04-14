import datetime as datetime
from keikodev.models.iatools_model import Iatools
from keikodev.api.conectdb import connect
from sqlmodel import Session, select, desc, asc

def select_all():
    engine = connect()
    with Session(engine) as session:
        query = select(Iatools)
        return session.exec(query).all()
    
