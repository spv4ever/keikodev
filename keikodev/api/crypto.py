import bcrypt

def encriptar_contraseña(contraseña):
    # Generar una sal aleatoria y encriptar la contraseña
    sal = bcrypt.gensalt()
    hash_contraseña = bcrypt.hashpw(contraseña.encode('utf-8'), sal)
    return hash_contraseña

def verificar_contraseña(contraseña, hash_stored):
    # Verificar si la contraseña ingresada coincide con el hash almacenado
    return bcrypt.checkpw(contraseña, hash_stored)