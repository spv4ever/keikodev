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
                rx.flex(
                    rx.box(
                        rx.heading("Ingredientes:", size="3"),
                        rx.foreach(ingredientes, rx.text),
                        padding_x = Size.SMALL.value,
                        bg = Color.BACKGROUND.value,
                        #min_width = "25%",
                        flex_shrink = 0,
                        #flex_grow = 1,
                        width = "240px",
                        border_radius = Size.SMALL.value,
                    ),
                    rx.box(
                        rx.heading("Detalles:", size = "3"),
                        rx.text (explicacion),
                        #min_width = "200px",
                        max_width = "73%",
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
                rx.flex(
                        rx.center(
                            rx.aspect_ratio(
                                rx.video(url=url,
                                        light=True,
                                        width="100%",
                                        ),
                            ),
                        ),
                        rx.link(rx.text("Entra y suscribete en el canal para conocer las novedades"),href="https://www.youtube.com/channel/UC16k8CSCJ4WcNyj3RnmiqZQ"),
                        direction = "column"
                    ),
                width = "100%",
                align_items = "center",
                style=styles.container_style,
            )