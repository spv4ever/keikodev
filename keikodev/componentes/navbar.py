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
from keikodev.data.items_menu import items_menu_keikodev,items_menu_tecnologia,items_menu_otros
from keikodev.pages.user_page import create_user_form_dialog as new_user
from keikodev.pages.user_page import login_user_form_dialog as login_user
from keikodev.pages.user_page import logout_user_form
from keikodev.componentes.notify import notify_component


from keikodev.pages.user_page import UserState


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
                        rx.link(
							rx.badge('Inicio',size="2", 
								color_scheme="pink", 
								variant="outline",
								style=styles.main_menu_badge_style),
                            href=Route.INDEX.value,
                            is_external=False,
                            style=styles.links_without_decoration,
						),
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
                rx.cond(
                    UserState.user_name!="",
                	rx.text(f"Bienvenido: {UserState.user_name}", style={"color":TextColor.HEADER.value}),
				),
                    rx.tablet_and_desktop(
						rx.link(		
							rx.badge('Sobre mi...',size="2", 
									color_scheme="pink", 
									variant="outline",
									style=styles.main_menu_badge_style,),
                            href=Route.ABOUT.value,
                            is_external=False,
                            style=styles.links_without_decoration,
						),
                    ),
                                                                
                
                # rx.badge('Iniciar Sesión',size="2", 
				# 		color_scheme="pink", 
                #         variant="outline",
                #         style=styles.main_menu_badge_style,),
                # rx.link(
				# 	rx.badge('Registrarse',size="2", 
				# 			color_scheme="pink", 
				# 			variant="outline",
				# 			style=styles.main_menu_badge_style,
				# 			padding_left=Size.DEFAULT.value,
				# 			),
				# ),
    			rx.cond(
						UserState.error != '',
						notify_component(UserState.error, "shield-alert", "yellow")
                        ),
				rx.cond(
                    UserState.user_type == 0,
    				login_user()
				),
                rx.cond(
                    UserState.user_type == 0,
					new_user()
				),
                rx.cond(
                    UserState.user_type != 0,
                    logout_user_form()
				),
                rx.mobile_only(
                        rx.container(
							menu_general(),
							style={"width": "100%"}),
						),
				
                direction="row",
                style={"color":TextColor.HEADER.value, "max-width":"100%","margin-right":Size.MEDIUM.value},
                spacing="3",
                justify="between",
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
						"keikodev",
						style=styles.main_menu_style_item,
					),
				rx.chakra.menu_list(
					*[
                        main_menu_item(item[0],item[1],item[2])
                        for item in items_menu_keikodev
                        ],  
					style={"color":"#000","background":Color.CONTENT.value,},
                    border_width = "5px",
                    border_color = Color.CONTENT.value,
				),
            style=styles.main_menu_badge_style,
			)

def main_menu_item(text: str, url: str, internal: bool=False)->rx.Component:
        return rx.link(
                rx.chakra.menu_item(
					text,
					style=styles.main_menu_style
					),
				href=url,
				is_external=internal,
				style=styles.main_menu_style,
			),

def menu_tecnologia()->rx.Component:
        return rx.chakra.menu(
				rx.chakra.menu_button(
					"Tecnología",
					style=styles.main_menu_style_item,),

				rx.chakra.menu_list(
					*[
                        main_menu_item(item[0],item[1],item[2])
                        for item in items_menu_tecnologia
                        ],
                        
					style={"color":"#000","background":Color.CONTENT.value,},
                    border_width = "5px",
                    border_color = Color.CONTENT.value,
				),
            
			)

def menu_otros()->rx.Component:
        return rx.chakra.menu(
				rx.chakra.menu_button(
					"Otros",
					style=styles.main_menu_style_item,),
				rx.chakra.menu_list(
					*[
						main_menu_item(item[0],item[1],item[2])
						for item in items_menu_otros
					], 
					style={"color":"#000","background":Color.CONTENT.value,},
                    border_width = "5px",
                    border_color = Color.CONTENT.value,
				),
            
			)

def menu_general()->rx.Component:
        return rx.menu.root(
					rx.menu.trigger(
						rx.badge(
							"Menú",
							size="2",
                            color_scheme="pink",
							variant="outline",
							style=styles.main_menu_badge_style,
                            
						),
						
					),
					# rx.menu.content(
					# 	rx.menu.item("Edit", shortcut="⌘ E"),
					# 	rx.menu.item("Duplicate", shortcut="⌘ D"),
					# 	rx.menu.separator(),
					# 	rx.menu.sub(
					# 		rx.menu.sub_trigger("More"),
					# 		rx.menu.sub_content(
					# 			rx.menu.item("Option 1"),
					# 			rx.menu.item("Option 2")
					# 		)
					# 	),
					# 	rx.menu.separator(),
					# 	rx.menu.item("Delete", shortcut="⌘ ⌫", color="red"),
					# ),
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