from keikodev.api.iatoolsdb import select_all, create_iatool, select_tipos, select_type
from keikodev.models.iatools_model import Iatools, Tipo
import datetime as datetime

def select_all_iatools_service():
    iatools = select_all()
    #print(iatools)
    #print(type(iatools))
    return iatools

def create_iatool_service(herramientaAI: str, descripcion: str, url: str, tipo: str, estrellas: int, icon: str, url_formacion: str, planGratuito: bool=False):
        new_ia_tool = Iatools(herramientaAI=herramientaAI, descripcion=descripcion, url=url, tipo=tipo, planGratuito=planGratuito, estrellas=estrellas, icon=icon, url_formacion=url_formacion)
        return create_iatool(new_ia_tool)

def select_tipos_service():
    selected = select_tipos()
    tipos = [Tipo(
            nombre=detalles[0],
            numero=detalles[1])
            for detalles in selected]
    return tipos

def select_type_service(type:str):
        return select_type(type)





    #herramientaAI: str, descripcion: str, url: str, tipo: str, planGratuito: bool, estrellas: int, icon: str = "", url_formacion: str


