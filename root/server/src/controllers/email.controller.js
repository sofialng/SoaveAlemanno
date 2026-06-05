import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY missing in env");
  }

  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendEmail(data) {
  // Email per Soave Alemanno
  const resend = getResend();
  
  await resend.emails.send({
    from: "Soave Alemanno <info@soavealemanno.it>",
    to: process.env.EMAIL_TO,
    subject: `Nuova richiesta matrimonio - ${data.names}`,
    html: `
      <h2>Nuova richiesta Wedding Planner</h2>

      <p><strong>Nomi:</strong> ${data.names}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Telefono:</strong> ${data.phone}</p>
      <p><strong>Periodo matrimonio:</strong> ${data.period}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Numero invitati:</strong> ${data.guests}</p>
      <p><strong>Budget:</strong> ${data.budget}</p>
      <p><strong>Stile:</strong> ${data.style}</p>

      <hr />

      <p><strong>Messaggio:</strong></p>
      <p>${data.message}</p>
    `,
  });

  // Copia al cliente (solo se richiesta)
  if (data.receiveCopy) {
    await resend.emails.send({
      from: "Soave Alemanno <info@soavealemanno.it>",
      to: data.email,
      subject: "Abbiamo ricevuto la tua richiesta",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>Grazie per averci contattato 💍</h2>

          <p>
            Abbiamo ricevuto correttamente la tua richiesta e ti
            risponderemo il prima possibile.
          </p>

          <h3>Riepilogo della richiesta</h3>

          <table style="border-collapse: collapse;">
            <tr>
              <td><strong>Nomi:</strong></td>
              <td>${data.names}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>${data.email}</td>
            </tr>
            <tr>
              <td><strong>Telefono:</strong></td>
              <td>${data.phone}</td>
            </tr>
            <tr>
              <td><strong>Periodo:</strong></td>
              <td>${data.period}</td>
            </tr>
            <tr>
              <td><strong>Location:</strong></td>
              <td>${data.location}</td>
            </tr>
            <tr>
              <td><strong>Invitati:</strong></td>
              <td>${data.guests}</td>
            </tr>
            <tr>
              <td><strong>Budget:</strong></td>
              <td>${data.budget}</td>
            </tr>
            <tr>
              <td><strong>Stile:</strong></td>
              <td>${data.style}</td>
            </tr>
          </table>

          <h4>Messaggio</h4>

          <blockquote style="border-left: 4px solid #ddd; padding-left: 12px;">
            ${data.message}
          </blockquote>

          <p>
            Cordiali saluti,<br />
            Team Soave Alemanno
          </p>
        </div>
      `,
    });
  }
}