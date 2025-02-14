import streamlit as st
import google.generativeai as genai
import threading
import time

# Configuración inicial de la API de Google Gemini
API_KEY = "AIzaSyBWyKC99hjwxNkpoYVI5fOS4EICiLHiFj0"
genai.configure(api_key=API_KEY)
model = genai.GenerativeModel("gemini-1.5-flash")

# Función para generar un informe de impresión 3D
def generar_informe(filamento, resolucion, velocidad, tamano):
    prompt = (
        f"Genera un informe detallado sobre una impresión 3D con las siguientes características:\n"
        f"1. Tipo de filamento: {filamento}\n"
        f"2. Resolución de capa: {resolucion}\n"
        f"3. Velocidad de impresión: {velocidad}\n"
        f"4. Tamaño de la impresión: {tamano}\n"
        "Incluye recomendaciones y posibles problemas que pueden surgir."
    )
    response = model.generate_content(prompt)
    return response.text

# Variables globales para almacenar el estado del informe
informe_generado = ""
generando_informe = False

# Función de automatización continua
def automatizacion_continua():
    global informe_generado, generando_informe
    while True:
        if generando_informe:
            # Características predefinidas para automatización
            caracteristicas = [
                "PLA",  # Tipo de filamento
                "0.2 mm",  # Resolución
                "60 mm/s",  # Velocidad
                "150x150x150 mm"  # Tamaño
            ]
            informe_generado = generar_informe(*caracteristicas)
            generando_informe = False  # Detener la generación después de completar
        time.sleep(5)  # Esperar antes de la próxima iteración

if not all([filamento, resolucion, velocidad, tamano]):
    return "Error: Faltan datos en los parámetros de impresión 3D."


# Iniciar el hilo de automatización en segundo plano
thread = threading.Thread(target=automatizacion_continua, daemon=True)
thread.start()

# Interfaz con Streamlit
st.title("Generador de Informes de Impresión 3D 🖨️✨")

# Inputs para las características
tipo_filamento = st.text_input("Tipo de Filamento")
resolucion = st.text_input("Resolución de Capa (mm)")
velocidad = st.text_input("Velocidad de Impresión (mm/s)")
tamano = st.text_input("Tamaño de la Impresión (mm)")

# Botón para generar un informe manualmente
if st.button("Generar Informe 📄"):
    if tipo_filamento and resolucion and velocidad and tamano:
        informe_generado = generar_informe(tipo_filamento, resolucion, velocidad, tamano)
        st.subheader("Aquí está tu informe:")
        st.write(informe_generado)
    else:
        st.warning("Por favor, completa todas las características antes de generar el informe.")

# Botón para iniciar/parar la generación automática
if st.button("Iniciar/Pausar Generación Automática ⏯️"):
    generando_informe = not generando_informe
    if generando_informe:
        st.info("Generación automática iniciada. ¡Espera tu informe!")
    else:
        st.info("Generación automática pausada.")

# Mostrar el último informe generado automáticamente
if informe_generado:
    st.subheader("Último informe generado automáticamente:")
    st.write(informe_generado)

