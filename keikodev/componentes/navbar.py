import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color, TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.routes import Route
from keikodev.componentes.main_menu import main_menu as main_menu
from keikodev.state.PageState import PageState as PageState
from keikodev.state.alllinks import Alllinks
from keikodev.state.fotoNasa import fotoNasa as fotoNasa
from keikodev.state.ModalState import ModalStateFull
from keikodev.componentes.visualiza import visualiza_modal as visualiza_modal
import keikodev.utils as utils
from keikodev.componentes.tutiempo import tutiempo
from keikodev.componentes.facebook import facebook_like_button,facebook_sdk_init

from keikodev.pages.google_auth import protected



def navbar():
        return rx.chakra.flex(
                        utils.lang(),
                                #main_menu(),
                                rx.chakra.image(src="/avatar.png",
                                        alt="avatar",
                                        display="flex",
                                        width="50px",
                                        height="auto",
                                        border_radius="15px 50px",
                                        border="5px solid #555",
                                        box_shadow="lg",
                                        margin_x = Size.DEFAULT.value,
                                        on_load=PageState.galeria_fotos_load,
                                        ),
                                rx.chakra.link(
                                        rx.chakra.box(
                                                rx.chakra.span("Keiko",
                                                        color=Color.PRIMARY.value,
                                                        ),
                                                rx.chakra.span("Dev",
                                                        color=Color.SECONDARY.value
                                                ),
                                                style=styles.navbar_title_style,
                                                margin_x = Size.DEFAULT.value,
                                        ), 
                                        href=Route.INDEX.value,
                                ),
                                
                                protected(),
                                
                                
                                #rx.button("Start Countdown", on_click=CountdownState.start_countdown),


                                #rx.spacer(),
                                #facebook_like_button(),
                                
                                # rx.button('clic me', on_click= Alllinks.increment),
                                # rx.text(Alllinks.count),

                                
                        


                        rx.chakra.modal(
                                rx.chakra.modal_overlay(
                                        rx.chakra.modal_content(
                                                rx.chakra.modal_body(
                                                        rx.chakra.center(
                                                                rx.chakra.vstack(
                                                                        rx.chakra.button(
                                                                        "Cerrar ventana",
                                                                        size = "md",
                                                                        variant= "outline",
                                                                        border_width = "3px",
                                                                        width="30%",
                                                                        border_color = Color.PRIMARY.value,
                                                                        on_click=ModalStateFull.change("","",""),                                                                      
                                                                        ),
                                                                        rx.chakra.image(
                                                                                src=ModalStateFull.hdurl,
                                                                                alt="Imagen pantalla completa",
                                                                                width="100%",
                                                                                height="auto",
                                                                        ),
                                                                        rx.chakra.text(ModalStateFull.title,
                                                                                color = TextColor.PRIMARY.value),
                                                                        rx.chakra.text("Copyright: ", ModalStateFull.copyright,
                                                                                color = TextColor.PRIMARY.value),
                                                                        rx.chakra.text(ModalStateFull.explanation,
                                                                                color = TextColor.PRIMARY.value),

                                                                        max_width = styles.CONTENT_WIDTH,
                                                                ),

                                                        ),

                                                        style = styles.background_pattern_style,
                                                        
                                                ),
                                                bg = Color.BACKGROUND.value,
                                        ),
                                        
                                ),
                                is_open=ModalStateFull.show,
                                size="full",
                        ),
                        #width = "100%",
                        # display = "flex",
                        # align_items = "right",
                        # justify_content = "right",
                
                direction = "row",
                justify="start",
                align = "center",
                wrap = "wrap",
                position="sticky", #Deja la barra arriba y se mueve el head y footer
                bg=Color.CONTENT.value,
                spacing = "8",
                width="100%",
                z_index = "999",
                top="0",
                as_="h1",
                )