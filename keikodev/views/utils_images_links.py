import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def utils_images_links()-> rx.Component:
        return rx.chakra.vstack(
                title("Herramientas video IA"),

                linkbutton("Fliki.ai",
                        "Impresionante generador de videos por IA gratuito.",
                        "/img/video-solid.svg",
                        constants.FLIKI_URL,
                        ),
                title("Retoque fotográfico online"),

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
                title("Gifs Animados"),
                linkbutton("Librería de recursos GIFs",
                        "Fantástica librería de recursos Gifs gratuitos para link y descarga",
                        "/img/gif.png",
                        constants.GIFER_URL,
                        ),                
                linkbutton("Giphy - Librería de recursos GIFs",
                        "Librería de recursos Gifs gratuitos para link y descarga by @Robert",
                        "/img/gif.png",
                        constants.GIPHY_URL,
                        ),                
                linkbutton("Tenor - Librería de recursos GIFs",
                        "Recursos Gifs gratuitos para link y descarga by @Robert",
                        "/img/gif.png",
                        constants.TENOR_URL,
                        ),
                title("Recursos tipos de fuente e iconos"),
                linkbutton("Fontawesome",
                        "Recurso para fuentes y miles de iconos",
                        "/img/wand-magic-sparkles-solid.svg",
                        constants.ICONOS_URL,
                        ),
                linkbutton("Google Fonts",
                        "Todas las fuentes que puedas necesitar",
                        "/img/font-awesome-solid.svg",
                        constants.FONTS_URL,
                ),
                title("Formaciones y cursos"),
                linkbutton("Diseño gráfico Lightroom y Photoshop",
                        "Con este curso aprenderán todo lo relacionado con Photoshop y Lightroom",
                        "/img/graduation-cap-solid.svg",
                        constants.CURSO_LRPS_URL,
                        ),
        width = "100%",
        spacing=Size.MEDIUM.value,
        )