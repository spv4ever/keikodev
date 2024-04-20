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
from keikodev.pages.google_auth import protected, StateLogin, user_info


def navbar():
        return rx.flex(
			utils.lang(),
			#main_menu(),
			rx.hstack(
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
						rx.hstack(
								rx.chakra.span("Keiko",
										color=Color.PRIMARY.value,
										),
								rx.chakra.span("Dev",
										color=Color.SECONDARY.value
								),
                                align="center",
								style=styles.navbar_title_style,
						),
					href=Route.INDEX.value,
				),
                rx.tablet_and_desktop(
					rx.hstack(
						menu_keikodev(),
                        menu_tecnologia(),
                        menu_otros(),
						spacing="5",
						wrap="wrap",
						style={"color":TextColor.HEADER.value, "padding-left":Size.DEFAULT.value},
						),
					),
				align="center",
				
			),
            rx.flex(
                rx.badge('Iniciar Sesión',size="2", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.main_menu_badge_style,),
                rx.badge('Registrarse',size="2", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.main_menu_badge_style,),
                direction="row",
                style={"color":TextColor.HEADER.value, "max-width":"100%","padding-right":Size.MEDIUM.value},
                spacing="3",
                justify="end",
                align = "center",
                
			),
			# rx.cond(
			# 	StateLogin.users_rights == 999,
			# 		rx.chakra.vstack(
			# 			user_info(StateLogin.tokeninfo),
			# 			rx.chakra.text(StateLogin.protected_content),
			# 			rx.chakra.text("Administrador de sistemas", color = TextColor.HEADER.value),
			# 		),
			# 		#protected(),
			# ),
			direction = "row",
			justify="between",
			align = "center",
			wrap = "wrap",
			position="sticky", #Deja la barra arriba y se mueve el head y footer
			bg=Color.CONTENT.value,
			spacing = "1",
			width="100%",
			z_index = "999",
			top="0",
			as_="h1",
			)

def menu_keikodev()->rx.Component:
        return rx.chakra.menu(
				rx.chakra.menu_button(
					rx.badge("Keikodev", 
						size="2", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.main_menu_badge_style,
						),
					#style=styles.main_menu_badge_style,
					),
				rx.chakra.menu_list(
					rx.chakra.menu_item("Recetas de cocina",style=styles.main_menu_style),
					rx.chakra.menu_item("Canal Recetas",style=styles.main_menu_style),
					rx.chakra.menu_item("Canal Novedades",style=styles.main_menu_style),
					rx.chakra.menu_item("Rincón de keiko",style=styles.main_menu_style),
					rx.chakra.menu_item("MG Nutrición",style=styles.main_menu_style),
					style={"color":"#000","background":Color.CONTENT.value,},
                    border_width = "5px",
                    border_color = Color.CONTENT.value,
				),
            
			)

def menu_tecnologia()->rx.Component:
        return rx.chakra.menu(
				rx.chakra.menu_button(
					rx.badge("Tecnología", 
						size="2", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.main_menu_badge_style,)),
                                                #{"font-family":Fuentes.TITLE.value, "color":Color.PRIMARY.value}
				rx.chakra.menu_list(
					rx.chakra.menu_item("SpaceX",style=styles.main_menu_style),
					rx.chakra.menu_item("Herramientas AI",style=styles.main_menu_style),
					rx.chakra.menu_item("Ciberestafas",style=styles.main_menu_style),
					rx.chakra.menu_item("Programación",style=styles.main_menu_style),
					rx.chakra.menu_item("Cursos",style=styles.main_menu_style),
					rx.chakra.menu_item("Herramientas Gráficas",style=styles.main_menu_style),
					rx.chakra.menu_item("Trucos",style=styles.main_menu_style),
					style={"color":"#000","background":Color.CONTENT.value,},
                    border_width = "5px",
                    border_color = Color.CONTENT.value,
				),
            
			)

def menu_otros()->rx.Component:
        return rx.chakra.menu(
				rx.chakra.menu_button(
					rx.badge("Otros", 
						size="2", 
						color_scheme="pink", 
                        variant="outline",
                        style=styles.main_menu_badge_style,)),
                                                #{"font-family":Fuentes.TITLE.value, "color":Color.PRIMARY.value}
				rx.chakra.menu_list(
					rx.chakra.menu_item("Biblioteca de imágenes",style=styles.main_menu_style),
					rx.chakra.menu_item(
                            rx.link("Plantilla gastos hipoteca",href="/img/trucos/carta_modelo.pdf",is_external=True),
                            style=styles.main_menu_style),
					style={"color":"#000","background":Color.CONTENT.value,},
                    border_width = "5px",
                    border_color = Color.CONTENT.value,
				),
            
			)


                        # rx.chakra.modal(
                        #         rx.chakra.modal_overlay(
                        #                 rx.chakra.modal_content(
                        #                         rx.chakra.modal_body(
                        #                                 rx.chakra.center(
                        #                                         rx.chakra.vstack(
                        #                                                 rx.chakra.button(
                        #                                                 "Cerrar ventana",
                        #                                                 size = "md",
                        #                                                 variant= "outline",
                        #                                                 border_width = "3px",
                        #                                                 width="30%",
                        #                                                 border_color = Color.PRIMARY.value,
                        #                                                 on_click=ModalStateFull.change("","",""),                                                                      
                        #                                                 ),
                        #                                                 rx.chakra.image(
                        #                                                         src=ModalStateFull.hdurl,
                        #                                                         alt="Imagen pantalla completa",
                        #                                                         width="100%",
                        #                                                         height="auto",
                        #                                                 ),
                        #                                                 rx.chakra.text(ModalStateFull.title,
                        #                                                         color = TextColor.PRIMARY.value),
                        #                                                 rx.chakra.text("Copyright: ", ModalStateFull.copyright,
                        #                                                         color = TextColor.PRIMARY.value),
                        #                                                 rx.chakra.text(ModalStateFull.explanation,
                        #                                                         color = TextColor.PRIMARY.value),

                        #                                                 max_width = styles.CONTENT_WIDTH,
                        #                                         ),

                        #                                 ),

                        #                                 style = styles.background_pattern_style,
                                                        
                        #                         ),
                        #                         bg = Color.BACKGROUND.value,
                        #                 ),
                                        
                        #         ),
                        #         is_open=ModalStateFull.show,
                        #         size="full",
                        # ),
                        #width = "100%",
                        # display = "flex",
                        # align_items = "right",
                        # justify_content = "right",