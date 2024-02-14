import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def emulator_links()-> rx.Component:
        return rx.vstack(
                title("Sección del mundo de la emulaciòn"),
                linkbutton("MAME emulador arcade retro",
                "Emulador de las primeras máquinas recreativas",
                "/img/windows.svg",
                Route.CONSTR.value,
                is_external=True
                ),
                linkbutton("Dolphin GC & WII",
                "Emulador de consolas Game Cube & WII",
                "/img/shuttle-space-solid.svg",
                Route.CONSTR.value,
                is_external=False,
                ),



        width = "100%",
        spacing=Size.MEDIUM.value,
    )