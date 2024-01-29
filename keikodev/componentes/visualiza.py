import reflex as rx

# class ModalState(rx.State):
#     show: bool = False
#     count: str

#     def change(self, count:str):
#         self.show = not (self.show)
#         self.count = count

# def visualiza()->rx.Component:
#         return 
#         rx.modal(
#             rx.modal_overlay(
#                 rx.modal_content(
#                     rx.modal_body(
#                         rx.image(
#                             src=ModalState.count),
#                         rx.button(
#                             "Close",
#                             on_click=ModalState.change(""),
#                         )
#                     ),
#                 ),
#             ),
#         is_open=ModalState.show
#         ), 


"""
def index():
    return rx.hstack(
        rx.image(
            src="favicon.ico",
            bg="#fef2f2",
            color="#b91c1c",
            border_radius="lg",
            on_click=ModalState.change("avatar3.png"),
        ),
        rx.image(
            src="favicon.ico",
            bg="#ecfdf5",
            color="#047857",
            border_radius="lg",
            on_click=ModalState.change("keiko_manga.png"),

        ),
        rx.modal(
            rx.modal_overlay(
                rx.modal_content(
                    rx.modal_body(
                        rx.image(
                            src=ModalState.count),
                        rx.button(
                            "Close",
                            on_click=ModalState.change(""),
                        )
                    ),
                ),
            ),
        is_open=ModalState.show
        ), 


        rx.heading(rx.image(src=State.count), font_size="2em"),
        spacing="1em",

    )
"""