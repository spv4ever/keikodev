import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Fuentes as Fuentes

# Constantes
MAX_WIDTH = "560px"

# Sizes
class Size(Enum):
    ZERO = '0px !important'
    SMALL = "0.5em"
    SMALL_LARGE = "0.7em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"

# Styles
BASE_STYLE = {
    "font_family": Fuentes.DEFAULT.value,
    "background_color": Color.BACKGROUND.value + "!important",
    rx.Heading:{
        "color" : TextColor.HEADER.value,
        "font_family": Fuentes.TITLE.value
    },
    rx.Button:{
        "width" : "100%",
        "height" : "100%",
        "display":"block",
        "padding" : Size.SMALL.value,
        "border_radius" : Size.DEFAULT.value,
        "color" : TextColor.HEADER.value,
        "background_color" : Color.CONTENT.value,
        "white_space" : "normal",
        "_hover" : {
            "background_color" : Color.SECONDARY.value,
            }
    },
    rx.Link:{
        "text_decoration" : "none",
        "_hover" : {}   
    },

}

button_title_style = dict(
    font_family=Fuentes.TITLE.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.HEADER.value
)

button_body_style = dict(
    font_family=Fuentes.DEFAULT.value,
    font_size = Size.SMALL_LARGE.value,
    color=TextColor.BODY.value,
    text_align = "start"
)

title_style = dict(
    size="lg",
    width="100%",
    padding_top=Size.DEFAULT.value,
    padding_x = Size.MEDIUM.value
    
)

navbar_title_style = dict(
    font_family=Fuentes.LOGO.value,
    font_size = Size.LARGE.value,
)

