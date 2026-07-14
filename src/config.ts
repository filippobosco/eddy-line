/**
 * Configurazione centralizzata — §11 del brief.
 *
 * Tutti i placeholder/variabili vivono QUI. Angela li sostituisce in un punto
 * solo. I valori "confermati" sono dati reali; i "placeholder" vanno riempiti
 * prima del go-live.
 *
 * In produzione si possono sovrascrivere via variabili d'ambiente Vercel
 * (PUBLIC_* per quelle che servono lato client). Vedi `.env.example`.
 */

const env = import.meta.env;

export interface SiteConfig {
  /** Sottodominio di deploy (default placeholder). */
  subdomain: string;
  /** URL canonico completo del sito. */
  siteUrl: string;
}

export interface IntegrationsConfig {
  /** Calendly — evento Rafting (placeholder). */
  calendlyRaftingUrl: string;
  /** Calendly — evento Canyoning (placeholder). */
  calendlyCanyoningUrl: string;
  /** Endpoint webhook n8n per il form "Richiedi informazioni" (placeholder). */
  n8nWebhookUrl: string;
  /** Container GTM (placeholder — opzione: riuso GTM-TRQM2W9H del sito principale). */
  gtmContainerId: string;
}

export interface AssetsConfig {
  /** Logo vettoriale (placeholder: intanto il PNG del sito WordPress). */
  logoUrl: string;
  /** Foto hero — stato neutro. */
  heroNeutralImage: string;
  /** Foto hero — rafting. */
  heroRaftingImage: string;
  /** Foto hero — canyoning. */
  heroCanyoningImage: string;
}

export interface AppConfig {
  site: SiteConfig;
  integrations: IntegrationsConfig;
  assets: AssetsConfig;
}

export const config: AppConfig = {
  site: {
    // §11 — default placeholder
    subdomain: env.PUBLIC_SUBDOMAIN ?? 'prenota.eddyline.it',
    siteUrl: env.PUBLIC_SITE_URL ?? 'https://prenota.eddyline.it',
  },

  integrations: {
    // §9.1 — placeholder, evento rafting (Calendly Standard)
    calendlyRaftingUrl:
      env.PUBLIC_CALENDLY_RAFTING_URL ?? 'https://calendly.com/PLACEHOLDER/rafting',
    // §9.1 — placeholder, evento canyoning (Calendly Standard)
    calendlyCanyoningUrl:
      env.PUBLIC_CALENDLY_CANYONING_URL ?? 'https://calendly.com/PLACEHOLDER/canyoning',
    // §9.2 — placeholder, endpoint form n8n
    n8nWebhookUrl: env.N8N_WEBHOOK_URL ?? 'https://PLACEHOLDER.n8n.cloud/webhook/eddyline',
    // §9.3 — container GTM della landing
    gtmContainerId: env.PUBLIC_GTM_CONTAINER_ID ?? 'GTM-55ZJ7TMT',
  },

  assets: {
    // §11 — placeholder: usare intanto il logo del sito WordPress
    logoUrl:
      env.PUBLIC_LOGO_URL ?? 'https://eddyline.it/wp-content/uploads/2014/04/logo.png',
    // §11 — foto reali del sito eddyline.it, ottimizzate (1600px JPEG q78).
    // Sostituibili: bastano nuovi file in /public/images o le PUBLIC_HERO_*.
    heroNeutralImage: env.PUBLIC_HERO_NEUTRAL ?? '/images/hero-neutral.jpg',
    heroRaftingImage: env.PUBLIC_HERO_RAFTING ?? '/images/hero-rafting.jpg',
    heroCanyoningImage: env.PUBLIC_HERO_CANYONING ?? '/images/hero-canyoning.jpg',
  },
};

export default config;
