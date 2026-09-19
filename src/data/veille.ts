// ============================================================================
//  Contenu de la page /veille — axe choisi : les outils de developpement
//  assistes par IA. A completer regulierement (c'est le principe de la
//  veille techno pour l'epreuve E5 : competence C6).
// ============================================================================

export const VEILLE_AXIS = {
  fr: 'Outils de développement assistés par IA',
  en: 'AI-assisted development tools',
};

export const VEILLE_ENTRIES = [
  {
    date: '2026-09',
    fr: {
      title: 'Claude Code, Cursor, GitHub Copilot : trois façons de coder avec une IA',
      summary:
        "En 2026, les assistants de code se sont éloignés de la simple " +
        "autocomplétion pour devenir des agents capables de modifier " +
        "plusieurs fichiers, comprendre un projet entier et exécuter des " +
        "tâches de bout en bout. Trois approches dominent : une extension " +
        "intégrée à l'éditeur (GitHub Copilot), un éditeur pensé pour " +
        "l'IA (Cursor), et un agent en ligne de commande (Claude Code). " +
        "Le choix dépend surtout du contexte : autocomplétion rapide au " +
        "quotidien, refactoring profond sur un gros projet, ou budget " +
        "disponible. Beaucoup de développeurs finissent par en combiner " +
        "plusieurs plutôt que d'en choisir un seul.",
    },
    en: {
      title: 'Claude Code, Cursor, GitHub Copilot: three ways to code with AI',
      summary:
        'By 2026, coding assistants had moved well past simple ' +
        'autocomplete, becoming agents able to edit multiple files, ' +
        'reason about an entire codebase and run tasks end to end. Three ' +
        'approaches dominate: an editor extension (GitHub Copilot), an ' +
        'AI-native editor (Cursor), and a terminal-based agent (Claude ' +
        'Code). The right pick mostly depends on context — fast everyday ' +
        'autocomplete, deep refactoring on a large project, or budget. ' +
        'Many developers end up combining several rather than picking ' +
        'just one.',
    },
    source: {
      label: 'nxcode.io — Cursor vs Claude Code vs GitHub Copilot (2026)',
      url: 'https://www.nxcode.io/fr/resources/news/cursor-vs-claude-code-vs-github-copilot-2026-ultimate-comparison',
    },
  },
  {
    date: '2026-09',
    fr: {
      title: "Apprendre à coder avec l'IA sans se reposer dessus",
      summary:
        "Le risque, quand on débute, c'est de coller la correction " +
        "proposée par l'IA sans comprendre pourquoi elle marche. La " +
        "bonne pratique qui revient le plus souvent : privilégier le " +
        "« pourquoi » sur le « quoi », c'est-à-dire demander à l'IA " +
        "d'expliquer l'erreur et le raisonnement plutôt que de prendre " +
        "juste la solution. Une méthode citée consiste à écrire son " +
        "propre code d'abord, puis à demander une analyse guidée plutôt " +
        "qu'une correction directe — pour garder la main sur ce qu'on " +
        "apprend vraiment.",
    },
    en: {
      title: "Learning to code with AI without leaning on it",
      summary:
        "The risk for beginners is pasting the fix an AI suggests without " +
        "understanding why it works. The most common good practice: " +
        "prioritize the \"why\" over the \"what\" — ask the AI to explain " +
        "the error and its reasoning rather than just taking the " +
        "solution. One method cited is to write your own code first, " +
        "then ask for guided feedback instead of a direct correction — " +
        "to stay in control of what you're actually learning.",
    },
    source: {
      label: 'oclock.io — Coder avec l\u2019IA et VS Code : quels outils pour débuter',
      url: 'https://oclock.io/coder-ia-vs-code-outils-debuter',
    },
  },
] as const;
