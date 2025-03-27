import { useEffect } from "react";

export const NavmenuMobile = ({ menuOpen, setMenuOpen }) => {
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
        href="#home"
        className={`text-2xl text-black my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </a>
      <a
        href="#about"
        className={`text-2xl text-black my-4 transform transition-transform duration-300
                ${
                  menuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }
            `}
        onClick={() => setMenuOpen(false)}
      >
        About
      </a>
      <a
        href="#projects"
        className={`text-2xl text-black my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
        `}
        onClick={() => setMenuOpen(false)}
      >
        Projects
      </a>
      <a
        href="#contact"
        className={`text-2xl text-black my-4 transform transition-transform duration-300
            ${
              menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
        `}
        onClick={() => setMenuOpen(false)}
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
