// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ============================================================================
//  CONFIGURATION DU DEPLOIEMENT GITHUB PAGES
// ----------------------------------------------------------------------------
//  1. Remplace "TON-PSEUDO-GITHUB" par ton vrai pseudo GitHub (en minuscules).
//  2. "base" = le nom de ton depot GitHub. Si ton depot s'appelle "portfolio",
//     laisse "/portfolio". Si tu crees un depot nomme "TON-PSEUDO.github.io"
//     (site personnel), mets base: "/" a la place.
// ============================================================================
const GITHUB_USER = 'dylanlemeledo1';
const REPO_NAME = 'portfolio';

export default defineConfig({
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO_NAME}`,
  trailingSlash: 'ignore',

  // Internationalisation : FR par defaut (a la racine), EN sous /en/
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-US' },
      },
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  compressHTML: true,
});
