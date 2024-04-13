import reflex as rx
from keikodev.state.countdown import CountdownState
import keikodev.styles.styles as styles
from keikodev.styles.styles import Size as Size
from keikodev.styles.styles import SizeRx as SizeRx
from keikodev.styles.colors import Color
import keikodev.views.constants as constants
from keikodev.state.next_launch_state import Nextlaunch
from keikodev.models.launches import Launches
from keikodev.data.youtube_services import links_youtube_service

class NextLaunchState(rx.State):
    links: list
    mission: str
    
    @rx.background
    async def get_youtube_links(self):
        async with self:
            self.links = links_youtube_service("Starlink")
    
    def toma_mision(self, mission:str):
        self.mission = mission
                
        

def next_live(next_launch: Launches)-> rx.Component:
    return rx.vstack(
                rx.box(
                    rx.vstack(
                        rx.text(f"Misión: {next_launch.mission}",
                                size=SizeRx.DEFAULT.value,
                                width = "100%",
                                align = "center",
                                style=styles.title_news_style,
                                ),
                        rx.text(f"{next_launch.company} - {next_launch.rocket}",
                                size=SizeRx.DEFAULT.value,
                                width = "100%",
                                align = "center",
                                style=styles.title_news_style,
                                
                                ),
                        rx.text(f"Día: {next_launch.launch_date[8:10]}/{next_launch.launch_date[5:7]}/{next_launch.launch_date[:4]} - Hora: {next_launch.launch_date[11:16]}",
                            width="100%",
                            align="center",
                            ),
                        rx.cond(    
                            next_launch.streamer,
                            rx.text(f"Sigue el lanzamiento con: {next_launch.streamer}",
                                width="100%",
                                align="center",
                                ),
                        ),
                        rx.hstack(
                            rx.button("Detalles de misión",
                                    variant="soft",
                                    on_click=rx.redirect(next_launch.url_details, external=True),
                                    _hover={"cursor": "pointer"},),
                            rx.cond(    
                                next_launch.url_live,
                                rx.button("Directo",
                                        variant="soft",
                                        on_click=rx.redirect(next_launch.url_live, external=True),
                                        _hover={"cursor": "pointer"},
                                        ),
                            ),
                            rx.cond(    
                                next_launch.channel,
                                rx.button("Canal",
                                        variant="soft",
                                        on_click=rx.redirect(next_launch.channel, external=True),
                                        _hover={"cursor": "pointer"},
                                        ),
                            ),
                            #style=styles.title_news_style,
                            
                            width = "100%",
                            justify="center",
                        ),
                    style=styles.title_news_style,
                    width = "100%",
                    justify="center",
                ),
                style = styles.box_news_style,
                background_color=Color.CONTENT.value,
                # border_radius="15px",
                width="100%",
                padding = Size.DEFAULT.value,
            ),
        width = "100%",
    )