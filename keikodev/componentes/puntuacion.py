import reflex as rx
import keikodev.styles.styles as Styles

def estrellas(estrellas: int)->rx.Component:
    return rx.hstack(
                rx.match(estrellas,
                    (1,unaestrella()),
                    (2,dosestrellas()),
                    (3,tresestrellas()),
                    (4,cuatroestrellas()),
                    (5,cincoestrellas()),
                )
    )

def unaestrella()->rx.Component:
    return rx.hstack(
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="grey"),
        rx.icon("star",size=20,color="grey"),
        rx.icon("star",size=20,color="grey"),
        rx.icon("star",size=20,color="grey"),
        align="center",
        justify="center",
    )

def dosestrellas()->rx.Component:
    return rx.hstack(
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="grey"),
        rx.icon("star",size=20,color="grey"),
        rx.icon("star",size=20,color="grey"),
        align="center",
        justify="center",
    )

def tresestrellas()->rx.Component:
    return rx.hstack(
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="grey"),
        rx.icon("star",size=20,color="grey"),
        align="center",
        justify="center",
    )

def cuatroestrellas()->rx.Component:
    return rx.hstack(
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="grey"),
        align="center",
        justify="center",
    )

def cincoestrellas()->rx.Component:
    return rx.hstack(
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        rx.icon("star",size=20,color="gold"),
        align="center",
        justify="center",
    )