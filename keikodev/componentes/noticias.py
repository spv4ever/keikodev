import reflex as rx
import keikodev.styles.styles as Styles
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.styles import Size as Size
from keikodev.styles.fonts import Fuentes as fuentes
from keikodev.componentes.steps import steps as steps



def noticias(fecha="", titulo="", texto="", imagen1="", imagen2="", imagen3="", fuente="")->rx.Component:
    return  rx.box(
            rx.grid(
                rx.grid_item(
                    rx.box(
                        rx.text(
                                titulo,
                                font_size = Size.LARGE_SMALL.value,
                                font_family = fuentes.TITLE.value,
                                padding_left = Size.SMALL.value,
                                padding_top = Size.SMALL.value,
                                ),
                            width = "100%",
                            height = "100%",
                            display = "flex",
                            align_items = "center",
                            justify_content = "Start",
                            bg = Color.CONTENT.value,
                        ),
                        col_span=5,
                        color = Color.SECONDARY.value,
                ),
                rx.grid_item(
                    rx.box(
                        rx.text(
                                fecha,
                                font_size = Size.LARGE_SMALL.value,
                                font_family = fuentes.TITLE.value,
                                padding_top = Size.SMALL.value,

                                ),
                            width = "100%",
                            height = "100%",
                            #style={"display": "flex", "justify_content": "center", "align_items": "center"}),
                            display = "flex",
                            align_items = "center",
                            justify_content = "center",
                            bg = Color.CONTENT.value,
                        ),
                    col_span=1,
                    color = Color.SECONDARY.value,
                    ),
                rx.grid_item(steps(texto), padding = Size.DEFAULT.value, row_span=5, col_span=6),
                rx.grid_item("Imágenes, capturas y otros documentos gráficos", 
                            font_family = fuentes.TITLE.value, 
                            color = TextColor.HEADER.value,
                            padding_left = Size.SMALL.value,
                            width = "100%",
                            height = "100%",
                            display = "flex",
                            align_items = "center",
                            justify_content = "left",
                            bg = Color.CONTENT.value,
                            row_span=2, 
                            col_span=4,
                        ),
                rx.grid_item(f"Fuente: {fuente}", 
                            font_family = fuentes.TITLE.value, 
                            color = TextColor.HEADER.value,
                            padding_right = Size.DEFAULT.value,
                            width = "100%",
                            height = "100%",
                            display = "flex",
                            align_items = "center",
                            justify_content = "right",
                            bg = Color.CONTENT.value,
                            row_span=2, 
                            col_span=2,
                        ),

                rx.grid_item(
                    rx.container(
                        rx.image(
                            src=f"/img/estafas/{imagen1}",
                            object_fit = "scale-down",
                            width = "100%",
                            height = "auto",
                            padding_down = Size.SMALL.value,
                            border_radius="15px",
                            ),
                        width = "100%",
                        height = "100%",
                        
                    ),
                row_span=14, 
                col_span=2,
                ),

                rx.grid_item(
                    rx.container(
                        rx.image(
                            src=f"/img/estafas/{imagen2}",
                            object_fit = "scale-down",
                            width = "100%",
                            height = "auto",
                            padding_down = Size.SMALL.value,
                            border_radius="15px",
                            ),
                        width = "100%",
                        height = "100%",
                    ),
                row_span=14, 
                col_span=2,
                ),

                rx.grid_item(
                    rx.container(
                        rx.image(
                            src=f"/img/estafas/{imagen3}",
                            object_fit = "scale-down",
                            width = "100%",
                            height = "auto",
                            padding_down = Size.SMALL.value,
                            border_radius="15px",
                            ),
                        width = "100%",
                        height = "100%",
                    ),
                row_span=14, 
                col_span=2,
                ),
                
                
                template_rows="repeat(21, 1fr)",
                template_columns="repeat(6, 1fr)",
                h="500px",
                width="100%",
                gap=0,
            ),
        width = "100%",
        border_width = Size.VERY_SMALL.value,
        border_radius = "15px",
        border_color = Color.CONTENT.value,
    )