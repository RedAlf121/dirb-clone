# 🛠️ Mi Primera Herramienta de Fuzzing

Este script es una implementación básica inspirada en la herramienta Dirb de Kali Linux. Su propósito es descubrir rutas ocultas en un sitio web mediante fuerza bruta.
## 🤔 ¿Qué es el Fuzzing?

El fuzzing es una técnica utilizada en seguridad informática para descubrir recursos o vulnerabilidades ocultas en aplicaciones web. Consiste en:

 Tomar una URL base (por ejemplo, https://example.com)
 Probar múltiples rutas posibles (como /admin, /login, /config) usando un diccionario de palabras
 Enviar solicitudes HTTP a cada ruta generada
 Detectar cuáles existen observando las respuestas del servidor


Si una ruta devuelve un código de estado 200 OK, significa que esa URL existe y puede contener información sensible o funcionalidades ocultas.
🚀 ¿Cómo funciona este script?

1. Solicita al usuario una URL base.
2. Lee un archivo de diccionario (common.txt) con posibles rutas.
3. Realiza múltiples solicitudes HTTP en paralelo a cada ruta.
4. Muestra en consola las rutas que devuelven una respuesta válida (código 2xx).
📁 Requisitos

 Node.js 18 o superior (idealmente 20+ para soporte nativo de fetch)
 Un archivo common.txt con una palabra por línea (ej: admin, login, dashboard)

## ▶️ Ejecución
```
node dirb.js
```

Luego, ingresa la URL objetivo cuando se te solicite.
## 📌 Ejemplo de uso
Inserta la URL: [https://jsonplaceholder.com](https://jsonplaceholder.typicode.com/)

Hackeando [https://jsonplaceholder.com!](https://jsonplaceholder.typicode.com/)!

* Encontrado: https://jsonplaceholder.typicode.com/albums [200]
  
* Encontrado: https://jsonplaceholder.typicode.com/photos [200]
  
* Encontrado: https://jsonplaceholder.typicode.com/todos [200]
  
* Encontrado: https://jsonplaceholder.typicode.com/users [200]
