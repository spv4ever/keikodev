from keikodev.api.next_launch import select_all, create_launch
from keikodev.models.launches import Nextlaunches
import datetime as datetime

def select_all_launches_service():
    launches = select_all()
    return launches

def create_launch_service(company: str, rocket: str, mission: str, url_details:str,url_live:str,launch_date:datetime,streamer:str,channel:str):
    #new_user = Nextlaunches(name=name,email=email,password=password,user_type=0,active = 1, dateregister = datetime.datetime.now())
    new_launch = Nextlaunches(company=company,rocket=rocket,mission=mission, url_details=url_details,url_live=url_live,launch_date=launch_date,streamer=streamer,channel=channel)
    return create_launch(new_launch)



#     id: Optional[int] = Field(default=None, primary_key=True)
#     company: str
#     rocket: str
#     mission: str
#     url_details: Optional[str]
#     url_live: Optional[str]
#     launch_date: str
#     streamer: Optional[str]
#     channel: Optional[str]