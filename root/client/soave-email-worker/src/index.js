function getEmailBodyWedding(data) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #faf7f5; padding: 24px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 28px; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
        <h2 style="margin-bottom: 6px; font-size: 22px; color: #b08a6a; letter-spacing: 0.5px;">
          Nuova richiesta di consulenza!
        </h2>
        <p style="margin-top: 0; color: #777; font-size: 14px;">
          Hai ricevuto una nuova richiesta dal sito Soave Alemanno.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 18px 0;" />
        <div style="line-height: 1.6; font-size: 14px;">
          <p><strong>Nomi:</strong> ${data.names || "-"}</p>
          <p><strong>Email:</strong> ${data.email || "-"}</p>
          <p><strong>Telefono:</strong> ${data.phone || "-"}</p>
          <p><strong>Periodo:</strong> ${data.period || "-"}</p>
          <p><strong>Location:</strong> ${data.location || "-"}</p>
          <p><strong>Invitati:</strong> ${data.guests || "-"}</p>
          <p><strong>Budget:</strong> ${data.budget || "-"}</p>
        </div>
        <div style="margin-top: 22px; padding: 16px; background: #f7f3ef; border-radius: 10px;">
          <h3 style="margin-top: 0; font-size: 15px; color: #b08a6a;">Messaggio</h3>
          <p style="margin: 0; color: #444;">${data.message || "Nessun messaggio inserito"}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 22px 0;" />
        <p style="font-size: 12px; color: #aaa; text-align: center;">
          Soave Alemanno · Wedding & Event Planner
        </p>
      </div>
    </div>
  `;
}

function getBodyCopyWedding(data) {
  return `
    <div style="font-family: Arial, sans-serif; background: #faf7f5; padding: 24px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 28px; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
        <h2 style="margin-top: 0; color: #b08a6a; font-size: 22px; letter-spacing: 0.5px;">
          Grazie per averci contattato ✨
        </h2>
        <p style="color: #555; line-height: 1.6;">
          Abbiamo ricevuto correttamente la vostra richiesta e vi ricontatteremo il prima possibile.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 18px 0;" />
        <h3 style="color: #b08a6a; margin-bottom: 12px;">Riepilogo richiesta</h3>
        <div style="font-size: 14px; line-height: 1.7;">
          <p><strong>Nomi:</strong> ${data.names || "-"}</p>
          <p><strong>Periodo:</strong> ${data.period || "-"}</p>
          <p><strong>Location:</strong> ${data.location || "-"}</p>
          <p><strong>Invitati:</strong> ${data.guests || "-"}</p>
          <p><strong>Budget:</strong> ${data.budget || "-"}</p>
        </div>
        ${
          data.message
            ? `
              <div style="margin-top: 20px; padding: 16px; background: #f7f3ef; border-radius: 10px;">
                <h4 style="margin-top: 0; color: #b08a6a; font-size: 14px; letter-spacing: 0.5px;">Messaggio</h4>
                <p style="margin: 0; color: #444; line-height: 1.6;">${data.message}</p>
              </div>
            `
            : ""
        }
        <hr style="border: none; border-top: 1px solid #eee; margin: 22px 0;" />
        <p style="font-size: 13px; color: #777; margin-bottom: 0;">
          Cordiali saluti,<br>
          <strong style="color:#333;">Soave Alemanno · Wedding & Event Planner</strong>
        </p>
      </div>
    </div>
  `;
}

function getEmailBodyOther(data) {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #faf7f5; padding: 24px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 28px; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
        <h2 style="margin-bottom: 6px; font-size: 22px; color: #b08a6a; letter-spacing: 0.5px;">
          Nuova richiesta di consulenza!
        </h2>
        <p style="margin-top: 0; color: #777; font-size: 14px;">
          Hai ricevuto una nuova richiesta dal sito Soave Alemanno.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 18px 0;" />
        <div style="line-height: 1.6; font-size: 14px;">
          <p><strong>Nome:</strong> ${data.name || "-"}</p>
          <p><strong>Cognome:</strong> ${data.surname || "-"}</p>
          <p><strong>Email:</strong> ${data.email || "-"}</p>
          <p><strong>Telefono:</strong> ${data.phone || "-"}</p>
          <p><strong>Tipo di evento:</strong> ${data.eventType || "-"}</p>
          <p><strong>Data:</strong> ${data.date || "-"}</p>
          <p><strong>Location:</strong> ${data.location || "-"}</p>
          <p><strong>Invitati:</strong> ${data.guests || "-"}</p>
          <p><strong>Budget:</strong> ${data.budget || "-"}</p>
        </div>
        <div style="margin-top: 22px; padding: 16px; background: #f7f3ef; border-radius: 10px;">
          <h3 style="margin-top: 0; font-size: 15px; color: #b08a6a;">Messaggio</h3>
          <p style="margin: 0; color: #444;">${data.message || "Nessun messaggio inserito"}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #eee; margin: 22px 0;" />
        <p style="font-size: 12px; color: #aaa; text-align: center;">
          Soave Alemanno · Wedding & Event Planner
        </p>
      </div>
    </div>
  `;
}

function getBodyCopyOther(data) {
  return `
    <div style="font-family: Arial, sans-serif; background: #faf7f5; padding: 24px; color: #333;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 28px; box-shadow: 0 6px 20px rgba(0,0,0,0.08);">
        <h2 style="margin-top: 0; color: #b08a6a; font-size: 22px; letter-spacing: 0.5px;">
          Grazie per averci contattato ✨
        </h2>
        <p style="color: #555; line-height: 1.6;">
          Abbiamo ricevuto correttamente la tua richiesta e ti ricontatteremo il prima possibile.
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 18px 0;" />
        <h3 style="color: #b08a6a; margin-bottom: 12px;">Riepilogo richiesta</h3>
        <div style="font-size: 14px; line-height: 1.7;">
          <p><strong>Nome:</strong> ${data.name || "-"}</p>
          <p><strong>Cognome:</strong> ${data.surname || "-"}</p>
          <p><strong>Tipo di evento:</strong> ${data.eventType || "-"}</p>
          <p><strong>Data:</strong> ${data.date || "-"}</p>
          <p><strong>Location:</strong> ${data.location || "-"}</p>
          <p><strong>Invitati:</strong> ${data.guests || "-"}</p>
          <p><strong>Budget:</strong> ${data.budget || "-"}</p>
        </div>
        ${
          data.message
            ? `
              <div style="margin-top: 20px; padding: 16px; background: #f7f3ef; border-radius: 10px;">
                <h4 style="margin-top: 0; color: #b08a6a; font-size: 14px; letter-spacing: 0.5px;">Messaggio</h4>
                <p style="margin: 0; color: #444; line-height: 1.6;">${data.message}</p>
              </div>
            `
            : ""
        }
        <hr style="border: none; border-top: 1px solid #eee; margin: 22px 0;" />
        <p style="font-size: 13px; color: #777; margin-bottom: 0;">
          Cordiali saluti,<br>
          <strong style="color:#333;">Soave Alemanno · Wedding & Event Planner</strong>
        </p>
      </div>
    </div>
  `;
}

async function sendViaResend(env, payload) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend error ${res.status}: ${errText}`);
  }

  return res.json();
}

const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://soavealemanno.it",
  "https://soavealemanno.pages.dev",
];

function getCorsHeaders(request) {
  const origin = request.headers.get("Origin");
  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

export default {
  async fetch(request, env, ctx) {
	const CORS_HEADERS = getCorsHeaders(request);
	
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: CORS_HEADERS });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: CORS_HEADERS });
    }

    try {
      const data = await request.json();

      // Email interna
      await sendViaResend(env, {
        from: env.EMAIL_FROM,
        reply_to: data.email,
        to: [env.EMAIL_TO],
        subject:  data.formType === "wedding"
                    ? "💍 Nuova richiesta per Wedding Planner"
                    : "🎉 Nuova richiesta per Evento",
        html: data.formType == "wedding" ? getEmailBodyWedding(data) : getEmailBodyOther(data),
      });

      // Copia al cliente
      if (data.copyEmail) {
        await sendViaResend(env, {
          from: env.EMAIL_FROM,
          to: [data.email],
          subject: data.formType === "wedding"
                    ? "💍 Abbiamo ricevuto la tua richiesta per Wedding Planner"
                    : "🎉 Abbiamo ricevuto la tua richiesta per Evento",
          html: data.formType == "wedding" ? getBodyCopyWedding(data) : getBodyCopyOther(data),
        });
      }

      return new Response(JSON.stringify({ message: "OK" }), {
        status: 200,
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
      });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: "EMAIL FAILED" }), {
        status: 500,
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
      });
    }
  },
};