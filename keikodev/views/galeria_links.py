import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def galeria_links()-> rx.Component:
        return rx.vstack(
                title("Galerías de imagenes"),
                linkbutton("Mis fotos en Flickr",
                "Galería de imagenes, cosecha propia, compartidas en flickr",
                "/img/windows.svg",
                constants.FLICKR_URL,
                is_external=True
                ),
                linkbutton("Fotos diarias de La Nasa",
                "Últimas fotos en alta resolución desde La Nasa",
                "/img/shuttle-space-solid.svg",
                Route.GALERIA_NASA.value,
                is_external=False,
                ),



        width = "100%",
        spacing=Size.MEDIUM.value,
    )