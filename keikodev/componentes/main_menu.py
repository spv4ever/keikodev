import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.styles import Color as Color
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.styles.styles import Size as Size
from keikodev.routes import Route




def main_menu()-> rx.Component:
           return rx.chakra.menu(
                rx.chakra.menu_button(
                        rx.chakra.text(
                                "Menu",
                                style=styles.main_menu_style,
                                
                                
                                ),
                        ),
                        rx.chakra.menu_list(
                                rx.chakra.menu_item(
                                        rx.chakra.link(
                                                "Mundo de la Programación",
                                                href = Route.DEV.value,
                                                ),
                                        style=styles.main_menu_style,
                                        ),
                                rx.chakra.menu_item(
                                        rx.chakra.link(
                                                "Herramientas Gráficas",
                                                href = Route.UTILS_IMAGES.value,
                                                
                                                ),
                                        style=styles.main_menu_style,
                                        ),
                                rx.chakra.menu_divider(),
                                rx.chakra.menu_item(
                                        rx.chakra.link(
                                                "Manuales Kodi",
                                                href = Route.KODI.value,
                                                ),
                                        style=styles.main_menu_style,
                                        
                                        ),
                                rx.chakra.menu_item(
                                        rx.chakra.link(
                                                "Ciberestafas",
                                                href = Route.ESTAFAS.value,
                                                ),
                                        style=styles.main_menu_style,
                                        
                                        ),
                                rx.chakra.menu_divider(),
                                rx.chakra.menu_item(
                                        rx.chakra.link(
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