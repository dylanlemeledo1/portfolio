// ============================================================================
//  Contenu de la page /stage — a mettre a jour si tu refais un stage.
// ============================================================================

export const STAGE = {
  company: 'IP Développement',
  location: 'Nantes',
  tutor: 'M. Ramos Maxime',

  fr: {
    period: '11 mai – 26 juin 2026',
    mode: 'Télétravail à 100 %',
    entreprise:
      "IP Développement est une société fondée en 2018 par trois associés, " +
      "basée à Treillières près de Nantes (avec une seconde agence en " +
      "Occitanie). Elle intervient sur le Grand Ouest et au-delà grâce au " +
      "réseau Alliance du Numérique, avec une approche qui regroupe " +
      "informatique, télécom et hébergement plutôt que de multiplier les " +
      "prestataires. Une petite structure (une poignée de personnes), donc " +
      "un stage où on touche à beaucoup de choses.",
    client:
      "Le projet MSP était destiné aux abonnés d'un opérateur télécom, " +
      "dont le nom n'est pas communiqué ici par confidentialité. Le site " +
      "s'appuyait sur l'API de VA-Telecom côté fournisseur télécom.",
    context:
      "Stage de 1ère année de BTS SIO, au sein d'IP Développement, une " +
      "société de développement web basée à Nantes. Mon rôle : participer " +
      "au développement du projet MSP, un espace client web destiné aux " +
      "abonnés d'un opérateur télécom, connecté à Dolibarr (ERP/CRM) " +
      "côté back-office et à l'API du fournisseur télécom VA-Telecom.",
    intro:
      "Ma mission principale a été de refondre entièrement le parcours de " +
      "commande du site : passage d'un wizard unique à 13 pages dédiées " +
      "par produit (VoIP, hébergement, mobile, SIM, portabilité...), avec " +
      "une intégration réelle de la création de commande via l'API REST " +
      "de Dolibarr et un système de sauvegarde de brouillons.",
    missions: [
      'Refonte du parcours de commande en 13 pages dédiées par produit (Centrex, licence 3CX, VPS, forfait mobile, carte SIM, SDA, portabilité GP/entreprise, trunk SIP...)',
      "Intégration de la création de commande via l'API REST de Dolibarr, avec système de sauvegarde de brouillons (commandes au statut « Brouillon »)",
      "Fonctionnalités d'aide à la saisie : auto-remplissage code postal → ville, validation du code INSEE, chargement dynamique des trunks et contacts client",
      "Refonte responsive complète du site (mobile / tablette / desktop) et mise en conformité visuelle avec le portail VA-Telecom",
      "Diagnostic et résolution d'incidents de production en autonomie : faille CSRF sur l'API de commande, erreur 500 due à un fichier orphelin après refactor, bugs de navigation mobile",
      'Travail en équipe avec Git/GitLab (branche personnelle, merges, résolution de conflits), déploiement SFTP, comptes-rendus réguliers au tuteur',
      "Rédaction de documentation (journal de bord, documentation d'architecture du système de brouillons)",
    ],
  },

  en: {
    period: 'May 11 – June 26, 2026',
    mode: '100% remote',
    entreprise:
      "IP Développement is a company founded in 2018 by three partners, " +
      "based in Treillières near Nantes (with a second office in " +
      "Occitanie). It works across western France and beyond through the " +
      "Alliance du Numérique network, with an approach that bundles IT, " +
      "telecom and hosting rather than splitting them across several " +
      "providers. A small team (a handful of people), so an internship " +
      "where you get exposed to a lot of things.",
    client:
      "The MSP project was built for the subscribers of a telecom " +
      "operator, whose name isn't shared here for confidentiality. The " +
      "site relied on the VA-Telecom API on the telecom provider side.",
    context:
      "First-year BTS SIO internship at IP Développement, a web " +
      "development company based in Nantes, France. My role: contribute " +
      "to the MSP project, a customer web portal for a telecom operator's " +
      "subscribers, connected to Dolibarr (ERP/CRM) on the back office " +
      "side and to the VA-Telecom provider API on the telecom side.",
    intro:
      'My main mission was to fully rebuild the order flow: moving from a ' +
      'single multi-step wizard to 13 dedicated product pages (VoIP, ' +
      'hosting, mobile, SIM, number portability...), with real order ' +
      "creation wired to Dolibarr's REST API and a draft-saving system.",
    missions: [
      'Rebuilt the order flow into 13 dedicated product pages (Centrex, 3CX license, VPS, mobile plans, SIM cards, phone numbers, portability, SIP trunk...)',
      "Integrated order creation through Dolibarr's REST API, with a draft-saving system (orders stored with a \"Draft\" status)",
      'Input-assistance features: postal code to city auto-fill, French INSEE code validation, dynamic loading of trunks and client contacts',
      'Full responsive rebuild of the site (mobile / tablet / desktop) and visual alignment with the VA-Telecom portal',
      'Diagnosed and fixed production incidents independently: a CSRF flaw on the order API, a 500 error caused by an orphaned file after a refactor, mobile navigation bugs',
      'Team collaboration with Git/GitLab (personal branch, merges, conflict resolution), SFTP deployment, regular check-ins with my supervisor',
      'Wrote documentation (daily log, architecture notes for the draft system)',
    ],
  },

  tech: [
    'PHP 8',
    'JavaScript',
    'HTML5 / CSS3',
    'Bootstrap 5',
    'API REST',
    'Dolibarr',
    'Git / GitLab',
    'SFTP',
    'Postman',
  ],
} as const;
