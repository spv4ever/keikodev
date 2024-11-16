import reflex as rx
from keikodev.models.user import Usuarios
from keikodev.data.user_service import select_all_user_service, select_user_by_email_service, create_user_service, delete_user_service, update_user_service,login_user_by_email_service
from keikodev.componentes.notify import notify_component
from keikodev.data.email_services import enviar_correo_services
from keikodev.styles.colors import TextColor
from keikodev.styles.fonts import Fuentes
from keikodev.pages.google_auth import StateLogin
import keikodev.styles.styles as styles
import asyncio
import bcrypt
import keikodev.api.crypto as crypto

class UserState(rx.State):
    users:list[Usuarios]
    buscarEmail: str
    error: str = ""
    email: str
    user_type:int
    user_name:str
    user_email:str

    @rx.background
    async def get_all_users(self):
        async with self:
            self.users = select_all_user_service()

    @rx.background
    async def get_user_by_email(self):
        async with self:
            self.users = select_user_by_email_service(self.buscarEmail)
    
    @rx.background
    async def get_login(self, login_user: dict):
        async with self:
            if login_user['email'] != "":
                self.users = login_user_by_email_service(login_user['email'])
                #password_ingresada = bytes(login_user['password'], 'utf-8')
                #password_almacenada = bytes(self.users[0].password, 'utf-8')
                if len(self.users) != 0:
                    if self.users[0].active == 1 and crypto.verificar_contraseña(bytes(login_user['password'], 'utf-8'),bytes(self.users[0].password, 'utf-8')):
                        self.user_name = self.users[0].name
                        self.user_email = self.users[0].email
                        self.user_type = self.users[0].user_type
                        #print("Login ok, password correcta, usuario activo")
                    else:
                        self.error="Usuario inactivo o combinación usuario / contraseña no válida"
                else:
                    self.error="No existe ningún usuario"

                    

        await self.handlenotify()


    def logout_user(self):
        self.user_type = 0
        self.user_name = ""
        self.user_email = ""


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
        password_hash = crypto.encriptar_contraseña(newuser['password'])
        # print(password_hash)
        # print(len(password_hash))
        # print(newuser['password'])
        #print(crypto.verificar_contraseña(newuser['password'],password_hash))
        async with self:
            try:
                self.users = create_user_service(name=newuser["name"], email=newuser["email"], password=password_hash)
                print("usuario creado")
                #enviar_correo_services(newuser["email"],newuser["name"])
                enviar_correo_services("info@keikodev.es","test")

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


@rx.page(route="/register", title="Registro de usuario")
def user_register() -> rx.Component:
    return rx.box(
        create_user_form_dialog(),
    )


@rx.page(route="/user", title="User", on_load=UserState.get_all_users)
def user_page()->rx.Component:
    return rx.container(
                rx.cond(
                    UserState.user_type == 999,
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
                rx.table.column_header_cell("Correo electrónico"),
                #rx.table.column_header_cell("password"),
                rx.table.column_header_cell("Tipo usuario"),
                rx.table.column_header_cell("Activo"),
                rx.table.column_header_cell("Fecha registro"),
                rx.table.column_header_cell("Eliminar"),
                rx.table.column_header_cell("Editar"),
                style = {"color": "Black"},
                ),
            ),
        rx.table.body(
            rx.foreach(list_users, row_table)
        ),
        variant="surface",
    )

def row_table(user: Usuarios)-> rx.Component: 
    return rx.table.row(
        rx.table.cell(user.name),
        rx.table.cell(user.email),
        #rx.table.cell(user.password),
        rx.table.cell(user.user_type,align="end"),
        rx.table.cell(user.active, align="end"),
        rx.table.cell(user.dateregister),
        rx.table.cell(rx.hstack(
            delete_user_dialog(user.email),
            ),
        ),
        rx.table.cell(rx.hstack(
            update_user_dialog(user.name, user.email, user.password, user.active),
            ),

        ),
        style = {"color": "Black"},
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
            rx.flex(
                rx.dialog.close(
                    rx.button("Guardar", type="submit"),

                ),
            
                rx.dialog.close(
                    rx.button("Cancelar", color_scheme="gray", variant="soft")
                ),
                direction="row",
                spacing="3",
                margin_top = "16px",
                justify="between",
            ),
        ),
        on_submit=UserState.create_user
    )

def login_user_form()->rx.Component:
    return rx.form(
                rx.vstack(
                    rx.input(
                        placeholder="eMail",
                        name= "email",
                        auto_complete=False,
                        
                    ),
                    rx.input(
                        placeholder="Password",
                        name= "password",
                        type= "password"

                    ),
                    rx.flex(
                        rx.dialog.close(
                            rx.button("Acepar", type="submit", color_scheme="pink", style=styles.main_menu_badge_style),
                        ),
                    
                        rx.dialog.close(
                            rx.button("Cancelar", color_scheme="pink", style=styles.main_menu_badge_style)
                        ),
                        direction="row",
                        spacing="3",
                        margin_top = "16px",
                        width = "100%",
                        justify="between",
                    ),
                ),
                
                on_submit=UserState.get_login
    )

def logout_user_form()->rx.Component:
    return rx.button("Cerrar sesión",variant="outline",color_scheme="pink",style=styles.main_menu_badge_style,on_click=UserState.logout_user)

def login_user_form_dialog()->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button("Iniciar sesión",variant="outline",color_scheme="pink",style=styles.main_menu_badge_style,)),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Iniciar sesión",
                    style={"color":TextColor.HEADER.value,"font-family":Fuentes.TITLE.value}),
                login_user_form(),
                justify="center",
                align="center",
                direction="column",
            ),
            style=styles.form_login_user,
        ),
    )

def create_user_form_dialog()->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button("Registrarse",variant="outline",color_scheme="pink",style=styles.main_menu_badge_style,)),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Registrarse"),
                create_user_form(),
                justify="center",
                align="center",
                direction="column",
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
                placeholder=str(active),
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