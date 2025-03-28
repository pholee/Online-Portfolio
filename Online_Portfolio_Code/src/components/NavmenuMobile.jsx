import { useEffect } from "react";

export const NavmenuMobile = ({ menuOpen, setMenuOpen }) => {

    {/* Scroll on click */}
    const scrollToSection = (id) => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setMenuOpen(false); // Close menu after clicking a link
    };

  return (
    <div
      className={`
                    fixed top-0 left-0 w-full bg-[rgb(255,255,255,0.8)] z-40 flex flex-col items-center justify-center 
                    transition-all duration-300 ease-in-out
                    ${
                      menuOpen
                        ? "h-screen opacity-100 pointer-events-auto"
                        : "h-0 opacity-0 pointer-events-none"
                    }
                `}
    >
      <button
        className="absolute top-6 right-6 text-black text-3xl focus:outline-none cursor-pointer"
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
      >
        &times;
      </button>

      <a
        onClick={() => scrollToSection("#home")}
        className={`text-2xl text-black my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
      >
        Home
      </a>
      <a
        onClick={() => scrollToSection("#about")}
        className={`text-2xl text-black my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
      >
        About
      </a>
      <a
        onClick={() => scrollToSection("#projects")}
        className={`text-2xl text-black my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
        `}
      >
        Projects
      </a>
      <a
        onClick={() => scrollToSection("#contact")}
        className={`text-2xl text-black my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
        `}
      >
        Contact
      </a>
      <a
        href="public/Phoebe_Lee_CV.pdf"
        target="_blank"
        className={`text-2xl text-black my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
        `}
        onClick={() => setMenuOpen(false)}
      >
        Resume
      </a>
    </div>
  );
};
