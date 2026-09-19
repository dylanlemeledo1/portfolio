// ============================================================================
//  Toutes les chaines de texte de l'interface, en FR et EN.
//  Pour modifier un texte : change la valeur. Pour ajouter une cle : ajoute-la
//  dans 'fr' ET 'en'.
//  Le contenu long (stage, competences E5, veille, autoeval) vit dans
//  src/data/*.ts — ici on ne garde que les titres/kickers/labels courts.
// ============================================================================

export const languages = {
  fr: 'Francais',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export const ui = {
  fr: {
    // --- Accessibilite / navigation ---
    'skip.link': 'Aller au contenu principal',
    'nav.label': 'Navigation principale',
    'nav.parcours': 'Parcours',
    'nav.stage': 'Stage',
    'nav.projects': 'Projets',
    'nav.competences': 'Compétences',
    'nav.veille': 'Veille',
    'nav.autoeval': 'Bilan',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Ouvrir le menu',
    'nav.menu.close': 'Fermer le menu',
    'theme.toggle': 'Changer de theme (clair/sombre)',
    'lang.switch': 'Switch to English',
    'lang.label': 'Choisir la langue',

    // --- Hero ---
    'hero.greeting': 'Bonjour, je suis',
    'hero.role': 'Développeur Web',
    'hero.tagline':
      "Étudiant en BTS SIO option SLAM au lycée Carcouët, à la recherche " +
      "d'un stage. Je conçois des sites et applications web, du " +
      "front-end jusqu'à la base de données.",
    'hero.available': "Disponible pour un stage",
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.stage': 'Mon stage',
    'hero.cta.contact': 'Me contacter',

    // --- Parcours & CV (repurposed "About") ---
    'about.title': 'Parcours & CV',
    'about.kicker': 'Qui je suis',
    'about.p1':
      "Étudiant en 2ème année de BTS Services Informatiques aux " +
      "Organisations (option SLAM) au lycée Carcouët, à Nantes. J'ai " +
      "démarré par une première année à l'IUT de Laval avant de me " +
      "réorienter vers ce BTS, plus concret et plus proche du " +
      "développement au quotidien.",
    'about.p2':
      "Mon objectif : devenir développeur web. Mon stage chez IP " +
      "Développement (refonte du parcours de commande d'un espace client, " +
      "intégré à Dolibarr) m'a confirmé que j'aime autant résoudre des " +
      "bugs concrets que construire de nouvelles fonctionnalités.",
    'about.p3':
      "En dehors des cours, je code mes propres projets (jeu en JavaScript, " +
      "site vitrine en Next.js/Three.js) pour explorer des technologies " +
      "que je ne vois pas en classe, et je suis une veille régulière sur " +
      "les outils de développement assistés par IA.",
    'about.formation.title': 'Formation',
    'about.formation.bts': 'BTS SIO — option SLAM',
    'about.formation.bts.detail': 'Lycée Carcouët, Nantes · en cours, promotion 2027',
    'about.formation.iut': '1ère année IUT informatique',
    'about.formation.iut.detail': 'IUT de Laval · avant réorientation vers le BTS SIO',
    'about.atouts.title': 'Atouts',

    // --- Stage ---
    'stage.kicker': 'Expérience professionnelle',
    'stage.title': 'Stage — IP Développement',
    'stage.entreprise.title': "L'entreprise",
    'stage.client.title': 'Le client',
    'stage.missions.title': "Ce que j'ai fait concrètement",
    'stage.screenshots.title': "En images",
    'stage.screenshots.close': "Fermer l'aperçu",
    'stage.tech.title': 'Stack utilisée',
    'stage.competences.link': 'Voir comment ce stage couvre les 6 compétences E5',
    'stage.bilan.link': 'Voir le bilan complet de ce stage',

    // --- Projets ---
    'projects.title': 'Projets',
    'projects.kicker': 'Mon travail',
    'projects.subtitle':
      'Des projets personnels pour explorer des technologies que je ne vois pas en cours.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.tech': 'Technologies utilisees',

    // --- Compétences ---
    'competences.kicker': 'Épreuve E5 — Bloc 1',
    'competences.title': 'Compétences',
    'competences.subtitle':
      'Les 6 compétences du référentiel BTS SIO, illustrées par des situations réelles rencontrées en stage.',
    'skills.kicker': 'Ma boîte à outils',
    'skills.title': 'Stack technique',
    'skills.subtitle':
      "Les langages, outils et technologies que j'utilise au quotidien.",
    'skills.languages': 'Langages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend & données',
    'skills.database': 'Bases de données',
    'skills.tools': 'Outils',

    // --- Veille techno ---
    'veille.kicker': 'Compétence C6',
    'veille.title': 'Veille technologique',
    'veille.subtitle':
      "Axe suivi : {axis}. Une veille est vivante — cette page sera complétée régulièrement.",
    'veille.source': 'Source',

    // --- Autoévaluation ---
    'autoeval.kicker': 'Bilan',
    'autoeval.title': 'Autoévaluation',
    'autoeval.subtitle':
      'Le bilan de mon stage chez IP Développement, réalisé avec mon tuteur.',

    // --- Contact ---
    'contact.title': 'Travaillons ensemble',
    'contact.kicker': 'Contact',
    'contact.subtitle':
      'Une question, une opportunité, un stage ? Écris-moi, je réponds vite.',
    'contact.name': 'Nom',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Ton nom',
    'contact.emailPlaceholder': 'ton.email@exemple.com',
    'contact.messagePlaceholder': 'Bonjour, je te contacte au sujet de...',
    'contact.send': 'Envoyer le message',
    'contact.sending': 'Envoi en cours...',
    'contact.success': 'Merci ! Ton message a bien ete envoye.',
    'contact.error':
      'Oups, une erreur est survenue. Reessaie ou ecris-moi par email.',
    'contact.orEmail': 'Ou ecris-moi directement a',
    'contact.downloadCv': 'Télécharger mon CV',

    // --- Footer ---
    'footer.builtwith': 'Concu avec',
    'footer.and': 'et',
    'footer.rights': 'Tous droits reserves.',
    'footer.backtotop': 'Revenir en haut de la page',

    // --- Meta / SEO ---
    'meta.description':
      "Portfolio de Dylan Le Mélédo, étudiant BTS SIO SLAM — stage, projets, compétences et veille technologique.",
  },

  en: {
    // --- Accessibility / navigation ---
    'skip.link': 'Skip to main content',
    'nav.label': 'Main navigation',
    'nav.parcours': 'Background',
    'nav.stage': 'Internship',
    'nav.projects': 'Projects',
    'nav.competences': 'Skills',
    'nav.veille': 'Watch',
    'nav.autoeval': 'Assessment',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',
    'theme.toggle': 'Toggle theme (light/dark)',
    'lang.switch': 'Passer en francais',
    'lang.label': 'Choose language',

    // --- Hero ---
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Web Developer',
    'hero.tagline':
      "A BTS SIO (SLAM track) student at lycée Carcouët, looking for an " +
      "internship. I build websites and web apps, from the front end " +
      "down to the database.",
    'hero.available': 'Available for an internship',
    'hero.cta.projects': 'View my projects',
    'hero.cta.stage': 'My internship',
    'hero.cta.contact': 'Get in touch',

    // --- Background & CV (repurposed "About") ---
    'about.title': 'Background & CV',
    'about.kicker': 'Who I am',
    'about.p1':
      "Second-year student in the BTS SIO program (Services Informatiques " +
      "aux Organisations, SLAM track) at lycée Carcouët, in Nantes, " +
      "France. I started with a first year at IUT de Laval before " +
      "switching to this more hands-on, development-focused program.",
    'about.p2':
      "My goal is to become a web developer. My internship at IP " +
      "Développement (rebuilding the order flow of a customer portal " +
      "integrated with Dolibarr) confirmed that I enjoy fixing real bugs " +
      "just as much as building new features.",
    'about.p3':
      "Outside of class, I build my own projects (a JavaScript game, a " +
      "landing page in Next.js/Three.js) to explore technologies I don't " +
      "see in school, and I keep a regular watch on AI-assisted " +
      "development tools.",
    'about.formation.title': 'Education',
    'about.formation.bts': 'BTS SIO — SLAM track',
    'about.formation.bts.detail': 'Lycée Carcouët, Nantes · in progress, class of 2027',
    'about.formation.iut': '1st year, IUT Computer Science',
    'about.formation.iut.detail': 'IUT de Laval · before switching to BTS SIO',
    'about.atouts.title': 'Strengths',

    // --- Internship ---
    'stage.kicker': 'Professional experience',
    'stage.title': 'Internship — IP Développement',
    'stage.entreprise.title': 'The company',
    'stage.client.title': 'The client',
    'stage.missions.title': 'What I actually did',
    'stage.screenshots.title': 'In pictures',
    'stage.screenshots.close': 'Close preview',
    'stage.tech.title': 'Tech stack used',
    'stage.competences.link': 'See how this internship covers all 6 E5 competencies',
    'stage.bilan.link': 'See the full assessment of this internship',

    // --- Projects ---
    'projects.title': 'Projects',
    'projects.kicker': 'My work',
    'projects.subtitle':
      "Personal projects I built to explore technologies I don't see in class.",
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.tech': 'Tech used',

    // --- Skills ---
    'competences.kicker': 'E5 exam — Block 1',
    'competences.title': 'Skills',
    'competences.subtitle':
      "The 6 competencies from the BTS SIO curriculum, illustrated with real situations from my internship.",
    'skills.kicker': 'My toolbox',
    'skills.title': 'Tech stack',
    'skills.subtitle':
      'The languages, tools and technologies I use day to day.',
    'skills.languages': 'Languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend & data',
    'skills.database': 'Databases',
    'skills.tools': 'Tools',

    // --- Tech watch ---
    'veille.kicker': 'Competency C6',
    'veille.title': 'Tech watch',
    'veille.subtitle':
      "Focus area: {axis}. A tech watch is a living thing — this page will be updated regularly.",
    'veille.source': 'Source',

    // --- Self-assessment ---
    'autoeval.kicker': 'Assessment',
    'autoeval.title': 'Self-assessment',
    'autoeval.subtitle':
      "The assessment of my internship at IP Développement, written with my supervisor.",

    // --- Contact ---
    'contact.title': "Let's work together",
    'contact.kicker': 'Contact',
    'contact.subtitle':
      'A question, an opportunity, an internship? Write to me, I reply fast.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your.email@example.com',
    'contact.messagePlaceholder': "Hi, I'm reaching out about...",
    'contact.send': 'Send message',
    'contact.sending': 'Sending...',
    'contact.success': 'Thank you! Your message has been sent.',
    'contact.error':
      'Oops, something went wrong. Try again or email me directly.',
    'contact.orEmail': 'Or email me directly at',
    'contact.downloadCv': 'Download my CV',

    // --- Footer ---
    'footer.builtwith': 'Built with',
    'footer.and': 'and',
    'footer.rights': 'All rights reserved.',
    'footer.backtotop': 'Back to top',

    // --- Meta / SEO ---
    'meta.description':
      "Dylan Le Mélédo's portfolio — BTS SIO SLAM student: internship, projects, skills and tech watch.",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)['fr'];
