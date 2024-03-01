import reflex as rx

class InfoInteresDetalles(rx.Base):
    id: int
    parrafoId: int
    tituloParrafo: str
    parrafo: str
    fotoParrafo: str | None
    idCabecera: str

class InfoInteresCabecera(rx.Base):
    id: int
    create_time: str
    title: str
    date: str
    introduction: str
    conclusion: str
    detalles: list[InfoInteresDetalles]


