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
      icon: "🚀",
      title: "Rendimiento +60%",
      description: "Optimización de aplicación que resultó en 60% de mejora en velocidad de carga"
    },
    {
      icon: "👥",
      title: "Líder de Equipo",
      description: "Liderazgo exitoso de equipo de 5 personas en proyecto crítico"
    },
    {
      icon: "⏱️",
      title: "Ahorro de Tiempo",
      description: "Automatización de procesos que ahorró 20 horas/semana al equipo"
    },
    {
      icon: "🏆",
      title: "Hackathon Winner",
      description: "Primer lugar en hackathon interno con solución de IA"
    },
    {
      icon: "💡",
      title: "Innovación",
      description: "Patente de solución innovadora para optimización de base de datos"
    },
    {
      icon: "📈",
      title: "Crecimiento",
      description: "Contribuí al crecimiento de usuarios de 1K a 100K en 6 meses"
    }
  ],

  // Challenges & Solutions (Casos STAR)
  challenges: [
    {
      title: "Crisis de Rendimiento en Producción",
      problem: "La aplicación se caía constantemente con picos de tráfico. Los usuarios reportaban timeouts y la tasa de rebote aumentó al 70%.",
      action: "Implementé sistema de caché con Redis, optimicé queries SQL (agregué índices), configuré load balancer y implementé lazy loading en el frontend. También añadí monitoring con Datadog.",
      result: "Reducción del 95% en errores de servidor, tiempo de respuesta de 3.5s a 400ms, y tasa de rebote bajó al 15%. La app ahora soporta 10x más tráfico concurrente.",
      tags: ["Redis", "SQL", "Performance", "Monitoring", "Load Balancing"]
    },
    {
      title: "Bug Crítico en Sistema de Pagos",
      problem: "Error en producción causó que 200+ transacciones se procesaran dos veces, resultando en cargos duplicados a clientes. Potencial pérdida de confianza y problemas legales.",
      action: "Primero, pausé el sistema de pagos temporalmente. Identifiqué el problema (falta de idempotencia en API). Implementé solución con transaction IDs únicos y verificación de duplicados. Coordiné con equipo de finanzas para reembolsos automáticos.",
      result: "Todos los clientes afectados recibieron reembolsos automáticos en 24h. Implementé tests de integración específicos para prevenir recurrencia. Cero incidentes similares en 2 años posteriores. Aprendí la importancia de idempotencia en sistemas críticos.",
      tags: ["Bug Fix", "Payments", "Idempotency", "Crisis Management", "Testing"]
    },
    {
      title: "Migración de Base de Datos Sin Downtime",
      problem: "Necesitábamos migrar de MySQL a PostgreSQL en aplicación con 50K usuarios activos diarios. Cero tolerancia a downtime según SLA.",
      action: "Diseñé estrategia de migración en 4 fases: 1) Dual-write a ambas DBs, 2) Migración gradual de lecturas, 3) Validación de consistencia de datos, 4) Switch completo. Implementé feature flags para rollback rápido si era necesario.",
      result: "Migración exitosa con cero downtime. Mejora del 35% en velocidad de queries complejas. El proyecto se completó 1 semana antes de lo planeado. La estrategia se convirtió en template para futuras migraciones.",
      tags: ["Database", "Migration", "PostgreSQL", "Zero Downtime", "Architecture"]
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

  // Skills
  skills: {
    frontend: [
      { name: "JavaScript/ES6+", level: 95 },
      { name: "React.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 85 },
      { name: "REST APIs", level: 95 }
    ],
    tools: [
      { name: "Git/GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 80 },
      { name: "Jest/Testing", level: 85 },
      { name: "Agile/Scrum", level: 90 }
    ]
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
