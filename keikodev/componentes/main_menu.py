import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.styles import Color as Color
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route




def main_menu()-> rx.Component:
           return rx.menu(
                rx.menu_button(
                        rx.text(
                                "Menu",
                                style=styles.main_menu_style,
                                
                                
                                ),
                        ),
                        rx.menu_list(
                                rx.menu_item(
                                        rx.link(
                                                "Mundo de la Programación",
                                                href = Route.DEV.value,
                                                ),
                                        style=styles.main_menu_style,
                                        ),
                                rx.menu_item(
                                        rx.link(
                                                "Herramientas Gráficas",
                                                href = Route.UTILS_IMAGES.value,
                                                
                                                ),
                                        style=styles.main_menu_style,
                                        ),
                                rx.menu_divider(),
                                rx.menu_item(
                                        rx.link(
                                                "Manuales Kodi",
                                                href = Route.KODI.value,
                                                ),
                                        style=styles.main_menu_style,
                                        
                                        ),

                                rx.menu_divider(),
                                rx.menu_item(
                                        rx.link(
                                                "Índice",
                                                href = Route.INDEX.value,
                                        ),
                                        style=styles.main_menu_style,
                                ),
                                style=styles.main_menu_list_style,
                                #text_decoration="none",
                        ),
                style=styles.main_menu_style,
                )