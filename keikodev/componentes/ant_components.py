import reflex as rx
from keikodev.styles.colors import Color as Color
import json

class FloatButton(rx.Component):
        library = "antd"
        tag = "FloatButton"
        icon: rx.Var[rx.Image]
        href:  rx.Var[str]
        target: rx.Var[str]
        
        #badge = {"dot": True, "color": Color.PRIMARY.value }

Float_Button = FloatButton.create

# class Carousel(rx.Component):
#         library = "ant"
#         tag = "createRoot"
#         Carousel = json.dumps({"style": {"color": "red", "fontSize": "20px"},"content": "<b>1. Entrada</b>"})
#         #[{"style": {"color": "red", "fontSize": "20px"},"content": "<b>1. Entrada</b>"}]

# Carousel_active = Carousel.create




