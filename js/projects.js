/* ============================================================
   PROJECTS DATA
   ============================================================
   
   📌 CÓMO AGREGAR UN NUEVO PROYECTO:
   
   Simplemente copia el objeto de ejemplo de abajo y pegalo dentro del 
   array "projects". Completá los campos con tu información:
   
   {
       name_es: "Nombre del proyecto en español",
       name_en: "Project name in English",
       description_es: "Descripción breve en español.",
       description_en: "Brief description in English.",
       image: "assets/projects/mi-proyecto.png",  // Ruta a la imagen (opcional)
       icon: "🚀",                                 // Emoji si no hay imagen
       tags: ["HTML", "CSS", "JavaScript"],         // Tecnologías usadas
       repoUrl: "https://github.com/MatiasNavarroMegias/mi-proyecto",
       downloadUrl: "https://github.com/MatiasNavarroMegias/mi-proyecto/releases"
   }
   
   NOTAS:
   - Si no tenés imagen, dejá "image" vacío ("") y usá un emoji en "icon"
   - Si no hay link de descarga, dejá "downloadUrl" vacío ("")
   - Si no hay repositorio, dejá "repoUrl" vacío ("")
   - Los tags son las tecnologías que usaste en el proyecto
   
   ============================================================ */

const projects = [
    // ── Proyecto de ejemplo 1 ──────────────────────────────
    {
        name_es: "Portfolio Personal",
        name_en: "Personal Portfolio",
        description_es: "Mi portafolio web personal construido con HTML, CSS y JavaScript vanilla. Diseño responsive con tema oscuro y colores pastel.",
        description_en: "My personal web portfolio built with HTML, CSS and vanilla JavaScript. Responsive design with dark theme and pastel colors.",
        image: "",
        icon: "💼",
        tags: ["HTML5", "CSS3", "JavaScript"],
        repoUrl: "https://github.com/MatiasNavarroMegias/HOLA",
        downloadUrl: ""
    },

    // ── Proyecto de ejemplo 2 ──────────────────────────────
    {
        name_es: "Próximo Proyecto",
        name_en: "Coming Soon",
        description_es: "Nuevo proyecto en desarrollo. ¡Pronto más detalles!",
        description_en: "New project under development. More details soon!",
        image: "",
        icon: "🔧",
        tags: ["React", "Node.js", "MongoDB"],
        repoUrl: "",
        downloadUrl: ""
    },

    // ── AGREGÁ TUS PROYECTOS DEBAJO DE ESTA LÍNEA ─────────


];