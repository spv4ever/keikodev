import reflex as rx


def notify_component(message: str, icon_notify: str, color: str)-> rx.Component:
    return rx.callout(
        message,
        icon=icon_notify,
        style=style_notify,
        color_scheme=color,
        variant="surface",
        size="3",
        role="alert",
    )

style_notify= {
    "position":"fixed",
    "top":"0px",
    "right":"0px",
    "margin":"10px 10px"
}