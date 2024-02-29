import reflex as rx
#from keikodev.data.recetas_andaluzas import recetas_andaluzas
from keikodev.data.recetas_json import Receta
from keikodev.componentes.heading import heading
from keikodev.componentes.badge import badge
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
import keikodev.styles.styles as styles



def instrucciones(instrucciones:str)->rx.Component:
    return rx.vstack(
        rx.text(instrucciones, color = Color.BLUE.value)
    )

def ingredientes(data:str)->rx.Component:
    return rx.vstack(
        rx.text(data, color = Color.BLUE.value)
    )

def recetatext(recetas_andaluzas:Receta)->rx.Component:
    return rx.vstack(
                rx.hstack(
                    badge(recetas_andaluzas.tipo, small=True),
                    heading(recetas_andaluzas.nombre, size="md"),
                    spacing = "4",
                    width = "100%",
                    align="start",
                ),
                rx.flex(
                    rx.box(
                        rx.heading("Ingredientes:", size="3"),
                        #rx.foreach(ingredientes, rx.text),
                        *[
                        ingredientes(instruccion_data)
                        for instruccion_data in recetas_andaluzas.ingredientes
                        ],
                        padding_x = Size.SMALL.value,
                        bg = Color.BACKGROUND.value,
                        #min_width = "25%",
                        flex_shrink = 0,
                        #flex_grow = 1,
                        width = "240px",
                        border_radius = Size.SMALL.value,
                    ),
                    rx.box(
                        rx.heading("Instrucciones:", size = "3"),
                        *[
                            instrucciones(instruccion_data)
                            for instruccion_data in recetas_andaluzas.instrucciones
                        ],
                        #min_width = "200px",
                        max_width = "73%",
                        width = "100%",
                        flex_shrink = 1,
                        #flex_grow = 1,
                        padding_x = Size.SMALL.value,
                        bg = Color.BACKGROUND.value,
                        border_radius = Size.SMALL.value,
                    ),
                    spacing="2",
                    flex_wrap="wrap",
                    width = "100%",
                    direction="row",
                    style=styles.receta_style,
                ),


                    
                width = "100%",
                align_items = "center",
                style=styles.container_style,
                )