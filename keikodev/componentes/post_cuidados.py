import reflex as rx
import keikodev.styles.styles as styles
from keikodev.componentes.heading import heading
from keikodev.componentes.badge import badge
from keikodev.styles.styles import Size, Color, TextColor

from keikodev.state.cuidados_state import CuidadosState, CuidadosCabecera, CuidadosDetalles
from keikodev.componentes.heading import heading
from keikodev.componentes.badge import badge
from keikodev.styles.fonts import Fuentes


def detalles(item:CuidadosDetalles)-> rx.Component:
    return rx.vstack(
            rx.text(item.tituloParrafo,style={"font_family":Fuentes.TITLE.value}),
            rx.text(item.parrafo,style={"padding_x":Size.DEFAULT.value}),
            rx.hstack(
                rx.image(src=item.fotoParrafo,width = "300px",height = "auto"),
                width = "100%",
                align = "center",
                justify="center",
            ),
            
            )


def post_cuidados(item:CuidadosCabecera)-> rx.Component:
    return rx.vstack(
            rx.hstack(
                    badge(item.date),
                    heading(text=item.title, size="md"),
                    spacing = "4",
                    width = "100%",
                    align="center",
            ),
            rx.scroll_area(
                rx.vstack(
                    rx.text(item.introduction),
                    rx.spacer(),                    
                    rx.foreach(item.detalles,lambda item_detalle: detalles(item_detalle)),
                    rx.text("Conclusion:",style={"font_family":Fuentes.TITLE.value}),
                    rx.text(item.conclusion),
                ),
                type="always",
                scrollbars="vertical",
                style=styles.post_style,
            ),

            style=styles.container_style,
            )