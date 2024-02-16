import reflex as rx

class ModalState(rx.State):
    show: bool = False
    count: str
    def change(self, count:str):
        self.show = not (self.show)
        self.count = count
        

def modal_small()-> rx.Component:
    return rx.chakra.modal(
        rx.chakra.modal_overlay(
            rx.chakra.modal_content(
                rx.chakra.modal_body(
                    rx.chakra.box(
                        rx.chakra.image(
                            src=ModalState.count,
                            width="800px",
                            heigth = "auto"
                            ),
                    ),
                rx.chakra.modal_footer(
                        rx.chakra.button(
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
    title: str
    explanation: str

    def change(self, hdurl:str, title:str = "", explanation: str =""):
        self.show = not (self.show)
        self.hdurl = hdurl
        self.title = title
        self.explanation = explanation
        
