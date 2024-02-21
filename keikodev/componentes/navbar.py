import reflex as rx
from keikodev.styles.styles import Size as Size
from keikodev.styles.colors import Color as Color, TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
import keikodev.styles.styles as styles
import keikodev.views.constants as const
from keikodev.routes import Route
from keikodev.componentes.main_menu import main_menu as main_menu
from keikodev.state.PageState import PageState as PageState
from keikodev.state.fotoNasa import fotoNasa as fotoNasa
from keikodev.state.ModalState import ModalStateFull
from keikodev.componentes.visualiza import visualiza_modal as visualiza_modal
import keikodev.utils as utils
from keikodev.componentes.tutiempo import tutiempo

from keikodev.pages.google_auth import protected



def navbar():
        return rx.chakra.hstack(
                        #rx.chakra.box(
                        utils.lang(),
                        rx.heading(
                        main_menu(),as_="h1"),
                        #heigth = "3em",
                        #),
                        rx.chakra.flex(
                                rx.chakra.image(src="/avatar.png",
                                        alt="Logo",
                                        width="50px",
                                        height="auto",
                                        border_radius="15px 50px",
                                        border="5px solid #555",
                                        box_shadow="lg"),
                                rx.chakra.link(
                                        rx.chakra.box(
                                                rx.chakra.span("Keiko",
                                                        color=Color.PRIMARY.value,
                                                        ),
                                                rx.chakra.span("Dev",
                                                        color=Color.SECONDARY.value
                                                ),
                                                style=styles.navbar_title_style
                                        ), 
                                        href=Route.INDEX.value,
                                ),
                                justify_content="center",
                                align = "center",
                        ),
                        rx.chakra.responsive_grid(
                                #rx.chakra.vstack(
                                        # rx.chakra.image(
                                        #         src=PageState.url,
                                        #         alt="Foto diaria Nasa",
                                        #         width = "auto",
                                        #         height = "50px",
                                        #         fit = "cousin",
                                        #         on_click=ModalStateFull.change(PageState.hdurl, PageState.title, PageState.explanation),
                                        #         _hover = {"cursor": "pointer"},
                                        #         margin = Size.ZERO.value,
                                        # ),
                                        # rx.chakra.text(f"Foto diaria: {PageState.date}",
                                        #         font_size = Size.SMALL_LARGE.value, 
                                        #         font_family = Fuentes.DEFAULT.value,
                                        #         text_align = "center",
                                        #         color = TextColor.GREEN.value,
                                        #         display=["none","none","flex","flex","flex"],
                                        # ),
                                #),
                                rx.chakra.box(
                                        protected(),
                                        #display=["none","flex","flex","flex","flex"],
                                        #min_width = "300px",
                                        justify_content="flex-end",
                                ),
                                #width = "100%",
                                justify_content="flex-end",
                                align = "center",
                                columns=[1,2],
                        ),

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
                
                #spacing = Size.LARGE.value,
                position="sticky", #Deja la barra arriba y se mueve el head y footer
                bg=Color.CONTENT.value,
                # padding_x=Size.DEFAULT.value,
                # padding_y=Size.SMALL.value,
                spacing="1em",
                width="100%",
                z_index = "999",
                top="0",
                as_="h1"
                )