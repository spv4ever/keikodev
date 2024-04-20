from keikodev.routes import Route
import keikodev.views.constants as constants

#####
items_menu_keikodev=[("Recetas de cocina",Route.COCINA.value,False),
                    ("Canal Recetas",constants.YOUTUBE_URL,True),
                    ("Canal Novedades",constants.YOUTUBE_URL_CANAL,True),
                    ("Rincón de keiko",Route.KEIKO.value,False),
                    ("MG Nutrición",constants.MG_URL,True)
                    ]

items_menu_tecnologia = [
    ("SpaceX - Rumbo a Marte",Route.SPACEX.value,False),
    ("Herramientas AI",Route.IA_TOOLS.value,False),
    ("Ciberestafas",Route.ESTAFAS.value,False),
    ("Programación",Route.DEV.value,False),
    ("Cursos",Route.CURSOS.value,False),
    ("Herramientas Gráficas",Route.UTILS_IMAGES.value, False),
    ("Trucos",Route.TRUCOS.value, False)
]

items_menu_otros = [
    ("Biblioteca de imágenes",Route.GALERIA.value,False),
    ("Plantilla gastos hipoteca","/img/trucos/carta_modelo.pdf",True)
]

