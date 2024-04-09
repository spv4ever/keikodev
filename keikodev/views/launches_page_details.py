import reflex as rx
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.linkbutton import linkbutton
from keikodev.models.launches import Nextlaunches
from keikodev.data.launch_services import create_launch_service,select_all_launches_service
import datetime as datetime
#import importlib

#LaunchesState = importlib.import_module("keikodev.pages.launches_page").LaunchesState



class Launch(rx.State):
    launch: Nextlaunches = []
    error = ""

    @rx.background
    async def create_launch(self, newlaunch: dict):
        async with self:
            try:
                self.launch = create_launch_service(company=newlaunch["company"], 
                                                    rocket=newlaunch["rocket"], 
                                                    mission=newlaunch['mission'],
                                                    url_details=newlaunch['url_details'],
                                                    url_live=newlaunch['url_live'],
                                                    launch_date=datetime.datetime.strptime(newlaunch['launch_date'], "%d/%m/%Y %H:%M"),
                                                    streamer=newlaunch['streamer'],
                                                    channel=newlaunch['channel'],
                                                    )
                
                
            except BaseException as be:
                print(be.args)
                self.error = be.args




def launches_page_details(list_launches: list[Nextlaunches])->rx.Component:
        return rx.flex(
                rx.heading("Gestión de base de datos de lanzamientos",
                        align = "center",
                        style={"color":TextColor.HEADER.value},
                        ),
                rx.hstack(
                create_launch_form_dialog(),
                    ),
                table_launches(list_launches),
                spacing="3",
                justify="start",    
                direction="column",
                style={"width": "100%"},
        )

def table_launches(list_launches: list[Nextlaunches]) -> rx.Component:
#def table_launches() -> rx.Component:
    return rx.table.root(
        rx.table.header(
            rx.table.row(
                rx.table.column_header_cell("Id Lanzamiento"),
                rx.table.column_header_cell("Fecha Lanzamiento"),
                rx.table.column_header_cell("Misión"),
                rx.table.column_header_cell("Cohete"),
                rx.table.column_header_cell("Compañía"),
                rx.table.column_header_cell("Detalles"),
                rx.table.column_header_cell("Directo"),
                rx.table.column_header_cell("Streamer"),
                rx.table.column_header_cell("Canal"),
                rx.table.column_header_cell("Eliminar"),
                rx.table.column_header_cell("Editar"),
                style = {"color": TextColor.HEADER.value, "background_color": Color.CONTENT.value},
                ),
            ),
        rx.table.body(
            rx.foreach(list_launches, row_table)
        ),
        variant="surface",
    )

def row_table(launch: Nextlaunches)-> rx.Component: 
    return rx.table.row(
        rx.table.cell(launch.id),
        rx.table.cell(launch.launch_date),
        rx.table.cell(launch.mission),
        rx.table.cell(launch.rocket),
        rx.table.cell(launch.company),
        rx.table.cell(rx.flex(
                rx.cond(launch.url_details,rx.icon("check",color="Green"),rx.icon("x",color="Red")),
                align="center",
                justify="center",
                ),
                align="center",
        ),
        rx.table.cell(rx.flex(
                rx.cond(launch.url_live,rx.icon("check",color="Green"),rx.icon("x",color="Red")),
                align="center",
                justify="center",
                ),
                align="center",
        ),
        rx.table.cell(rx.flex(
                rx.cond(launch.streamer,rx.icon("check",color="Green"),rx.icon("x",color="Red")),
                align="center",
                justify="center",
                ),
                align="center",
        ),
        rx.table.cell(rx.flex(
                rx.cond(launch.channel,rx.icon("check",color="Green"),rx.icon("x",color="Red")),
                align="center",
                justify="center",
                ),
                align="center",
        ),
        style = {"color": TextColor.HEADER.value, "background_color": Color.BACKGROUND.value},
    )

def create_launch_form_dialog()->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button("Crear Lanzamiento")),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Nuevo lanzamiento"),
                create_launch_form(),
                justify="center",
                align="center",
                direction="column",
            ),
            rx.flex(
                rx.dialog.close(
                    rx.button("Cancelar", color_scheme="gray", variant="soft")
                ),
                spacing="3",
                margin_top = "16px",
                justify="end",
            ),
            style={"width":"300px"},
        ),
    )

def create_launch_form()->rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Compañía",
                name= "company"
            ),
            rx.input(
                placeholder="Cohete",
                name= "rocket"
            ),
            rx.input(
                placeholder="Mission",
                name= "mission",
            ),
            rx.input(
                placeholder="Url Detalles",
                name= "url_details",
            ),
            rx.input(
                placeholder="Url Directo",
                name= "url_live",
            ),
            rx.input(
                placeholder="Fecha de lanzamiento: %d/%m/%Y %H:%M",
                name= "launch_date",
            ),
            rx.input(
                placeholder="Streamer",
                name= "streamer",
            ),
            rx.input(
                placeholder="Canal del directo",
                name= "channel",
            ),

            rx.dialog.close(
                rx.button("Guardar", type="submit"),
            ),
            
        ),
        on_submit=Launch.create_launch,
    )


#     id: Optional[int] = Field(default=None, primary_key=True)
#     company: str
#     rocket: str
#     mission: str
#     url_details: Optional[str]
#     url_live: Optional[str]
#     launch_date: str
#     streamer: Optional[str]
#     channel: Optional[str]