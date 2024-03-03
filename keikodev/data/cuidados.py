from keikodev.models.cuidados_models import CuidadosCabecera, CuidadosDetalles
from keikodev.api.db import Database
from datetime import datetime
import asyncio

tabla_cabecera = "cuidados_cabecera"
tabla_detalles = "cuidados_detalles"

db = Database()

def leerPostCuidados():
    registros = db.select_db(tabla_cabecera)
    cabeceras_modelo = []
    for item_cabecera in registros:
        registros_detalles = db.where(tabla_detalles,f"idCabecera={item_cabecera[0]}")
        detalles_modelo = [
            CuidadosDetalles(
                id = detalles[0],
                parrafoId = detalles[1],
                tituloParrafo = detalles[2],
                parrafo = detalles[3],
                fotoParrafo = detalles[4],
                idCabecera = detalles[5]
            ) for detalles in registros_detalles
        ]
        cabecera_modelo = CuidadosCabecera(
            id=item_cabecera[0],
            create_time = item_cabecera[1].strftime('%d/%m/%Y'),
            title = item_cabecera[2],
            date = item_cabecera[3].strftime('%d/%m/%Y'),
            introduction=item_cabecera[4],
            conclusion=item_cabecera[5],
            detalles=detalles_modelo
        )
        cabeceras_modelo.append(cabecera_modelo)
    
    return cabeceras_modelo

    # for item in cabeceras_modelo:
    #     print(item.introduction)







    


    
# class InfoInteresDetalles(rx.Base):
#     id: int
#     parrafoId: int
#     tituloParrafo: str
#     parrafo: str
#     fotoParrafo: str
#     idCabecera: str


    # class InfoInteresCabecera(rx.Base):
    # id: int
    # create_time: str
    # title: str
    # date: str
    # introduction: str
    # conclusion: str
