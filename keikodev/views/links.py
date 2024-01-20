import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants

def links()-> rx.Component:
    return rx.vstack(
        title("Recursos para programación"),
        linkbutton("Desarrollo",
                   "Páginas relacionadas con el desarrollo de aplicaciones, tutoriales, tools ",
                   constants.MOUREDEV_URL),
        linkbutton("Herramientas gráficas",
                   "Agruparemos todas las herramientas gráficas que encontremos para Desarrollos",
                   constants.FOTOR_URL),
        linkbutton('GitHub', 
                   "Mi repositorio en Git Hub", 
                   constants.GITHUB_URL),
        linkbutton('Tips e instrucciones más usadas', 
                   "Como tengo memoria de pez, este será mi bloc de notas para", 
                   constants.DEFAULT_URL),
        
        title("Otras ideas"),
        linkbutton("Configuración de kodi",
                   "Apartado destinado a mantener la configuración de kodi recopilada de otras fuentes",
                   constants.DEFAULT_URL),

        linkbutton("Biblioteca de imágenes",
                   "Crear biblioteca de imágenes con fotografía propia",
                   constants.DEFAULT_URL),

        linkbutton('Biblioteca WOW', 
                   "Enlaces para fanáticos del WOW que no te puedes perder.", 
                   constants.DEFAULT_URL),
        
        linkbutton('Cyber Seguridad', 
                   "Casos comunes de ciber ataques", 
                   constants.DEFAULT_URL),

        title("Backup"),
        linkbutton("Reflex Dev",
                   "Para crear páginas web con Python",
                   constants.REFLEX_URL),
        linkbutton("Google",
                   "Buscador universal",
                   constants.GOOGLE_URL),
        linkbutton("Mouredev", 
                   "El Maestro", 
                   constants.MOUREDEV_URL),
        linkbutton('W3Schools', 
                   "Aprende CSS", 
                   constants.W3SCHOOLS_URL),
        linkbutton('GitHub', 
                   "Mi repositorio en Git Hub", 
                   constants.GITHUB_URL),
        title("Contacto"),
        linkbutton("Email",
                   constants.EMAIL,
                   f"mailto:{constants.EMAIL}"),
        width = "100%",
        spacing=Size.MEDIUM.value,
    )