import reflex as rx
from keikodev.styles.colors import Color as Color

class FloatButton(rx.Component):
        library = "antd"
        tag = "FloatButton"
        icon: rx.Var[rx.Image]
        href:  rx.Var[str]
        #disabled: rx.Var[bool]
        target: rx.Var[str]
        badge = {"dot": True, "color": Color.PRIMARY.value }

Float_Button = FloatButton.create
