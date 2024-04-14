from keikodev.api.iatoolsdb import select_all
#from keikodev.models.iatools_model import Iatools
import datetime as datetime

def select_all_iatools_service():
    iatools = select_all()
    return iatools

