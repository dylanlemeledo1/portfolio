// ============================================================================
//  Contenu de la page /competences — mapping des 6 competences du referentiel
//  BTS SIO (bloc 1, epreuve E5) avec des preuves concretes.
//  A completer au fil des prochains stages / projets (voir [[epreuves-e5-e6-e7]]).
// ============================================================================

export const COMPETENCES = [
  {
    code: 'C1',
    fr: {
      title: 'Gérer le patrimoine informatique',
      example:
        "Analyse de l'architecture globale du projet MSP (front → API → " +
        'Dolibarr / VA-Telecom) pour situer mon périmètre de travail ; ' +
        "diagnostic d'un fichier orphelin laissé sur le serveur après un " +
        'refactor, à l\'origine d\'une erreur 500 en production.',
    },
    en: {
      title: 'Manage the IT estate',
      example:
        'Analyzed the overall architecture of the MSP project (front-end ' +
        '→ API → Dolibarr / VA-Telecom) to understand my scope of work; ' +
        'diagnosed an orphaned file left on the server after a refactor, ' +
        'which was causing a production 500 error.',
    },
  },
  {
    code: 'C2',
    fr: {
      title: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
      example:
        'Résolution en autonomie de plusieurs incidents de production : ' +
        "faille CSRF sur l'API de commande, pages écrasées par une " +
        "synchronisation d'équipe, bugs de responsive et de navigation " +
        'mobile — diagnostiqués via les logs serveur et les outils du ' +
        'navigateur.',
    },
    en: {
      title: 'Respond to incidents, support and evolution requests',
      example:
        'Independently resolved several production incidents: a CSRF ' +
        'flaw on the order API, pages overwritten by a teammate\'s ' +
        'deployment, responsive and mobile navigation bugs — diagnosed ' +
        'via server logs and browser dev tools.',
    },
  },
  {
    code: 'C3',
    fr: {
      title: "Développer la présence en ligne de l'organisation",
      example:
        'Refonte complète du parcours de commande du site client (13 ' +
        'pages produit), refonte responsive mobile/tablette/desktop et ' +
        'mise en cohérence visuelle avec le portail du fournisseur ' +
        'télécom.',
    },
    en: {
      title: "Develop the organization's online presence",
      example:
        "Full rebuild of the client site's order flow (13 product pages), " +
        'responsive rebuild for mobile / tablet / desktop, and visual ' +
        "alignment with the telecom provider's portal.",
    },
  },
  {
    code: 'C4',
    fr: {
      title: 'Travailler en mode projet',
      example:
        'Travail en équipe avec Git/GitLab (branche personnelle, merges, ' +
        'résolution de conflits), participation à des réunions ' +
        "d'équipe, comptes-rendus quotidiens et sollicitation du tuteur " +
        'avant les choix de structure importants.',
    },
    en: {
      title: 'Work in project mode',
      example:
        'Team collaboration with Git/GitLab (personal branch, merges, ' +
        'conflict resolution), took part in team meetings, wrote daily ' +
        "progress reports and checked in with my supervisor before major " +
        'structural decisions.',
    },
  },
  {
    code: 'C5',
    fr: {
      title: 'Mettre à disposition des utilisateurs un service informatique',
      example:
        "Déploiement des nouvelles versions du site sur le serveur de " +
        'production via SFTP, tests fonctionnels avant mise en ligne ' +
        '(formulaires, validation, brouillons), mise en place du système ' +
        'de sauvegarde de brouillons sur les 12 pages produit.',
    },
    en: {
      title: 'Deploy an IT service to users',
      example:
        'Deployed new versions of the site to the production server via ' +
        'SFTP, ran functional tests before going live (forms, ' +
        'validation, drafts), and rolled out the draft-saving system ' +
        'across 12 product pages.',
    },
  },
  {
    code: 'C6',
    fr: {
      title: 'Organiser son développement professionnel',
      example:
        'Documentation régulière de mon travail (journal de bord, notes ' +
        "d'architecture), mise en place d'une veille technologique sur " +
        'les outils de développement assistés par IA, et construction de ' +
        'ce portfolio pour structurer et présenter mon parcours.',
    },
    en: {
      title: 'Organize one\'s professional development',
      example:
        'Regularly documented my work (daily log, architecture notes), ' +
        'set up a tech watch on AI-assisted development tools, and built ' +
        'this portfolio to structure and present my journey.',
    },
  },
] as const;
