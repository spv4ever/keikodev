from keikodev.api.iatoolsdb import select_all, create_iatool
from keikodev.models.iatools_model import Iatools
import datetime as datetime

def select_all_iatools_service():
    iatools = select_all()
    return iatools

def create_iatool_service(herramientaAI: str, descripcion: str, url: str, tipo: str, planGratuito: bool, estrellas: int, icon: str, url_formacion: str):
        pass
        new_ia_tool = Iatools(herramientaAI=herramientaAI, descripcion=descripcion, url=url, tipo=tipo, planGratuito=planGratuito, estrellas=estrellas, icon=icon, url_formacion=url_formacion)
        return create_iatool(new_ia_tool)


    #herramientaAI: str, descripcion: str, url: str, tipo: str, planGratuito: bool, estrellas: int, icon: str = "", url_formacion: str


