from keikodev.models.info_interes_models import InfoInteresCabecera, InfoInteresDetalles
from keikodev.api.db import Database
from datetime import datetime
import asyncio

tabla_info_interes_cabecera = "info_interes_cabecera"
tabla_info_interes_detalles = "info_interes_detalles"

db = Database()

def leerPost():
    registros = db.select_db(tabla_info_interes_cabecera)
    cabeceras_modelo = []
    for item_cabecera in registros:
        registros_detalles = db.where(tabla_info_interes_detalles,f"idCabecera={item_cabecera[0]}")
        detalles_modelo = [
            InfoInteresDetalles(
                id = detalles[0],
                parrafoId = detalles[1],
                tituloParrafo = detalles[2],
                parrafo = detalles[3],
                fotoParrafo = detalles[4],
                idCabecera = detalles[5]
            ) for detalles in registros_detalles
        ]
        cabecera_modelo = InfoInteresCabecera(
            id=item_cabecera[0],
            create_time = item_cabecera[1].strftime('%Y-%m-%d %H:%M:%S'),
            title = item_cabecera[2],
            date = item_cabecera[3].strftime('%Y-%m-%d %H:%M:%S'),
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
