import { useEffect, useState } from "react";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
  onClick={scrollToTop}
  className={`
    fixed bottom-6 right-6 z-50

    w-12 h-12 rounded-full

    bg-black/10 text-white
    backdrop-blur-md

    border border-white/40

    shadow-[0_10px_20px_rgba(0,0,0,0.2)]

    flex items-center justify-center

    transition-all duration-300

    hover:bg-black/30 hover:scale-110
    active:scale-95

    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
  `}
>
  ↑
</button>
  );
}

export default ScrollToTopButton;