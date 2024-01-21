import reflex as rx

# Comun
def lang() -> rx.Component:
    return rx.script("document.documentElement.lang='es'")


# Index information
index_title = "KeikoDev. Primera página completamente en python"
index_description = "Soy técnico informático con más de 30 años de experiencia, fanático de la gestión de datos y Bigdata."
preview = 'avatar3.png'

# Otras descripciones
dev_title = "Página con recursos para desarrolladores"
dev_description = "Relación de links que más uso para desarrollar, web, scrips, python, SQL Server..."


# Otras descripciones
constr_title = "Página con recursos para desarrolladores"
constr_description = "Relación de links que más uso para desarrollar, web, scrips, python, SQL Server..."

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
    {"name": "og:description", "content": dev_title},
]
dev_meta.extend(_meta)

# constr
constr_meta = [
    {"name": "og:title", "content": constr_title},
    {"name": "og:description", "content": constr_title},
]
constr_meta.extend(_meta)

