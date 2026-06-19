/**
 * Contenuti reali della landing — §8 del brief.
 * Tutti i dati sono presi dal brief: prezzi esatti, niente dato inventato.
 * La copy on-page è in italiano; i termini tecnici restano in inglese.
 */

export type Activity = 'rafting' | 'canyoning';

/* ============================================================
   Hero — tre stati (§7.2). Copy ESATTA dal brief.
   ============================================================ */
export interface HeroState {
  eyebrow: string;
  h1: string;
  sub: string;
  /** Tag mono (durata · prezzo · livello), assente nello stato neutro. */
  tagMono?: string;
  ctaPrimary: { label: string; target: string };
  ctaSecondary?: { label: string; target: string };
}

export const heroNeutral: HeroState = {
  eyebrow: 'EDDYLINE · THE RIVER EXPERIENCE · DAL 2001',
  h1: 'Rafting e canyoning sul fiume Sesia, in Valsesia',
  sub: 'Avventura sull’acqua con guide certificate, attrezzatura inclusa e massima sicurezza. A sole 2 ore da Milano e Torino, ai piedi del Monte Rosa.',
  ctaPrimary: { label: 'Scegli la tua avventura', target: '#attivita' },
};

export const heroRafting: HeroState = {
  eyebrow: 'EDDYLINE · DAL 2001 SUL FIUME SESIA',
  h1: 'Rafting in Valsesia, sul fiume Sesia',
  sub: 'Una discesa tra rapide e acque smeraldo, adatta a tutti: nessuna esperienza richiesta. Guide certificate FiRaft e attrezzatura inclusa. A 2 ore da Milano e Torino.',
  tagMono: '3h30 · €65 adulti / €55 minori · adatto a tutti',
  ctaPrimary: { label: 'Prenota la tua data', target: '#prenota' },
  ctaSecondary: { label: 'Richiedi informazioni', target: '#prenota' },
};

export const heroCanyoning: HeroState = {
  eyebrow: 'EDDYLINE · DAL 2001 IN VALSESIA',
  h1: 'Canyoning in Valsesia',
  sub: 'Salti, scivoli naturali e calate tra le forre del Sesia. Un percorso per ogni livello, dal primo approccio agli itinerari expert. Guide certificate AIGC, muta e attrezzatura incluse.',
  tagMono: '9 percorsi · da €70 · ti aiutiamo a scegliere',
  ctaPrimary: { label: 'Trova il percorso adatto', target: '#prenota' },
  ctaSecondary: { label: 'Prenota la tua data', target: '#prenota' },
};

export const heroByActivity: Record<Activity | 'neutral', HeroState> = {
  neutral: heroNeutral,
  rafting: heroRafting,
  canyoning: heroCanyoning,
};

/* ============================================================
   Trust strip (§7.3) — permanente
   ============================================================ */
export const trustStrip: string[] = [
  '★ 4,6/5 su TripAdvisor (110 recensioni)',
  'Guide certificate FiRaft & AIGC',
  'Oltre 20 anni sul Sesia',
  'Attrezzatura inclusa',
  'A 2 ore da Milano e Torino',
];

/* ============================================================
   Perché Eddyline (§7.4) — permanente
   ============================================================ */
export interface ValueProp {
  icon: string; // chiave icona (resa in componente)
  title: string;
  body: string;
}

export const valueProps: ValueProp[] = [
  {
    icon: 'badge',
    title: 'Guide certificate',
    body: 'FiRaft per il rafting, AIGC per il canyoning (le uniche a livello nazionale con formazione specifica in canyoning).',
  },
  {
    icon: 'gear',
    title: 'Attrezzatura inclusa',
    body: 'Muta in neoprene, casco, salvagente/imbrago: pensi solo a divertirti.',
  },
  {
    icon: 'shield',
    title: 'Massima sicurezza',
    body: 'Più gommoni che si fanno sicurezza tra loro, guide con BLS-D, standard federali.',
  },
  {
    icon: 'pin',
    title: 'A due passi da casa',
    body: 'A 2 ore da Milano e Torino, 1h30 da Novara e Varese.',
  },
];

/* ============================================================
   Selettore attività — card (§7.5)
   ============================================================ */
export interface ActivityCard {
  activity: Activity;
  title: string;
  tag: string;
  blurb: string;
}

export const activityCards: ActivityCard[] = [
  {
    activity: 'rafting',
    title: 'Rafting sul Sesia',
    tag: '3h30 · da €55',
    blurb: 'Adatto a tutti, nessuna esperienza.',
  },
  {
    activity: 'canyoning',
    title: 'Canyoning in Valsesia',
    tag: 'da €70',
    blurb: 'Per ogni livello, dal base all’expert.',
  },
];

/* ============================================================
   L'esperienza (§7.6) — attività
   ============================================================ */
export const esperienza: Record<Activity, { title: string; body: string }> = {
  rafting: {
    title: 'Com’è fatta una discesa',
    body: 'Briefing a secco, prova di acquaticità, poi 3h30 sul fiume con una sosta per i tuffi dal trampolino naturale di roccia. Tutta l’attrezzatura è inclusa: cosa portare lo trovi nelle FAQ.',
  },
  canyoning: {
    title: 'Cos’è il torrentismo',
    body: 'Salti, scivoli naturali, nuotate in pozze cristalline e calate in corda tra le forre. Muta e attrezzatura sono incluse; il percorso si sceglie in base al tuo livello.',
  },
};

/* ============================================================
   Percorsi & prezzi (§7.7, dati §8.1 e §8.2)
   ============================================================ */

// --- Rafting (§8.1) — entrambi 3h30, €65 adulti / €55 minori ---
export interface RaftingRoute {
  name: string;
  duration: string;
  price: string;
  level: string;
  description: string;
}

export const raftingRoutes: RaftingRoute[] = [
  {
    name: 'Classico',
    duration: '3h30',
    price: '€65 / €55',
    level: 'difficoltà media, adatto a tutti',
    description:
      'Acqua color smeraldo, rapide intervallate da laghetti; sosta con tuffi da un trampolino naturale di roccia.',
  },
  {
    name: 'Gole del Sesia',
    duration: '3h30',
    price: '€65 / €55',
    level: 'adatto a tutti',
    description:
      'Il Sesia scorre tra alte pareti granitiche, giochi d’acqua e luce che filtra tra le pareti; sosta tuffi.',
  },
];

export const raftingRoutesNote =
  'Il percorso (Classico o Gole) si determina in base ai livelli del fiume.';

// --- Canyoning (§8.2) — raggruppato per livello ---
export interface CanyoningRoute {
  name: string;
  duration: string;
  price: string; // € adulti / € minori
  description: string;
}

export interface CanyoningGroup {
  level: string;
  caption: string;
  routes: CanyoningRoute[];
}

export const canyoningGroups: CanyoningGroup[] = [
  {
    level: 'Principianti / prima esperienza',
    caption: 'Il punto di partenza ideale: molto acquatico, tuffi mai obbligatori.',
    routes: [
      {
        name: 'Sorba',
        duration: '3h30',
        price: '€70 / €60',
        description:
          'Molto acquatico e divertente, tuffi non obbligatori, scivoli, calate, nuotate in pozze trasparenti.',
      },
      {
        name: 'Rio Laghetto Classico',
        duration: '4h',
        price: '€70 / €60',
        description: 'Più tecnico del Sorba, bello scivolo, cascata ~30 m in corda.',
      },
      {
        name: 'Artogna Intermedio',
        duration: '4h30 / 5h',
        price: '€80 / €70',
        description:
          'Valle Artogna, acquatico e divertente; adatto anche come prima esperienza a persone sportive.',
      },
    ],
  },
  {
    level: 'Intermedi (seconda/terza esperienza)',
    caption: 'Più calate e lavoro di corda. Non per principianti.',
    routes: [
      {
        name: 'Gole di Sauoros Classico',
        duration: '4h / 4h30',
        price: '€75 / €65',
        description: 'Esposto al sole, 8 calate, qualche scivolo. Non per principianti.',
      },
      {
        name: 'Comba dei Fossali',
        duration: '2h30 / 3h',
        price: '€70 / €60',
        description: 'Gola boschiva, acqua cristallina, lavoro di corda. Non per principianti.',
      },
    ],
  },
  {
    level: 'Esperti',
    caption: 'Verticalità elevata e calate impegnative, per chi ha già esperienza.',
    routes: [
      {
        name: 'Rio Laghetto Integrale',
        duration: '5h30 / 6h',
        price: '€95 / €85',
        description: 'Elevata verticalità, calata sulla cascata di 70 m.',
      },
      {
        name: 'Artogna Expert',
        duration: '5h30 / 6h',
        price: '€95 / €85',
        description:
          'Cascata del Tinaccio 45 m in corda. Per persone molto sportive / chi ha già fatto canyoning.',
      },
      {
        name: 'Comba dei Fossali Integrale',
        duration: '4h',
        price: '€95 / €85',
        description: 'Non per principianti.',
      },
      {
        name: 'Gole di Sauoros Integrale',
        duration: '6h / 6h30',
        price: '€95 / €85',
        description: 'Calate ~30 m, non per principianti.',
      },
    ],
  },
];

export const canyoningRoutesNote =
  'La durata può variare in base al numero di partecipanti.';

/* ============================================================
   Sicurezza & guide (§7.8) — permanente
   ============================================================ */
export const sicurezza = {
  title: 'Sicurezza & guide',
  intro:
    'La domanda "è pericoloso?" è legittima. La risposta è metodo, certificazioni e ridondanza.',
  points: [
    'ASD iscritta alla Federazione Italiana Rafting; guide e maestri con titolo federale, aggiornamenti tecnici e BLS-D.',
    'In ogni uscita più gommoni che si fanno sicurezza tra loro (o 2 guide / safety kayak se il gommone è singolo).',
    'Canyoning: guide AIGC, con certificati medici di idoneità.',
  ],
  // Loghi enti in /public — §7.8
  enti: ['CONI', 'FICK', 'FIRAFT', 'FICT'],
};

/* ============================================================
   Recensioni (§7.9, testi §8.4 — parafrasati, non originali)
   ============================================================ */
export const reviewsBadge = {
  rating: '4,6/5',
  count: '110 recensioni',
  rank: 'n.1 ad Alagna Valsesia',
  tripadvisorUrl: 'https://www.tripadvisor.it/', // pagina recensioni Eddyline (placeholder link)
};

export interface Review {
  author: string;
  year: string;
  activity: string;
  text: string;
}

export const reviews: Review[] = [
  {
    author: 'Lorenzo D.',
    year: '2025',
    activity: 'canyoning',
    text: 'Addio al celibato perfetto: guida esperta e simpatica, organizzazione impeccabile. Torneranno.',
  },
  {
    author: 'Roberto A.',
    year: '2023',
    activity: 'canyoning',
    text: 'Giornata indimenticabile tra tuffi, scivoli e calate con una guida preparata e divertente. Consigliatissimo.',
  },
  {
    author: 'itsmekary',
    year: '2020',
    activity: 'rafting',
    text: 'Prima volta sulle Gole del Sesia: guida paziente, mi sono sentita sempre al sicuro. Tornerò per le altre attività.',
  },
  {
    author: 'MATRISCIANO',
    year: '2013',
    activity: 'rafting',
    text: 'Prima esperienza di rafting, staff giovane e professionale e grigliata finale ottima. Consigliato.',
  },
  {
    author: 'Fabiola',
    year: '2016',
    activity: 'rafting di gruppo',
    text: 'Accoglienza familiare per un addio al nubilato: la chiamano "l’isola felice", e si capisce perché.',
  },
];

/* ============================================================
   FAQ (§7.10, testi §8.3)
   ============================================================ */
export interface Faq {
  q: string;
  a: string;
  /** 'permanente' o legata all'attività (mostrata sempre per ora). */
  scope: 'permanente' | Activity;
}

export const faqs: Faq[] = [
  {
    q: 'Serve saper nuotare?',
    a: 'Sì, è fondamentale saper nuotare e avere un buon rapporto con l’acqua. Non serve invece alcuna esperienza sportiva precedente: i percorsi sono divisi per livello e una guida certificata è sempre presente.',
    scope: 'permanente',
  },
  {
    q: 'Cosa devo portare?',
    a: 'Costume, una maglietta termica sintetica (no cotone), scarpe da ginnastica/trekking da bagnare (no infradito, ciabatte o scarpette da scoglio) e l’occorrente per la doccia. Forniamo noi muta in neoprene, giacca d’acqua, salvagente, casco e imbrago, igienizzati dopo ogni uso.',
    scope: 'permanente',
  },
  {
    q: 'Cosa succede se piove?',
    a: 'Rafting e canyoning si fanno già bagnati: la pioggia non impedisce le discese e la muta isola dal freddo. Si annulla o rinvia solo se i livelli del fiume/torrente non garantiscono gli standard di sicurezza; in quel caso si avvisa per tempo.',
    scope: 'permanente',
  },
  {
    q: 'Da che età si può fare?',
    a: 'Battesimo fluviale dai 5 ai 9/10 anni; rafting famiglie su tratto adatto ai bambini (percorso integrale dai 14 anni); baby canyoning dai 7/8 ai 10/11 anni; canyoning su percorsi facili dai 10/11 anni, percorsi più evoluti dai 14. L’idoneità è valutata con la guida in base a età ed esperienza.',
    scope: 'permanente',
  },
  {
    q: 'Qual è il periodo migliore?',
    a: 'La stagione va da metà aprile a fine settembre. Il rafting è al top in primavera/inizio estate (disgelo, più portata); il canyoning è ideale in piena estate (pozze fresche, tuffi).',
    scope: 'permanente',
  },
];

/* ============================================================
   Come arrivare / la base (§7.12) — permanente
   ============================================================ */
export const comeArrivare = {
  baseName: 'Località Gabbio, 13023 Campertogno (VC)',
  navHint: 'Navigatore: "Piazza Pier Celestino Gilardi, Campertogno".',
  route:
    'A26 uscita Romagnano Sesia–Ghemme → Borgosesia → Varallo → Alagna. A 2h da Milano e Torino, 2h30 da Genova.',
  facilities: 'Alla base: docce calde, spogliatoi, bar e ampi spazi.',
  // Embed mappa centrato sul navigatore indicato nel brief
  mapQuery: 'Piazza Pier Celestino Gilardi, Campertogno',
};

/* ============================================================
   Contatti / brand (§8.5) — footer (§7.13)
   ============================================================ */
export const contacts = {
  phoneDisplay: '347 6439869',
  phoneHref: 'tel:+393476439869',
  email: 'info@eddyline.it',
  whatsapp: 'https://wa.me/393476439869',
  base: 'Località Gabbio, 13023 Campertogno (VC)',
  facebook: 'https://facebook.com/eddylinetheriverexperience',
  instagram: 'https://instagram.com/eddyline_asd',
  privacyUrl: 'https://eddyline.it/privacy-cookies/',
  vat: '01043460458',
  legalName: 'Eddyline — Centro Sport Fluviali Valsesia, ASD',
};

/* ============================================================
   Booking — config Calendly + default tab (§7.11, §9.1)
   ============================================================ */
export const bookingConfig: Record<
  Activity,
  { defaultTab: 'calendly' | 'form'; calendlyKey: 'rafting' | 'canyoning' }
> = {
  // Su rafting il tab Calendly è di default
  rafting: { defaultTab: 'calendly', calendlyKey: 'rafting' },
  // Su canyoning è di default il tab form ("Trova il percorso adatto")
  canyoning: { defaultTab: 'form', calendlyKey: 'canyoning' },
};
