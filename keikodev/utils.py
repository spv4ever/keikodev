import reflex as rx
from datetime import datetime as dt

# Comun
def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")

def cookies() -> rx.Component:
    return rx.script(src="//cdn.cookie-script.com/s/badcfd79f77b344234eebfda9910dc62.js")

def formato_fecha(fecha):
    return dt.strftime(fecha, "%Y/%m/%d")



# Index information
index_title = "KeikoDev. Links esenciales para Python, Recursos, formación, cyber estafas, utilidades"
index_description = "Soy técnico informático con más de 30 años de experiencia, fanático de la gestión de datos y Bigdata."
preview = 'avatar3.png'
metaads = ''

# Links utiles para desarrollo
dev_title = "Página con recursos para desarrolladores"
dev_description = "Links que más uso para desarrollar, web, scrips, python, SQL Server..."


# Página en construcción
constr_title = "En construcción"
constr_description = "Estamos de obras, iremos informando..."

# Tools retoque fotográfico
utils_images_title = "Recursos fotográficos Online"
utils_images_description = "Links para retoques fotográficos online, AI, ..."

# Ciberestafas
estafas_title = "Sección de intentos de ciberestafas"
estafas_description = "Aquí describiremos los intentos de ciberestafas que vamos recibiendo, mails fraudulentos, avisos por wassap, sms..."

# Galeria
galeria_title = "Recursos y galerías de imagenes"
galeria_description = "Galerías de imagenes, fotos diarias, conexión directa con NASA con la foto del día"

# Galeria Nasa
galeria_nasa_title = "Últimas fotos publicadas desde la Nasa"
galeria_nasa_description = "Galería de fotos donde se irán publicando las últimas fotos directas desde La Nasa"

# Galeria Nasa
emulator_title = "Links y Manuales del mundo de la emulación"
emulator_description = "Biblioteca de información sobre emuladores"

# Terminos
cookies_title = "Política de cookies"
cookies_description = "Política de cookies"

# Privacidad
privacidad_title = "Política de privacidad"
privacidad_description = "Política de privacidad"

# Privacidad
cursos_title = "Catálogos de formaciones y cursos"
cursos_description = "Todos los catálogos disponibles en formaciones para todos"




_meta = [
    {"content": "ca-pub-7920736444321179","name": "google-adsense-account"},
    {"name": "og:type", "content": "website"},
    {"name": "og:image", "content": preview},
    {"name": "twitter:card", "content": "summary_large_image"},
    {"name": "twitter:site", "content": "@Albert_gasa"},
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

# emulator
emulator_meta = [
    {"name": "og:title", "content": emulator_title},
    {"name": "og:description", "content": emulator_description},
]
emulator_meta.extend(_meta)


# Terminos
cookies_title = "Política de cookies"
cookies_description = "Política de cookies"
cookies_meta = [
    {"name": "og:title", "content": cookies_title},
    {"name": "og:description", "content": cookies_description},
]
cookies_meta.extend(_meta)

# Privacidad
privacidad_title = "Política de privacidad"
privacidad_description = "Política de privacidad"
privacidad_meta = [
    {"name": "og:title", "content": privacidad_title},
    {"name": "og:description", "content": privacidad_description},
]
privacidad_meta.extend(_meta)

# Cursos
cursos_meta = [
    {"name": "og:title", "content": cursos_title},
    {"name": "og:description", "content": cursos_description},
]
cursos_meta.extend(_meta)

# trucos
trucos_title = "Trucos web, windows, android, ios"
trucos_description = "Recopilación de trucos para todas las plataformas"
trucos_meta = [
    {"name": "og:title", "content": trucos_title},
    {"name": "og:description", "content": trucos_description},
]
trucos_meta.extend(_meta)

# cocina
cocina_title = "Recetas de cocina casera"
cocina_description = "Canal de youtube keikodev recetas"
cocina_meta = [
    {"name": "og:title", "content": cocina_title},
    {"name": "og:description", "content": cocina_description},
]
cocina_meta.extend(_meta)

#Sección de animales
keiko_title = "El rincón de keiko"
keiko_description = "Apartado dedidicado al mundo animal en general"
keiko_meta = [
    {"name": "og:title", "content": keiko_title},
    {"name": "og:description", "content": keiko_description},
]
keiko_meta.extend(_meta)

#Sección de spaceX
spacex_title = "SpaceX - Rumbo a Marte"
spacex_description = "Espacio para compartir noticias y directos de SpaceX. Gracias a SpaceXstorm por dejarme compartir sus videos."
spacex_meta = [
    {"name": "og:title", "content": spacex_title},
    {"name": "og:description", "content": spacex_description},
]
spacex_meta.extend(_meta)

#Sección StarShip Videos
starship_video_title = "SpaceX - Rumbo a Marte"
starship_video_description = "Espacio para compartir noticias y directos de SpaceX. Gracias a SpaceXstorm por dejarme compartir sus videos."
starship_video_meta = [
    {"name": "og:title", "content": starship_video_title},
    {"name": "og:description", "content": starship_video_description},
]
starship_video_meta.extend(_meta)

#Sección login
login_title = "Login"
login_description = "Registrate para poder acceder a funciones de usuarios avanzados"
login_meta = [
    {"name": "og:title", "content": login_title},
    {"name": "og:description", "content": login_description},
]
login_meta.extend(_meta)

#Sección login
launches_title = "Gestión de lanzamientos"
launches_description = "Gestión de lanzamientos, editar, añadir, gestionar base de datos"
launches_meta = [
    {"name": "og:title", "content": launches_title},
    {"name": "og:description", "content": launches_description},
]
launches_meta.extend(_meta)
