import reflex as rx

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

