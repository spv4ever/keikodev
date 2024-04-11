import reflex as rx
from typing import Optional
from sqlmodel import Field
from datetime import datetime

class Launches(rx.Base):
    id: int
    company: str
    rocket: str
    mission: str
    url_details: str | None
    url_live: str | None
    launch_date: str
    streamer: str | None
    channel: str | None

##### Definición de modelo para gestión de la base de datos con SQLMODEL
class Nextlaunches(rx.Model, table = True):
    id: Optional[int] = Field(default=None, primary_key=True)
    company: str
    rocket: str
    mission: str
    url_details: Optional[str]=""
    url_live: Optional[str]=""
    launch_date: datetime
    streamer: Optional[str]=""
    channel: Optional[str]=""



