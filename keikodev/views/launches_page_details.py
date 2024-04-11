import reflex as rx
import keikodev.styles.styles as styles
import keikodev.views.constants as const
import datetime as datetime
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.linkbutton import linkbutton
from keikodev.models.launches import Nextlaunches
from keikodev.data.launch_services import create_launch_service, delete_launch_service,select_all_launches_service,update_launch_service
from typing import Optional



#LaunchesState = importlib.import_module("keikodev.pages.launches_page").LaunchesState

class LaunchesState(rx.State):
    list_launches:list[Nextlaunches]
    #buscarEmail: str
    error: str = ""
    #email: str

    @rx.background
    async def get_all_launches(self):
        async with self:
            self.list_launches = select_all_launches_service()
            #print(self.list_launches)

class Launch(rx.State):
    launch: Nextlaunches = []
    error = ""

    @rx.background
    async def create_launch(self, newlaunch: dict):
        if newlaunch["company"]!="":
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
        
    @rx.background
    async def delete_launch_by_id(self, id: int):
        async with self:
            self.launch = delete_launch_service(id)

    @rx.background
    async def update_user(self, update_user: dict):
        async with self:
            try:
                self.launch = update_launch_service(self.launch.id,
                                                company=update_user["company"], 
                                                rocket=update_user["rocket"], 
                                                mission=update_user['mission'],
                                                url_details=update_user['url_details'],
                                                url_live=update_user['url_live'],
                                                launch_date=datetime.datetime.strptime(update_user['launch_date'], "%d/%m/%Y %H:%M"),
                                                streamer=update_user['streamer'],
                                                channel=update_user['channel'],)
            except BaseException as be:
                print(be.args)
                self.error = be.args
        await self.handlenotify()


#def launches_page_details(list_launches: list[Nextlaunches])->rx.Component:
def launches_page_details()->rx.Component:
        return rx.flex(
                rx.heading("Gestión de base de datos de lanzamientos",
                        align = "center",
                        style={"color":TextColor.HEADER.value},
                        ),
                rx.hstack(
                create_launch_form_dialog(),
                    ),
                table_launches(LaunchesState.list_launches),
                spacing="3",
                justify="start",    
                direction="column",
                style={"width": "100%"},
                on_mount=LaunchesState.get_all_launches,
                on_focus=LaunchesState.get_all_launches,
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
        rx.table.cell(rx.hstack(
            delete_launch_dialog(launch.id),
            ),
        ),
        rx.table.cell(
                rx.hstack(
                    update_launch_dialog(launch.id,str(launch.launch_date),launch.mission,launch.rocket,launch.company,str(launch.url_details),str(launch.url_live),str(launch.streamer),str(launch.channel)),
            ),
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
            # rx.flex(
            #     rx.dialog.close(
            #         rx.button("Cancelar", color_scheme="gray", variant="soft")
            #     ),
            #     spacing="3",
            #     margin_top = "16px",
            #     justify="end",
            # ),
            style={"width":"600px"},
        ),
    )

def create_launch_form()->rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Compañía",
                name= "company",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Cohete",
                name= "rocket",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Mission",
                name= "mission",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Url Detalles",
                name= "url_details",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Url Directo",
                name= "url_live",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Fecha de lanzamiento: %d/%m/%Y %H:%M",
                name= "launch_date",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Streamer",
                name= "streamer",
                style=styles.launch_input,
            ),
            rx.input(
                placeholder="Canal del directo",
                name= "channel",
                style=styles.launch_input,
            ),
            rx.flex(
                rx.dialog.close(
                    rx.button("Guardar", type="submit"),
                ),
                rx.dialog.close(
                    rx.button("Cancelar", color_scheme="gray", variant="soft"),
                ),
                direction="row",
                align="baseline",
                justify="between",
                width="100%"
            ),
            #style={"width":"100%"},
        ),
        style={"width":"100%"},
        on_submit=Launch.create_launch,

    )

def delete_launch_dialog(id: str)->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button(rx.icon("trash-2"))),
        rx.dialog.content(
            rx.dialog.title("Eliminar registro"),
            rx.dialog.description("Está seguro que desea eliminar el registro ", id),
            rx.flex(
                rx.dialog.close(
                    rx.button(
                        "Cancelar",
                        color_scheme="gray",
                        variant="soft",
                    ),
                ),
                rx.dialog.close(
                    rx.button(
                        "Confirmar",
                        on_click=Launch.delete_launch_by_id(id)
                    ),
                ),
                spacing = "3",
                margin_top = "16px",
                justify="end",
            )
        )
    )

def update_launch_dialog(id:int,launch_date:str,mission:str,rocket:str,company:str,url_details:str,url_live:str,streamer:str,channel:str) -> rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button(rx.icon("pencil"))),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Modificar usuario"),
                update_user_form(id,launch_date,mission,rocket,company,url_details,url_live,streamer,channel),
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
            style={"width":"600px"},
        ),
    )

def update_user_form(id:int,launch_date:str,mission:str,rocket:str,company:str,url_live:str,streamer:str,channel:str,url_details:str="")->rx.Component:
    return rx.form(
        rx.vstack(

            rx.input(
                placeholder=company,
                name= "company",
                default_value=company,
                style=styles.launch_input,
            ),
            rx.input(
                placeholder=rocket,
                name= "rocket",
                default_value=rocket,
                style=styles.launch_input,
            ),
            rx.input(
                placeholder=mission,
                name= "mission",
                default_value=mission,
                style=styles.launch_input,
            ),
        
            rx.input(
                name= "url_details",
                default_value=url_details,
                style=styles.launch_input,
            ),

            rx.input(
                name= "url_live",
                default_value=url_live,
                style=styles.launch_input,
            ),
            rx.input(
                placeholder=launch_date,
                name= "launch_date",
                default_value=launch_date,
                style=styles.launch_input,
            ),
            rx.input(
                placeholder=streamer,
                name= "streamer",
                default_value=streamer,
                style=styles.launch_input,
            ),
            rx.input(
                placeholder=channel,
                name= "channel",
                default_value=channel,
                style=styles.launch_input,
            ),


            rx.dialog.close(
                rx.button("Guardar", type="submit"),

            ),

        ),
        #on_submit=UserState.update_user
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