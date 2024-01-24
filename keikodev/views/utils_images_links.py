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
                        "/img/images-regular.svg",
                        constants.FOTOR_URL,
                        ),

                linkbutton("Picwish",
                        "Retoque fotográfico online con funciones de IA",
                        "/img/camera-retro-solid.svg",
                        constants.PICWISH_URL,
                        ),
                linkbutton("Pixlr",
                        "Generador de imágenes IA y retoque fotográfico",
                        "/img/pen-to-square-regular.svg",
                        constants.PIXLR_URL,
                        ),
                linkbutton("Fontawesome",
                        "Recurso para fuentes y miles de iconos",
                        "/img/wand-magic-sparkles-solid.svg",
                        constants.ICONOS_URL,
                        ),
                linkbutton("Diseño gráfico Lightroom y Photoshop",
                        "Con este curso aprenderán todo lo relacionado con Photoshop y Lightroom",
                        "/img/graduation-cap-solid.svg",
                        constants.CURSO_LRPS_URL,
                        ),

        width = "100%",
        spacing=Size.MEDIUM.value,
    )