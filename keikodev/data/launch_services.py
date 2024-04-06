from keikodev.api.next_launch import select_all
from keikodev.models.launches import Nextlaunches
import datetime as datetime

def select_all_launches_service():
    launches = select_all()
    return launches