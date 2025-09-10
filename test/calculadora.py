import math
import string

def calcular_entropia(password):
    caracteres = 0
    if any(c.islower() for c in password):
        caracteres += 26
    if any(c.isupper() for c in password):
        caracteres += 26
    if any(c.isdigit() for c in password):
        caracteres += 10
    if any(c in string.punctuation for c in password):
        caracteres += len(string.punctuation)

    longitud = len(password)
    if caracteres == 0:
        return 0
    return longitud * math.log2(caracteres)

def estimar_tiempo(entropia, intentos_por_segundo):
    intentos_necesarios = 2**entropia / 2
    tiempo_segundos = intentos_necesarios / intentos_por_segundo

    if tiempo_segundos < 60:
        return f"{tiempo_segundos:.2f} segundos"
    elif tiempo_segundos < 3600:
        return f"{tiempo_segundos/60:.2f} minutos"
    elif tiempo_segundos < 86400:
        return f"{tiempo_segundos/3600:.2f} horas"
    elif tiempo_segundos < 31536000:
        return f"{tiempo_segundos/86400:.2f} días"
    else:
        return f"{tiempo_segundos/31536000:.2f} años"

def clasificar_contraseña(entropia):
    if entropia < 28:
        return "Débil"
    elif entropia < 50:
        return "Media"
    else:
        return "Fuerte"

# Escenarios predefinidos
escenarios = {
    "Ataque manual (humano)": 10,
    "CPU normal": 100000,
    "GPU potente": 1000000,
    "Red de GPUs / botnet": 1000000000,
    "Ataque en línea (limitado)": 100
}

# Interfaz
password = input("Ingresa tu contraseña: ")
entropia = calcular_entropia(password)
clasificacion = clasificar_contraseña(entropia)

print(f"\nLa entropía de tu contraseña es: {entropia:.2f} bits")
print(f"Clasificación de seguridad: {clasificacion}\n")

print("Tiempo estimado de ataque por escenario:")
for escenario, intentos in escenarios.items():
    tiempo = estimar_tiempo(entropia, intentos)
    print(f"- {escenario}: {tiempo}")



