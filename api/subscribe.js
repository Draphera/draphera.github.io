const RESEND_API_URL = "https://api.resend.com";

function sendJson(response, statusCode, payload) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(payload));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 100_000) {
        request.destroy();
        reject(new Error("Payload too large"));
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function resendFetch(path, payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY");

  const response = await fetch(`${RESEND_API_URL}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = data?.message || data?.error || "Resend request failed";
    throw new Error(message);
  }

  return data;
}

async function addAudienceContact({ email, name }) {
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!audienceId) return null;

  return resendFetch(`/audiences/${audienceId}/contacts`, {
    email,
    first_name: name || undefined,
    unsubscribed: false,
  });
}

async function sendNotification(payload) {
  const notifyTo = process.env.RESEND_NOTIFY_TO;
  if (!notifyTo) return null;

  const from = process.env.RESEND_FROM || "Draphera <onboarding@resend.dev>";
  const subject = payload.source === "access"
    ? "Nuova richiesta di accesso Draphera"
    : "Nuova iscrizione Draphera Journal";

  const rows = [
    ["Sorgente", payload.source],
    ["Nome", payload.name],
    ["Email", payload.email],
    ["Azienda / ruolo", payload.role],
    ["Area di interesse", payload.interest],
    ["Messaggio", payload.message],
    ["Pagina", payload.page],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value)}</p>`)
    .join("");

  return resendFetch("/emails", {
    from,
    to: [notifyTo],
    subject,
    html: `<h1>${escapeHtml(subject)}</h1>${rows}`,
    reply_to: payload.email,
  });
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return sendJson(response, 405, { ok: false, message: "Method not allowed" });
  }

  try {
    if (!process.env.RESEND_AUDIENCE_ID && !process.env.RESEND_NOTIFY_TO) {
      return sendJson(response, 500, {
        ok: false,
        message: "Resend non configurato.",
      });
    }

    const rawBody = await readBody(request);
    const body = rawBody ? JSON.parse(rawBody) : {};

    if (body.company_url) {
      return sendJson(response, 200, { ok: true });
    }

    const payload = {
      source: body.source === "access" ? "access" : "newsletter",
      name: String(body.name || "").trim(),
      email: String(body.email || "").trim().toLowerCase(),
      role: String(body.role || "").trim(),
      interest: String(body.interest || "").trim(),
      message: String(body.message || "").trim(),
      page: String(body.page || "").trim(),
    };

    if (!isEmail(payload.email)) {
      return sendJson(response, 400, { ok: false, message: "Email non valida." });
    }

    await addAudienceContact(payload);
    await sendNotification(payload);

    return sendJson(response, 200, { ok: true, message: "Iscrizione ricevuta." });
  } catch (error) {
    return sendJson(response, 500, {
      ok: false,
      message: "Servizio temporaneamente non disponibile.",
    });
  }
}
