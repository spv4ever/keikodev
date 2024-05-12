import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import dotenv
import os


def enviar_correo(destinatario, asunto, cuerpo):
    dotenv.load_dotenv()
    remitente_server = os.environ.get("REMITENTE_SERVER")
    password_server = os.environ.get("PASSWORD_SERVER")
    dominio_server = os.environ.get("DOMINIO_SERVER")

    # Configuración del servidor SMTP
    servidor_smtp = dominio_server  # Reemplaza con el servidor SMTP que utilices
    puerto_smtp = 587  # Puerto SMTP (generalmente 587 para TLS)

    # Credenciales de correo electrónico
    remitente = remitente_server
    contraseña = password_server

    # Crear el objeto mensaje
    mensaje = MIMEMultipart()
    mensaje['From'] = remitente
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto

    # Añadir el cuerpo del mensaje
    mensaje.attach(MIMEText(cuerpo, 'plain'))

    # Iniciar sesión en el servidor SMTP
    servidor = smtplib.SMTP(host=servidor_smtp, port=puerto_smtp)
    servidor.starttls()  # Iniciar TLS (seguridad de transporte de capa)
    servidor.login(remitente, contraseña)
    
    # Enviar el correo electrónico
    servidor.sendmail(remitente, destinatario, mensaje.as_string())

    # Cerrar la conexión con el servidor SMTP
    servidor.quit()