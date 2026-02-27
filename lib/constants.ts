export const SITE = {
  name: "Lic. Khevin Sánchez Zamora",
  title: "Lic. Khevin Sánchez Zamora | Abogado Asociado · Corporación GC",
  description:
    "Abogado Asociado en Corporacion GC. Mas de 7 anos de experiencia en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Carnet 37920.",
  url: "https://sanchezzamora.cr",
  locale: "es_CR",
  carnet: "37920",
} as const;

export const CONTACT = {
  email: "ksanchez@corporaciongc.com",
  phone: "+506 8451-4002",
  phoneRaw: "50684514002",
  linkedin: "https://www.linkedin.com/in/khevin-s%C3%A1nchez-16b047205/",
  instagram: "https://www.instagram.com/lic.sanchezzamora",
  instagramHandle: "@lic.sanchezzamora",
  location: "Cartago, Costa Rica",
} as const;

export const CREDENTIALS = [
  {
    metric: "7+",
    label: "Anos de experiencia en litigio",
    detail: "Desde mayo 2019",
  },
  {
    metric: "3er",
    label: "Mejor promedio — Examen de Excelencia",
    detail: "Colegio de Abogados y Abogadas de CR, 2025",
  },
  {
    metric: "UCR",
    label: "Egresado de la #1 en Centroamerica",
    detail: "QS Latin America University Ranking 2026",
  },
] as const;

export const PRACTICE_AREAS = [
  {
    title: "Derecho Administrativo",
    description:
      "Defensa y asesoria en procedimientos ante la Administracion Publica, recursos ordinarios y extraordinarios.",
    icon: "Scales" as const,
  },
  {
    title: "Contencioso Administrativo",
    description:
      "Litigio estrategico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.",
    icon: "Gavel" as const,
  },
  {
    title: "Derecho Constitucional",
    description:
      "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Contratacion Publica",
    description:
      "Asesoria y litigio en materia de licitaciones, concursos publicos y contratos administrativos.",
    icon: "FileText" as const,
  },
  {
    title: "Litigio Estrategico",
    description:
      "Gestion integral de casos de alta complejidad tecnica y relevancia juridica.",
    icon: "Strategy" as const,
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Abogado Asociado",
    org: "Corporacion GC",
    period: "Nov. 2025 - Presente",
    description:
      "Litigio y asesoria juridica en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Colaboracion directa con el Dr. Oscar Gonzalez Camacho en casos de alta complejidad ante el TCA, Sala Constitucional, Sala Primera y diversas instancias administrativas.",
    highlight: true,
  },
  {
    role: "Paralegal Senior",
    org: "Corporacion GC",
    period: "2021 - 2025",
    description:
      "Investigacion juridica exhaustiva, redaccion de demandas, recursos de casacion, amparos, acciones de inconstitucionalidad y medidas cautelares. Preparacion integral de audiencias orales y elaboracion de guias de interrogatorio.",
    highlight: false,
  },
  {
    role: "Paralegal Junior",
    org: "Corporacion GC",
    period: "2019 - 2021",
    description:
      "Asistencia en investigacion de normativa, jurisprudencia y doctrina aplicable. Apoyo en la gestion de expedientes y redaccion de escritos procesales bajo supervision directa.",
    highlight: false,
  },
  {
    role: "Representante Estudiantil",
    org: "Facultad de Derecho, UCR",
    period: "Ago. 2020 - Ago. 2022",
    description:
      "Representante ante Asamblea Plebiscitaria y Asamblea de Facultad. Participacion en decisiones institucionales y propuesta de mejoras curriculares.",
    highlight: false,
  },
  {
    role: "Procurador Estudiantil Universitario",
    org: "FEUCR",
    period: "Ene. 2018 - Ene. 2019",
    description:
      "Defensa de derechos estudiantiles ante autoridades universitarias. Asesoria legal y organizacion de talleres sobre normativa universitaria.",
    highlight: false,
  },
  {
    role: "Meritorio — Sala Constitucional",
    org: "Corte Suprema de Justicia",
    period: "Dic. 2017 - Dic. 2018",
    description:
      "Asistencia en investigacion y analisis de casos constitucionales en el despacho del Magistrado Paul Rueda Leal. Redaccion de borradores de resoluciones.",
    highlight: false,
  },
] as const;

export const EDUCATION = [
  { degree: "Licenciatura en Derecho", institution: "Universidad de Costa Rica", status: "completed" },
  { degree: "Bachillerato en Historia", institution: "Universidad de Costa Rica", status: "in_progress" },
] as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#perfil" },
  { label: "Trayectoria", href: "#trayectoria" },
  { label: "Articulos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;
