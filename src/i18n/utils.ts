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
 * URL absolue (depuis la racine du site) vers un fichier de /public,
 * ex: assetUrl('cv.pdf') -> "/portfolio/cv.pdf". A utiliser a la place de
 * `${import.meta.env.BASE_URL}${chemin}` qui casse selon que BASE_URL a ou
 * non un slash final.
 */
export function assetUrl(path: string): string {
  return `${BASE}/${path.replace(/^\//, '')}`;
}

/**
 * URL de la page d'accueil pour une langue.
 * fr -> "/portfolio/"   en -> "/portfolio/en/"
 */
export function homeUrl(lang: Lang): string {
  return lang === defaultLang ? `${BASE}/` : `${BASE}/${lang}/`;
}

/**
 * URL de la meme page dans l'autre langue (pour le selecteur de langue).
 * Si on lui donne le chemin courant (Astro.url.pathname), elle reste sur la
 * meme page (ex: /stage/ -> /en/stage/) au lieu de renvoyer a l'accueil.
 */
export function alternateUrl(currentLang: Lang, pathname?: string): string {
  const other: Lang = currentLang === 'fr' ? 'en' : 'fr';
  if (!pathname) return homeUrl(other);

  let path = pathname;
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  const segments = path.split('/').filter(Boolean);
  if (segments[0] === 'fr' || segments[0] === 'en') segments.shift();

  const slug = segments.join('/');
  return slug ? pageUrl(other, slug) : homeUrl(other);
}

/**
 * URL d'une page dediee (hors accueil), ex: pageUrl('fr', 'stage') -> "/stage/"
 * pageUrl('en', 'stage') -> "/en/stage/"
 */
export function pageUrl(lang: Lang, slug: string): string {
  return lang === defaultLang ? `${BASE}/${slug}/` : `${BASE}/${lang}/${slug}/`;
}

/** Construit une URL ancre vers une section, en respectant la langue. */
export function sectionUrl(lang: Lang, anchor: string): string {
  return `${homeUrl(lang)}#${anchor}`;
}
