from keikodev.api.nasa import select_last_picture
from keikodev.models.Nasalink import Nasa_imagenes
import datetime as datetime

def nasa_last_picture_service():
    item = select_last_picture()
    #print(item.url)

    # print(type(item))
    return item