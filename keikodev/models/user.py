import reflex as rx
from typing import Optional
from sqlmodel import Field
from datetime import datetime


class User(rx.Base):
    id: int
    name: str
    email: str
    password: str
    user_type: str

class Usuarios(rx.Model, table = True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    email: str
    password: str
    user_type: str
    active: int
    dateregister: datetime

    






