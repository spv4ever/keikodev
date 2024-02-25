import reflex as rx
import keikodev.styles.styles as styles
from keikodev.componentes.heading import heading
from keikodev.componentes.badge import badge
from keikodev.styles.styles import Size, Color
import keikodev.recetas.torrijas as torrijas

def receta(title: str, ingredientes: list, explicacion: str, url: str, tipo: str)-> rx.Component:
    return rx.vstack(
        rx.hstack(
            badge(tipo, small=True),
            heading(title, size="xl"),
            spacing = "4",
            width = "100%",
            align="start",
        ),
        rx.hstack(
            rx.box(
                rx.heading("Ingredientes:", size="3"),
                rx.foreach(ingredientes, rx.text),
                padding_x = Size.SMALL.value,
                bg = Color.BACKGROUND.value,
                width = "25%",
                min_height = "200px",
                border_radius = Size.SMALL.value,
            ),
            rx.box(
                rx.heading("Detalles:", size = "3"),
                rx.text (explicacion),
                width = "75%",
                min_height = "200px",
                padding_x = Size.SMALL.value,
                bg = Color.BACKGROUND.value,
                border_radius = Size.SMALL.value,
                
            ),
            width= "100%",
            style=styles.receta_style,
        ),
        rx.center(
            rx.video(url=url,light=True),
        ),
        rx.link(rx.text("Entra y suscribete en el canal para conocer las novedades"),href="https://www.youtube.com/channel/UC16k8CSCJ4WcNyj3RnmiqZQ"),
        width = "100%",
        align_items = "center",
        style=styles.container_style,
    )