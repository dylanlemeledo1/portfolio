# Portfolio — Developpeur Fullstack

Portfolio personnel bilingue (FR/EN), **minimaliste**, **100% accessible** (WCAG AA),
**responsive** et **ultra-rapide**, construit avec [Astro](https://astro.build).

- ♿ Accessibilite : navigation clavier, ARIA, contraste AA, lecteurs d'ecran, `prefers-reduced-motion`
- 🌍 Bilingue FR / EN avec selecteur de langue
- 🌓 Theme clair / sombre (respecte les preferences systeme, memorise le choix)
- 📱 Responsive : mobile, tablette, desktop
- ⚡ Statique = chargement instantane, excellent SEO (Open Graph, JSON-LD, sitemap)
- ✉️ Formulaire de contact fonctionnel (via Formspree, gratuit)

> L'ancien portfolio (HTML/CSS/JS) est conserve dans le dossier `_ancien-portfolio/`.

---

## 🚀 Demarrage rapide

```bash
npm install      # installe les dependances (1 seule fois)
npm run dev      # lance le site sur http://localhost:4321
npm run build    # genere le site final dans /dist
npm run preview  # previsualise le site final
```

### Tester dans VS Code (sans navigateur externe)

1. Lance `npm run dev` dans le terminal integre.
2. `Ctrl+Shift+P` -> tape **"Simple Browser: Show"** -> Entree.
3. Colle l'URL : `http://localhost:4321/portfolio` -> le site s'affiche **dans VS Code**.

---

## ✏️ Personnaliser (tout est centralise)

| Quoi | Ou |
|------|-----|
| **Nom, email, localisation, competences, reseaux, projets perso** | `src/data/site.ts` |
| **Contenu de la page Stage** | `src/data/stage.ts` |
| **Contenu de la page Compétences (mapping E5)** | `src/data/competences.ts` |
| **Contenu de la page Veille techno** | `src/data/veille.ts` (ajoute une entree a chaque nouvelle decouverte) |
| **Contenu de la page Autoévaluation** | `src/data/autoeval.ts` |
| **Formation, atouts, texte de presentation (page Parcours & CV)** | `src/i18n/ui.ts` (cles `about.*`) |
| **Tous les autres textes FR / EN (nav, boutons...)** | `src/i18n/ui.ts` |
| **Couleurs, polices, espacements** | `src/styles/global.css` (variables `:root`) |
| **Pseudo GitHub + nom du depot** | `astro.config.mjs` (en haut) |

### Formulaire de contact

1. Cree un compte gratuit sur [formspree.io](https://formspree.io).
2. Cree un formulaire, copie son ID (ex. `xeqwabcd`).
3. Colle-le dans `src/data/site.ts` -> `formspreeId`.

> Tant que `formspreeId` vaut `YOUR_FORM_ID`, le formulaire ouvre automatiquement
> ton client mail (mode secours), donc il marche quand meme.

### Ajouter ton CV / ta photo

- CV : le tien est déjà copié dans `public/cv.pdf` (`cvUrl: 'cv.pdf'` dans `src/data/site.ts`), le bouton de téléchargement s'affiche sur la page Parcours & CV et sur le formulaire de contact.
- Photo : pas de photo pour l'instant (le design utilise juste tes initiales "DL"). Pour en ajouter une : mets ton fichier dans `public/photo.jpg`, puis remplace le `<div class="avatar">` de `src/components/About.astro` par une balise `<img src="/photo.jpg" ... />`.

---

## 🌐 Mettre en ligne (GitHub Pages — gratuit)

1. Dans `astro.config.mjs`, remplace `TON-PSEUDO-GITHUB` par ton pseudo.
2. Cree un depot GitHub nomme **`portfolio`** et pousse le code :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/TON-PSEUDO/portfolio.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings -> Pages -> Build and deployment -> Source : GitHub Actions**.
4. Chaque `git push` redeploie le site automatiquement.
   URL finale : `https://TON-PSEUDO.github.io/portfolio`

> Astuce : pour une URL sans `/portfolio` (`https://TON-PSEUDO.github.io`),
> nomme ton depot `TON-PSEUDO.github.io` et mets `base: '/'` dans `astro.config.mjs`.

---

## 📁 Structure

```
src/
├── data/
│   ├── site.ts          -> TES infos, competences, projets perso (a editer)
│   ├── stage.ts          -> contenu de la page Stage
│   ├── competences.ts     -> mapping des 6 competences E5
│   ├── veille.ts          -> entrees de veille technologique
│   └── autoeval.ts        -> contenu de la page Autoevaluation
├── i18n/                -> traductions FR/EN + utilitaires (pageUrl, homeUrl...)
├── layouts/              -> gabarit de base (SEO, theme, a11y)
├── components/           -> Header, Hero, About, Skills, Projects, Contact, Footer
├── pages/                -> Accueil, Parcours, Stage, Competences, Veille, Autoeval, 404
│   └── en/                -> memes pages, en anglais
└── styles/global.css     -> design system
```

### Les 7 pages du site

| Page | FR | EN | Pour quoi |
|------|----|----|-----------|
| Accueil | `/` | `/en/` | Hero + projets perso + contact |
| Parcours & CV | `/parcours/` | `/en/parcours/` | Formation, atouts, CV telechargeable |
| Stage | `/stage/` | `/en/stage/` | Ta realisation professionnelle (E5/E6) |
| Compétences | `/competences/` | `/en/competences/` | Les 6 competences E5 + stack technique |
| Veille techno | `/veille/` | `/en/veille/` | Competence C6 — a completer regulierement |
| Autoévaluation | `/autoeval/` | `/en/autoeval/` | Bilan de stage |
