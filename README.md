# Eddyline — Landing Rafting & Canyoning

Landing page ad alta conversione per **Eddyline** (Centro Sport Fluviali Valsesia, ASD) — rafting e canyoning sul fiume Sesia, a Campertogno (VC). Riceve il traffico delle campagne Google Ads e lo converte in **prenotazioni (Calendly)** e **richieste info (form)**.

Stack: **Astro + Tailwind CSS v4**, deploy su **Vercel**. La specifica completa è in `Eddyline_Landing_BRIEF.md`.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # build di produzione (Vercel) + type check
npm run preview
```

## Architettura

- **3 route** — `/` (neutro), `/rafting`, `/canyoning`. Renderizzano lo stesso
  `Landing.astro` con prop `activity`. Le campagne atterrano già pre-selezionate.
- **Swap senza reload** — dal pop-up di scelta, dalle card o dallo switch in
  header l'attività cambia client-side (`history.pushState`, `dataLayer`),
  senza ricaricare la pagina.
- **Pop-up di scelta** — solo su `/`: appare 2s dopo il load, bloccante, si
  chiude solo scegliendo un'attività.
- **Booking** — tab Calendly (lazy) + form "Richiedi informazioni". Il form
  fa POST a `/api/lead` (serverless Vercel) che inoltra a n8n server-side.

## Variabili d'ambiente

Copia `.env.example` in `.env` e riempi i placeholder:

| Variabile | Cosa | Esposta al client |
|---|---|---|
| `PUBLIC_CALENDLY_RAFTING_URL` | evento Calendly rafting | sì |
| `PUBLIC_CALENDLY_CANYONING_URL` | evento Calendly canyoning | sì |
| `N8N_WEBHOOK_URL` | webhook form (lead) | **no** (server-side) |
| `PUBLIC_GTM_CONTAINER_ID` | GTM (o riuso `GTM-TRQM2W9H`) | sì |
| `PUBLIC_SUBDOMAIN` / `PUBLIC_SITE_URL` | dominio | sì |
| `PUBLIC_LOGO_URL` / `PUBLIC_HERO_*` | asset | sì |

Finché i placeholder non sono riempiti: il form funziona end-to-end (accetta i
lead, non li inoltra), l'embed Calendly mostra un messaggio di fallback.

## Da completare (TODO)

- [ ] Sticky CTA mobile (§7.14)
- [ ] Cookie banner Consent Mode v2 — i default `denied` sono già attivi, manca il banner UI (§9.4)
- [ ] Sezione "Come arrivare" + mappa (§7.12)
- [ ] Loghi enti reali CONI/FICK/FIRAFT/FICT (ora badge testuali)
- [ ] Riempire le variabili d'ambiente sopra
