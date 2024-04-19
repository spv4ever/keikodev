import reflex as rx
from sqlmodel import Field
import uuid

class Iatools(rx.Model, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    herramientaAI: str
    descripcion: str
    url: str
    tipo: str
    planGratuito: bool
    estrellas: int
    icon: str = ""
    url_formacion: str

class Tipo(rx.Model):
    nombre: str
    numero: int