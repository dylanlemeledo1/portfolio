// ============================================================================
//  Contenu de la page /certifications — parcours de certification
//  complementaire (epreuve facultative EF3). Structure par certification :
//  presentation / preuves / ce que j'ai appris / lien projet pro / lien BTS.
//  Pour en ajouter une : copie un bloc et adapte.
// ============================================================================

export type Certification = {
  id: string;
  provider: string;
  badges?: { fr: string; en: string }[];
  screenshots?: { file: string; fr: string; en: string }[];
  fr: {
    title: string;
    presentation: string;
    appris: string[];
    lienProjet: string;
    lienBts: string;
  };
  en: {
    title: string;
    presentation: string;
    appris: string[];
    lienProjet: string;
    lienBts: string;
  };
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'tryhackme',
    provider: 'TryHackMe',
    badges: [
      { fr: 'Top 20% du classement', en: 'Top 20% ranking' },
      { fr: '35 salles complétées', en: '35 rooms completed' },
      { fr: '2 badges obtenus (First Four, SOC Level-Up)', en: '2 badges earned (First Four, SOC Level-Up)' },
    ],
    screenshots: [
      { file: 'thm-profile.webp', fr: 'Mon profil TryHackMe', en: 'My TryHackMe profile' },
      { file: 'thm-badges.webp', fr: 'Badges obtenus', en: 'Badges earned' },
      { file: 'thm-rooms-1.webp', fr: 'Salles complétées (1/2)', en: 'Completed rooms (1/2)' },
      { file: 'thm-rooms-2.webp', fr: 'Salles complétées (2/2)', en: 'Completed rooms (2/2)' },
    ],
    fr: {
      title: 'TryHackMe — Cybersécurité',
      presentation:
        "TryHackMe est une plateforme de formation pratique en cybersécurité, " +
        "à travers des scénarios réels (machines virtuelles et applications " +
        "web accessibles directement dans le navigateur). J'y ai complété 35 " +
        "salles, dont des parcours sur les fondamentaux réseau, Linux, la " +
        "sécurité web, le monitoring (SIEM, Splunk, M365, Entra ID), la " +
        "réponse à incident et l'investigation numérique.",
      appris: [
        'Les bases réseau et système (Linux Fundamentals, Windows Fundamentals, représentation des données)',
        "Les fondamentaux de la sécurité offensive et défensive, et le vocabulaire d'un SOC (Threat Intelligence, DFIR, Malware Analysis, SIEM)",
        "La recherche technique efficace (moteurs spécialisés type Shodan, Censys, VirusTotal, et haveibeenpwned.com pour repérer des fuites de données)",
        "La détection et l'analyse d'incidents : repérer une IP malveillante dans des logs, la bloquer dans un pare-feu",
        "Des notions de sécurité liées à l'IA (menaces, threat modelling)",
      ],
      lienProjet:
        "La sécurité web est le complément direct du développement web : " +
        "comprendre comment une faille est exploitée aide à écrire du code " +
        "plus sûr. En stage, j'ai justement dû diagnostiquer et corriger une " +
        "faille CSRF sur l'API de commande — une situation très proche de ce " +
        "que travaille TryHackMe.",
      lienBts:
        "Complète directement la compétence C1 (gérer le patrimoine " +
        "informatique) et C2 (répondre aux incidents) du référentiel BTS " +
        "SIO, vues en cours sous un angle plus théorique.",
    },
    en: {
      title: 'TryHackMe — Cybersecurity',
      presentation:
        'TryHackMe is a hands-on cybersecurity training platform built ' +
        'around real scenarios (virtual machines and web apps run directly ' +
        "in the browser). I've completed 35 rooms, including paths on " +
        'network and Linux fundamentals, web security, monitoring (SIEM, ' +
        'Splunk, M365, Entra ID), incident response and digital forensics.',
      appris: [
        'Network and system basics (Linux Fundamentals, Windows Fundamentals, data representation)',
        'Offensive and defensive security fundamentals, and SOC vocabulary (Threat Intelligence, DFIR, Malware Analysis, SIEM)',
        'Effective technical research (specialized search engines like Shodan, Censys, VirusTotal, and haveibeenpwned.com to spot data breaches)',
        'Incident detection and analysis: spotting a malicious IP in logs and blocking it in a firewall',
        'AI-related security concepts (threats, threat modelling)',
      ],
      lienProjet:
        'Web security is the direct counterpart to web development: ' +
        'understanding how a flaw is exploited helps write safer code. ' +
        'During my internship, I actually had to diagnose and fix a CSRF ' +
        'flaw on the order API — a situation very close to what TryHackMe ' +
        'covers.',
      lienBts:
        'Directly complements competencies C1 (managing the IT estate) and ' +
        'C2 (responding to incidents) from the BTS SIO curriculum, usually ' +
        'seen from a more theoretical angle in class.',
    },
  },
  {
    id: 'openclassrooms',
    provider: 'OpenClassrooms',
    badges: [
      { fr: 'Découvrez les fondamentaux de l\u2019UX design — terminé', en: 'UX design fundamentals — completed' },
      { fr: 'Créez votre premier site avec WordPress 6 — terminé', en: 'Build your first site with WordPress 6 — completed' },
      { fr: 'Créez une maquette web avec Figma — 91 %', en: 'Design a web mockup with Figma — 91%' },
      { fr: 'Créez des animations CSS modernes — 95 %', en: 'Build modern CSS animations — 95%' },
    ],
    fr: {
      title: 'OpenClassrooms — Web & UX',
      presentation:
        "OpenClassrooms propose des cours en ligne certifiants. Je m'y suis " +
        "concentré sur le front-end et l'UX : fondamentaux de l'UX design, " +
        "création de site avec WordPress, maquettage avec Figma et " +
        "animations CSS modernes.",
      appris: [
        "Les bases de l'UX design : comprendre un besoin utilisateur avant de coder",
        'La prise en main de WordPress pour créer un site rapidement',
        'Le prototypage et le maquettage avec Figma',
        'Des techniques CSS modernes pour animer une interface',
      ],
      lienProjet:
        "Ces cours complètent directement mon profil de développeur web : " +
        "ils couvrent la partie conception/UX en amont du code, que je ne " +
        "vois pas autant en cours qu'en développement pur.",
      lienBts:
        "Renforce la compétence C3 (développer la présence en ligne de " +
        "l'organisation) avec une approche plus centrée sur l'utilisateur " +
        "final.",
    },
    en: {
      title: 'OpenClassrooms — Web & UX',
      presentation:
        'OpenClassrooms offers certifying online courses. I focused on ' +
        'front-end and UX: UX design fundamentals, building a site with ' +
        'WordPress, mockups with Figma, and modern CSS animations.',
      appris: [
        'UX design basics: understanding a user need before writing code',
        'Getting started with WordPress to build a site quickly',
        'Prototyping and mockups with Figma',
        'Modern CSS techniques to animate an interface',
      ],
      lienProjet:
        'These courses directly complement my web developer profile: they ' +
        "cover the design/UX side upstream of the code, which I don't see " +
        'as much in class as pure development.',
      lienBts:
        "Reinforces competency C3 (developing the organization's online " +
        'presence) with a more user-centered approach.',
    },
  },
  {
    id: 'unity',
    provider: 'Unity',
    fr: {
      title: 'Unity — Développement de jeu vidéo (C#)',
      presentation:
        "En dehors des cours, j'ai exploré le moteur Unity avec un petit " +
        "jeu de plateforme en C# : gestion des collisions, des zones de " +
        "chute et de réapparition, machine à états simple pour le joueur.",
      appris: [
        "L'écriture de scripts C# orientés composants (Unity utilise MonoBehaviour, différent d'une appli C# classique)",
        'La gestion des collisions et des triggers (OnTriggerEnter)',
        "L'usage des coroutines pour des actions étalées dans le temps (chute, réapparition)",
      ],
      lienProjet:
        "Renforce mes compétences C#, déjà pratiquées en cours (machine à " +
        "café, MusicAtoutV1 en WinForms/Entity Framework Core) mais dans un " +
        "contexte très différent : l'event-driven du moteur de jeu plutôt " +
        "que le MVC classique.",
      lienBts:
        "Diversifie les langages et paradigmes pratiqués au-delà du " +
        "programme, utile pour montrer une curiosité technique au jury.",
    },
    en: {
      title: 'Unity — Game development (C#)',
      presentation:
        "Outside of class, I explored the Unity engine with a small " +
        "platformer built in C#: collision handling, fall and respawn " +
        "zones, a simple state machine for the player.",
      appris: [
        'Writing component-based C# scripts (Unity uses MonoBehaviour, quite different from a classic C# app)',
        'Handling collisions and triggers (OnTriggerEnter)',
        'Using coroutines for actions spread over time (falling, respawning)',
      ],
      lienProjet:
        'Reinforces my C# skills, already practiced in class (coffee ' +
        'machine app, MusicAtoutV1 in WinForms/Entity Framework Core) but ' +
        'in a very different context: the game engine\u2019s event-driven ' +
        'model rather than classic MVC.',
      lienBts:
        'Diversifies the languages and paradigms practiced beyond the ' +
        'curriculum — useful to show technical curiosity to the jury.',
    },
  },
];
