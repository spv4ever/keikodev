#imports standard
import reflex as rx
import keikodev.views.constants as constants
import keikodev.utils as utils
import keikodev.styles.styles as styles
from keikodev.styles.fonts import Fuentes
from keikodev.routes import Route
from keikodev.componentes.navbar import navbar
from keikodev.views.footer import footer
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color, TextColor
from keikodev.pages.google_auth import StateLogin
from keikodev.componentes.notify import notify_component
import asyncio

#imports para página
from keikodev.models.iatools_model import Iatools, Tipo

from keikodev.data.iatools_services import select_all_iatools_service, create_iatool_service, select_tipos_service, select_type_service, select_last_iatool_added_service
from keikodev.componentes.card import card_ia

class Iatoolstate(rx.State):
    iatools:list[Iatools]
    error: str = ""
    tipos: list[Tipo]
    total: int
    tipo_edicion: list[str]
    iatool_name: str
    iatool_description: str

    @rx.background
    async def get_all_iatools(self):
        async with self:
            self.iatools = select_all_iatools_service()
            self.tipos, self.tipo_edicion = select_tipos_service()
            iatool = select_last_iatool_added_service()
            self.iatool_name = iatool[0].herramientaAI
            self.iatool_description = iatool[0].descripcion
            self.total = len(self.iatools)
            
            # print(self.tipos)
            # print(self.tipo_edicion)
            

    @rx.background
    async def get_type_iatools(self, type:str):
        async with self:
            self.iatools = select_type_service(type)


    async def handlenotify(self):
        async with self:
            await asyncio.sleep(4)
            self.error = ''

    @rx.background
    async def create_iatool(self, new_iatool: dict):
        async with self:
            try:
                #print(new_iatool)
                if "planGratuito" not in new_iatool:
                    new_iatool['planGratuito'] = False
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
                rx.heading("Explora nuestra Biblioteca de Recursos: Domina la Inteligencia Artificial",
                            align="center",
                            class_name="heading-large-screen",
                            style={"color":TextColor.HEADER.value,"margin":Size.DEFAULT.value},    
                            #style={"color":TextColor.HEADER.value,"margin":Size.DEFAULT.value,"padding":Size.DEFAULT.value},    
                            ),
                rx.center(
                rx.box(
                    rx.text("Descubre una amplia gama de herramientas de Inteligencia Artificial (IA) organizadas meticulosamente por categorías en nuestra Biblioteca de Recursos. Desde plataformas de aprendizaje automático hasta bibliotecas de procesamiento de lenguaje natural, nuestro compendio te proporciona acceso directo a las mejores herramientas AI disponibles en la web. Explora enlaces a herramientas líderes, acompañados de tutoriales detallados cuando estén disponibles, para que puedas aprovechar al máximo cada recurso. Domina la IA con nuestra colección cuidadosamente seleccionada de recursos esenciales.",
                        style={"color":TextColor.PRIMARY.value,"text-align":"center"},
                        ),
                    width="80%",
                    align="center",
                    justify = "center",
                    margin=Size.DEFAULT.value,
                    ),
                ),


                rx.divider(color_scheme="pink"),
                rx.flex(
                    rx.cond(
                        StateLogin.users_rights == 0,
                            create_tool_form_dialog(),
                    ),
                    rx.badge(f"Todos ({Iatoolstate.total})",
                            variant="outline", 
                            color_scheme="pink", 
                            size="2",
                            on_click=Iatoolstate.get_all_iatools,
                            style={"_hover":{"cursor":"pointer"},"font-family":Fuentes.TITLE.value, "color":Color.PRIMARY.value}),
                    rx.foreach(Iatoolstate.tipos,filters,),
                    

                    # *[rx.text("nombre") for item in Iatoolstate.tipos],
                    wrap="wrap",
                    direction="row",
                    justify="center",
                    style={"margin-top":"15px","margin-bottom":"15px"},
                ),

                rx.divider(color_scheme="pink", style={"margin-bottom":"15px"}),
                rx.flex(
                        rx.foreach(Iatoolstate.iatools,card_ia),
                        wrap="wrap",
                        direction="row",
                        justify="center",
                        spacing="5",
                        style = {"margin":Size.DEFAULT.value}
                        
                        ),
                direction="column",
                style={"width": "100vw", "margin":"auto"},
                
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
            # rx.hstack(
            #     rx.text("Tipo de herramienta ", size="4", style={"color":TextColor.HEADER.value}),
            #     rx.select(Iatoolstate.tipo_edicion,)
            # ),
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
            
            style={"width":"600px","background":Color.BACKGROUND.value},
        ),
    )

def filters(tipos)->rx.Component:
    return rx.box(
                rx.badge(f"{tipos.nombre} ({tipos.numero})",
                        variant="outline", 
                        color_scheme="pink", 
                        size="2",
                        on_click=Iatoolstate.get_type_iatools(tipos.nombre),
                        style={"_hover":{"cursor":"pointer"},"font-family":Fuentes.TITLE.value, "color":Color.PRIMARY.value}
                        
                    )
                )


