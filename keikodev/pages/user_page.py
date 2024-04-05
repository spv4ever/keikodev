import reflex as rx
from keikodev.models.user import Usuarios
from keikodev.data.user_service import select_all_user_service, select_user_by_email_service, create_user_service, delete_user_service, update_user_service
from keikodev.componentes.notify import notify_component
from keikodev.styles.colors import TextColor
from keikodev.pages.google_auth import StateLogin
import asyncio




class UserState(rx.State):
    users:list[Usuarios]
    buscarEmail: str
    error: str = ""
    email: str

    @rx.background
    async def get_all_users(self):
        async with self:
            self.users = select_all_user_service()

    @rx.background
    async def get_user_by_email(self):
        async with self:
            self.users = select_user_by_email_service(self.buscarEmail)

    @rx.background
    async def delete_user_by_email(self, email: str):
        async with self:
            self.users = delete_user_service(email)

    async def handlenotify(self):
        async with self:
            await asyncio.sleep(4)
            self.error = ''
    
    @rx.background
    async def create_user(self, newuser: dict):
        async with self:
            try:
                self.users = create_user_service(name=newuser["name"], email=newuser["email"], password=newuser['password'])
            except BaseException as be:
                print(be.args)
                self.error = be.args
        await self.handlenotify()

    @rx.background
    async def update_user(self, update_user: dict):
        async with self:
            try:
                self.users = update_user_service(name=update_user["name"], email=update_user["email"] ,password=update_user['password'], active=update_user['active'])
            except BaseException as be:
                print(be.args)
                self.error = be.args
        await self.handlenotify()

    def buscar_email_onchange(self, email:str):
        self.buscarEmail = email



@rx.page(route="/user", title="User", on_load=UserState.get_all_users)
def user_page()->rx.Component:
    return rx.container(
                rx.cond(
                    StateLogin.users_rights == 999,
                    rx.flex(
                        rx.heading("Usuarios", align = "center", color_scheme="yellow"),
                        rx.hstack(
                            buscar_email(),
                            create_user_form_dialog(),
                            justify="center",
                            style={"margin-top":"30px"},
                        ),
                        table_users(UserState.users),
                        rx.cond(
                            UserState.error != '',
                            notify_component(UserState.error, "shield-alert", "yellow")

                        ),
                        direction="column",
                        style={"width": "60vw", "margin":"auto"},
                    ),
                    rx.text("Usuario no permitido"),
            ),
    )
def table_users(list_users: list[Usuarios]) -> rx.Component:
    return rx.table.root(
        rx.table.header(
            rx.table.row(
                rx.table.column_header_cell("Nombre"),
                rx.table.column_header_cell("eMail"),
                rx.table.column_header_cell("password"),
                rx.table.column_header_cell("Tipo usuario"),
                rx.table.column_header_cell("Activo"),
                rx.table.column_header_cell("Fecha registro"),
                style = {"color": TextColor.GREEN.value},
                ),
            ),
        rx.table.body(
            rx.foreach(list_users, row_table)
        ),
    )

def row_table(user: Usuarios)-> rx.Component: 
    return rx.table.row(
        rx.table.cell(user.name),
        rx.table.cell(user.email),
        rx.table.cell(user.password),
        rx.table.cell(user.user_type),
        rx.table.cell(user.active),
        rx.table.cell(user.dateregister),
        rx.table.cell(rx.hstack(
            delete_user_dialog(user.email),
            update_user_dialog(user.name, user.email, user.password, user.active),
            ),

        ),
        style = {"color": TextColor.GREEN.value},
    )

def buscar_email()->rx.Component:
    return rx.hstack(
        rx.input(placeholder="Indicar email", on_change=UserState.buscar_email_onchange),
        rx.button("Buscar", on_click=UserState.get_user_by_email)
    )

def create_user_form()->rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Nombre",
                name= "name"
            ),
            rx.input(
                placeholder="eMail",
                name= "email"
            ),
            rx.input(
                placeholder="Password",
                name= "password",
                type= "password"

            ),
            rx.dialog.close(
                rx.button("Guardar", type="submit"),

            ),
        ),
        on_submit=UserState.create_user
    )

def create_user_form_dialog()->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button("Crear Usuario")),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Crear usuario"),
                create_user_form(),
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


def delete_user_dialog(email: str)->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button(rx.icon("trash-2"))),
        rx.dialog.content(
            rx.dialog.title("Eliminar registro"),
            rx.dialog.description("Está seguro que desea eliminar el registro ", email),
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
                        on_click=UserState.delete_user_by_email(email)
                    ),
                ),
                spacing = "3",
                margin_top = "16px",
                justify="end",
            )
        )
    )

def update_user_dialog(name:str, email:str, password:str, active:int) -> rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button(rx.icon("pencil"))),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Modificar usuario"),
                update_user_form(name,email,password,active),
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

def update_user_form(name:str, email:str, password:str, active:int)->rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder=name,
                name= "name",
                default_value=name,
            ),
            rx.input(
                placeholder=email,
                name= "email",
                default_value=email,
                read_only=True,
                
            ),
            rx.input(
                placeholder=password,
                name= "password",
                default_value=password,
                type= "password"
            ),
            rx.input(
                placeholder=active,
                name= "active",
                default_value="1",
            ),
            rx.dialog.close(
                rx.button("Guardar", type="submit"),

            ),

        ),
        on_submit=UserState.update_user
    )





    # name: str
    # email: str
    # password: str
    # user_type: str
    # active: int
    # dateregister: datetime