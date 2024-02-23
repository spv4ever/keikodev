import reflex as rx

class CountState(rx.State):
    count: int = 0

    def increment(self):
        self.count += 1

    def decrement(self):
        self.count -= 1


def counter():
    return rx.flex(
        rx.button(
            "Decrement",
            color_scheme="red",
            on_click=CountState.decrement,
        ),
        rx.heading(CountState.count),
        rx.button(
            "Increment",
            color_scheme="grass",
            on_click=CountState.increment,
        ),
        spacing="3",
    )