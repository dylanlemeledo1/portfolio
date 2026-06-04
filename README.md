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
| **Nom, email, localisation, projets, competences, reseaux** | `src/data/site.ts` |
| **Tous les textes FR / EN** | `src/i18n/ui.ts` |
| **Couleurs, polices, espacements** | `src/styles/global.css` (variables `:root`) |
| **Pseudo GitHub + nom du depot** | `astro.config.mjs` (en haut) |

### Formulaire de contact

1. Cree un compte gratuit sur [formspree.io](https://formspree.io).
2. Cree un formulaire, copie son ID (ex. `xeqwabcd`).
3. Colle-le dans `src/data/site.ts` -> `formspreeId`.

> Tant que `formspreeId` vaut `YOUR_FORM_ID`, le formulaire ouvre automatiquement
> ton client mail (mode secours), donc il marche quand meme.

### Ajouter ton CV / ta photo

- CV : place `cv.pdf` dans `public/`, puis `cvUrl: 'cv.pdf'` dans `src/data/site.ts`.
- Photo : `public/photo.png` est deja la (recuperee de l'ancien portfolio). Voir
  la section "Avatar" plus bas pour l'activer.

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
├── data/site.ts        -> TES infos (a editer)
├── i18n/               -> traductions FR/EN + utilitaires
├── layouts/            -> gabarit de base (SEO, theme, a11y)
├── components/         -> Header, Hero, About, Skills, Projects, Contact, Footer
├── pages/              -> index.astro (FR), en/index.astro (EN), 404
└── styles/global.css   -> design system
```
