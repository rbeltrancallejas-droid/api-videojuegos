# ⚡ GameVault - Catálogo Interactivo de Videojuegos

Aplicación web Single Page Application (SPA) desarrollada con **React** y construida con **Vite**, que consume datos en tiempo real desde una API personalizada en formato JSON alojada en un repositorio público de GitHub.

Proyecto Final Integrador diseñado bajo una arquitectura modular limpia, gestión reactiva de estado, Custom Hooks y diseño adaptable.

---

## 🚀 Tecnologías y Librerías

- **React 19:** Biblioteca para el desarrollo de interfaces declarativas basadas en componentes.
- **Vite:** Herramienta de compilación y empaquetado de alto rendimiento.
- **React Router DOM (v7):** Enrutamiento declarativo para SPAs, parámetros dinámicos y rutas protegidas/comodín.
- **Axios:** Cliente HTTP basado en promesas con integración de `AbortController` para cancelación segura de peticiones asíncronas.
- **CSS3 Puro:** Diseño responsivo fluido implementando CSS Grid, Flexbox y una paleta inspirada en la atmósfera estética de *Hollow Knight*.

---

## 📂 Arquitectura de Componentes

```text
src/
├── components/
│   ├── Card.jsx        # Tarjeta modular reutilizable con manejo de imágenes de respaldo (fallback)
│   ├── Footer.jsx      # Pie de página institucional y metadatos
│   ├── Hero.jsx        # Banner de bienvenida y presentación
│   ├── ItemList.jsx    # Renderizado iterativo de colecciones
│   └── NavBar.jsx      # Barra de navegación con detección de ruta activa (NavLink)
├── hooks/
│   └── useFetch.jsx    # Custom Hook desacoplado para peticiones HTTP, loading y control de errores
├── pages/
│   ├── About.jsx       # Vista informativa sobre el desarrollo integral del proyecto
│   ├── Contact.jsx     # Formulario controlado de soporte técnico y validaciones
│   ├── Detail.jsx      # Ficha técnica detallada por parámetro dinámico (:id)
│   ├── Home.jsx        # Catálogo principal con buscador en tiempo real y filtro de géneros
│   └── NotFound.jsx    # Manejador de error de rutas inexistentes (404)
├── styles/
│   └── App.css         # Hoja de estilos centralizada y variables CSS
├── App.jsx             # Enrutador principal y layout
└── main.jsx            # Punto de entrada de la aplicación
```

---

## 📡 API Personalizada

Los datos son servidos directamente mediante GitHub Raw desde el archivo `db.json`:

- **Endpoint:** [https://raw.githubusercontent.com/rbeltrancallejas-droid/api-videojuegos/main/db.json](https://raw.githubusercontent.com/rbeltrancallejas-droid/api-videojuegos/main/db.json)
- **Estructura del registro:**
  - `id` (Identificador único)
  - `titulo` (Nombre oficial)
  - `descripcion` (Sinopsis detallada)
  - `imagen` (URL pública de alta calidad)
  - `genero` (Categoría de juego)
  - `plataforma` (Consola / Ecosistema)
  - `año` (Fecha de lanzamiento)
  - `personaje_principal` (Protagonista)
  - `desarrolladora` (Estudio creador)

---

## 💻 Instalación y Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/rbeltrancallejas-droid/api-videojuegos.git
   ```

2. **Acceder al directorio:**
   ```bash
   cd "Aplicación Web React con API Personalizada"
   ```
   *(Nota: si el directorio clonado toma el nombre del repositorio, el comando sería `cd api-videojuegos`)*

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

5. **Generar build para producción:**
   ```bash
   npm run build
   ```

---

## 🚀 Paso Final: Compilar, Subir a GitHub y Desplegar en Netlify

Una vez aplicados los cambios finales, ejecuta estos comandos en tu terminal integrada de Visual Studio Code para verificar que todo esté listo para producción:

1. **Verificar que la compilación de producción sea exitosa:**
   ```bash
   npm run build
   ```
   *(Debe completarse sin arrojar errores en la consola).*

---

## 👨‍💻 Autor y Soporte

- **Desarrollador:** Raúl Alejandro Beltrán Callejas
- **Correo Electrónico:** rbeltrancallejas@gmail.com
- **Repositorio:** [github.com/rbeltrancallejas-droid](https://github.com/rbeltrancallejas-droid)
