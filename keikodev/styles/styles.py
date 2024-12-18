import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Fuentes as Fuentes

STYLESHEETS = [
    "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap",
    "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap",
    "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    "img/css/styles.css",
    "fonts/Fonts.css"
]

BOUNCE = "animate__animated animate__bounce"
ROTATE = "animate__animated animate__rotateIn"
TITLE_INDEX = "animate__animated animate__flipInX animate__delay-1s animate__slow"
TITLE_INDEX_BIS = "animate__animated animate__fadeIn animate__delay-2s animate__slower"
TITLE_INDEX_TRES = "animate__animated animate__fadeInUp animate__delay-3s animate__slower" 

# Constantes
MAX_WIDTH = "560px"
CONTENT_WIDTH = "1000px"
CONTENT_GALERY = "100%"



# Sizes
class Size(Enum):
    ZERO = '0px !important'
    VERY_XS = "0.1em"
    VERY_SMALL = "0.2em"
    SMALL_MEDIUM = "0.3em"
    SMALL = "0.5em"
    SMALL_LARGE = "0.7em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE_SMALL = "1.2em"
    LARGE = "1.5em"
    BIG = "2em"
    DEFAULT_BIG = "1.5em"
    MEDIUM_BIG = "3em"
    VERY_BIG = "6em"
    BUTTON_SHORT = "300px"
    BUTTON_MEDIUM = "375px"
    BUTTON_BIG = "450px"

class SizeRx(Enum):
    SMALL = "2"
    MEDIUM = "4"
    DEFAULT = "6"
    BIG = "8"

# Styles
BASE_STYLE = {
    "font_family": Fuentes.DEFAULT.value,
    "background_color": Color.BACKGROUND.value,
    rx.chakra.Heading:{
        "color" : TextColor.HEADER.value,
        "font_family": Fuentes.TITLE.value
    },
    rx.chakra.Button:{
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
            "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.SECONDARY.value}",
            }
    },
    rx.chakra.Link:{
        "text_decoration" : "none",
        "_hover" : {}   
    },
}

launch_input = {"width":"530px"}

star_gold = {"color":"gold"}

star_grey = {"color":"grey"}

index_cards = {"background-color":Color.CONTENT.value,
                "border": "2px solid #651249",
                "width" : "400px",
                "height" : "300px",
                "text-decoration":"none",
                    "_hover" : {
                            "text-decoration":"none",
                            "background-color" : Color.BACKGROUND.value,
                            "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.SECONDARY.value},",
                            "cursor":"pointer",
                            }
            }

links_without_decoration = {"text-decoration":"none","_hover":{"text-decoration":"none"}}


box_news_style = {
        "width" : "100%",
        "height" : "100%",
        "display":"block",
        "padding" : Size.SMALL.value,
        "border_radius" : Size.DEFAULT.value,
        "color" : TextColor.HEADER.value,
        "background_color" : Color.CONTENT.value,
        "white_space" : "normal",
        # "_hover" : {
        #     "background_color" : Color.SECONDARY.value,
        #     "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.SECONDARY.value}",
        #     }
    }

container_style = {
    "width" : "100%",
    "padding": Size.DEFAULT.value,
    "border_radius": "1.5rem",
    "background": Color.CONTENT.value,
    "_hover": {
        "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.CONTENT.value}"
    }
}

cardia_style = {
    "width" : "100%",
    "padding": Size.DEFAULT.value,
    "border_radius": "1.5rem",
    "background": Color.CONTENT.value,
    "_hover": {
        "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.PRIMARY.value}",
        "background": Color.BACKGROUND.value,
    }
}

form_login_user = {
    "width":"300px",
    "padding": Size.DEFAULT.value,
    "border_radius": "1.5rem",
    "background": Color.CONTENT.value,
    "_hover": {
        "box-shadow": f"0 0 {Size.DEFAULT.value} {Color.PRIMARY.value}",
        "background": Color.BACKGROUND.value,
    }
}



post_style = {
    "height": 400, 
    "color": TextColor.BODY.value, 
    "padding": Size.DEFAULT.value,
    "border_radius": "1.5rem",
    "background-color":Color.BACKGROUND.value
    }

featured_container_style = {
    "padding": Size.MEDIUM_BIG.value,
    "border_radius": "1.5rem",
    "background": Color.SECONDARY.value,
    "box-shadow": f"0 0 {Size.DEFAULT.value} {TextColor.PURPLE.value}"
}

background_gradient_style = {
    "background": f"linear-gradient(to bottom, rgb(0, 0, 0, 0) 30%, {Color.IMAGE_BOX.value} 100%)"
}

background_pattern_style = {
    "background": "url('/img/mosaico.png') repeat",
    "background-size": "120px 120px",
}

background_gradient_pattern_style = {
    "background": f"linear-gradient(to bottom, rgb(0, 0, 0, 0) 60%, {Color.IMAGE_BOX.value} 100%)",
    "background-size": "120px 120px",
}

button_title_style = dict(
    font_family=Fuentes.TITLE.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.HEADER.value,
)

title_news_style = dict(
    font_family=Fuentes.TITLE.value,
    font_size = SizeRx.BIG.value,
    color=TextColor.HEADER.value,
)

button_body_style = dict(
    font_family=Fuentes.DEFAULT.value,
    font_size = Size.SMALL_LARGE.value,
    color=TextColor.BODY.value,
    text_align = "start"
)

receta_style = dict(
    font_family=Fuentes.DEFAULT.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.BODY.value,
    text_align = "start"
)

infobox_body_style = dict(
    font_family=Fuentes.TITLE.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.BODY.value,
    text_align = "start"
)

Tooltip_style = dict(
    font_family=Fuentes.TITLE.value,
    font_size = Size.MEDIUM.value,
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

title_center_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    padding_x = Size.MEDIUM.value,
    text_align = "center",    
)

main_menu_style = {
    "color" : Color.PRIMARY.value,
    "font_family":Fuentes.TITLE.value,
    "background":Color.CONTENT.value,
    "text-decoration":"none",
    "_hover": {
            "color" : Color.SECONDARY.value,
            "background" : Color.BACKGROUND.value,
            "text-decoration":"none",
            }
}

main_menu_badge_style = {
    "color" : Color.PRIMARY.value,
    "font_family":Fuentes.TITLE.value,
    "background":Color.BACKGROUND.value,
    "_hover": {
            "color" : Color.BACKGROUND.value,
            "background" : Color.SECONDARY.value,
            "cursor":"pointer"},
}

badge_title = {
    "color" : Color.PRIMARY.value,
    "font_family":Fuentes.TITLE.value,
    "background":Color.BACKGROUND.value,
    # "_hover": {
    #         "color" : Color.BACKGROUND.value,
    #         "background" : Color.SECONDARY.value,
    #         "cursor":"pointer"},
}



# main_menu_style = dict(
#     color = Color.SECONDARY.value,
#     font_family=Fuentes.LOGO.value,
#     bg=Color.CONTENT.value,
#     font_size = Size.LARGE_SMALL.value,
#     _hover = {
#             "color" : Color.PRIMARY.value}
# )

main_menu_style_item=dict(font_family=Fuentes.TITLE.value,
                    padding_y = Size.SMALL_MEDIUM.value,
                    padding_x = Size.MEDIUM.value,
                    font_size = "sm",
                    border_radius = "5px",
                    border_width = "1px",
                    border_color = "#651249",
					color=Color.PRIMARY.value,
                    background = Color.BACKGROUND.value,
                    _hover={"color":Color.BACKGROUND.value,"bg":Color.SECONDARY.value},)

main_menu_list_style = dict(
    font_size = Size.DEFAULT.value,
    bg=Color.CONTENT.value,
    border_color = Color.PRIMARY.value,
)

steps_style = dict(
    font_family=Fuentes.DEFAULT.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.BODY.value,
    text_align = "start"
)

steps_resaltar_style = dict(
    font_family=Fuentes.DEFAULT.value,
    font_size = Size.DEFAULT.value,
    font_weight="bold",
    color=Color.PRIMARY.value)