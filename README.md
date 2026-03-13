# 💼 Portfolio - Matias Megias Navarro

Portfolio web profesional de **Matias Megias Navarro** — Desarrollador Full Stack.

🌐 **Demo en vivo:** [https://matiasnavarromegias.github.io/HOLA](https://matiasnavarromegias.github.io/HOLA)

---

## 🚀 Características

- ✅ Diseño moderno **dark theme** con colores **pastel**
- ✅ **Bilingüe** Español / English con toggle de idioma
- ✅ **Responsive** - Mobile, Tablet y Desktop
- ✅ Animaciones suaves al scroll (reveal animations)
- ✅ Efecto **typewriter** en la sección hero
- ✅ Partículas animadas en el fondo
- ✅ Sección de proyectos **dinámica** (fácil de agregar nuevos)
- ✅ Glassmorphism y gradientes
- ✅ Navbar con efecto glass al hacer scroll
- ✅ Menú hamburguesa en mobile
- ✅ Formulario de contacto
- ✅ SEO básico con meta tags y Open Graph
- ✅ **0 dependencias** - HTML + CSS + JS vanilla

---

## 📂 Estructura del Proyecto

```
📁 portfolio/
├── 📄 index.html              # Página principal
├── 📁 css/
│   └── 📄 styles.css          # Todos los estilos
├── 📁 js/
│   ├── 📄 main.js             # Lógica principal (animaciones, i18n, etc.)
│   ├── 📄 projects.js         # ⭐ Array de proyectos (editar acá)
│   └── 📄 translations.js     # Traducciones ES/EN
├── 📁 assets/
│   ├── 📸 foto-cv.jpg         # Tu foto de perfil
│   └── 📁 projects/           # Screenshots de tus proyectos
│       └── 📸 ejemplo.png
└── 📄 README.md
```

---

## 📌 Cómo Agregar un Nuevo Proyecto

### Paso 1: Abrí el archivo `js/projects.js`

### Paso 2: Copiá este template y pegalo **dentro del array `projects`**:

```javascript
{
    name_es: "Nombre de tu proyecto",
    name_en: "Your project name",
    description_es: "Descripción breve de tu proyecto en español.",
    description_en: "Brief description of your project in English.",
    image: "assets/projects/mi-proyecto.png",
    icon: "🚀",
    tags: ["React", "Node.js", "MongoDB"],
    repoUrl: "https://github.com/MatiasNavarroMegias/mi-proyecto",
    downloadUrl: "https://github.com/MatiasNavarroMegias/mi-proyecto/releases"
}
```

### Paso 3: Completá los campos:

| Campo | Descripción | ¿Obligatorio? |
|---|---|---|
| `name_es` | Nombre en español | ✅ Sí |
| `name_en` | Nombre en inglés | ✅ Sí |
| `description_es` | Descripción en español | ✅ Sí |
| `description_en` | Descripción en inglés | ✅ Sí |
| `image` | Ruta a una screenshot (`""` si no hay) | ❌ No |
| `icon` | Emoji si no hay imagen | ❌ No |
| `tags` | Array de tecnologías | ✅ Sí |
| `repoUrl` | Link al repo GitHub (`""` si no hay) | ❌ No |
| `downloadUrl` | Link de descarga (`""` si no hay) | ❌ No |

### Paso 4: Si tenés una screenshot, ponela en `assets/projects/`

### Paso 5: Hacé commit y push. ¡Listo!

---

## 🖥️ Deploy en GitHub Pages

### Opción 1: Desde GitHub (más fácil)

1. Andá a tu repositorio en GitHub
2. Click en **Settings** → **Pages**
3. En **Source** seleccioná **Deploy from a branch**
4. En **Branch** seleccioná `main` y carpeta `/ (root)`
5. Click en **Save**
6. ¡Esperá unos minutos y tu sitio estará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`!

### Opción 2: Desde terminal

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

Luego seguí los pasos de la Opción 1 en Settings.

---

## ✏️ Cómo Modificar tu Información Personal

### Datos de contacto y bio:
Editá directamente en `index.html` — buscá las secciones correspondientes.

### Traducciones:
Editá `js/translations.js` — cada texto tiene una versión en español (`es`) e inglés (`en`).

### Foto de perfil:
Reemplazá `assets/foto-cv.jpg` con tu nueva foto (mantené el mismo nombre o actualizá la referencia en el HTML).

---

## 🎨 Cómo Cambiar Colores/Tema

Abrí `css/styles.css` y modificá las variables CSS al inicio del archivo:

```css
:root {
    --bg-primary: #0a0a1a;         /* Fondo principal */
    --accent-lavender: #b8b8ff;    /* Color acento principal */
    --accent-pink: #ffb3c6;        /* Color acento secundario */
    --accent-mint: #b8e0d2;        /* Color acento terciario */
    /* ... etc */
}
```

---

## 📧 Formulario de Contacto

El formulario usa [Formspree](https://formspree.io/). Para activarlo:

1. Creá una cuenta gratuita en [formspree.io](https://formspree.io/)
2. Creá un nuevo form
3. Copiá tu Form ID
4. Reemplazá `YOUR_FORM_ID` en el `action` del form en `index.html`

---

## 🛠️ Tecnologías Usadas

- HTML5
- CSS3 (Custom Properties, Flexbox, Grid, Animations)
- JavaScript ES6+ (Vanilla)
- Google Fonts (Inter + JetBrains Mono)
- Devicons
- Font Awesome 6

---

## 📝 Licencia

© 2026 Matias Megias Navarro. Todos los derechos reservados.