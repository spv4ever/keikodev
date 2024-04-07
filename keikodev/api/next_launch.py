from keikodev.models.launches import Nextlaunches
from keikodev.api.conectdb import connect
from sqlmodel import Session, select, desc

def select_all():
    engine = connect()
    with Session(engine) as session:
        query = select(Nextlaunches).order_by(desc(Nextlaunches.launch_date))
        return session.exec(query).all()
    
