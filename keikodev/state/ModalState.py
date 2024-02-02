import reflex as rx

class ModalState(rx.State):
    show: bool = False
    count: str
    def change(self, count:str):
        self.show = not (self.show)
        self.count = count


