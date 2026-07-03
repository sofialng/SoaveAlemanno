import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center gap-1 transition-all duration-500"
      style={{
        width: "44px",
        height: "44px",
        background: "var(--color-secondary-light)",
        border: "1px solid var(--color-primary-dark)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--color-primary-dark)";
        e.currentTarget.style.borderColor = "var(--color-primary-dark)";
        e.currentTarget.querySelector("span").style.color = "var(--color-secondary-light)";
        e.currentTarget.querySelector("p").style.color = "var(--color-secondary-light)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--color-secondary-light)";
        e.currentTarget.style.borderColor = "var(--color-primary-dark)";
        e.currentTarget.querySelector("span").style.color = "var(--color-primary-dark)";
        e.currentTarget.querySelector("p").style.color = "var(--color-primary-dark)";
      }}
      aria-label="Torna in cima"
    >
      <span
        className="text-xs leading-none transition-colors duration-300"
        style={{ color: "var(--color-primary-dark)" }}
      >
        ↑
      </span>
      <p
        className="text-[0.42rem] uppercase tracking-[0.25em] font-light leading-none transition-colors duration-300"
        style={{ color: "var(--color-primary-dark)", opacity: 0.6 }}
      >
        top
      </p>
    </button>
  );
}