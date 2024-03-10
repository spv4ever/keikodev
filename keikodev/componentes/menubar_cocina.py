import reflex as rx
import keikodev.styles.styles as styles
from keikodev.styles.colors import Color,TextColor

class SelectState3(rx.State):
    values: list[str] = ["Todas", 
                        "Plato principal",
                        "Postres",
                        "Salsas",
                        "Recetas andaluzas",
                        "Recetas catalanas",
                        "Recetas alemanas",
                        "Recetas asturianas",
                        "Recetas francesas",
                        "Recetas italianas",
                        "Recetas japonesas",
                        "Recetas marroquís",
                        "Recetas mexicanas",
                        "Recetas valencianas",
                        "Recetas veganas"]
    
    value: str = "Todas"



def menubar_cocina()->rx.Component:
    return rx.select(SelectState3.values,
                    default_value=SelectState3.value,
                    on_change = SelectState3.set_value,
                    color="purple",
                    color_scheme = "purple",
                    variant="classic",
                    radius="large",
                    width="50%",
                    )
