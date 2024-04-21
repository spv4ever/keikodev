from pydantic import BaseModel
from datetime import datetime
from typing import Optional
import reflex as rx
from sqlmodel import Field

class Nasalink(BaseModel):
    id: int | None
    date: str
    url: str
    title: str
    explanation: str
    hdurl: str



class Nasa_imagenes(rx.Model, table=True):
    ref: int = Field(primary_key=True, index=True)
    fecha: datetime
    url: str
    titulo: str
    descripcion: str
    hdurl: str
    copyright: str
    media_type: str



