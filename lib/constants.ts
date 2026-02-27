export const SITE = {
  name: "Lic. Khevin Sánchez Zamora",
  title: "Lic. Khevin Sánchez Zamora | Abogado Asociado · Corporación GC",
  description:
    "Abogado Asociado en Corporación GC. Más de 7 años de experiencia en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Carnet 37920.",
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
    label: "Años de experiencia en litigio",
    detail: "Desde mayo 2019",
  },
  {
    metric: "3er",
    label: "Mejor promedio — Examen de Excelencia",
    detail: "Colegio de Abogados y Abogadas de CR, 2025",
  },
  {
    metric: "UCR",
    label: "Egresado de la #1 en Centroamérica",
    detail: "QS Latin America University Ranking 2026",
  },
] as const;

export const PRACTICE_AREAS = [
  {
    title: "Derecho Administrativo",
    description:
      "Defensa y asesoría en procedimientos ante la Administración Pública, recursos ordinarios y extraordinarios.",
    icon: "Scales" as const,
  },
  {
    title: "Contencioso Administrativo",
    description:
      "Litigio estratégico ante el Tribunal Contencioso Administrativo en demandas contra el Estado.",
    icon: "Gavel" as const,
  },
  {
    title: "Derecho Constitucional",
    description:
      "Recursos de amparo, acciones de inconstitucionalidad y habeas corpus ante la Sala Constitucional.",
    icon: "ShieldCheck" as const,
  },
  {
    title: "Contratación Pública",
    description:
      "Asesoría y litigio en materia de licitaciones, concursos públicos y contratos administrativos.",
    icon: "FileText" as const,
  },
  {
    title: "Litigio Estratégico",
    description:
      "Gestión integral de casos de alta complejidad técnica y relevancia jurídica.",
    icon: "Strategy" as const,
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Abogado Asociado",
    org: "Corporación GC",
    period: "Nov. 2025 - Presente",
    description:
      "Litigio y asesoría jurídica en Derecho Administrativo, Contencioso Administrativo y Derecho Constitucional. Colaboración directa con el Dr. Óscar González Camacho en casos de alta complejidad ante el TCA, Sala Constitucional, Sala Primera y diversas instancias administrativas.",
    highlight: true,
  },
  {
    role: "Paralegal Senior",
    org: "Corporación GC",
    period: "2021 - 2025",
    description:
      "Investigación jurídica exhaustiva, redacción de demandas, recursos de casación, amparos, acciones de inconstitucionalidad y medidas cautelares. Preparación integral de audiencias orales y elaboración de guías de interrogatorio.",
    highlight: false,
  },
  {
    role: "Paralegal Junior",
    org: "Corporación GC",
    period: "2019 - 2021",
    description:
      "Asistencia en investigación de normativa, jurisprudencia y doctrina aplicable. Apoyo en la gestión de expedientes y redacción de escritos procesales bajo supervisión directa.",
    highlight: false,
  },
  {
    role: "Representante Estudiantil",
    org: "Facultad de Derecho, UCR",
    period: "Ago. 2020 - Ago. 2022",
    description:
      "Representante ante Asamblea Plebiscitaria y Asamblea de Facultad. Participación en decisiones institucionales y propuesta de mejoras curriculares.",
    highlight: false,
  },
  {
    role: "Procurador Estudiantil Universitario",
    org: "FEUCR",
    period: "Ene. 2018 - Ene. 2019",
    description:
      "Defensa de derechos estudiantiles ante autoridades universitarias. Asesoría legal y organización de talleres sobre normativa universitaria.",
    highlight: false,
  },
  {
    role: "Meritorio — Sala Constitucional",
    org: "Corte Suprema de Justicia",
    period: "Dic. 2017 - Dic. 2018",
    description:
      "Asistencia en investigación y análisis de casos constitucionales en el despacho del Magistrado Paul Rueda Leal. Redacción de borradores de resoluciones.",
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
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "#contacto" },
] as const;
