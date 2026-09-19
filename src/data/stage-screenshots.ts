// ============================================================================
//  Captures d'ecran reelles du projet MSP (stage IP Developpement).
//  Organisees en 3 groupes qui correspondent aux missions de la page /stage.
//  Pour en ajouter : depose l'image dans public/images/stage/ (WebP conseille,
//  ~1100px de large suffit) puis ajoute une entree ici.
// ============================================================================

export type Screenshot = {
  file: string;
  fr: string;
  en: string;
};

export type ScreenshotGroup = {
  key: string;
  fr: string;
  en: string;
  items: Screenshot[];
};

export const SCREENSHOT_GROUPS: ScreenshotGroup[] = [
  {
    key: 'commande',
    fr: 'Le parcours de commande (13 pages produit)',
    en: 'The order flow (13 product pages)',
    items: [
      { file: '02-commande-sda.webp', fr: 'Commande de numéros SDA', en: 'Ordering SDA phone numbers' },
      { file: '03-commande-portabilite-grand-public.webp', fr: 'Portabilité grand public', en: 'Consumer number portability' },
      { file: '04-commande-portabilite-entreprise.webp', fr: 'Portabilité entreprise', en: 'Business number portability' },
      { file: '05-commande-licence-3cx.webp', fr: "Commande d'une licence 3CX", en: 'Ordering a 3CX license' },
      { file: '16-licence-3cx-vatelecom.webp', fr: 'Étape liée à la licence, côté VA-Telecom', en: 'License step, on the VA-Telecom side' },
      { file: '06-commande-vps-windows.webp', fr: "Commande d'un VPS Windows", en: 'Ordering a Windows VPS' },
      { file: '07-commande-vps-linux.webp', fr: "Commande d'un VPS Linux", en: 'Ordering a Linux VPS' },
      { file: '08-commande-vps-3cx.webp', fr: 'Commande d\u2019un VPS dédié 3CX', en: 'Ordering a 3CX-dedicated VPS' },
      { file: '09-commande-vps-autre.webp', fr: 'Commande d\u2019un VPS sur mesure', en: 'Ordering a custom VPS' },
      { file: '10-commande-forfait-mobile.webp', fr: "Commande d'un forfait mobile", en: 'Ordering a mobile plan' },
      { file: '11-commande-carte-sim.webp', fr: "Commande d'une carte SIM", en: 'Ordering a SIM card' },
      { file: '12-commande-telephone-mobile.webp', fr: "Commande d'un téléphone mobile", en: 'Ordering a mobile phone' },
      { file: '13-commande-centrex.webp', fr: "Commande d'un Centrex IP", en: 'Ordering an IP Centrex' },
    ],
  },
  {
    key: 'responsive',
    fr: 'La refonte responsive',
    en: 'The responsive rebuild',
    items: [
      { file: '14-responsive-login-mobile.webp', fr: 'Connexion — vue mobile', en: 'Login — mobile view' },
      { file: '15-responsive-services-mobile.webp', fr: 'Mes services — vue mobile', en: 'My services — mobile view' },
    ],
  },
  {
    key: 'brouillon',
    fr: 'Le système de sauvegarde de brouillons',
    en: 'The draft-saving system',
    items: [
      { file: '17-brouillon-page-produit.webp', fr: 'Un formulaire de commande rempli', en: 'A filled-in order form' },
      { file: '18-brouillon-sauvegarde.webp', fr: 'Confirmation de sauvegarde', en: 'Save confirmation' },
      { file: '19-brouillon-modale.webp', fr: 'Liste des brouillons, rechargeables', en: 'List of drafts, reloadable' },
      { file: '20-commandes-sauvegardees.webp', fr: 'Mes commandes sauvegardées', en: 'My saved orders' },
    ],
  },
];
