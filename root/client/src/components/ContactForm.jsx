import { useState } from "react";
import { NavLink } from "react-router-dom";
import PageIntro from "./PageIntro";
// import { DatePicker } from "@/components/application/date-picker/date-picker";
// import { today, getLocalTimeZone } from "@internationalized/date";

import DatePicker from "react-datepicker";
import { it } from "date-fns/locale";

// const now = today(getLocalTimeZone());

const RequiredStar = () => (
  <span className="text-primary-dark ml-1 ">*</span>
);

const formatEuro = (value) => {
  const number = value.replace(/\D/g, "");
  if (!number) return "";
  return new Intl.NumberFormat("it-IT").format(number) + " €";
};

function OtherEventForm({ title, subtitle, paragraph, isOtherEvent, toggleForm }) {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    location: "",
    guests: "",
    budget: "",
    // style: "",
    message: "",
    copyEmail: false,
    acceptPrivacy: false
  });

  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "error"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.acceptPrivacy) {
      alert("Per proseguire, devi accettare la Privacy Policy");
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch(
        // "http://localhost:3000/api/contact",
        "https://soave-email-worker.soavealemanno.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "other",
            ...form,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Errore invio");
      }

      setStatus("ok");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleBudgetChange = (e) => {
    const raw = e.target.value;
    setForm({
      ...form,
      budget: formatEuro(raw),
    });
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
    <div className="max-w-3xl mx-auto">

        <PageIntro
            header={subtitle}
            title={title}
            text={paragraph}
            />

        <SwitchFormButton isOtherEvent={isOtherEvent} toggleForm={toggleForm} />

        {/* ── FORM ── */}
        <form onSubmit={handleSubmit}>

          {/* SEZIONE 1 — La coppia */}
          <fieldset className="mb-12">
            <legend
              className="text-[0.62rem] uppercase tracking-[0.35em] font-light mb-8 flex items-center gap-4 w-full text-black/80"
            >
              <span>01 &nbsp;—&nbsp; I Contatti </span> 
              
              <span
                className="flex-1 h-px"
                style={{ background: "var(--color-primary-dark)", opacity: 0.1 }}
              />
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Nome *"
                required
                className={inputClass}
              />
              <input
                name="surname"
                type="text"
                value={form.surname}
                onChange={handleChange}
                placeholder="Cognome *"
                required
                className={inputClass}
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Telefono *"
                required
                pattern="^\+?[0-9\s]{7,15}$"
                className={inputClass}
              />
            </div>
          </fieldset>

          {/* SEZIONE 2 — L'evento */}
          <fieldset className="mb-12">
            <legend
              className="text-[0.62rem] uppercase tracking-[0.35em] font-light mb-8 flex items-center gap-4 w-full text-black/80"
            >
              <span>02 &nbsp;—&nbsp; L'evento</span>
              <span
                className="flex-1 h-px"
                style={{ background: "var(--color-primary-dark)", opacity: 0.1 }}
              />
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
              <div className="md:col-span-2">
                <input
                  name="eventType"
                  type="text"
                  value={form.eventType}
                  onChange={handleChange}
                  placeholder="Di che tipo di evento si tratta? *"
                  className={inputClass}
                />
              </div>
              <DatePicker
                selected={form.date ? new Date(form.date) : null}
                onChange={(date) =>
                  setForm((prev) => ({
                    ...prev,
                    date: date ? date.toISOString().split("T")[0] : "",
                  }))
                }
                locale={it}
                dateFormat="dd/MM/yyyy"
                className={inputClass}
                placeholderText="Data dell'evento"
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                minDate={new Date()}
                maxDate={new Date("2035-12-31")}
                withPortal
                onFocus={(e) => e.target.blur()}
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
                min="0"
                className={inputClass}
              />
              <input
                name="budget"
                type="text"
                value={form.budget}
                onChange={handleBudgetChange}
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
              <span>03 &nbsp;—&nbsp; l'idea e i dettagli</span>
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
              placeholder="Raccontami eventuali idee e ispirazioni che hai in mente…"
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

          <label className="flex items-start gap-3 text-xs font-light tracking-wide mb-10 cursor-pointer text-black/80">
            <span
              className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{
                borderColor: form.acceptPrivacy ? "var(--color-secondary-dark)" : "rgba(0,0,0,0.3)",
                opacity: form.acceptPrivacy ? 1 : 0.5,
              }}
            >
              {form.acceptPrivacy && (
                <span className="w-2 h-2 block bg-secondary-dark" />
              )}
            </span>

            <input
              type="checkbox"
              name="acceptPrivacy"
              checked={form.acceptPrivacy}
              onChange={handleChange}
              className="sr-only"
              required
            />

            <span>
              Accetto la{" "}
              <NavLink
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors duration-200"
              >
              Privacy Policy
              </NavLink>
              <RequiredStar />
            </span>
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
  );
}

function WeddingForm({ title, subtitle, paragraph, isOtherEvent, toggleForm }) {
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
    acceptPrivacy: false
  });

  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "error"

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.acceptPrivacy) {
      alert("Devi accettare la Privacy Policy");
      return;
    }

    try {
      setStatus("sending");

      const response = await fetch(
        // "http://localhost:3000/api/contact",
        "https://soave-email-worker.soavealemanno.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            formType: "wedding",
            ...form,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Errore invio");
      }

      setStatus("ok");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const handleBudgetChange = (e) => {
    const raw = e.target.value;
    setForm({
      ...form,
      budget: formatEuro(raw),
    });
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
    <div className="max-w-3xl mx-auto">

        <PageIntro
            header={subtitle}
            title={title}
            text={paragraph}
            />

        <SwitchFormButton isOtherEvent={isOtherEvent} toggleForm={toggleForm} />

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
                  placeholder="Nome della coppia *"
                  required
                  className={inputClass}
                />
              </div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className={inputClass}
              />
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="Telefono *"
                required
                pattern="^\+?[0-9\s]{7,15}$"
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
                min="0"
                className={inputClass}
              />
              <input
                name="budget"
                type="text"
                value={form.budget}
                onChange={handleBudgetChange}
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

          <label className="flex items-start gap-3 text-xs font-light tracking-wide mb-10 cursor-pointer text-black/80">
            <span
              className="w-4 h-4 border flex items-center justify-center flex-shrink-0 transition-colors duration-200"
              style={{
                borderColor: form.acceptPrivacy ? "var(--color-secondary-dark)" : "rgba(0,0,0,0.3)",
                opacity: form.acceptPrivacy ? 1 : 0.5,
              }}
            >
              {form.acceptPrivacy && (
                <span className="w-2 h-2 block bg-secondary-dark" />
              )}
            </span>

            <input
              type="checkbox"
              name="acceptPrivacy"
              checked={form.acceptPrivacy}
              onChange={handleChange}
              className="sr-only"
              required
            />

            <span>
              Accetto la{" "}
              <NavLink
                to="/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-black transition-colors duration-200"
              >
              Privacy Policy
              </NavLink>
              <RequiredStar />
            </span>
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
  );
}

function SwitchFormButton({ isOtherEvent, toggleForm }) {
  return (
    <div className="text-center">
       <button
          type="button"
          onClick={toggleForm}
          className="
            group
            mb-16
            inline-flex
            items-center
            gap-2
            subtitle
            text-sm
            tracking-[0.08em]
            text-secondary-dark
            decoration-secondary-dark/40
            hover:decoration-primary-dark
            hover:text-primary-dark
            transition-all
            duration-300
          "
        >
          <span className="underline underline-offset-4">
            {isOtherEvent
              ? "Torna al form per consulenze wedding"
              : "Cerchi supporto per un altro tipo di evento?"}
          </span>

          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>
    )
}

export default function WeddingPlannerForm({ intro }) {
  const [isOtherEvent, setIsOtherEvent] = useState(() => {
      return localStorage.getItem("eventType") === "other";
    });

  const toggleForm = () => {
    setIsOtherEvent(prev => {
      const next = !prev;
      localStorage.setItem("eventType", next ? "other" : "wedding");
      window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
      return next;
    });
  };
  
  return (
    <section
      className="min-h-screen py-30 px-6 bg-secondary-light"
    >
      {isOtherEvent ? (
        <OtherEventForm title={intro.other.title} subtitle={intro.other.subtitle} paragraph={intro.other.paragraph} isOtherEvent={isOtherEvent} toggleForm={toggleForm} />
      ) : (
        <WeddingForm title={intro.wedding.title} subtitle={intro.wedding.subtitle} paragraph={intro.wedding.paragraph} isOtherEvent={isOtherEvent} toggleForm={toggleForm} />
      )}
      
      
    </section>
  );
}