import reflex as rx

class Alllinks(rx.State):

        count: int = 0

        def increment(self):
                self.count += 1
