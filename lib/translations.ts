export const translations = {
  en: {
    // Navigation
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
      language: "Language",
    },
    // Hero Section
    hero: {
      title: "AI-Powered Solutions",
      subtitle: "Smart IT, Powered by AI",
      description:
        "Transform your business with intelligent IT solutions. We combine cutting-edge AI technology with expert IT services to drive innovation and efficiency.",
      cta: "Get Started",
      learnMore: "Learn More",
    },
    // Services
    services: {
      title: "Our Services",
      subtitle: "Comprehensive AI-Driven IT Solutions",
      automation: {
        title: "Intelligent Automation",
        description: "Automate repetitive tasks and streamline workflows with AI-powered solutions.",
      },
      consulting: {
        title: "AI Consulting",
        description: "Strategic guidance to implement AI technologies that drive business growth.",
      },
      development: {
        title: "Custom Development",
        description: "Tailored software solutions built with the latest AI and machine learning technologies.",
      },
      support: {
        title: "24/7 Support",
        description: "Round-the-clock technical support powered by AI-assisted diagnostics.",
      },
    },
    // About
    about: {
      title: "About wAIz",
      description:
        "We are pioneers in AI-powered IT solutions, helping businesses transform through intelligent automation and cutting-edge technology.",
      mission: "Our mission is to make AI accessible and practical for businesses of all sizes.",
    },
    // Contact
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to transform your business?",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send Message",
      phone: "Phone",
      address: "Address",
    },
    // Pricing
    pricing: {
      title: "Choose Your Plan",
      subtitle: "Flexible pricing for businesses of all sizes",
      starter: "Starter",
      professional: "Professional",
      enterprise: "Enterprise",
      monthly: "Monthly",
      yearly: "Yearly",
      getStarted: "Get Started",
      contactUs: "Contact Us",
    },
    // Common
    common: {
      loading: "Loading...",
      error: "Something went wrong",
      retry: "Try Again",
      close: "Close",
      save: "Save",
      cancel: "Cancel",
    },
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      pricing: "Precios",
      contact: "Contacto",
      language: "Idioma",
    },
    // Hero Section
    hero: {
      title: "Soluciones Impulsadas por IA",
      subtitle: "IT Inteligente, Impulsado por IA",
      description:
        "Transforma tu negocio con soluciones IT inteligentes. Combinamos tecnología de IA de vanguardia con servicios IT expertos para impulsar la innovación y eficiencia.",
      cta: "Comenzar",
      learnMore: "Saber Más",
    },
    // Services
    services: {
      title: "Nuestros Servicios",
      subtitle: "Soluciones IT Integrales Impulsadas por IA",
      automation: {
        title: "Automatización Inteligente",
        description: "Automatiza tareas repetitivas y optimiza flujos de trabajo con soluciones impulsadas por IA.",
      },
      consulting: {
        title: "Consultoría en IA",
        description:
          "Orientación estratégica para implementar tecnologías de IA que impulsen el crecimiento empresarial.",
      },
      development: {
        title: "Desarrollo Personalizado",
        description:
          "Soluciones de software a medida construidas con las últimas tecnologías de IA y aprendizaje automático.",
      },
      support: {
        title: "Soporte 24/7",
        description: "Soporte técnico las 24 horas impulsado por diagnósticos asistidos por IA.",
      },
    },
    // About
    about: {
      title: "Acerca de wAIz",
      description:
        "Somos pioneros en soluciones IT impulsadas por IA, ayudando a las empresas a transformarse a través de la automatización inteligente y tecnología de vanguardia.",
      mission: "Nuestra misión es hacer que la IA sea accesible y práctica para empresas de todos los tamaños.",
    },
    // Contact
    contact: {
      title: "Ponte en Contacto",
      subtitle: "¿Listo para transformar tu negocio?",
      name: "Nombre",
      email: "Correo Electrónico",
      message: "Mensaje",
      send: "Enviar Mensaje",
      phone: "Teléfono",
      address: "Dirección",
    },
    // Pricing
    pricing: {
      title: "Elige Tu Plan",
      subtitle: "Precios flexibles para empresas de todos los tamaños",
      starter: "Inicial",
      professional: "Profesional",
      enterprise: "Empresarial",
      monthly: "Mensual",
      yearly: "Anual",
      getStarted: "Comenzar",
      contactUs: "Contáctanos",
    },
    // Common
    common: {
      loading: "Cargando...",
      error: "Algo salió mal",
      retry: "Intentar de Nuevo",
      close: "Cerrar",
      save: "Guardar",
      cancel: "Cancelar",
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.en
