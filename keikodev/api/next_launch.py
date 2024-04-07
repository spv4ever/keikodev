from keikodev.models.launches import Nextlaunches
from keikodev.api.conectdb import connect
from sqlmodel import Session, select, desc

def select_all():
    engine = connect()
    with Session(engine) as session:
        query = select(Nextlaunches).order_by(desc(Nextlaunches.launch_date))
        return session.exec(query).all()
    
def create_launch(launch:Nextlaunches):
    engine = connect()
    with Session(engine) as session:
        session.add(launch)
        session.commit()
        query = select(Nextlaunches)
        return session.exec(query).all()
    
