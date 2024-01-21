import reflex as rx
from keikodev.componentes.linkbutton import linkbutton
from keikodev.componentes.title import title
from keikodev.styles.styles import Size as Size
import keikodev.views.constants as constants
from keikodev.routes import Route


def index_links()-> rx.Component:
    return rx.vstack(
        title("Recursos para programación"),
        linkbutton("Desarrollo",
                   "Páginas relacionadas con el desarrollo de aplicaciones",
                   "/icons/dev.svg",
                   Route.DEV.value,
                   is_external=False),

        linkbutton("Herramientas gráficas",
                   "Herramientas gráficas para Desarrollos",
                   "/icons/image-solid.svg",
                   constants.FOTOR_URL),

        linkbutton('Tips e instrucciones más usadas', 
                   "Como tengo memoria de pez, este será mi bloc de notas para", 
                   "/icons/tag-solid.svg",
                   Route.CONSTR.value,
                   is_external=False),
        
        title("Otras ideas"),
        linkbutton("Configuración de kodi",
                   "Apartado destinado a mantener la configuración de kodi",
                   "/icons/tv-solid.svg",
                   constants.DEFAULT_URL),

        linkbutton("Biblioteca de imágenes",
                   "Crear biblioteca de imágenes con fotografía propia",
                   "/icons/images.svg",
                   constants.FLICKR_URL),

        linkbutton('Mundo de la emulación', 
                   "Todo lo relativo al mundo de la emulación Consola", 
                   "/icons/gamepad-solid.svg",
                   constants.DEFAULT_URL),

        linkbutton('Biblioteca WOW', 
                   "Enlaces para fanáticos del WOW que no te puedes perder.", 
                   "/icons/wow-icon.svg",
                   constants.WOW_URL),
        
        linkbutton('Cyber Seguridad', 
                   "Casos comunes de ciber ataques", 
                   "/icons/dev.svg",
                   constants.DEFAULT_URL),

        title("Backup"),
        linkbutton("Reflex Dev",
                   "Para crear páginas web con Python",
                   "/icons/dev.svg",
                   constants.REFLEX_URL),
        linkbutton("Google",
                   "Buscador universal",
                   "/icons/dev.svg",
                   constants.GOOGLE_URL),
        linkbutton("Mouredev", 
                   "El Maestro",
                   "/icons/dev.svg", 
                   constants.MOUREDEV_URL),
        linkbutton('W3Schools', 
                   "Aprende CSS", 
                   "/icons/dev.svg",
                   constants.W3SCHOOLS_URL),
        linkbutton('GitHub', 
                   "Mi repositorio en Git Hub",
                   "/icons/dev.svg", 
                   constants.GITHUB_URL),
        title("Contacto"),
        linkbutton("Email",
                   constants.EMAIL,
                   "/icons/dev.svg",
                   f"mailto:{constants.EMAIL}"),
        width = "100%",
        spacing=Size.MEDIUM.value,
    )