# Calendly → thank-you page `/grazie-prenotazione`

Le prenotazioni Calendly reindirizzano alla thank-you page dedicata, così la
conversione si traccia in GTM/Ads come **pageview di `/grazie-prenotazione`**
(oltre all'evento `calendly_event_scheduled` già emesso dal sito).

## IMPORTANTE — il redirect lo fa IL SITO, non Calendly

L'embed Calendly vive in un **iframe**: il redirect impostato dentro Calendly
avverrebbe *dentro* l'iframe (invisibile all'utente). Per questo il sito ascolta
l'evento `calendly.event_scheduled` (listener in `BookingBlock.astro`) e
reindirizza la **pagina intera** a `/grazie-prenotazione?activity=...`.

Conseguenze:
- **Funziona con qualsiasi piano Calendly** (anche gratuito): non dipende dal
  redirect di Calendly.
- Il redirect impostato in Calendly (sotto) diventa **facoltativo**: serve solo
  a chi apre il link Calendly DIRETTO (fuori dal sito). Se lo lasci, mettici lo
  stesso URL `/grazie-prenotazione`; se lo togli, dal sito funziona comunque.

## (Facoltativo) Redirect nativo Calendly — per il link diretto

## Come impostarlo (per ENTRAMBI gli eventi: rafting e canyoning)

Va fatto dentro Calendly, una volta per ogni event type:

1. Calendly → **Event Types** → apri l'evento (es. "Rafting")
2. **Booking page options** (Opzioni pagina di prenotazione)
3. **Confirmation page** / "Redirect to an external site" → attiva **Redirect to a custom page**
4. Incolla l'URL completo della thank-you page, es.:
   ```
   https://eddy-line.vercel.app/grazie-prenotazione
   ```
   (al go-live: `https://prenota.eddyline.it/grazie-prenotazione`)
5. Salva. Ripeti per l'evento "Canyoning".

> Nota: il redirect a pagina personalizzata richiede un **piano Calendly a pagamento**
> (Standard o superiore). Se il piano non lo permette, la conversione resta comunque
> tracciabile via l'evento `calendly_event_scheduled` che il sito emette sul dataLayer
> quando la prenotazione va a buon fine (listener già presente in BookingBlock.astro).

## Opzionale: passare l'attività nella query

Per distinguere in GA4 le prenotazioni rafting da quelle canyoning, si può usare un
URL diverso per evento:
- Rafting →  `.../grazie-prenotazione?activity=rafting`
- Canyoning → `.../grazie-prenotazione?activity=canyoning`
