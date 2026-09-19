// ============================================================================
//  Contenu de la page /autoeval — bilan personnel, adapte du bilan de stage
//  redige avec mon tuteur. A mettre a jour apres chaque nouvelle experience.
// ============================================================================

export const AUTOEVAL = {
  fr: {
    sections: [
      {
        title: 'Objectifs fixés et atteints',
        text:
          "Mon objectif principal en arrivant chez IP Développement était de " +
          "participer au développement front-end de l'espace client MSP, " +
          "connecté à Dolibarr et à VA-Telecom. Il a été tenu : j'ai mis en " +
          "place les 13 pages produit dédiées, le système de brouillons " +
          "(commandes Dolibarr au statut « Brouillon »), des fonctionnalités " +
          "d'aide à la saisie (auto-remplissage code postal, validation du " +
          "code INSEE), le chargement dynamique des données (trunks, " +
          "contacts) et une refonte responsive complète du site.",
      },
      {
        title: 'Compétences développées',
        text:
          "Ce stage m'a fait monter en autonomie sur le développement web " +
          "(PHP / JavaScript / HTML / CSS), sur le travail collaboratif avec " +
          "Git/GitLab (branches, merges, résolution de conflits), sur le " +
          "déploiement en production (SFTP), sur le diagnostic et la " +
          "résolution d'incidents (analyse de logs PHP, inspection serveur) " +
          "et sur la communication d'équipe (comptes-rendus réguliers, " +
          "sollicitation du tuteur avant les choix de structure).",
      },
      {
        title: 'Difficultés rencontrées',
        text:
          "Plusieurs incidents de production liés à la coordination des " +
          "déploiements entre membres de l'équipe (fichiers écrasés ou " +
          "laissés orphelins) m'ont appris l'importance d'une procédure de " +
          "déploiement rigoureuse. Sur le plan méthode, j'ai dû apprendre à " +
          "mieux communiquer en amont (compte-rendu quotidien, validation " +
          "des choix de structure avec le tuteur avant de les implémenter). " +
          "Le sujet étant technique pour une 1ère année de BTS SIO, ma " +
          "montée en compétence s'est faite progressivement, avec l'appui " +
          "du tuteur et de l'équipe.",
      },
      {
        title: 'Ce que je retiens pour la suite',
        text:
          "Ce stage a confirmé mon objectif de devenir développeur web : " +
          "j'ai autant aimé la résolution de bugs concrets que la " +
          "construction de nouvelles pages. Pour la suite, je veux continuer " +
          "à structurer ma veille technologique et gagner en autonomie sur " +
          "la gestion de projet (planification, anticipation des choix " +
          "techniques avant de coder).",
      },
    ],
  },
  en: {
    sections: [
      {
        title: 'Goals set and achieved',
        text:
          'My main goal when joining IP Développement was to contribute to ' +
          'the front-end development of the MSP customer portal, connected ' +
          'to Dolibarr and VA-Telecom. That goal was met: I built the 13 ' +
          'dedicated product pages, the draft-saving system (orders stored ' +
          'with a "Draft" status in Dolibarr), input-assistance features ' +
          '(postal code auto-fill, French INSEE code validation), dynamic ' +
          'data loading (trunks, contacts), and a full responsive rebuild ' +
          'of the site.',
      },
      {
        title: 'Skills developed',
        text:
          'This internship grew my autonomy in web development ' +
          '(PHP / JavaScript / HTML / CSS), in collaborative work with ' +
          'Git/GitLab (branches, merges, conflict resolution), in ' +
          'production deployment (SFTP), in diagnosing and resolving ' +
          'incidents (PHP log analysis, server inspection), and in team ' +
          'communication (regular progress reports, checking in with my ' +
          'supervisor before structural decisions).',
      },
      {
        title: 'Challenges faced',
        text:
          "Several production incidents tied to coordinating deployments " +
          "across the team (overwritten or orphaned files) taught me the " +
          "importance of a rigorous deployment process. On the process " +
          "side, I had to learn to communicate earlier (daily reports, " +
          "validating structural choices with my supervisor before " +
          "implementing them). The subject matter was technically " +
          "demanding for a first-year BTS SIO student, so I built up that " +
          "skill gradually, with support from my supervisor and the team.",
      },
      {
        title: 'What I take away for what comes next',
        text:
          'This internship confirmed my goal of becoming a web developer: ' +
          'I enjoyed fixing concrete bugs just as much as building new ' +
          'pages. Going forward, I want to keep structuring my tech watch ' +
          'and grow more autonomous in project management — planning and ' +
          'anticipating technical choices before writing code.',
      },
    ],
  },
} as const;
