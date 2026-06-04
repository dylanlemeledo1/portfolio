import { ui, defaultLang, type Lang, type UIKey } from './ui';

/**
 * Retourne une fonction de traduction t() pour une langue donnee.
 * Usage dans un composant :
 *   const t = useTranslations(lang);
 *   t('nav.about')  ->  "A propos" (fr) / "About" (en)
 */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Base path du site (ex: "/portfolio") sans slash final. Gere GitHub Pages. */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * URL de la page d'accueil pour une langue.
 * fr -> "/portfolio/"   en -> "/portfolio/en/"
 */
export function homeUrl(lang: Lang): string {
  return lang === defaultLang ? `${BASE}/` : `${BASE}/${lang}/`;
}

/**
 * URL de la meme page dans l'autre langue (pour le selecteur de langue).
 */
export function alternateUrl(currentLang: Lang): string {
  const other: Lang = currentLang === 'fr' ? 'en' : 'fr';
  return homeUrl(other);
}

/** Construit une URL ancre vers une section, en respectant la langue. */
export function sectionUrl(lang: Lang, anchor: string): string {
  return `${homeUrl(lang)}#${anchor}`;
}
