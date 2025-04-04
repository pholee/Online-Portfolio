import { useEffect} from "react";

export const Navmenu = ({ menuOpen, setMenuOpen }) => {

  {/* Desktop and mobile menu functionality */}
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  {/* Scroll on click */}
  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 right-0 z-40 p-8 pointer-events-none">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-end">
          {/* Mobile */}
          {!menuOpen && (
            <div
              className="pointer-events-auto z-40 md:hidden font-bold text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              &#9776;
            </div>
          )}

          {/* Desktop */}
          <div className="hidden md:flex flex-col items-end pointer-events-auto">
            {/* Divider */}
            <hr className="w-48 border-1 mb-2" />
            <a
              onClick={() => scrollToSection("#home")}
              className="font-roboto font-bold text-text-2 hover:text-text-1 transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("#about")}
              className="font-roboto font-bold text-text-2 hover:text-text-1 transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("#projects")}
              className="font-roboto font-bold text-text-2 hover:text-text-1 transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("#contact")}
              className="font-roboto font-bold text-text-2 hover:text-text-1 transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Contact
            </a>
            <a
              href="/Online-Portfolio/Phoebe_Lee_CV.pdf"
              target="_blank"
              className="font-roboto font-bold text-text-2 hover:text-text-1 transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
