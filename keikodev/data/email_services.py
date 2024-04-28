from keikodev.api.email import enviar_correo

CUERPO = """
Hola [Nombre del Usuario],

¡Bienvenido a la comunidad de KeikoDev.es!

En nombre de todo el equipo de KeikoDev, me complace darte la bienvenida a nuestra plataforma. Estamos emocionados de tenerte con nosotros y esperamos que encuentres nuestra comunidad útil y enriquecedora para tus proyectos de desarrollo web y recursos IA.

En KeikoDev.es, nos esforzamos por proporcionar recursos valiosos y actualizados sobre IA, desarrollo web y otras áreas relacionadas. Esperamos que encuentres nuestras guías, tutoriales y artículos informativos útiles para mejorar tu presencia en línea y alcanzar tus objetivos comerciales.

Si tienes alguna pregunta, sugerencia o simplemente quieres saludar, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en tu viaje hacia el éxito.

¡Gracias por unirte a nosotros y esperamos verte activo en nuestra comunidad!

Saludos cordiales,

Equipo de KeikoDev.es
www.keikodev.es
"""

def enviar_correo_services(destinatario: str, nombre: str):
    destinatario = destinatario
    asunto = '¡Bienvenido a nuestra web!'
    cuerpo = CUERPO.replace('[Nombre del Usuario]',nombre)
    print(f"vamos a enviar correo a {destinatario}")
    enviar_correo(destinatario, asunto, cuerpo)

