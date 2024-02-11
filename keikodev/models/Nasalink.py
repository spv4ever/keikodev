from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class Nasalink(BaseModel):
    id: int | None
    date: str
    url: str
    title: str
    explanation: str
    hdurl: str



