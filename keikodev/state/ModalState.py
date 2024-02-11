import reflex as rx

class ModalState(rx.State):
    show: bool = False
    count: str
    def change(self, count:str):
        self.show = not (self.show)
        self.count = count
        

def modal_small()-> rx.Component:
    return rx.modal(
        rx.modal_overlay(
            rx.modal_content(
                rx.modal_body(
                    rx.box(
                        rx.image(
                            src=ModalState.count,
                            width="800px",
                            heigth = "auto"
                            ),
                    ),
                rx.modal_footer(
                        rx.button(
                            "Close",
                            on_click=ModalState.change(""),
                        ),
                        ),
                    
                ),
            ),
        ),
    is_open=ModalState.show,
    size="xl",
    ),



class ModalStateFull(rx.State):
    show: bool = False
    hdurl: str
    def change(self, hdurl:str):
        self.show = not (self.show)
        self.hdurl = hdurl
