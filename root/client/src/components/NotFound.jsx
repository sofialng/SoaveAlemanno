import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const stars = [
    ["5%", "8%", "14px"], ["12%", "22%", "10px"], ["8%", "75%", "18px"],
    ["18%", "90%", "12px"], ["25%", "12%", "16px"], ["30%", "55%", "11px"],
    ["35%", "85%", "20px"], ["42%", "20%", "13px"], ["48%", "70%", "15px"],
    ["55%", "8%", "10px"], ["60%", "90%", "18px"], ["65%", "35%", "14px"],
    ["70%", "60%", "11px"], ["75%", "15%", "20px"], ["80%", "80%", "13px"],
    ["88%", "30%", "16px"], ["90%", "70%", "10px"], ["15%", "50%", "12px"],
    ["40%", "40%", "18px"], ["52%", "50%", "10px"], ["68%", "78%", "16px"],
    ["82%", "55%", "14px"], ["28%", "92%", "12px"], ["92%", "10%", "18px"],
    ["10%", "40%", "15px"], ["45%", "95%", "11px"], ["76%", "45%", "18px"],
  ];

  return (
    <div
      className="
        min-h-screen
        py-24
        flex
        items-center
        justify-center
        px-8
        overflow-hidden
        relative
      "
    >

      {/* cielo stellato */}
      {stars.map(([top, left, size], index) => (
        <span
          key={index}
          className="
            absolute
            text-[#d8b28c]
            opacity-60
            animate-pulse
          "
          style={{
            top,
            left,
            fontSize: size,
            animationDelay: `${index * 0.15}s`,
          }}
        >
          ✦
        </span>
      ))}


      <div className="relative z-10 text-center">

        {/* <div className="text-primary-dark text-5xl mb-4">
          ♡
        </div> */}

      {/* 
        <h1
          className="
            font-serif
            text-[150px]
            md:text-[220px]
            leading-none
            text-primary-dark
            drop-shadow-sm
          "
        >
          404
        </h1> */}


        <h2
          className="
            title
          "
        >
          Questa pagina non esiste
        </h2>


        <p
          className="
            paragraph text-center
          "
        >
          Ti sei perso?
        </p>

        <div className="mt-8">
          <NavLink
            to="/"
            className="
              my-16
              px-6 sm:px-10
              py-3.5
              my-3
              text-[0.55rem] sm:text-[0.65rem]
              uppercase
              tracking-[0.25em] sm:tracking-[0.3em]
              font-light
              border
              transition-all
              duration-300
              whitespace-nowrap
              "
            style={{
              borderColor: "var(--color-secondary-dark)",
              color: "var(--color-secondary-dark)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-secondary-dark)";
              e.currentTarget.style.color = "var(--color-secondary-light)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-secondary-dark)";
            }}
          >
            Torna alla Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}