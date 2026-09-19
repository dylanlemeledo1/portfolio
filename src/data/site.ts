// ============================================================================
//  FICHIER PRINCIPAL DE DONNEES DU SITE
//  Modifie ce fichier pour mettre a jour tes infos, tes competences ou tes
//  projets. Le contenu du stage / veille / autoeval / competences E5 vit
//  dans ses propres fichiers : src/data/stage.ts, competences.ts, veille.ts,
//  autoeval.ts.
// ============================================================================

export const SITE = {
  /** Nom complet, affiche partout */
  name: 'Dylan Le Mélédo',
  /** Initiales pour le logo */
  initials: 'DL',
  /** Email de contact public */
  email: 'dylanlemeledo1@gmail.com',
  /** Ville / localisation */
  location: 'Saffré, France',
  /**
   * ID du formulaire Formspree (gratuit) pour recevoir les messages du
   * formulaire de contact. Cree un compte sur https://formspree.io,
   * cree un formulaire, copie l'ID (ex: "xeqwabcd") ici.
   * Tant que c'est "YOUR_FORM_ID", le formulaire passe en mode "mailto".
   */
  formspreeId: 'YOUR_FORM_ID',
  /**
   * Lien vers le CV (le fichier reel de Dylan a ete copie dans /public/cv.pdf).
   * Laisse vide ('') pour cacher le bouton.
   */
  cvUrl: 'cv.pdf',
} as const;

/** Reseaux sociaux affiches dans le header, le hero et le footer */
export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/dylanlemeledo1', icon: 'github' },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dylan-le-mélédo-736859434/',
    icon: 'linkedin',
  },
  { name: 'Email', url: `mailto:${SITE.email}`, icon: 'mail' },
] as const;

/**
 * Competences techniques, groupees par categorie. Affichees sur la page
 * /competences. Les libelles de categorie sont traduits dans src/i18n/ui.ts
 * (skills.*).
 */
export const SKILLS = [
  {
    categoryKey: 'skills.languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Java', 'Python', 'C#', 'C++', 'SQL'],
  },
  {
    categoryKey: 'skills.frontend',
    items: ['Bootstrap', 'Astro', 'Responsive design'],
  },
  {
    categoryKey: 'skills.backend',
    items: ['API REST', 'Dolibarr', 'SGBD', 'Modélisation Merise (MCD)'],
  },
  {
    categoryKey: 'skills.tools',
    items: ['Git', 'GitLab', 'VS Code', 'WAMP / phpMyAdmin', 'Postman'],
  },
] as const;

/**
 * Projets personnels. Ajoute / supprime des entrees librement.
 * - featured: true => mis en avant en grand
 * - repo / demo: laisse '' pour cacher le bouton correspondant
 *   (ajoute tes liens GitHub / demo des que tu les as)
 */
export const PROJECTS = [
  {
    id: 'neon-void',
    title: 'Neon Void',
    fr: {
      description:
        'Jeu de tir spatial (shooter) en JavaScript et Canvas HTML5 purs, sans ' +
        "framework ni dependance. Vagues d'ennemis avec boss, 4 niveaux d'arme, " +
        'power-ups, sons generes en direct via Web Audio, meilleur score ' +
        'sauvegarde en local. Jouable au clavier comme au tactile sur mobile.',
    },
    en: {
      description:
        'A space shooter built with plain JavaScript and HTML5 Canvas, no ' +
        'framework or dependency. Enemy waves with boss fights, 4 weapon ' +
        'levels, power-ups, sounds generated live via the Web Audio API, ' +
        'high score saved locally. Playable with keyboard or touch on mobile.',
    },
    tech: ['JavaScript', 'Canvas API', 'Web Audio API'],
    repo: '',
    demo: '',
    featured: false,
  },
  {
    id: 'nova-studio',
    title: 'Nova Studio',
    fr: {
      description:
        "Site vitrine immersif pour un studio creatif fictif : mise en scene " +
        "avec une scene 3D interactive (Three.js / React Three Fiber), " +
        "animations au scroll et micro-interactions (Framer Motion). " +
        "Un terrain d'exploration pour le front-end moderne.",
    },
    en: {
      description:
        'An immersive landing page for a fictional creative studio: an ' +
        'interactive 3D scene (Three.js / React Three Fiber), scroll-based ' +
        'storytelling and micro-interactions (Framer Motion). A playground ' +
        'for modern front-end techniques.',
    },
    tech: ['Next.js', 'React', 'Three.js', 'Framer Motion', 'Tailwind CSS'],
    repo: '',
    demo: '',
    featured: true,
  },
  {
    id: 'nebula',
    title: 'Nebula',
    fr: {
      description:
        'Site marketing complet pour un produit SaaS fictif : accueil, ' +
        'fonctionnalités, tarifs, démo, changelog, connexion/inscription — ' +
        'un site multipage en Next.js avec animations Framer Motion et ' +
        'TypeScript de bout en bout.',
    },
    en: {
      description:
        'A full marketing site for a fictional SaaS product: home, ' +
        'features, pricing, demo, changelog, login/signup — a multi-page ' +
        'Next.js build with Framer Motion animations and end-to-end ' +
        'TypeScript.',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    repo: 'https://github.com/dylanlemeledo1/nebula',
    demo: 'https://test-gunstaz.vercel.app',
    featured: true,
  },
  {
    id: 'citypunks',
    title: 'Citypunks',
    fr: {
      description:
        "Landing page pour un jeu de rôle fictif en monde ouvert, univers " +
        "cyberpunk : mise en page à fort impact visuel en HTML/CSS/JS, " +
        "pensée pour donner envie de découvrir le jeu.",
    },
    en: {
      description:
        "A landing page for a fictional open-world cyberpunk RPG: a " +
        "visually bold HTML/CSS/JS page built to sell the game's " +
        "atmosphere.",
    },
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    repo: 'https://github.com/dylanlemeledo1/citypunks',
    demo: '',
    featured: false,
  },
  {
    id: 'auralis',
    title: 'Auralis',
    fr: {
      description:
        "Visualiseur audio réactif : on charge un morceau ou on active le " +
        "micro, et un visuel généré en Canvas (particules, spectre radial, " +
        "cœur pulsant) réagit en temps réel aux basses, mediums et aigus. " +
        "100% JavaScript natif, sans librairie.",
    },
    en: {
      description:
        'An audio-reactive visualizer: load a track or enable your mic, ' +
        'and a Canvas-generated visual (particles, radial spectrum, ' +
        'pulsing core) reacts in real time to bass, mids and treble. ' +
        '100% vanilla JavaScript, no library.',
    },
    tech: ['JavaScript', 'Web Audio API', 'Canvas API'],
    repo: '',
    demo: 'https://claude.ai/artifact/BbUxHog4wB17nvVg3Wpp2j',
    featured: true,
  },
] as const;
