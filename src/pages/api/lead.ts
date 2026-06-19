/**
 * Endpoint server-side per il form "Richiedi informazioni" (§9.2).
 * Mantiene `N8N_WEBHOOK_URL` lato server (non è una PUBLIC_*): il client
 * fa POST qui, noi inoltriamo a n8n. Così il webhook non è esposto e possiamo
 * applicare anti-spam (honeypot + time-trap) server-side.
 *
 * Static output + questa route on-demand: il deploy Vercel la rende una
 * serverless function.
 */
import type { APIRoute } from 'astro';

export const prerender = false;

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });

interface LeadPayload {
  nome?: string;
  email?: string;
  telefono?: string;
  attivita?: string;
  percorso?: string;
  data?: string;
  persone?: string;
  messaggio?: string;
  privacy?: boolean;
  // anti-spam
  website?: string; // honeypot: deve restare vuoto
  _t?: number; // timestamp di apertura form (time-trap)
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export const POST: APIRoute = async ({ request }) => {
  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return json({ ok: false, error: 'Richiesta non valida.' }, 400);
  }

  // --- Anti-spam: honeypot. Se compilato, fingiamo successo e droppiamo. ---
  if (body.website && body.website.trim() !== '') {
    return json({ ok: true });
  }

  // --- Anti-spam: time-trap. Invio entro 2s = probabile bot. ---
  if (typeof body._t === 'number') {
    const elapsed = Date.now() - body._t;
    if (elapsed >= 0 && elapsed < 2000) {
      return json({ ok: true });
    }
  }

  // --- Validazione campi obbligatori (Nome, Email, Telefono, Privacy) ---
  const errors: Record<string, string> = {};
  if (!body.nome || body.nome.trim().length < 2) errors.nome = 'Inserisci il tuo nome.';
  if (!body.email || !isEmail(body.email.trim())) errors.email = 'Inserisci un’email valida.';
  if (!body.telefono || body.telefono.trim().length < 6)
    errors.telefono = 'Inserisci un recapito telefonico.';
  if (!body.privacy) errors.privacy = 'Serve l’accettazione della privacy.';

  if (Object.keys(errors).length > 0) {
    return json({ ok: false, errors }, 422);
  }

  // --- Inoltro a n8n (server-side). ---
  const webhook = import.meta.env.N8N_WEBHOOK_URL;
  const lead = {
    nome: body.nome!.trim(),
    email: body.email!.trim(),
    telefono: body.telefono!.trim(),
    attivita: body.attivita ?? '',
    percorso: body.percorso ?? '',
    data: body.data ?? '',
    persone: body.persone ?? '',
    messaggio: body.messaggio ?? '',
    source: 'landing-prenota',
    receivedAt: new Date().toISOString(),
  };

  // Senza webhook configurato (placeholder), logghiamo e rispondiamo ok in dev
  // così il flusso è testabile end-to-end prima del go-live.
  if (!webhook || webhook.includes('PLACEHOLDER')) {
    console.warn('[lead] N8N_WEBHOOK_URL non configurato — lead non inoltrato:', lead);
    return json({ ok: true, forwarded: false });
  }

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!res.ok) {
      return json({ ok: false, error: 'Invio non riuscito. Riprova tra poco.' }, 502);
    }
    return json({ ok: true, forwarded: true });
  } catch {
    return json({ ok: false, error: 'Problema di rete. Riprova tra poco.' }, 502);
  }
};
