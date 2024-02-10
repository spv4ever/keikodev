from pydantic import BaseModel
from datetime import datetime

class nasaLink(BaseModel):
    id: str | None
    date: datetime
    url: str
    title: str
    explanation: str
    hdurl: str


