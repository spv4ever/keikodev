import json

class Receta:
    def __init__(self, numero, nombre, ingredientes, instrucciones, tipo):
        self.numero = numero
        self.nombre = nombre
        self.ingredientes = ingredientes
        self.instrucciones = instrucciones
        self.tipo = tipo

    def __str__(self):
        return f"Receta {self.numero}: {self.nombre}"

# Cargar datos desde el JSON
with open('assets/data/recetas_andaluzas_json.json', 'r') as file:
    data = json.load(file)

recetas_andaluzas = []

# Crear instancias de RecetaAndaluza
for receta_data in data["recetas_andaluzas"]:
    receta = Receta(
        receta_data["numero"],
        receta_data["nombre"],
        receta_data["ingredientes"],
        receta_data["instrucciones"],
        "Recetas andaluzas"
    )
    recetas_andaluzas.append(receta)

# # Ejemplo de cómo acceder a los datos
# for receta in recetas_andaluzas:
#     print(f"{receta.numero}. {receta.nombre}")
#     print("Tipo: ", receta.tipo)
#     print("Ingredientes:", ", ".join(receta.ingredientes))
#     print("Instrucciones:", "\n".join(receta.instrucciones))
#     print("\n" + "-"*50 + "\n")

with open('assets/data/recetas_alemanas_json.json', 'r') as file:
    data = json.load(file)

recetas_alemanas = []

# Crear instancias de RecetaAndaluza
for receta_data in data["recetas_alemanas"]:
    receta = Receta(
        receta_data["numero"],
        receta_data["nombre"],
        receta_data["ingredientes"],
        receta_data["instrucciones"],
        "Recetas alemanas"
    )
    recetas_alemanas.append(receta)

with open('assets/data/recetas_catalanas_json.json', 'r') as file:
    data = json.load(file)

recetas_catalanas = []

# Crear instancias de RecetaAndaluza
for receta_data in data["recetas_catalanas"]:
    receta = Receta(
        receta_data["numero"],
        receta_data["nombre"],
        receta_data["ingredientes"],
        receta_data["instrucciones"],
        "Recetas catalanas"
    )
    recetas_catalanas.append(receta)


with open('assets/data/recetas_japonesas_json.json', 'r') as file:
    data = json.load(file)

recetas_japonesas = []

# Crear instancias de RecetaAndaluza
for receta_data in data["recetas_japonesas"]:
    receta = Receta(
        receta_data["numero"],
        receta_data["nombre"],
        receta_data["ingredientes"],
        receta_data["instrucciones"],
        "Recetas japonesas"
    )
    recetas_japonesas.append(receta)

with open('assets/data/recetas_mexicanas_json.json', 'r') as file:
    data = json.load(file)

recetas_mexicanas = []

# Crear instancias de RecetaAndaluza
for receta_data in data["recetas_mexicanas"]:
    receta = Receta(
        receta_data["numero"],
        receta_data["nombre"],
        receta_data["ingredientes"],
        receta_data["instrucciones"],
        "Recetas mexicanas"
    )
    recetas_mexicanas.append(receta)

with open('assets/data/recetas_veganas_json.json', 'r') as file:
    data = json.load(file)

recetas_veganas = []

# Crear instancias de RecetaAndaluza
for receta_data in data["recetas_veganas"]:
    receta = Receta(
        receta_data["numero"],
        receta_data["nombre"],
        receta_data["ingredientes"],
        receta_data["instrucciones"],
        "Recetas veganas"
    )
    recetas_veganas.append(receta)

    