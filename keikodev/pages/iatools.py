#imports standard
import reflex as rx
import keikodev.views.constants as constants
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.routes import Route
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color, TextColor
from keikodev.pages.google_auth import StateLogin
from keikodev.componentes.notify import notify_component
import asyncio

#imports para página
from keikodev.models.iatools_model import Iatools
from keikodev.data.iatools_services import select_all_iatools_service, create_iatool_service
from keikodev.componentes.card import card_ia

class Iatoolstate(rx.State):
    iatools:list[Iatools]
    # buscarEmail: str
    error: str = ""
    # email: str

    @rx.background
    async def get_all_iatools(self):
        async with self:
            self.iatools = select_all_iatools_service()

    async def handlenotify(self):
        async with self:
            await asyncio.sleep(4)
            self.error = ''

    @rx.background
    async def create_iatool(self, new_iatool: dict):
        async with self:
            try:
                self.iatools = create_iatool_service(
                    herramientaAI=new_iatool["herramientaAI"], 
                    descripcion=new_iatool["descripcion"], 
                    url=new_iatool['url'],
                    tipo=new_iatool['tipo'],
                    planGratuito=new_iatool['planGratuito'],
                    estrellas=new_iatool['estrellas'],
                    icon=new_iatool['icon'],
                    url_formacion=new_iatool['url_formacion'])
            except BaseException as be:
                print(be.args)
                self.error = be.args
            await self.handlenotify()

@rx.page(
    route=Route.IA_TOOLS.value,
    title=utils.iatools_title,
    description=utils.iatools_description,
    image= utils.preview,
    meta=utils.iatools_meta,
    on_load=Iatoolstate.get_all_iatools,
)

def ia_tools() -> rx.Component:
    return rx.box(
            utils.lang(),
            navbar(),
            rx.flex(
                rx.heading("Biblioteca de recursos de Inteligencia Artificial",
                            align="center",
                            style={"color":TextColor.HEADER.value,"margin":Size.DEFAULT.value,"padding":Size.DEFAULT.value},
                            size="8",
                            ),
                rx.divider(color_scheme="pink"),
                rx.hstack(
                    rx.cond(
                        StateLogin.users_rights == 999,
                        create_tool_form_dialog(),
                    ),
                    justify="start",
                    style={"margin-top":"15px","margin-bottom":"15px"},
                        ),

                rx.divider(color_scheme="pink", style={"margin-bottom":"15px"}),
                rx.flex(
                        rx.foreach(Iatoolstate.iatools,card_ia),
                        wrap="wrap",
                        direction="row",
                        spacing="5",
                        style = {"margin":Size.DEFAULT.value}
                        ),
                direction="column",
                style={"width": "80vw", "margin":"auto"},
                
            ),
            footer(),
            align="center",
            justify="center",
            style = styles.background_gradient_style,
    )


def create_iatool_form()->rx.Component:
    return rx.form(
        rx.vstack(
            rx.input(
                placeholder="Nombre de la herramienta",
                name= "herramientaAI",
                style=styles.launch_input
            ),
            rx.input(
                placeholder="Descripcion",
                name= "descripcion",
                style=styles.launch_input
            ),
            rx.input(
                placeholder="Link herramienta",
                name= "url",
                style=styles.launch_input
            ),
            rx.input(
                placeholder="Tipo de herramienta",
                name= "tipo",
                style=styles.launch_input
            ),
            rx.flex(
                rx.text("Plan gratuito", size="4", style={"color":TextColor.HEADER.value}),
                rx.switch(size="1",default_checked=False,name="planGratuito"),
                align="center",
                justify="center",
                direction="row",
                spacing="3",
            ),
            # rx.input(
            #     placeholder="Tiene plan gratuito",
            #     name= "planGratuito"
            # ),
            rx.hstack(
                rx.text("Puntuacióń", size="4", style={"color":TextColor.HEADER.value}),
                rx.radio(
                    ["1", "2", "3", "4", "5"],
                    direction="row",
                    spacing="3",
                    size="3",
                    name="estrellas",
                    default_value="1",
                    style={"color":TextColor.HEADER.value})
            ),
            rx.input(
                placeholder="Icono",
                name= "icon",
                style=styles.launch_input
            ),
            rx.input(
                placeholder="Link tutorial",
                name= "url_formacion",
                style=styles.launch_input
            ),

            # rx.dialog.close(
            #     rx.button("Guardar", type="submit"),

            # ),

        rx.flex(
                rx.dialog.close(
                    rx.button("Guardar", type="submit"),
                ),
                rx.dialog.close(
                    rx.button("Cancelar", color_scheme="gray", variant="solid"),
                ),
                direction="row",
                align="baseline",
                justify="between",
                width="100%"
            ),
        ),
        width = "100%",
        on_submit=Iatoolstate.create_iatool
    )

    # tipo: str
    # planGratuito: bool
    # estrellas: int
    # icon: str = ""
    # url_formacion: str

def create_tool_form_dialog()->rx.Component:
    return rx.dialog.root(
        rx.dialog.trigger(rx.button("Crear tool",variant="solid",color_scheme="pink")),
        rx.dialog.content(
            rx.flex(
                rx.dialog.title("Crear tool",style={"color":TextColor.HEADER.value}),
                create_iatool_form(),
                justify="center",
                align="center",
                direction="column",
            ),
            # rx.flex(
            #     rx.dialog.close(
            #         rx.button("Cancelar", color_scheme="gray", variant="solid")
            #     ),
            #     spacing="3",
            #     margin_top = "16px",
            #     justify="end",
            # ),
            style={"width":"600px","background":Color.BACKGROUND.value},
        ),
    )


