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



