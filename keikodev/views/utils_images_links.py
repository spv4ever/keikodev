import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def utils_images_links()-> rx.Component:
        return rx.vstack(
                title("Recursos gráficos y de retoque fotográfico"),

                linkbutton("Fotor",
                        "Retoque fotográfico online con funciones de IA",
                        "/icons/image-solid.svg",
                        constants.FOTOR_URL,
                        ),

                linkbutton("Picwish",
                        "Retoque fotográfico online con funciones de IA",
                        "/icons/image-solid.svg",
                        constants.PICWISH_URL,
                        ),
                linkbutton("Pixlr",
                        "Generador de imágenes IA y retoque fotográfico",
                        "/icons/image-solid.svg",
                        constants.PIXLR_URL,
                        ),
                linkbutton("Fontawesome",
                        "Recurso para fuentes y miles de iconos",
                        "/icons/image-solid.svg",
                        constants.ICONOS_URL,
                        ),

        width = "100%",
        spacing=Size.MEDIUM.value,
    )