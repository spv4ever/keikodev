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


def navbar():
        return rx.hstack(
                        #rx.box(
                        utils.lang(),
                        main_menu(),
                        #heigth = "3em",
                        #),
                        rx.flex(
                        rx.image(src="/avatar.png",
                                 alt="Logo",
                                width="50px",
                                height="auto",
                                border_radius="15px 50px",
                                border="5px solid #555",
                                box_shadow="lg"),
                        rx.link(
                                rx.box(
                                        rx.span("Keiko",
                                                color=Color.PRIMARY.value,
                                                ),
                                        rx.span("Dev",
                                                color=Color.SECONDARY.value
                                        ),
                                        style=styles.navbar_title_style
                                ), 
                                href=Route.INDEX.value,
                        ),
                        justify_content="center",
                        align = "center",

                        ),
                        rx.flex(
                                rx.vstack(
                                        rx.html("""<!-- www.tutiempo.net - Ancho:304px - Alto:40px -->
                                        <div id="TT_JC6wLxtBtDB6YFMUpfuEEEkkk7aULWaEkCZysy5yyEzBxzJBK">El tiempo - Tutiempo.net</div>
                                        <script type="text/javascript" src="https://www.tutiempo.net/s-widget/l_JC6wLxtBtDB6YFMUpfuEEEkkk7aULWaEkCZysy5yyEzBxzJBK"></script>""",
                                        ),
                                        # rx.script(
                                        #         src="https://example.com/your-script.js",on_ready=rx.call_script(navbar())),

                                        rx.text("Tiempo en Segur de Calafell - Powered by tutiempo.net",
                                                font_size = Size.SMALL_LARGE.value, 
                                                font_family = Fuentes.DEFAULT.value,
                                                color = TextColor.GREEN.value,
                                                text_align = "center",
                                                        ),
                                        display=["none","none","flex","flex","flex"],
                                        
                                ),
                                width = "100%",
                                justify_content="center",
                                align = "center",
                        ),
                        rx.flex(
                                rx.vstack(
                                        rx.image(
                                                src=PageState.url,
                                                alt="Foto diaria Nasa",
                                                width = "auto",
                                                height = "50px",
                                                fit = "cousin",
                                                on_click=ModalStateFull.change(PageState.hdurl, PageState.title, PageState.explanation),
                                                _hover = {"cursor": "pointer"},
                                                margin = Size.ZERO.value,
                                        ),
                                        rx.text(f"Foto desde Nasa diaria: {PageState.date}",
                                                font_size = Size.SMALL_LARGE.value, 
                                                font_family = Fuentes.DEFAULT.value,
                                                text_align = "center",
                                                color = TextColor.GREEN.value,
                                                display=["none","none","flex","flex","flex"],
                                        ),
                                ),
                                max_width = "200px",
                                width = "100%",
                                justify_content="flex-end",
                                align = "center",
                                ),

                        rx.modal(
                                rx.modal_overlay(
                                        rx.modal_content(
                                                rx.modal_body(
                                                        rx.center(
                                                                rx.vstack(
                                                                        rx.button(
                                                                        "Cerrar ventana",
                                                                        size = "md",
                                                                        variant= "outline",
                                                                        border_width = "3px",
                                                                        width="30%",
                                                                        border_color = Color.PRIMARY.value,
                                                                        on_click=ModalStateFull.change("","",""),                                                                      
                                                                        ),
                                                                        rx.image(
                                                                                src=ModalStateFull.hdurl,
                                                                                alt="Imagen pantalla completa",
                                                                                width="100%",
                                                                                height="auto",
                                                                        ),
                                                                        rx.text(ModalStateFull.title,
                                                                                color = TextColor.PRIMARY.value),
                                                                        rx.text(ModalStateFull.explanation,
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
                spacing="2em",
                width="100%",
                z_index = "999",
                top="0"
                )