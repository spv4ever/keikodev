import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.colors import Color as Color
from keikodev.componentes.title import title as title
from keikodev.componentes.steps import steps as steps
import keikodev.styles.styles as styles
import keikodev.views.constants as const

def kodi_pc_details()->rx.Component:
    return rx.vstack(
        rx.box(
            title(
                rx.center('Tutorial instalación PC'),
                ),
            ),
            steps(
                rx.span("En primer lugar podemos descargar el software desde el site oficial ",
                        rx.link(
                            rx.span("kodi.tv",
                                    font_weight="bold",
                                    color=Color.PRIMARY.value),
                                href=const.KODI_URL,
                                is_external=True),
                            rx.span(" en el apartado de "),
                            rx.link(
                                rx.span("descargas ",
                                        font_weight="bold",
                                        color=Color.PRIMARY.value
                                        ),
                                href=const.KODI_DESCARGAS_URL,
                                is_external=True),
                            rx.span(" está la versión para "),
                            rx.link(
                                rx.span("Windows",
                                        font_weight="bold",
                                        color=Color.PRIMARY.value),
                                href=const.KODI_WINDOWS_URL,
                                is_external=True
                            ),),),
            rx.responsive_grid(
                rx.image(
                    src="/img/kodi_images/kodi_web1.png",
                    width="180px",
                    heigth="auto",
                    border="2px solid",
                    border_radius="15px",
                    border_color = Color.PRIMARY.value,
                    ),
                rx.image(src="/img/kodi_images/kodi_web2.png",
                    width="180px",
                    heigth="auto",
                    border="2px solid",
                    border_radius="15px",
                    border_color = Color.PRIMARY.value,
                    ),
                rx.image(src="/img/kodi_images/kodi_web3.png",
                    width="180px",
                    heigth="auto",
                    border="2px solid",
                    border_radius="15px",
                    border_color = Color.PRIMARY.value,
                    ),
                columns = [1,2,3],
            ),
            steps(
                rx.span("Si la descarga se ha hecho por defecto, tendremos el fichero ejecutable en la carpeta ",
                rx.span("descargas",
                        font_weight="bold",
                                color=Color.PRIMARY.value),
                    ),
                ),


            steps("Et expedita sapiente ut perspiciatis ullam ad quas perspiciatis ut distinctio rerum. Ut doloribus rerum et officia rerum aut accusamus debitis aut enim error eum nihil doloremque ea galisum dolores et voluptatem delectus."),
        spacing=Size.DEFAULT.value,
        width="100%",  
    )