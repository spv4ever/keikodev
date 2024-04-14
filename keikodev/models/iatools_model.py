import reflex as rx
from sqlmodel import Field
import uuid

class Iatool(rx.Model, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    herramientaAI: str
    descripcion: str
    url: str
    tipo: str
    planGratuito: bool
    estrellas: int