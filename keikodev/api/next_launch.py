import datetime as datetime
from keikodev.models.launches import Nextlaunches
from keikodev.api.conectdb import connect
from sqlmodel import Session, select, desc, asc


def select_all():
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Nextlaunches).order_by(asc(Nextlaunches.launch_date))
            return session.exec(query).all()
    finally:
        engine.dispose

def select_future():
    fechaActual = datetime.datetime.now()
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Nextlaunches).where(Nextlaunches.launch_date >= fechaActual).order_by(asc(Nextlaunches.launch_date))
            return session.exec(query).all()
    finally:
        engine.dispose
        
def select_launch_by_id(id: int):
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Nextlaunches).where(Nextlaunches.id == id)
            return session.exec(query).all()
    finally:
        engine.dispose

def create_launch(launch:Nextlaunches):
    engine = connect()
    try:
        with Session(engine) as session:
            session.add(launch)
            session.commit()
            query = select(Nextlaunches).order_by(asc(Nextlaunches.launch_date))
            return session.exec(query).all()
    finally:
        engine.dispose


def delete_launch(id:int):
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Nextlaunches).where(Nextlaunches.id == id)
            launch_delete = session.exec(query).one()
            session.delete(launch_delete)
            session.commit()
            query = select(Nextlaunches)
            return session.exec(query).all()
    finally:
        engine.dispose
    

def update_launch(id:int, new_launch:Nextlaunches):
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Nextlaunches).where(Nextlaunches.id == id)
            launch_update = session.exec(query).one()
            launch_update.company = new_launch.company
            launch_update.rocket = new_launch.rocket
            launch_update.mission = new_launch.mission
            launch_update.url_details = new_launch.url_details
            launch_update.url_live = new_launch.url_live
            launch_update.launch_date = new_launch.launch_date
            launch_update.streamer = new_launch.streamer
            launch_update.channel = new_launch.channel
            session.add(launch_update)
            session.commit()
            session.refresh(launch_update)
            query = select(Nextlaunches)
            return session.exec(query).all()
    finally:
        engine.dispose

def select_launch_by_mision(mission: str):
    fechaActual = datetime.datetime.now()
    #print("Query base launch by mision")
    #print(mission)
    engine = connect()
    try:
        with Session(engine) as session:
            query = select(Nextlaunches).where((Nextlaunches.mission.startswith(mission))&(Nextlaunches.launch_date >=fechaActual)).order_by(asc(Nextlaunches.launch_date))
            # resultado = session.exec(query).all()
            # print(resultado)
            return session.exec(query).all()
    finally:
        engine.dispose


    

    


    # def create_user(user:Usuarios):
    # engine = connect()
    # with Session(engine) as session:
    #     session.add(user)
    #     session.commit()
    #     query = select(Usuarios)
    #     return session.exec(query).all()
    
