/**
 * Eddyline — Contatti · ricezione lead dal form della landing
 * ------------------------------------------------------------
 * Google Apps Script legato al foglio "Eddyline - Contatti".
 * Riceve i POST JSON da /api/lead della landing e scrive una riga nel
 * foglio "Informazioni".
 *
 * COME SI INSTALLA (vedi guida a chat):
 * 1. Nel Google Sheet: Estensioni → Apps Script
 * 2. Incolla TUTTO questo file (sostituendo il contenuto di default)
 * 3. Deploy → Nuovo deployment → tipo "App web"
 *    - Esegui come: Me stesso
 *    - Chi ha accesso: Chiunque
 * 4. Copia l'URL della Web App (finisce con /exec) e mandalo:
 *    va messo in N8N_WEBHOOK_URL del sito.
 *
 * Campi ricevuti dal form (in questo ordine di colonna):
 *   receivedAt, nome, email, telefono, attivita, percorso, data,
 *   persone, messaggio  (+ source viene loggato ma non incolonnato)
 */

const SHEET_NAME = 'Informazioni';

// Indirizzo che riceve la notifica ad ogni nuovo contatto.
const NOTIFY_EMAIL = 'eddylinecanyoning@gmail.com';

// Intestazioni attese nella riga 1 del foglio "Informazioni".
const HEADERS = [
  'Data/ora',
  'Nome',
  'Email',
  'Telefono',
  'Attività',
  'Percorso/livello',
  'Data preferita',
  'N. persone',
  'Messaggio',
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');

    const sheet = getOrCreateSheet_();

    // Formatta la data/ora in fuso Europe/Rome, leggibile.
    const when = data.receivedAt ? new Date(data.receivedAt) : new Date();
    const stamp = Utilities.formatDate(when, 'Europe/Rome', 'dd/MM/yyyy HH:mm');

    sheet.appendRow([
      stamp,
      data.nome || '',
      data.email || '',
      data.telefono || '',
      data.attivita || '',
      data.percorso || '',
      data.data || '',
      data.persone || '',
      data.messaggio || '',
    ]);

    // Notifica email allo staff (non blocca la scrittura sul foglio).
    notify_(data, stamp);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** Invia una mail di avviso a NOTIFY_EMAIL con i dati del nuovo contatto. */
function notify_(data, stamp) {
  try {
    const attivita = (data.attivita || '—').toString();
    const nome = data.nome || '—';
    const subject = `Nuovo contatto dalla landing — ${nome} (${attivita})`;

    const righe = [
      'È arrivata una nuova richiesta dal modulo della landing.',
      '',
      'Data/ora:        ' + stamp,
      'Nome:            ' + (data.nome || '—'),
      'Email:           ' + (data.email || '—'),
      'Telefono:        ' + (data.telefono || '—'),
      'Attività:        ' + attivita,
      'Percorso/livello:' + (data.percorso || '—'),
      'Data preferita:  ' + (data.data || '—'),
      'N. persone:      ' + (data.persone || '—'),
      'Messaggio:       ' + (data.messaggio || '—'),
      '',
      'Il contatto è stato salvato nel foglio "Informazioni".',
    ];

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      body: righe.join('\n'),
      // Rispondendo alla mail si scrive direttamente al cliente, se ha lasciato l'email.
      replyTo: data.email || undefined,
      name: 'Eddyline Landing',
    });
  } catch (err) {
    // Se la mail fallisce non deve far fallire il salvataggio: logghiamo e basta.
    console.error('notify_ failed: ' + err);
  }
}

// Test rapido dal browser (GET) per verificare che la Web App risponda.
function doGet() {
  return json_({ ok: true, service: 'eddyline-lead', ts: new Date().toISOString() });
}

function getOrCreateSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  // Se il foglio è vuoto, scrivi le intestazioni.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
