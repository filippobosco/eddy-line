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

## Note di implementazione
- All'avvio Google chiede almeno 1 keyword + 1 annuncio per salvare l'ad group:
  inserisci le keyword sopra e gli RSA (blocco successivo, in questo stesso doc).
- Dopo il salvataggio: verificare che reti Display/partner siano OFF e geo su
  "presenza".
- Mettere in PAUSA le vecchie campagne rafting/canyoning equivalenti appena queste
  sono attive (evita doppioni sulle stesse query).
