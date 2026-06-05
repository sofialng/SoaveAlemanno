import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function WeddingPlannerForm() {
  const [form, setForm] = useState({
    names: "",
    email: "",
    phone: "",
    period: "",
    location: "",
    guests: "",
    budget: "",
    style: "",
    message: "",
    copyEmail: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fd1mwdm",
        "template_ptfkjbd",
        form,
        "w-ogfvcy2k4L2sMPR"
      )
      .then(() => {
        alert("Richiesta inviata 💌");
      })
      .catch((err) => {
        console.error(err);
        alert("Errore nell'invio");
      });
  };

  return (
    <section className="min-h-screen bg-secondary-light px-6 py-20">

      {/* FORM CARD */}
      <div className="max-w-4xl mx-auto">

        <div className="
          backdrop-blur-xl
          bg-white/70
          border border-white/40
          shadow-2xl
          rounded-3xl
          p-10 md:p-14
        ">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {[
                { name: "names", placeholder: "Nome della coppia" },
                { name: "email", placeholder: "Email", type: "email" },
                { name: "phone", placeholder: "Telefono", type: "tel" },
                { name: "period", placeholder: "Periodo matrimonio" },
                { name: "location", placeholder: "Location" },
                { name: "guests", placeholder: "Numero invitati", type: "number" },
                { name: "budget", placeholder: "Budget (€)" },
              ].map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type || "text"}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className="
                    w-full px-4 py-3 rounded-xl
                    bg-white/60
                    border border-black/10
                    focus:outline-none focus:ring-2 focus:ring-black/20
                    transition-all duration-300
                  "
                />
              ))}

              {/* STYLE */}
              <select
                name="style"
                value={form.style}
                onChange={handleChange}
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-white/60
                  border border-black/10
                "
              >
                <option value="">Stile matrimonio</option>
                <option value="classico">Classico</option>
                <option value="luxury">Luxury</option>
                <option value="boho">Boho</option>
                <option value="minimal">Minimal</option>
                <option value="rustico">Rustico</option>
              </select>
            </div>

            {/* MESSAGE */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              placeholder="Raccontaci la tua idea..."
              className="
                w-full px-4 py-3 rounded-xl
                bg-white/60
                border border-black/10
                focus:outline-none focus:ring-2 focus:ring-black/20
                transition-all duration-300
              "
            />

            {/* CHECKBOX */}
            <label className="flex items-center gap-3 text-sm text-black/60">
              <input
                type="checkbox"
                name="copyEmail"
                checked={form.copyEmail}
                onChange={handleChange}
                className="accent-black"
              />
              Ricevi una copia della richiesta via email
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                w-full py-3 rounded-full
                bg-black text-white
                hover:bg-black/80
                transition-all duration-300
              "
            >
              Invia richiesta
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}