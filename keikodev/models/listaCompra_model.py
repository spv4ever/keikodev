import reflex as rx
from sqlmodel import Field
import uuid
from datetime import datetime

class Productos(rx.Model, table=True):
    product_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    name: str
    category: str
    description: str
    image_url: str

class Supermercados(rx.Model, table=True):
    market_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    name: str
    location: str
    opening_hours: str

class Listas_de_Compra(rx.Model, table=True):
    list_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    user_id: str
    name: str
    creation_date: str

class Productos_en_Lista_de_Compra(rx.Model, table=True):
    list_product_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    list_id: str
    product_id: str
    quantity: int
    bought: bool

class Frecuencia_de_compra(rx.Model, table=True):
    frequency_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    product_id: str
    frequency: str

class Entradas_de_Recibos(rx.Model, table=True):
    receipt_id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True, index=True)
    user_id: str
    purchase_date: datetime
    total_price: float
    market_id: str

    












