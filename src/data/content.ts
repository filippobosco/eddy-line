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
  sub: 'Avventura sull’acqua con guide certificate, attrezzatura inclusa e massima sicurezza. Nel cuore dell’alta Valsesia, ai piedi del Monte Rosa.',
  ctaPrimary: { label: 'Scegli la tua avventura', target: '#attivita' },
};

export const heroRafting: HeroState = {
  eyebrow: 'EDDYLINE · DAL 2001 SUL FIUME SESIA',
  h1: 'Rafting in Valsesia, sul fiume Sesia',
  sub: 'Una discesa tra rapide e acque smeraldo, adatta a tutti: nessuna esperienza richiesta. Guide certificate FiRaft e attrezzatura inclusa, nel cuore dell’alta Valsesia.',
  tagMono: '3h30 · €65 adulti / €55 minori · adatto a tutti',
  ctaPrimary: { label: 'Prenota la tua data', target: '#prenota' },
  ctaSecondary: { label: 'Richiedi informazioni', target: '#prenota' },
};

export const heroCanyoning: HeroState = {
  eyebrow: 'EDDYLINE · DAL 2001 IN VALSESIA',
  h1: 'Canyoning in Valsesia',
  sub: 'Salti, scivoli naturali e calate tra le forre del Sesia. Un percorso per ogni livello, dal primo approccio agli itinerari avanzati. Guide Canyon certificate AIGC, muta e attrezzatura incluse.',
  tagMono: '9 percorsi · da €60 · ti aiutiamo a scegliere',
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
  '25 anni sul Sesia',
  'Attrezzatura inclusa',
  'Nel cuore dell’alta Valsesia',
];

/* ============================================================
   Perché Eddyline (§7.4) — PER ATTIVITÀ.
   Il cliente non vuole mescolare le info delle due attività:
   contenuti distinti rafting / canyoning, commutati dallo swap.
   ============================================================ */
export interface ValueProp {
  icon: string; // chiave icona (resa in componente)
  title: string;
  body: string;
}

export const percheTitle: Record<Activity, string> = {
  rafting: '25 anni di Sesia, fatti bene',
  canyoning: '25 anni di canyoning, fatti bene',
};

export const valuePropsByActivity: Record<Activity, ValueProp[]> = {
  rafting: [
    {
      icon: 'badge',
      title: 'Guide certificate',
      body: 'FiRaft (Federazione Italiana Rafting), in regola con aggiornamenti e Primo Soccorso/BLS-D.',
    },
    {
      icon: 'gear',
      title: 'Attrezzatura inclusa',
      body: 'Muta in neoprene, casco, salvagente e giacca d’acqua. Tutto omologato secondo le normative vigenti.',
    },
    {
      icon: 'shield',
      title: 'Massima sicurezza',
      body: 'Un gommone non scende mai solo: sempre una guida più una canoa di sicurezza; più gommoni si fanno sicurezza tra loro.',
    },
    {
      icon: 'pin',
      title: 'Nel cuore dell’alta Valsesia',
      body: 'Il tratto più bello e selvaggio del Sesia, ai piedi del Monte Rosa: acque smeraldo e natura intatta.',
    },
  ],
  canyoning: [
    {
      icon: 'badge',
      title: 'Guide certificate',
      body: 'AIGC (Associazione Italiana Guide Canyon), l’unica associazione guide canyon italiana riconosciuta anche in Francia e altri Paesi, in regola con aggiornamenti e Primo Soccorso/BLS-D.',
    },
    {
      icon: 'gear',
      title: 'Attrezzatura inclusa',
      body: 'Muta in neoprene 5 mm a 2 pezzi, calzari in neoprene, imbrago e casco; quando fa più freddo anche le maglie termiche. Tutto omologato secondo le normative vigenti.',
    },
    {
      icon: 'shield',
      title: 'Massima sicurezza',
      body: 'Solo Guide Canyon certificate: una o più guide a seconda del numero di partecipanti e della difficoltà del percorso.',
    },
    {
      icon: 'pin',
      title: 'Nel cuore dell’alta Valsesia',
      body: 'Le forre più belle del Sesia, ai piedi del Monte Rosa: pozze cristalline e gole di granito nella natura intatta.',
    },
  ],
};

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
    tag: 'da €60',
    blurb: 'Per ogni livello, dal base all’avanzato.',
  },
];

/* ============================================================
   L'esperienza (§7.6) — attività
   ============================================================ */
export const esperienza: Record<Activity, { title: string; body: string }> = {
  rafting: {
    title: 'Com’è fatta una discesa',
    body: 'Briefing a secco, prova di acquaticità, poi la discesa sul fiume con una sosta per i tuffi dal trampolino naturale di roccia. Le 3h30 sono l’impegno complessivo dell’esperienza, dall’accoglienza al rientro. Tutta l’attrezzatura è inclusa: cosa portare lo trovi nelle FAQ.',
  },
  canyoning: {
    title: 'Cos’è il canyoning (o torrentismo)',
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

// Raggruppamento e descrizioni aggiornati su indicazione del cliente
// (doc 20/6/2026): 3 livelli Base / Intermedi / Avanzati.
export const canyoningGroups: CanyoningGroup[] = [
  {
    level: 'Base',
    caption: 'Prima esperienza e/o successive: molto acquatici e divertenti.',
    routes: [
      {
        name: 'Sorba',
        duration: '3h30',
        price: '€70 / €60',
        description:
          'Molto acquatico, un parco giochi in ambiente naturale: tuffi (non obbligatori), scivoli, calate con corda, nuotate in vasche cristalline. Perfetto come prima esperienza e per gli amanti dei tuffi.',
      },
      {
        name: 'Rio Laghetto Classico',
        duration: '4h',
        price: '€70 / €60',
        description: 'Più tecnico del Sorba, bello scivolo, cascata ~30 m in corda.',
      },
      {
        name: 'Comba dei Fossali',
        duration: '3h30',
        price: '€70 / €60',
        description: 'Gola boschiva, acqua cristallina, lavoro di corda.',
      },
      {
        name: 'Gole di Sauoros Classico',
        duration: '4h / 4h30',
        price: '€75 / €65',
        description: 'Poco acquatico, esposto al sole, no tuffi, uno scivolo, lavoro di corda.',
      },
    ],
  },
  {
    level: 'Intermedi',
    caption: 'Prima esperienza per sportivi o successive.',
    routes: [
      {
        name: 'Comba dei Fossali Integrale',
        duration: '4h',
        price: '€95 / €85',
        description: 'Gola boschiva, acqua cristallina, lavoro di corda. Non per principianti.',
      },
      {
        name: 'Artogna Intermedio',
        duration: '4h / 4h30',
        price: '€80 / €70',
        description:
          'Valle Artogna, acquatico e divertente; adatto anche come prima esperienza a persone sportive.',
      },
    ],
  },
  {
    level: 'Avanzati',
    caption: 'Per chi ha già fatto canyoning.',
    routes: [
      {
        name: 'Rio Laghetto Integrale',
        duration: '5h30 / 6h',
        price: '€95 / €85',
        description: 'Elevata verticalità, calata su corda nella cascata di 70 m, no tuffi, 3 scivoli.',
      },
      {
        name: 'Artogna Expert',
        duration: '6h / 6h30',
        price: '€95 / €85',
        description:
          'Molto acquatico, scivoli, piccoli tuffi, calate alte con la bellissima cascata del Tinaccio (45 m). Per chi ha già fatto canyoning.',
      },
      {
        name: 'Gole di Sauoros Integrale',
        duration: '6h / 6h30',
        price: '€95 / €85',
        description: 'Poco acquatico, esposto al sole, no tuffi, lavoro di corda. Non per principianti.',
      },
    ],
  },
];

export const canyoningRoutesNote =
  'La durata può variare in base al numero di partecipanti.';

/* ============================================================
   Sicurezza & guide (§7.8) — PER ATTIVITÀ.
   Contenuti distinti rafting / canyoning (richiesta cliente:
   non mescolare). Riconoscimenti diversi per attività.
   ============================================================ */
export interface SicurezzaContent {
  title: string;
  intro: string;
  points: string[];
  enti: string[];
}

export const sicurezzaByActivity: Record<Activity, SicurezzaContent> = {
  rafting: {
    title: 'Sicurezza & guide',
    intro:
      'La domanda "è pericoloso?" è legittima. La risposta è metodo, certificazioni e ridondanza.',
    points: [
      'Guide FiRaft con titolo federale, in regola con aggiornamenti tecnici e Primo Soccorso/BLS-D.',
      'In ogni uscita più gommoni si autoassicurano; con un solo gommone è presente un safety kayak di assistenza.',
      'Materiale tecnico di ultima generazione specifico per rafting, secondo le normative vigenti.',
    ],
    // Loghi enti in /public — §7.8
    enti: ['CONI', 'FICK', 'FIRAFT', 'FICT'],
  },
  canyoning: {
    title: 'Sicurezza & guide',
    intro:
      'La domanda "è pericoloso?" è legittima. La risposta è metodo, certificazioni e ridondanza.',
    points: [
      'Guide Canyon Maestri di Torrentismo AIGC (Associazione Italiana Guide Canyon): il più alto standard tecnico a livello nazionale e oltre, riconosciuti dalla legge 4/2013.',
      'In ogni uscita una o più guide a seconda del numero di partecipanti e della difficoltà del percorso, secondo il Regolamento nazionale AIGC.',
      'Materiale tecnico di ultima generazione specifico per canyoning, secondo le normative vigenti.',
    ],
    enti: ['AIGC'],
  },
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
   FAQ (§7.10) — PER ATTIVITÀ (richiesta cliente: non mescolare).
   ============================================================ */
export interface Faq {
  q: string;
  a: string;
}

export const faqsByActivity: Record<Activity, Faq[]> = {
  rafting: [
    {
      q: 'Serve saper nuotare?',
      a: 'Sì, è fondamentale saper nuotare e avere un buon rapporto con l’acqua. Non serve invece alcuna esperienza sportiva precedente: i percorsi sono divisi per livello e una guida certificata è sempre presente.',
    },
    {
      q: 'Cosa devo portare?',
      a: 'Costume, una maglia termica (tipo quelle usate come primo/secondo strato per sciare o simili, no cotone), scarpe da ginnastica o similari senza la suola liscia (no sandali, scarpe da scoglio, Superga o simili): tutto questo si bagnerà. Occorrente per la doccia. Tutta l’attrezzatura tecnica, igienizzata ogni volta, la forniamo noi.',
    },
    {
      q: 'Cosa succede se piove?',
      a: 'Il rafting si fa già bagnati: la pioggia non impedisce le discese e la muta isola dal freddo. Si annulla o rinvia solo se i livelli del fiume non garantiscono gli standard di sicurezza; in quel caso si avvisa per tempo.',
    },
    {
      q: 'Da che età si può fare?',
      a: 'Battesimo fluviale dai 5 ai 9/10 anni; rafting famiglie su un tratto adatto anche ai bambini; percorso integrale dai 10 anni. L’idoneità è valutata con la guida in base a età ed esperienza.',
    },
    {
      q: 'Qual è il periodo migliore?',
      a: 'La stagione va da aprile a settembre. Da primavera a inizio estate per un rafting più sportivo, poi più paesaggistico ma sempre adrenalinico.',
    },
  ],
  canyoning: [
    {
      q: 'Serve saper nuotare?',
      a: 'Sì, è fondamentale saper nuotare e avere un buon rapporto con l’acqua. Non serve invece alcuna esperienza sportiva precedente: i percorsi sono divisi per livello e una guida certificata è sempre presente.',
    },
    {
      q: 'Cosa devo portare?',
      a: 'Costume, una maglia termica (tipo quelle usate come primo/secondo strato per sciare o simili, no cotone; quando fa più freddo diamo noi delle termiche apposite), scarpe da ginnastica o similari senza la suola liscia (no sandali, scarpe da scoglio, Superga o simili), oppure puoi noleggiare le scarpe tecniche Adidas: tutto questo si bagnerà. Occorrente per la doccia. Tutta l’attrezzatura tecnica, igienizzata ogni volta, la forniamo noi.',
    },
    {
      q: 'Cosa succede se piove?',
      a: 'Il canyoning si fa già bagnati: la pioggia non impedisce le discese e la muta isola dal freddo. Si annulla o rinvia solo se i livelli del torrente non garantiscono gli standard di sicurezza; in quel caso si avvisa per tempo.',
    },
    {
      q: 'Da che età si può fare canyoning?',
      a: 'Nei percorsi facili dai 10/11 anni (in alcuni casi anche bambini di 8/9 anni lo hanno fatto); nei percorsi intermedi dai 12/13 anni; negli avanzati dai 14 anni. L’idoneità è valutata con la guida in base a età ed esperienza.',
    },
    {
      q: 'Qual è il periodo migliore?',
      a: 'Il canyoning ha bisogno di poca acqua. In primavera, fino a fine maggio circa, si fanno i percorsi che in estate hanno pochissima acqua. Da giugno si inizia con i percorsi più acquatici e ludici come il Sorba e a seguire l’Artogna. Periodo top luglio e agosto (pozze fresche e tuffi), ma anche settembre.',
    },
    {
      q: 'Chi mi accompagna?',
      a: 'Solo Guide Canyon Maestri di Torrentismo AIGC. In Italia molti accompagnatori non hanno un titolo specifico (sono guide rafting o non hanno alcuna qualifica): in Valsesia solo 2 centri su 8 utilizzano Guide Canyon certificate.',
    },
  ],
};

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
