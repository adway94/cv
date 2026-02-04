// ============================================
// CV Data - Edit this file to update your content
// ============================================

const cvData = {
  // Personal Information
  personal: {
    name: "Alejandro Machulsky",
    title: "Software Developer",
    tagline: "Transformando ideas en soluciones reales | Ingeniería + IA + Resultados medibles",
    email: "", // Contact via social links
    phone: "",
    location: "Argentina",
    image: "assets/images/profile.jpg", // Add your photo here
    bio: "¡Hola! Soy Alejandro, un desarrollador con una perspectiva única que combina ingeniería informática, marketing y desarrollo web autodidacta. Esta convergencia de disciplinas me permite no solo escribir código eficiente, sino entender el 'por qué' detrás de cada proyecto: las necesidades del usuario, los objetivos de negocio y el impacto real del producto. Mi capacidad de adaptación y visión integral me han permitido integrarme rápidamente en equipos diversos, aportando soluciones que equilibran excelencia técnica con valor para el cliente. Creo firmemente que la mejor tecnología es aquella que resuelve problemas reales de forma elegante.",
  },

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/in/alejandro-machulsky/",
    github: "https://github.com/adway94",
    twitter: "",
    portfolio: "",
  },

  // Work Experience
  experience: [
    {
      title: "Fullstack Developer",
      company: "Empresa Confidencial",
      location: "Argentina",
      startDate: "Jul 2021",
      endDate: "Actualidad",
      description: "*Nombre de la empresa protegido por acuerdo de confidencialidad. Desarrollo fullstack con Python (Django) + React, trabajando en arquitectura de microservicios con Docker en entorno de jornada completa.",
      achievements: [
        "Diseño e implementación de soluciones escalables con Django y React",
        "Gestión de infraestructura containerizada con Docker",
        "Desarrollo de APIs RESTful y optimización de base de datos"
      ]
    },
    {
      title: "Fullstack Developer",
      company: "Devsar",
      location: "Argentina",
      startDate: "May 2021",
      endDate: "Jul 2021",
      description: "Desarrollo fullstack con Python (Django) + React en jornada completa. Implementación de soluciones web con Docker.",
      achievements: [
        "Desarrollo de aplicaciones web con Django y React",
        "Implementación de contenedores Docker para desarrollo y deploy",
        "Colaboración en equipo ágil con metodología Scrum"
      ]
    },
    {
      title: "Aceleración Alkemy",
      company: "Alkemy",
      location: "Argentina",
      startDate: "Feb 2021",
      endDate: "May 2021",
      description: "Programa intensivo de formación en tecnologías Node.js, Django y React. Desarrollo de proyectos prácticos aplicando metodologías ágiles.",
      achievements: [
        "Dominio de tecnologías Node.js, Django y React",
        "Desarrollo de proyectos completos end-to-end",
        "Aplicación de buenas prácticas y patrones de diseño"
      ]
    },
    {
      title: "Ejecutivo de Ventas",
      company: "Invictvs Juegos de Mesa y Rol",
      location: "Paraná, Entre Ríos",
      startDate: "Mar 2018",
      endDate: "Abr 2021",
      description: "Gestión del área de distribución a tiendas, atención al cliente y estrategias comerciales.",
      achievements: [
        "Expansión de red de distribución regional",
        "Implementación de sistemas de gestión de inventario",
        "Desarrollo de estrategias de fidelización de clientes"
      ]
    },
    {
      title: "Cobrador de Créditos",
      company: "Suvillan SA",
      location: "Paraná, Entre Ríos",
      startDate: "Jun 2016",
      endDate: "Feb 2018",
      description: "Gestión de cobranzas en moto vehículos de cuotas diarias, atención al cliente y administración de cartera.",
      achievements: [
        "Optimización de rutas de cobranza reduciendo tiempos en 30%",
        "Mejora en tasa de recuperación de créditos",
        "Manejo de relaciones cliente-empresa en situaciones complejas"
      ]
    },
    {
      title: "Empresario Independiente",
      company: "Amway Global",
      location: "Paraná, Entre Ríos",
      startDate: "Feb 2014",
      endDate: "Jun 2016",
      description: "Emprendimiento independiente en distribución de productos y desarrollo de red comercial.",
      achievements: [
        "Construcción de red de distribución desde cero",
        "Desarrollo de habilidades de negociación y liderazgo",
        "Gestión autónoma de inventario y finanzas"
      ]
    }
  ],

  // Achievements / Logros Destacados
  achievements: [
    {
      icon: "📱",
      title: "Ownership de Productos Cross-Platform",
      description: "Responsabilidad completa sobre productos multi-plataforma, desde diseño hasta deployment"
    },
    {
      icon: "📊",
      title: "Sistema de Facturación: 50% → 99%",
      description: "Optimización crítica que llevó la tasa de éxito de facturación del 50% al 99%"
    },
    {
      icon: "🔧",
      title: "Refactorización de Proyectos Legacy",
      description: "Implementación y refactorización exitosa de proyectos legacy mejorando mantenibilidad"
    },
    {
      icon: "🔌",
      title: "Integración End-to-End de Proveedores",
      description: "Integración completa de múltiples proveedores externos, gestión de APIs y flujos complejos"
    }
  ],

  // Challenges & Solutions (Casos STAR)
  challenges: [
    {
      title: "Bug Crítico en Sistema de Prevención de Lavado de Dinero",
      problem: "Un bug introducido en una query SQL causó que el sistema anti-lavado de dinero generara alertas redundantes, colapsando el sistema de cumplimiento. El área de compliance quedó paralizada y el riesgo regulatorio era crítico.",
      action: "Realicé inspección profunda usando sistemas de tracking y logs. Identifiqué la query SQL problemática que generaba duplicados. Debuggeé el código, corregí la lógica de la consulta y validé con el equipo de compliance que las alertas volvieran a ser precisas.",
      result: "Sistema restaurado el mismo día. Eliminé 100% de las alertas redundantes. Implementé tests específicos para prevenir regresiones. El equipo de compliance recuperó la operatividad normal sin impacto regulatorio.",
      tags: ["SQL", "Debugging", "Crisis Management", "Compliance", "Production Fix"]
    },
    {
      title: "Propuesta de Arquitectura Técnica con Experiencia Limitada",
      problem: "El equipo necesitaba definir el stack tecnológico y arquitectura de infraestructura para un nuevo proyecto crítico. A pesar de ser relativamente nuevo en el equipo, identifiqué una oportunidad de aportar valor basándome en investigación y mejores prácticas.",
      action: "Investigué exhaustivamente opciones de tecnologías y arquitecturas. Preparé una propuesta técnica detallada con pros/contras, escalabilidad y mantenibilidad. Presenté al equipo senior con justificaciones claras basadas en requerimientos del proyecto.",
      result: "La propuesta fue adoptada por el equipo. El proyecto se desarrolló exitosamente con el stack propuesto. Gané credibilidad técnica y confianza del equipo senior, demostrando que la antigüedad no limita el valor de las contribuciones.",
      tags: ["Arquitectura", "Liderazgo Técnico", "Iniciativa", "Infraestructura", "Comunicación"]
    },
    {
      title: "Innovación en Code Review: Claude Code + GitLab",
      problem: "Los Merge Requests del equipo carecían de contexto suficiente, dificultando el code review. Los reviewers perdían tiempo entendiendo el 'por qué' de los cambios, ralentizando el flujo de desarrollo.",
      action: "Propuse usar Claude Code para generar descripciones de MR contextualizadas y detalladas. Implementé un flujo donde Claude analiza el diff completo y genera descripciones que explican motivación, cambios técnicos e impacto. Evangelicé la práctica con demos al equipo.",
      result: "El equipo adoptó la práctica como estándar. Tiempo de review reducido significativamente. Los MRs pasaron de descripciones vagas a documentación clara y estructurada. Mejoró la calidad del code review y la transferencia de conocimiento en el equipo.",
      tags: ["AI Tools", "Developer Experience", "Code Review", "GitLab", "Process Innovation"]
    },
    {
      title: "Migración y Optimización de Sistema de Facturación Legacy",
      problem: "El sistema de facturación crítico estaba en Python 2.x (EOL), con tasa de éxito del 50% en emisión de facturas. Código legacy frágil, sin tests, y bloqueando actualizaciones de seguridad. El negocio perdía ingresos por facturas fallidas.",
      action: "Lideré migración completa de Python 2.x a 3.9. Refactoricé lógica de negocio identificando bugs críticos en el proceso. Implementé manejo robusto de errores, reintentos automáticos y logging detallado. Agregué suite de tests para garantizar estabilidad.",
      result: "Sistema migrado exitosamente con tasa de éxito del 99% (mejora de 49 puntos porcentuales). Eliminé deuda técnica crítica. Reduje tickets de soporte relacionados con facturación. El negocio recuperó ingresos previamente perdidos por fallas.",
      tags: ["Python", "Legacy Code", "Migration", "Refactoring", "Business Impact"]
    }
  ],

  // Projects / Portfolio
  projects: [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce con panel de administración, carrito de compras, pasarela de pagos y sistema de inventario.",
      image: "assets/images/projects/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/tu-usuario/proyecto",
      demo: "https://demo.proyecto.com"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con drag & drop, notificaciones en tiempo real y colaboración en equipo.",
      image: "assets/images/projects/tasks.jpg",
      tags: ["Vue.js", "Firebase", "WebSockets"],
      github: "https://github.com/tu-usuario/proyecto2",
      demo: "https://demo.proyecto2.com"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard del clima con mapas interactivos, predicción de 7 días y alertas personalizadas.",
      image: "assets/images/projects/weather.jpg",
      tags: ["React", "API Integration", "Charts.js"],
      github: "https://github.com/tu-usuario/proyecto3",
      demo: "https://demo.proyecto3.com"
    }
  ],

  // Skills / Tecnologías
  skills: {
    "Lenguajes": ["Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
    "Frontend": ["React.js", "Django Templates", "Tailwind CSS", "Bootstrap"],
    "Backend": ["Django", "FastAPI", "Flask", "Node.js", "REST APIs"],
    "Bases de Datos": ["PostgreSQL", "MySQL", "Redis"],
    "DevOps & Tools": ["Docker", "Git/GitHub", "GitLab", "CI/CD", "Linux"],
    "Automatización & AI": ["N8N", "Claude Code"],
    "Metodologías": ["Agile/Scrum", "Code Review", "Testing"]
  },

  // Education
  education: [
    {
      degree: "Licenciatura en Marketing",
      institution: "Universidad Autónoma de Entre Ríos",
      location: "Paraná, Entre Ríos",
      startDate: "2016",
      endDate: "En progreso",
      description: "Formación en gestión de marketing, estrategias comerciales y comportamiento del consumidor"
    },
    {
      degree: "Ingeniería en Informática",
      institution: "Universidad Nacional del Litoral",
      location: "Santa Fe, Argentina",
      startDate: "2013",
      endDate: "2016",
      description: "Formación en desarrollo de software, bases de datos y arquitectura de sistemas (no finalizada)"
    },
    {
      degree: "Técnico en Marketing",
      institution: "Universidad Autónoma de Entre Ríos",
      location: "Paraná, Entre Ríos",
      startDate: "2016",
      endDate: "2019",
      description: "Especialización en Marketing y Gestión de Marketing General"
    }
  ],

  // Certifications - Ordenadas por antigüedad (más recientes primero)
  certifications: [
    {
      name: "Diplomatura en Programación Web Full Stack con React JS",
      issuer: "UTN Buenos Aires",
      date: "Mar 2021",
      logo: "🎓"
    },
    {
      name: "Big Data: Procesamiento y Análisis",
      issuer: "Coursera",
      date: "Dic 2020",
      logo: "📊"
    },
    {
      name: "Big Data: Visualización de Datos",
      issuer: "Coursera",
      date: "Dic 2020",
      logo: "📈"
    },
    {
      name: "Big Data: Adquisición y Almacenamiento de Datos",
      issuer: "Coursera",
      date: "Nov 2020",
      logo: "💾"
    },
    {
      name: "Big Data: El Impacto de los Datos Masivos en la Sociedad Actual",
      issuer: "Coursera",
      date: "Sep 2020",
      logo: "🌐"
    },
    {
      name: "CSS Fundamentals",
      issuer: "SoloLearn",
      date: "Ago 2020",
      logo: "🎨"
    },
    {
      name: "Data Science with Python",
      issuer: "SoloLearn",
      date: "Ago 2020",
      logo: "🐍"
    },
    {
      name: "SQL Fundamentals",
      issuer: "SoloLearn",
      date: "Jul 2020",
      logo: "🗄️"
    },
    {
      name: "HTML Fundamentals",
      issuer: "SoloLearn",
      date: "Abr 2020",
      logo: "📄"
    },
    {
      name: "Python 3 Tutorial",
      issuer: "SoloLearn",
      date: "Mar 2020",
      logo: "🐍"
    },
    {
      name: "Fundamentos de Marketing Digital",
      issuer: "Google",
      date: "Feb 2020",
      logo: "🎯"
    }
  ],

  // Languages
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Intermedio Alto (B2)" }
  ]
};

// Export data (for use in main.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cvData;
}
