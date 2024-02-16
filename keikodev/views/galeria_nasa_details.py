import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.componentes.title import title as title
from keikodev.componentes.steps import steps as steps
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.componentes.imagenes import dosimagenes as dosimagenes
from keikodev.componentes.imagenes import unaimagen as unaimagen
import keikodev.componentes.imagenes as imagenes
from keikodev.api.funciones import dameUltimosCincoDias as dameUltimosCincoDias
#from keikodev.state.fotoNasa import Image_Load as Image_Load
from keikodev.componentes.card_galery import card_galery
from keikodev.data.data_galeria_nasa import Datagalerianasa
from keikodev.data.reflex_class import Datagalerianasarx
from keikodev.state.PageState import PageState


def galeria_nasa_details()->rx.Component:
    return rx.chakra.vstack(
        rx.chakra.box(
            rx.chakra.heading(
                rx.chakra.center('Biblioteca de fotos de la nasa en alta resolución', 
                        font_family= Fuentes.NASA.value,
                        font_size=Size.MEDIUM.value),
                ),
            margin_bottom = Size.BIG.value,
            ),
                rx.chakra.vstack(
            rx.chakra.responsive_grid(
                
                    # *[
                    #     card_galery(data,
                    #     )
                    #     for index, data in enumerate(date_income)
                        
                    # ],
                rx.foreach(PageState.featured_details, card_galery),
                
                columns=[1,2,3,4],
                spacing = "4"
            ),
        ),
        
        spacing=Size.VERY_SMALL.value,
        padding = Size.MEDIUM.value,
        width="100%",  
    )