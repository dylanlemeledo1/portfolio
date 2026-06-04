// ============================================================================
//  Toutes les chaines de texte de l'interface, en FR et EN.
//  Pour modifier un texte : change la valeur. Pour ajouter une cle : ajoute-la
//  dans 'fr' ET 'en'.
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
    'nav.about': 'A propos',
    'nav.skills': 'Competences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Ouvrir le menu',
    'nav.menu.close': 'Fermer le menu',
    'theme.toggle': 'Changer de theme (clair/sombre)',
    'lang.switch': 'Switch to English',
    'lang.label': 'Choisir la langue',

    // --- Hero ---
    'hero.greeting': 'Bonjour, je suis',
    'hero.role': 'Developpeur Fullstack',
    'hero.tagline':
      "Etudiant passionne par le developpement web. Je conçois des applications " +
      "completes, du design de l'interface jusqu'a la base de donnees.",
    'hero.available': 'Disponible pour un stage / une alternance',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',

    // --- A propos ---
    'about.title': 'A propos',
    'about.kicker': 'Qui suis-je',
    'about.p1':
      "Je suis un developpeur fullstack en formation, curieux et rigoureux. " +
      "J'aime transformer une idee en un produit concret, utile et bien fait.",
    'about.p2':
      "Je m'interesse autant au design d'interface qu'a l'architecture serveur. " +
      "Mon objectif : ecrire du code propre, accessible et performant.",
    'about.p3':
      "En dehors du code, j'apprends en continu via des projets perso et la " +
      "veille technologique. Toujours partant pour relever un nouveau defi.",

    // --- Competences ---
    'skills.title': 'Competences',
    'skills.kicker': 'Ma boite a outils',
    'skills.subtitle':
      'Les technologies que j\'utilise pour donner vie aux projets.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Bases de donnees',
    'skills.tools': 'Outils & DevOps',

    // --- Projets ---
    'projects.title': 'Projets',
    'projects.kicker': 'Mon travail',
    'projects.subtitle':
      'Une selection de projets qui montrent ce que je sais faire.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.tech': 'Technologies utilisees',

    // --- Contact ---
    'contact.title': 'Travaillons ensemble',
    'contact.kicker': 'Contact',
    'contact.subtitle':
      'Une question, une opportunite, un projet ? Ecris-moi, je reponds vite.',
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
    'contact.downloadCv': 'Telecharger mon CV',

    // --- Footer ---
    'footer.builtwith': 'Concu avec',
    'footer.and': 'et',
    'footer.rights': 'Tous droits reserves.',
    'footer.backtotop': 'Revenir en haut de la page',

    // --- Meta / SEO ---
    'meta.description':
      'Portfolio de developpeur fullstack. Projets web, competences et contact.',
  },

  en: {
    // --- Accessibility / navigation ---
    'skip.link': 'Skip to main content',
    'nav.label': 'Main navigation',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',
    'theme.toggle': 'Toggle theme (light/dark)',
    'lang.switch': 'Passer en francais',
    'lang.label': 'Choose language',

    // --- Hero ---
    'hero.greeting': "Hi, I'm",
    'hero.role': 'Fullstack Developer',
    'hero.tagline':
      'A student passionate about web development. I build complete ' +
      'applications, from the interface design down to the database.',
    'hero.available': 'Available for an internship / apprenticeship',
    'hero.cta.projects': 'View my projects',
    'hero.cta.contact': 'Get in touch',

    // --- About ---
    'about.title': 'About',
    'about.kicker': 'Who I am',
    'about.p1':
      'I am a fullstack developer in training, curious and rigorous. ' +
      'I love turning an idea into a real, useful, well-crafted product.',
    'about.p2':
      'I care as much about interface design as about server architecture. ' +
      'My goal: write clean, accessible and performant code.',
    'about.p3':
      'Outside of coding, I keep learning through personal projects and tech ' +
      'watch. Always up for a new challenge.',

    // --- Skills ---
    'skills.title': 'Skills',
    'skills.kicker': 'My toolbox',
    'skills.subtitle': 'The technologies I use to bring projects to life.',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.database': 'Databases',
    'skills.tools': 'Tools & DevOps',

    // --- Projects ---
    'projects.title': 'Projects',
    'projects.kicker': 'My work',
    'projects.subtitle': 'A selection of projects that show what I can do.',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.tech': 'Tech used',

    // --- Contact ---
    'contact.title': "Let's work together",
    'contact.kicker': 'Contact',
    'contact.subtitle':
      'A question, an opportunity, a project? Write to me, I reply fast.',
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
      'Fullstack developer portfolio. Web projects, skills and contact.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)['fr'];
