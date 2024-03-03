import reflex as rx

class CuidadosDetalles(rx.Base):
    id: int
    parrafoId: int
    tituloParrafo: str
    parrafo: str
    fotoParrafo: str | None
    idCabecera: str

class CuidadosCabecera(rx.Base):
    id: int
    create_time: str
    title: str
    date: str
    introduction: str
    conclusion: str
    detalles: list[CuidadosDetalles]

    


