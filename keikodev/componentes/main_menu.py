import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.styles import Color as Color
from keikodev.styles.colors import Color as Color
from keikodev.styles.colors import TextColor as TextColor
from keikodev.styles.fonts import Fuentes as Fuentes
from keikodev.styles.styles import Size as Size




def main_menu()-> rx.Component:
           return rx.menu(
                rx.menu_button(
                        rx.text(
                                "Menu",
                                style=styles.main_menu_style,
                                
                                
                                ),
                    ),
                    rx.menu_list(
                    rx.menu_item("Example",style=styles.main_menu_style,),
                    rx.menu_item("Example",style=styles.main_menu_style,),
                    rx.menu_item("Example",style=styles.main_menu_style,),
                    style=styles.main_menu_style,
                    
                    text_decoration="none",
                    ),
                style=styles.main_menu_style,
                
                
                )