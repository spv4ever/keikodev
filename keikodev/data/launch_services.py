from keikodev.api.next_launch import select_all, create_launch, delete_launch, select_launch_by_id, update_launch
from keikodev.models.launches import Nextlaunches
import datetime as datetime

def select_all_launches_service():
    launches = select_all()
    return launches

def select_launch_by_id_service(id: int):
    if id!=0:
        return select_launch_by_id(id)
    else:
        return select_all()

def create_launch_service(company: str, rocket: str, mission: str, url_details:str,url_live:str,launch_date:datetime,streamer:str,channel:str):
    #new_user = Nextlaunches(name=name,email=email,password=password,user_type=0,active = 1, dateregister = datetime.datetime.now())
    new_launch = Nextlaunches(company=company,rocket=rocket,mission=mission, url_details=url_details,url_live=url_live,launch_date=launch_date,streamer=streamer,channel=channel)
    return create_launch(new_launch)

def delete_launch_service(id:int):
    return delete_launch(id=id)

def update_launch_service(id: int, company: str, rocket: str, mission: str, url_details:str,url_live:str,launch_date:datetime,streamer:str,channel:str):
        launch = select_launch_by_id_service(id)
        if len(launch) != 0:
            updated_user = Nextlaunches(company=company,rocket=rocket,mission=mission, url_details=url_details,url_live=url_live,launch_date=launch_date,streamer=streamer,channel=channel)
            return update_launch(id, updated_user)
        else:
            print("El usuario no existe para ser editado")
            raise BaseException("El usuario no existe para ser editado")
        

    # company: str
    # rocket: str
    # mission: str
    # url_details: Optional[str]
    # url_live: Optional[str]
    # launch_date: datetime
    # streamer: Optional[str]
    # channel: Optional[str]


