import reflex as rx
from typing import Optional
from sqlmodel import Field
from datetime import datetime
import uuid

class User(rx.Base):
    id: int
    name: str
    email: str
    password: str
    user_type: str

class Usuarios(rx.Model, table = True):
    user_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    name: str
    email: str
    password: str
    user_type: str
    active: int
    dateregister: datetime

    






