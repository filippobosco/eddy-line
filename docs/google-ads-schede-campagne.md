# Eddyline — Schede campagne Google Ads (pronte da implementare)

> Tutto ciò che serve per creare le campagne, valore per valore. Da eseguire
> quando le conversioni GA4 (`generate_lead`, `submit_booking`) sono importate
> in Google Ads. Strategia: vedi `google-ads-piano.md`.
>
> Convenzioni keyword:
> - `[parola]` = corrispondenza esatta
> - `"parola"` = corrispondenza a frase
> - senza simboli = generica (NON usata qui: troppo dispersiva)

---

## IMPOSTAZIONI COMUNI (valgono per entrambe le campagne)

- **Obiettivo**: creare "senza indicazioni su un obiettivo" → tipo **Rete di ricerca**.
- **Reti**: solo Rete di ricerca. **Disattiva** "Includi partner di ricerca Google" e
  "Includi Rete Display" (spesso attive di default → toglierle).
- **Località**: Piemonte (intera regione) + province di **Milano, Monza-Brianza,
  Varese, Como, Pavia**.
  - Opzioni località → scegli **"Presenza: persone che si trovano nelle aree target"**
    (NON "persone che le cercano": evita clic da chi è fuori zona).
- **Lingue**: Italiano.
- **Offerta**: **Massimizza i clic**, con **CPC massimo = 0,60 €**.
  (Niente Max conversioni / tCPA all'avvio.)
- **Budget**: vedi per campagna.
- **Pubblico/segmenti**: nessuno all'avvio.
- **Impostazioni annuncio dinamico / espansione**: OFF.
- **Rotazione annunci**: "Ottimizza" (default) va bene.

Liste negative a livello account → vedi `google-ads-piano.md` blocco 3 (da applicare
a entrambe). Escludere anche `corso`, `corsi` (fuori scope landing).

---

## CAMPAGNA 1 — [Search] Rafting

- **Nome campagna**: `[Search] Rafting`
- **Budget giornaliero**: **18 €**
- **Offerta**: Massimizza clic, CPC max 0,60 €
- **Geo / reti / lingua**: come impostazioni comuni
- **URL finale (tutti gli AG)**: `https://eddy-line.vercel.app/rafting`

### AD GROUP 1 — Core Valsesia/Sesia
Keyword:
```
[rafting valsesia]
[rafting val sesia]
[valsesia rafting]
[rafting sesia]
[sesia rafting]
[rafting alagna]
[rafting campertogno]
[rafting varallo]
"rafting fiume sesia"
"rafting gole del sesia"
```

### AD GROUP 2 — Piemonte
```
[rafting piemonte]
"rafting in piemonte"
[rafting torino]
"rafting vicino torino"
[rafting novara]
```

### AD GROUP 3 — Prossimità / Lombardia
```
[rafting lombardia]
"rafting in lombardia"
[rafting milano]
"rafting vicino milano"
[rafting vicino a me]
"rafting vicino a me"
[rafting varese]
"dove fare rafting"
```

### AD GROUP 4 — Famiglie (tutte a frase: long tail frammentata)
```
"rafting bambini"
"rafting per bambini"
"rafting con bambini"
"rafting famiglia"
"rafting ragazzi"
```

---

## CAMPAGNA 2 — [Search] Canyoning

- **Nome campagna**: `[Search] Canyoning`
- **Budget giornaliero**: **12 €**
- **Offerta**: Massimizza clic, CPC max 0,60 €
- **Geo / reti / lingua**: come impostazioni comuni
- **URL finale (tutti gli AG)**: `https://eddy-line.vercel.app/canyoning`
- **NIENTE** ad group prossimità (0 conversioni storiche). **NIENTE** "canyoning" secco.

### AD GROUP 1 — Core Valsesia
```
[canyoning valsesia]
[canyoning val sesia]
[valsesia canyoning]
[canyoning sorba]
[canyoning sesia]
[canyoning alagna]
[canyoning artogna]
[canyoning rio laghetto]
[torrentismo valsesia]
```

### AD GROUP 2 — Piemonte
```
[canyoning piemonte]
"canyoning in piemonte"
[torrentismo piemonte]
[canyoning torino]
```

---

---

## RSA — ANNUNCI (titoli ≤30 caratteri, descrizioni ≤90). 📌 = pin posizione 1

Regole: min 8-10 titoli per RSA, 4 descrizioni. Pinnare in pos.1 solo i 2-3
titoli con keyword+luogo (lasciare a Google gli altri). Prezzo incluso per
qualificare il clic (rafting da 55€, canyoning da 60€).

### RAFTING · AG1 Core Sesia/Valsesia — URL /rafting
**Titoli:**
1. 📌 Rafting sul Fiume Sesia (24)
2. 📌 Rafting in Valsesia (20)
3. Guide Certificate FiRaft (23)
4. Rafting da 55€ a Persona (24)
5. Adatto Anche ai Principianti (28)
6. Nessuna Esperienza Richiesta (28)
7. Attrezzatura Inclusa (20)
8. Da 25 Anni sul Sesia (20)
9. 4,6/5 su TripAdvisor (21)
10. Acque Smeraldo del Sesia (24)
11. Prenoti Online in 2 Minuti (26)
12. Nel Cuore dell'Alta Valsesia (28)
**Descrizioni:**
1. Discesa tra rapide e acque smeraldo, adatta a tutti. Nessuna esperienza richiesta. (86)
2. Guide certificate FiRaft e attrezzatura inclusa. Prenoti online in pochi minuti. (81)
3. Da 25 anni sul Sesia, 4,6/5 su TripAdvisor. Massima sicurezza, sempre. (70)
4. Scegli la tua data e prenota. Nel cuore dell'alta Valsesia, ai piedi del Monte Rosa. (85)

### RAFTING · AG2 Regione/Città — URL /rafting
**Titoli:** 📌 Rafting in Piemonte · 📌 Rafting sul Fiume Sesia · Guide Certificate FiRaft ·
Rafting da 55€ a Persona · Adatto Anche ai Principianti · Attrezzatura Inclusa ·
Da 25 Anni sul Sesia · 4,6/5 su TripAdvisor · A 2 Ore da Torino · Prenoti Online Subito ·
Acque Smeraldo del Sesia · Avventura per Tutti
**Descrizioni:** (come AG1, aggiungere: "Facile da raggiungere dal Piemonte, a 2 ore da Torino.")

### RAFTING · AG3 Prossimità/Lombardia — URL /rafting
**Titoli:** 📌 Rafting Vicino a Te · 📌 Rafting sul Fiume Sesia · Il Fiume a 2 Ore da Milano ·
Guide Certificate FiRaft · Rafting da 55€ a Persona · Adatto a Tutti, Anche Novizi ·
Attrezzatura Inclusa · 4,6/5 su TripAdvisor · Prenoti Online in 2 Minuti · Da 25 Anni sul Sesia
**Descrizioni:** (la distanza diventa argomento n.1)
1. A 2 ore da Milano, nel cuore della Valsesia: rapide e acque smeraldo ti aspettano. (84)
2. Guide certificate FiRaft, attrezzatura inclusa, adatto a tutti. Prenoti online. (79)
3. Da 25 anni sul Sesia, 4,6/5 su TripAdvisor. Nessuna esperienza richiesta. (73)
4. Scegli la data e prenota in pochi minuti. Un'avventura vicino a te. (66)

### RAFTING · AG4 Soft/Famiglie — URL /rafting
**Titoli:** 📌 Rafting in Famiglia · 📌 Rafting per Bambini · Percorsi Adatti ai Più Piccoli ·
Sicurezza Prima di Tutto · Guide Certificate FiRaft · Attrezzatura su Misura Inclusa ·
Avventura per la Famiglia · Rafting da 55€ · 4,6/5 su TripAdvisor · Battesimo Fluviale
**Descrizioni:**
1. Percorsi pensati per i più piccoli, con guide esperte e attrezzatura su misura. (80)
2. Avventura sicura per tutta la famiglia. Chiamaci e scegliamo insieme il percorso. (82)
3. Il battesimo fluviale: il modo più dolce di scoprire il Sesia coi bambini. (74)
4. Da 25 anni sul Sesia, 4,6/5 su TripAdvisor. Prenoti online in pochi minuti. (75)

### CANYONING · AG1 Core — URL /canyoning
**Titoli:**
1. 📌 Canyoning in Valsesia (22)
2. 📌 Canyoning in Piemonte (22)
3. Torrentismo sul Sesia (21)
4. Guide Canyon Certificate AIGC (29)
5. Canyoning da 60€ a Persona (26)
6. Dal Principiante all'Esperto (27)
7. Salti, Scivoli e Cascate (24)
8. Muta e Attrezzatura Incluse (27)
9. 4,6/5 su TripAdvisor (21)
10. Pozze Cristalline del Sesia (27)
11. Prima Volta? Ti Guidiamo Noi (28)
12. Nel Cuore dell'Alta Valsesia (28)
**Descrizioni:**
1. Forre nella roccia, pozze cristalline e salti adatti al tuo livello. Muta inclusa. (84)
2. Prima volta? Il percorso base non richiede esperienza. Ti consigliamo noi. (74)
3. Solo Guide Canyon certificate AIGC. Massima sicurezza, attrezzatura inclusa. (77)
4. Dal Rio Sorba ai percorsi expert. Scegli e prenota, nell'alta Valsesia. (72)

### CANYONING · AG2 Città/Prossimità — URL /canyoning
**Titoli:** 📌 Canyoning in Piemonte · 📌 Canyoning in Valsesia · Torrentismo sul Sesia ·
Guide Canyon AIGC · Canyoning da 60€ · Dal Base all'Esperto · Muta e Attrezzatura Incluse ·
4,6/5 su TripAdvisor · Prima Volta? Ti Guidiamo · Salti, Scivoli e Cascate
**Descrizioni:** (come AG1)

---

## Note di implementazione
- All'avvio Google chiede almeno 1 keyword + 1 annuncio per salvare l'ad group:
  inserisci le keyword sopra e gli RSA (blocco successivo, in questo stesso doc).
- Dopo il salvataggio: verificare che reti Display/partner siano OFF e geo su
  "presenza".
- Mettere in PAUSA le vecchie campagne rafting/canyoning equivalenti appena queste
  sono attive (evita doppioni sulle stesse query).
