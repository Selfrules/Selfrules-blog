// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Pensieri In Pixels";
export const SITE_DESCRIPTION =
  "Benvenuto su 'Pensieri in Pixels', dove la vita digitale incontra la passione personale.";
export const TWITTER_HANDLE = "";
export const MY_NAME = "Mattia Filippo De Luca";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
