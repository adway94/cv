# 💼 CV Digital Profesional

Un sitio web de CV digital moderno, responsive y profesional, desarrollado desde cero con HTML5, CSS3 y JavaScript vanilla.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## ✨ Características

### 📱 **Diseño Responsive**
- Mobile-first approach
- Funciona perfectamente en móviles, tablets y desktop
- Menú de navegación adaptable

### 🎨 **Diseño Moderno**
- Sistema de diseño profesional con variables CSS
- Componentes reutilizables
- Animaciones suaves y atractivas
- Efectos hover y transiciones

### 📊 **Secciones Completas**
1. **Hero/Inicio** - Presentación impactante con foto y CTA
2. **Sobre Mí** - Descripción profesional
3. **Experiencia Laboral** - Timeline interactivo con historial laboral
4. **Logros Destacados** - Achievements cuantificables
5. **Desafíos & Soluciones** - Casos STAR (Situation, Task, Action, Result)
6. **Proyectos** - Portfolio con imágenes y enlaces
7. **Habilidades** - Skills técnicas con barras de progreso animadas
8. **Educación** - Formación académica
9. **Certificaciones** - Certificados profesionales
10. **Idiomas** - Competencias lingüísticas
11. **Contacto** - Información de contacto y redes sociales
12. **Footer** - Enlaces y copyright

### ⚡ **Funcionalidades**
- Navegación smooth scroll
- Scroll animations (fade-in, slide-up)
- Indicador de sección activa en navbar
- Botón "volver arriba"
- Barras de progreso animadas para skills
- Contenido editable centralizado en `data.js`
- Descarga de CV en PDF
- Enlaces a redes sociales
- SEO optimizado

---

## 🚀 Inicio Rápido

### 1. Clonar o Descargar
```bash
git clone <tu-repositorio>
cd webcv
```

### 2. Personalizar Contenido
Edita el archivo `js/data.js` con tu información:
```javascript
const cvData = {
  personal: {
    name: "Tu Nombre",
    title: "Tu Título Profesional",
    email: "tu.email@ejemplo.com",
    // ... más datos
  },
  // ... resto de secciones
};
```

### 3. Agregar Imágenes
- Coloca tu foto de perfil en: `assets/images/profile.jpg`
- Imágenes de proyectos en: `assets/images/projects/`
- Tu CV en PDF en: `assets/cv.pdf`

### 4. Abrir en Navegador
Simplemente abre `index.html` en tu navegador favorito.

Para desarrollo con live reload:
```bash
# Opción 1: Con Python
python -m http.server 8000

# Opción 2: Con Node.js (npx)
npx serve

# Opción 3: VS Code Live Server extension
# Clic derecho en index.html > "Open with Live Server"
```

Luego abre: `http://localhost:8000`

---

## 📁 Estructura del Proyecto

```
webcv/
├── index.html              # Estructura HTML principal
├── css/
│   ├── variables.css       # Variables CSS (colores, fuentes, etc.)
│   ├── components.css      # Componentes reutilizables
│   └── styles.css          # Estilos principales y responsive
├── js/
│   ├── data.js            # 📝 EDITA AQUÍ - Todos tus datos
│   ├── animations.js       # Animaciones de scroll
│   └── main.js            # Lógica principal
├── assets/
│   ├── images/
│   │   ├── profile.jpg    # 📸 Tu foto de perfil
│   │   └── projects/      # 🖼️ Imágenes de proyectos
│   ├── icons/             # Iconos personalizados
│   └── cv.pdf             # 📄 Tu CV en PDF
├── TODO.md                # Roadmap de mejoras futuras
└── README.md              # Este archivo
```

---

## 🎨 Personalización

### Cambiar Colores
Edita `css/variables.css`:
```css
:root {
  --color-primary: #2563eb;      /* Color principal */
  --color-accent: #06b6d4;       /* Color de acento */
  --color-secondary: #1f2937;    /* Color secundario */
  /* ... más variables */
}
```

### Cambiar Fuentes
En `index.html`, reemplaza el enlace de Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente&display=swap">
```

Luego en `css/variables.css`:
```css
--font-primary: 'TuFuente', sans-serif;
```

### Modificar Logo en Navbar
Edita en `index.html` línea ~47:
```html
<a href="#home" class="nav-logo">TN</a>  <!-- Cambia "TN" por tus iniciales -->
```

---

## 📝 Guía de Edición de Datos

### Información Personal
```javascript
personal: {
  name: "Tu Nombre",
  title: "Desarrollador Full Stack",
  email: "tu.email@ejemplo.com",
  phone: "+34 123 456 789",
  location: "Madrid, España",
  image: "assets/images/profile.jpg",
  bio: "Descripción breve y profesional...",
}
```

### Experiencia Laboral
```javascript
experience: [
  {
    title: "Título del Puesto",
    company: "Nombre de la Empresa",
    location: "Ciudad, País",
    startDate: "Ene 2022",
    endDate: "Presente",  // o fecha
    description: "Descripción del rol...",
    achievements: [
      "Logro 1 con métrica cuantificable",
      "Logro 2 mostrando impacto"
    ]
  }
]
```

### Desafíos (Casos STAR)
```javascript
challenges: [
  {
    title: "Nombre del Desafío",
    problem: "Situación/Problema que enfrentaste",
    action: "Acciones que tomaste para resolverlo",
    result: "Resultados e impacto (con métricas)",
    tags: ["Tecnología1", "Tecnología2", "Skill"]
  }
]
```

### Proyectos
```javascript
projects: [
  {
    title: "Nombre del Proyecto",
    description: "Breve descripción del proyecto",
    image: "assets/images/projects/proyecto.jpg",
    tags: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/usuario/proyecto",
    demo: "https://proyecto.com"
  }
]
```

### Habilidades
```javascript
skills: {
  frontend: [
    { name: "JavaScript", level: 95 },  // nivel de 0 a 100
    { name: "React", level: 90 }
  ],
  backend: [ /* ... */ ],
  tools: [ /* ... */ ]
}
```

---

## 🌐 Deployment (Publicar tu CV Online)

### Opción 1: Netlify (Recomendado - Gratis)
1. Crea cuenta en [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta `webcv` a Netlify Drop
3. ¡Listo! Tu CV estará en línea en segundos
4. Opcionalmente configura un dominio personalizado

### Opción 2: Vercel
```bash
npm i -g vercel
vercel
```

### Opción 3: GitHub Pages
1. Sube el proyecto a un repositorio de GitHub
2. Ve a Settings > Pages
3. Selecciona la rama `main` y carpeta `/root`
4. Tu CV estará en: `https://tu-usuario.github.io/webcv`

### Opción 4: Servidor Tradicional
Simplemente sube todos los archivos vía FTP a tu hosting.

---

## 🔧 Próximas Mejoras

Revisa [TODO.md](TODO.md) para ver el roadmap completo. Algunas mejoras planificadas:

- ✅ **Phase 1**: Estructura básica (COMPLETADO)
- 🔄 **Phase 2**: Formulario de contacto funcional
- 📋 **Phase 3**: Modo oscuro, multi-idioma, generación dinámica de PDF
- ⚡ **Phase 4**: PWA, optimización, Lighthouse 100/100
- 🔮 **Phase 5**: CMS/admin panel, blog integrado

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Diseño y animaciones
  - Custom Properties (Variables CSS)
  - Flexbox & Grid
  - Media Queries
- **JavaScript (ES6+)** - Interactividad
  - Intersection Observer API
  - Smooth Scroll
  - DOM Manipulation
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografía (Inter, Poppins)

**Sin frameworks** - 100% vanilla para máximo rendimiento y control.

---

## 📱 Compatibilidad de Navegadores

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Opera
- ⚠️ IE11 (no soportado - considera polyfills si es necesario)

---

## 🤝 Contribuir

Si encuentras bugs o tienes sugerencias:

1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/MejorFeature`)
3. Commit cambios (`git commit -m 'Add: nueva funcionalidad'`)
4. Push a la branch (`git push origin feature/MejorFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto

**Tu Nombre**
- Email: tu.email@ejemplo.com
- LinkedIn: [linkedin.com/in/tu-perfil](https://linkedin.com/in/tu-perfil)
- GitHub: [github.com/tu-usuario](https://github.com/tu-usuario)
- Portfolio: [tu-portfolio.com](https://tu-portfolio.com)

---

## 🙏 Agradecimientos

- [Font Awesome](https://fontawesome.com/) - Iconos
- [Google Fonts](https://fonts.google.com/) - Tipografías
- Inspiración de diseño: Diversos portfolios y CVs digitales

---

## 📸 Screenshots

*Agrega aquí capturas de pantalla de tu CV cuando esté personalizado*

---

**⭐ Si te gusta este proyecto, considera darle una estrella en GitHub!**

---

Desarrollado con ❤️ usando HTML, CSS y JavaScript

**Versión**: 1.0.0
**Última actualización**: Enero 2024
