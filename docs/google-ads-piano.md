# Eddyline — Piano operativo Google Ads (v2, allineato alla nuova landing)

> Aggiornamento del documento `Eddyline_GoogleAds_handoff.md` allo stato attuale:
> landing dedicate `/rafting` e `/canyoning`, tracking GA4 rifatto e pulito,
> due conversioni vere (form + Calendly). Base strategica e keyword/RSA vengono
> da quel handoff (già approvati da Angela su dati reali dell'account 2025).

## Decisioni di questa fase (confermate)
- **URL campagne**: partono su `https://eddy-line.vercel.app` (poi migrazione a `prenota.eddyline.it`).
- **Scope Ads**: SOLO rafting + canyoning esperienza. **Esclusi corsi e hydrospeed**
  (la landing non ha pagine dedicate → niente traffico verso pagine inesistenti).
- **Budget**: **30 €/g ≈ 900 €/mese**. Split: **Rafting ~18 · Canyoning ~12 · Brand 0**.
- **NIENTE Brand**: nessun concorrente sul nome "eddyline" (verificato con cliente) →
  chi ci cerca per nome ci trova già gratis in organico. Budget tutto sulla domanda
  che acquisisce clienti NUOVI. (Se in futuro un competitor fa campagne sul nostro
  nome → aggiungere brand difensiva 2-3€/g.)
- **Offerta iniziale**: **Massimizza clic con CPC massimo** (cap ~0,60€), NON tCPA né
  Max conversioni all'avvio (pochi dati affidabili). Passaggio a Max conversioni dopo
  ~30 conversioni pulite accumulate per campagna.
- **Obiettivo fase 1**: massimizzare il NUMERO di conversioni (form + prenotazioni,
  pari peso). Valore cliente non prioritario ora → nessun valore monetario sulle conv.
- **Conversioni**: form (`generate_lead`, thank-you `/grazie`) e prenotazione
  (`submit_booking`, thank-you `/grazie-prenotazione`), **pari peso**, entrambe Primarie.
- **Gestione**: interna (guida eseguibile passo-passo).

## Differenze chiave vs handoff v1
- Landing dedicate → message-match perfetto, Quality Score più alto.
- Conversione non è più "la chiamata": sono form + Calendly, già tracciati e puliti.
- RSA da ritoccare: "20 anni" → **25 anni**; leva distanza → **"alta Valsesia"**;
  le descrizioni possono citare "prenoti online in 2 minuti" oltre alla chiamata.
- AG "Corsi" (canyoning) e hydrospeed: RIMOSSI da questo piano.

---

## PIANO — ordine di esecuzione (blocco per blocco)

Ordine concordato con Angela: struttura → keyword → negative → RSA → estensioni → tracking.
Qui il tracking-import lo mettiamo **prima del go-live** (blocco 0) perché senza non si ottimizza.

### BLOCCO 0 — Tracking conversioni in Google Ads (PRIMA di spendere)
Le campagne devono ottimizzare su conversioni vere. Poiché GA4 è già a posto:
1. In **GA4** → Admin → Eventi → scheda "Eventi recenti" → clicca la **stella ⭐**
   accanto a `generate_lead` e `submit_booking` per marcarli come evento chiave.
   ⚠️ NON usare "Crea evento" (fabbrica un evento derivato = doppione). La stella è
   disponibile solo quando l'evento è già affiorato nell'elenco.
2. In **Google Ads** → Obiettivi → Conversioni → **Importa** → Google Analytics 4 →
   importa `generate_lead` e `submit_booking`.
3. Impostale **entrambe come "Primaria"** (pari peso).
4. Verifica in Ads → Conversioni che risultino "Idonea"/in attesa di dati.
   (Facoltativo, più preciso: tag Google Ads Conversion via GTM sui trigger
   `/grazie` e `/grazie-prenotazione` già esistenti — non necessario ora.)

**STATO (in sospeso):** GA4 riceve gli eventi correttamente (verificato in tempo
reale: page_view, activity_selected, consent_update con consenso granted). Gli
eventi affiorano nell'elenco "Eventi recenti" progressivamente (ritardo GA4 fino
a ~24h). `generate_lead`/`submit_booking` non ancora comparsi → appena ci sono,
stella + import. Nel frattempo si preparano le campagne (blocchi 1-4).

### BLOCCO 1 — Struttura campagne
Impostazioni comuni: **solo Rete di ricerca** (NO partner di ricerca, NO Display),
targeting **presenza fisica**, lingua italiano.
Geo: **Piemonte** + province **Milano, Monza-Brianza, Varese, Como, Pavia**.
Escludi: Valle d'Aosta, Liguria, Lombardia orientale.

- **C1 — [Search] Rafting · 18 €/g** · Max clic (CPC max ~0,60€) → Max conversioni dopo ~30 conv.
- **C2 — [Search] Canyoning · 12 €/g** · stessa logica offerta.
- ~~Brand~~ → NON attivata (vedi decisioni: nessun competitor sul nome).

URL finali: C1 → `/rafting`, C2 → `/canyoning`.
Totale 30 €/g. All'avvio entrambe Max clic; nessun tCPA finché non ci sono dati.

### BLOCCO 2 — Keyword (dal handoff, invariate)
**Rafting**
- AG1 Core Valsesia/Sesia: [rafting valsesia] [rafting val sesia] [valsesia rafting]
  [rafting sesia] [sesia rafting] [rafting alagna] [rafting campertogno] [rafting varallo]
  "rafting fiume sesia" "rafting gole del sesia"
- AG2 Piemonte: [rafting piemonte] "rafting in piemonte" [rafting torino] "rafting vicino torino" [rafting novara]
- AG3 Prossimità/Lombardia: [rafting lombardia] "rafting in lombardia" [rafting milano]
  "rafting vicino milano" [rafting vicino a me] "rafting vicino a me" [rafting varese] "dove fare rafting"
- AG4 Famiglie (phrase): "rafting bambini" "rafting per bambini" "rafting con bambini"
  "rafting famiglia" "rafting ragazzi"

**Canyoning**
- AG1 Core Valsesia: [canyoning valsesia] [canyoning val sesia] [valsesia canyoning]
  [canyoning sorba] [canyoning sesia] [canyoning alagna] [canyoning artogna]
  [canyoning rio laghetto] [torrentismo valsesia]
- AG2 Piemonte: [canyoning piemonte] "canyoning in piemonte" [torrentismo piemonte] [canyoning torino]
- ~~AG3 Corsi~~ → RIMOSSO (fuori scope landing)
- NO AG prossimità (0 conv storiche). NO "canyoning" secco.

### BLOCCO 3 — Liste negative (4 liste a livello account, dal handoff)
1. Brand proprio (su Rafting+Canyoning, NON su Brand): eddyline, eddy line
2. Competitor: monrosa, mon rosa, monterosa canyoning (tenere "sesia rafting": rende)
3. Geo fuori zona: val di sole, garda, marmore, valle d'aosta, aosta, dora baltea,
   stura, lima, trentino, alto adige, toscana, umbria, lazio, abruzzo, campania,
   sicilia, sardegna, liguria, friuli, veneto, brenta, noce, isarco, adda, bodengo,
   verzasca, ticino, lao, stubai, austria, svizzera, slovenia, francia, corsica
4. Intent sbagliato: gratis, lavoro, lavorare, stipendio, brevetto guida, gommone usato,
   vendita, attrezzatura, significato, wikipedia, incidente, morto, tragedia, annegato
   + aggiunta v2: corso, corsi (usciti dallo scope) — valutare se escluderli o meno

### BLOCCO 4 — RSA (dal handoff, con ritocchi v2)
Riusare gli RSA approvati, con queste modifiche:
- "Da Oltre 20 Anni sul Sesia" → **"Da 25 Anni sul Sesia"**
- Dove utile, una descrizione con "Prenoti online in 2 minuti" (oltre alla chiamata)
- Leva distanza: mantenere "A 2 Ore da Milano e Torino" negli annunci (nelle Ads è un
  argomento di ricerca reale del bacino) ma NON è più il claim centrale del sito.
- RIMOSSI: RSA "AG Corsi".

### BLOCCO 5 — Estensioni/asset (mai prodotto in v1 — da fare)
- **Sitelink**: es. "Rafting", "Canyoning", "Come arrivare", "Recensioni" → ancore/landing.
- **Callout**: Guide certificate · Attrezzatura inclusa · 25 anni sul Sesia · Prenoti online.
- **Snippet strutturati**: "Tipologie": Classico, Gole del Sesia, Sorba, Artogna...
- **Estensione di chiamata**: 347 6439869, SOLO negli orari di risposta reale (da confermare).
- **Asset immagine**: foto della fotografa (alta qualità).

### BLOCCO 6 — Go-live & ottimizzazione
- Controlli pre-lancio: negative applicate, geo corretta, URL landing corretti (200 ok),
  conversioni "idonee", budget impostati.
- Prime 2-3 settimane: Max clic, monitorare termini di ricerca (aggiungere negative).
- Dopo ~30 conversioni pulite/campagna: passare a Max conversioni (poi tCPA).
- Bid/stagione: budget su apr-set, occhio al picco lug-ago (≈60% domanda annua).

---

## Conferme ancora attese dal cliente (dal handoff, da chiudere)
- Età minima bambini (per titolo "Dai X Anni" in AG Famiglie).
- Listino 2026 confermato (rafting da 60€, canyoning da 60€) → eventuale "Da 60€".
- Promo infrasettimanale sì/no.
- Orari risposta telefono (per estensione chiamata).
- Loop reporting: chi risponde segna chi prenota (colonna sì/no) — critico.

## Note
- Dominio: al passaggio a prenota.eddyline.it, aggiornare tutti gli URL finali +
  redirect Calendly + variabili Vercel.
- Account: verificare che le vecchie campagne rafting/canyoning vengano MESSE IN PAUSA
  quando partono le nuove (evitare che comprino le stesse query due volte).
