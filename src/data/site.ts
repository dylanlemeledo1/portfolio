// ============================================================================
//  >>> FICHIER PRINCIPAL A PERSONNALISER <<<
//  Modifie ce fichier pour mettre TES infos. Pas besoin de toucher au reste.
// ============================================================================

export const SITE = {
  /** Ton nom complet, affiche partout */
  name: 'Prenom Nom',
  /** Tes initiales pour le logo */
  initials: 'PN',
  /** Ton email de contact public */
  email: 'ton.email@exemple.com',
  /** Ta ville / localisation */
  location: 'Paris, France',
  /**
   * ID du formulaire Formspree (gratuit) pour recevoir les messages du
   * formulaire de contact. Cree un compte sur https://formspree.io,
   * cree un formulaire, copie l'ID (ex: "xeqwabcd") ici.
   * Tant que c'est "YOUR_FORM_ID", le formulaire passe en mode "mailto".
   */
  formspreeId: 'YOUR_FORM_ID',
  /**
   * Lien vers ton CV (optionnel). Place ton fichier dans /public/cv.pdf
   * puis mets cvUrl: 'cv.pdf'. Laisse vide ('') pour cacher le bouton.
   */
  cvUrl: '',
} as const;

/** Reseaux sociaux affiches dans le header, le hero et le footer */
export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/ton-pseudo', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ton-profil', icon: 'linkedin' },
  { name: 'Email', url: `mailto:${SITE.email}`, icon: 'mail' },
] as const;

/**
 * Tes competences, groupees par categorie.
 * Les libelles de categorie sont traduits dans src/i18n/ui.ts (skills.*).
 */
export const SKILLS = [
  {
    categoryKey: 'skills.frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Astro', 'Tailwind'],
  },
  {
    categoryKey: 'skills.backend',
    items: ['Node.js', 'Express', 'Python', 'API REST', 'PHP'],
  },
  {
    categoryKey: 'skills.database',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite'],
  },
  {
    categoryKey: 'skills.tools',
    items: ['Git', 'GitHub', 'Docker', 'Linux', 'Figma', 'VS Code'],
  },
] as const;

/**
 * Tes projets. Ajoute / supprime des entrees librement.
 * - featured: true => mis en avant en grand
 * - repo / demo: laisse '' pour cacher le bouton correspondant
 */
export const PROJECTS = [
  {
    id: 'projet-1',
    title: 'TaskFlow — Gestionnaire de taches',
    fr: {
      description:
        "Application web fullstack de gestion de taches avec authentification, " +
        "tableaux de bord en temps reel et collaboration en equipe. " +
        "Mon premier gros projet de A a Z.",
    },
    en: {
      description:
        "Fullstack task management web app with authentication, real-time " +
        "dashboards and team collaboration. My first big end-to-end project.",
    },
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/ton-pseudo/taskflow',
    demo: '',
    featured: true,
  },
  {
    id: 'projet-2',
    title: 'DevBlog — Blog technique',
    fr: {
      description:
        "Plateforme de blog avec editeur Markdown, systeme de commentaires " +
        "et mode sombre. Concu pour etre rapide et 100% accessible.",
    },
    en: {
      description:
        "Blogging platform with a Markdown editor, comment system and dark " +
        "mode. Built to be fast and 100% accessible.",
    },
    tech: ['Astro', 'TypeScript', 'Tailwind'],
    repo: 'https://github.com/ton-pseudo/devblog',
    demo: '',
    featured: true,
  },
  {
    id: 'projet-3',
    title: 'WeatherNow — Meteo en direct',
    fr: {
      description:
        "Application meteo consommant une API externe, avec geolocalisation, " +
        "previsions sur 7 jours et graphiques interactifs.",
    },
    en: {
      description:
        "Weather app consuming an external API, with geolocation, 7-day " +
        "forecast and interactive charts.",
    },
    tech: ['JavaScript', 'API REST', 'CSS3'],
    repo: 'https://github.com/ton-pseudo/weathernow',
    demo: '',
    featured: false,
  },
] as const;
