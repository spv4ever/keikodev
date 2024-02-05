import reflex as rx

# Comun
def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


# Index information
index_title = "KeikoDev. Links esenciales para Python, Recursos, formación, cyber estafas, utilidades"
index_description = "Soy técnico informático con más de 30 años de experiencia, fanático de la gestión de datos y Bigdata."
preview = 'avatar3.png'

# Links utiles para desarrollo
dev_title = "Página con recursos para desarrolladores"
dev_description = "Links que más uso para desarrollar, web, scrips, python, SQL Server..."


# Página en construcción
constr_title = "En construcción"
constr_description = "Estamos de obras, iremos informando..."

# Tools retoque fotográfico
utils_images_title = "Recursos fotográficos Online"
utils_images_description = "Links para retoques fotográficos online, AI, ..."

# Tools Kodi
kodi_title = "Manuales de instalación y gestión de KODI"
kodi_description = "Instalación, mejores addons, tools, repositorios..."

# Tools Kodi_pc
kodi_pc_title = "Manual de instalación de Kodi para PC y Android"
kodi_pc_description = "Pasos a seguir para preparar este genial centro multimedia"

# Tools Kodi_pc
kodi_addons_title = "Información general de gestión de add-ons en Kodi"
kodi_addons_description = "Todo lo necesario para gestionar add-ons en Kodi, instalación, actualización, mantenimiento."

# Tools Kodi_pc
kodi_luar_title = "Instalación de addon Luar en Kodi"
kodi_luar_description = "Pasos a seguir para preparar este genial centro multimedia, añadiendo Luar"

# Ciberestafas
estafas_title = "Sección de intentos de ciberestafas"
estafas_description = "Aquí describiremos los intentos de ciberestafas que vamos recibiendo, mails fraudulentos, avisos por wassap, sms..."

# Galeria
galeria_title = "Recursos y galerías de imagenes"
galeria_description = "Galerías de imagenes, fotos diarias, conexión directa con NASA con la foto del día"

# Galeria Nasa
galeria_nasa_title = "Últimas fotos publicadas desde la Nasa"
galeria_nasa_description = "Galería de fotos donde se irán publicando las últimas fotos directas desde La Nasa"




_meta = [
    {"name": "og:type", "content": "website"},
    {"name": "og:image", "content": preview},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@Albert_gasa"}
]

# Index

index_meta = [
    {"name": "og:title", "content": index_title},
    {"name": "og:description", "content": index_description},
]
index_meta.extend(_meta)

# dev
dev_meta = [
    {"name": "og:title", "content": dev_title},
    {"name": "og:description", "content": dev_description},
]
dev_meta.extend(_meta)

# constr
constr_meta = [
    {"name": "og:title", "content": constr_title},
    {"name": "og:description", "content": constr_description},
]
constr_meta.extend(_meta)

# constr
utils_images_meta = [
    {"name": "og:title", "content": utils_images_title},
    {"name": "og:description", "content": utils_images_description},
]
utils_images_meta.extend(_meta)

# kodi
kodi_meta = [
    {"name": "og:title", "content": kodi_title},
    {"name": "og:description", "content": kodi_description},
]
kodi_meta.extend(_meta)

# kodi
kodi_pc_meta = [
    {"name": "og:title", "content": kodi_pc_title},
    {"name": "og:description", "content": kodi_pc_description},
]
kodi_pc_meta.extend(_meta)

# kodi Luar
kodi_luar_meta = [
    {"name": "og:title", "content": kodi_luar_title},
    {"name": "og:description", "content": kodi_luar_description},
]
kodi_luar_meta.extend(_meta)

# kodi addons
kodi_addons_meta = [
    {"name": "og:title", "content": kodi_addons_title},
    {"name": "og:description", "content": kodi_addons_description},
]
kodi_addons_meta.extend(_meta)

# ciberestafas
estafas_meta = [
    {"name": "og:title", "content": estafas_title},
    {"name": "og:description", "content": estafas_description},
]
estafas_meta.extend(_meta)

# galeria
galeria_meta = [
    {"name": "og:title", "content": galeria_title},
    {"name": "og:description", "content": galeria_description},
]
galeria_meta.extend(_meta)

# galeria
galeria_nasa_meta = [
    {"name": "og:title", "content": galeria_nasa_title},
    {"name": "og:description", "content": galeria_nasa_description},
]
galeria_nasa_meta.extend(_meta)

