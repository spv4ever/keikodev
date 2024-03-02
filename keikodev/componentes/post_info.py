import reflex as rx
import keikodev.styles.styles as styles
from keikodev.componentes.heading import heading
from keikodev.componentes.badge import badge
from keikodev.styles.styles import Size, Color
from keikodev.state.info_interes_state import InfoInteresState,InfoInteresCabecera,InfoInteresDetalles



def post_info(item:InfoInteresCabecera)-> rx.Component:
    return rx.vstack(

            rx.text(item.date,color_scheme="red"),
                width = "100%",
                
                
                align_items = "center",
                style=styles.container_style,
            )