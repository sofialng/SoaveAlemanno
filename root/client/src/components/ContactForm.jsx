import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageIntro from "./PageIntro";

export default function WeddingPlannerForm() {
  const [form, setForm] = useState({
    names: "",
    email: "",
    phone: "",
    period: "",
    location: "",
    guests: "",
    budget: "",
    // style: "",
    message: "",
    copyEmail: false,
  });

  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "error"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send("service_fd1mwdm", "template_ptfkjbd", form, "w-ogfvcy2k4L2sMPR")
      .then(() => setStatus("ok"))
      .catch((err) => { console.error(err); setStatus("error"); });
  };

  const inputClass = `
    w-full px-4 py-3
    bg-transparent
    border-b border-black/20
    focus:outline-none focus:border-primary-dark
    transition-colors duration-300
    text-black/80 placeholder:text-black/35
    text-sm font-light tracking-wide
  `;

  return (
    <section
      className="min-h-screen py-30 px-6 bg-secondary-light"
    >
      <div className="max-w-3xl mx-auto">

        <PageIntro
            header="Iniziamo insieme"
            title="Raccontaci il vostro giorno"
            text="Una selezione di momenti, dettagli e atmosfere che raccontano
            il nostro modo di progettare matrimoni ed eventi."
            />

        {/* ── FORM ── */}
        <form onSubmit={handleSubmit}>

          {/* SEZIONE 1 — La coppia */}
          <fieldset className="mb-12">
            <legend
              className="text-[0.62rem] uppercase tracking-[0.35em] font-light mb-8 flex items-center gap-4 w-full text-black/80"
            >
              <span>01 &nbsp;—&nbsp; La coppia</span>
              <span
                className="flex-1 h-px"
                style={{ background: "var(--color-primary-dark)", opacity: 0.1 }}
              />
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="col-span-2">
                <input
                  name="names"
                  type="text"
                  value={form.names}
                  onChange={handleChange}
                  placeholder="Nome della coppia"
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Telefono"
                className={inputClass}
              />
            </div>
          </fieldset>

          {/* SEZIONE 2 — Il matrimonio */}
          <fieldset className="mb-12">
            <legend
              className="text-[0.62rem] uppercase tracking-[0.35em] font-light mb-8 flex items-center gap-4 w-full text-black/80"
            >
              <span>02 &nbsp;—&nbsp; Il matrimonio</span>
              <span
                className="flex-1 h-px"
                style={{ background: "var(--color-primary-dark)", opacity: 0.1 }}
              />
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <input
                name="period"
                type="text"
                value={form.period}
                onChange={handleChange}
                placeholder="Periodo del matrimonio"
                className={inputClass}
              />
              <input
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                placeholder="Location desiderata"
                className={inputClass}
              />
              <input
                name="guests"
                type="number"
                value={form.guests}
                onChange={handleChange}
                placeholder="Numero di invitati"
                className={inputClass}
              />
              <input
                name="budget"
                type="text"
                value={form.budget}
                onChange={handleChange}
                placeholder="Budget indicativo (€)"
                className={inputClass}
              />
              {/* <div className="col-span-2">
                <select
                  name="style"
                  value={form.style}
                  onChange={handleChange}
                  className={inputClass}
                  style={{ appearance: "none", cursor: "pointer" }}
                >
                  <option value="" disabled>Stile del matrimonio</option>
                  <option value="classico">Classico</option>
                  <option value="luxury">Luxury</option>
                  <option value="boho">Boho</option>
                  <option value="minimal">Minimal</option>
                  <option value="rustico">Rustico</option>
                </select>
              </div> */}
            </div>
          </fieldset>

          {/* SEZIONE 3 — Il messaggio */}
          <fieldset className="mb-12">
            <legend
              className="text-[0.62rem] uppercase tracking-[0.35em] font-light mb-8 flex items-center gap-4 w-full text-black/80"
            >
              <span>03 &nbsp;—&nbsp; Il vostro sogno</span>
              <span
                className="flex-1 h-px"
                style={{ background: "var(--color-primary-dark)", opacity: 0.1 }}
              />
            </legend>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Raccontaci la vostra idea, i dettagli che sognate, le emozioni che volete vivere…"
              className={inputClass + " resize-none"}
            />
          </fieldset>

          {/* CHECKBOX */}
          <label
            className="flex items-center gap-3 text-xs font-light tracking-wide mb-10 cursor-pointer text-black/80"
          >
            <span
              className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{
                borderColor: form.copyEmail
                  ? "var(--color-secondary-dark)"
                  : "black/80",
                opacity: form.copyEmail ? 1 : 0.3,
              }}
            >
              {form.copyEmail && (
                <span
                  className="w-2 h-2 block bg-secondary-dark"
                />
              )}
            </span>
            <input
              type="checkbox"
              name="copyEmail"
              checked={form.copyEmail}
              onChange={handleChange}
              className="sr-only"
            />
            Ricevi una copia della richiesta via email
          </label>

          {/* SUBMIT */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === "sending" || status === "ok"}
              className="
                button-elegant
              "
              style={{
                borderColor: "var(--color-secondary-dark)",
                color: status === "ok"
                  ? "var(--color-secondary-light)"
                  : "var(--color-secondary-dark)",
                background: status === "ok"
                  ? "var(--color-secondary-dark)"
                  : "transparent",
              }}
              onMouseEnter={(e) => {
                if (status !== "ok") {
                  e.currentTarget.style.background = "var(--color-secondary-dark)";
                  e.currentTarget.style.color = "var(--color-secondary-light)";
                }
              }}
              onMouseLeave={(e) => {
                if (status !== "ok") {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--color-secondary-dark)";
                }
              }}
            >
              {status === "sending"
                ? "Invio in corso…"
                : status === "ok"
                ? "Richiesta inviata ✦"
                : status === "error"
                ? "Riprova"
                : "Invia richiesta"}
            </button>

            {status === "error" && (
              <p
                className="mt-4 text-xs tracking-wide font-light text-black/80"
              >
                Si è verificato un errore. Riprova o scrivici direttamente.
              </p>
            )}
          </div>

        </form>
      </div>
    </section>
  );
}