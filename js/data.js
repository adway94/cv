// ============================================
// CV Data - Edit this file to update your content
// ============================================

const cvData = {
  // Personal Information
  personal: {
    name: "Tu Nombre",
    title: "Desarrollador Full Stack",
    email: "tu.email@ejemplo.com",
    phone: "+34 123 456 789",
    location: "Madrid, España",
    image: "assets/images/profile.jpg", // Add your photo here
    bio: "Desarrollador apasionado con +5 años de experiencia creando soluciones web innovadoras. Especializado en JavaScript, React y Node.js. Me encanta resolver problemas complejos y aprender nuevas tecnologías.",
  },

  // Social Links
  social: {
    linkedin: "https://linkedin.com/in/tu-perfil",
    github: "https://github.com/tu-usuario",
    twitter: "https://twitter.com/tu-usuario",
    portfolio: "https://tu-portfolio.com",
  },

  // Work Experience
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company SA",
      location: "Madrid, España",
      startDate: "Ene 2022",
      endDate: "Presente",
      description: "Desarrollo de aplicaciones web escalables usando React, Node.js y MongoDB. Liderazgo de equipo de 3 desarrolladores junior.",
      achievements: [
        "Implementé arquitectura de microservicios que mejoró el rendimiento en 40%",
        "Reduje el tiempo de carga de la aplicación de 5s a 1.5s",
        "Mentoría de 3 desarrolladores junior"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartUp Innovadora",
      location: "Barcelona, España",
      startDate: "Mar 2020",
      endDate: "Dic 2021",
      description: "Desarrollo de MVP y features para plataforma SaaS. Stack: React, Express, PostgreSQL.",
      achievements: [
        "Desarrollé 15+ features desde cero",
        "Implementé sistema de autenticación con OAuth2",
        "Mejoré cobertura de tests del 30% al 80%"
      ]
    },
    {
      title: "Junior Developer",
      company: "Agencia Digital XYZ",
      location: "Valencia, España",
      startDate: "Jun 2018",
      endDate: "Feb 2020",
      description: "Desarrollo de sitios web corporativos y e-commerce. HTML, CSS, JavaScript, WordPress.",
      achievements: [
        "Completé 20+ proyectos de sitios web",
        "Implementé diseños responsive para todos los clientes",
        "Optimicé SEO aumentando tráfico orgánico en 50%"
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
      degree: "Ingeniería en Informática",
      institution: "Universidad Politécnica de Madrid",
      location: "Madrid, España",
      startDate: "2014",
      endDate: "2018",
      description: "Especialización en Desarrollo de Software y Bases de Datos"
    },
    {
      degree: "Master en Desarrollo Web Full Stack",
      institution: "Escuela IT Online",
      location: "Online",
      startDate: "2019",
      endDate: "2020",
      description: "Bootcamp intensivo de 9 meses"
    }
  ],

  // Certifications
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      logo: "AWS"
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2022",
      logo: "PSM"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      logo: "MDB"
    }
  ],

  // Languages
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado (C1)" },
    { name: "Francés", level: "Básico (A2)" }
  ]
};

// Export data (for use in main.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cvData;
}
