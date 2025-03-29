import { useEffect } from "react";

export const Navmenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-40 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-end">

          {/* Mobile */}
          {!menuOpen && (
            <div
              className="cursor-pointer z-40 md:hidden font-bold text-2xl"
              onClick={() => setMenuOpen(true)}
            >
              &#9776;
            </div>
          )}

          {/* Desktop */}
          <div className="hidden md:flex flex-col items-end">
            
            {/* Divider */}
            <hr className="w-48 border-black border-1 mb-2" />
            <a
              onClick={() => scrollToSection("#home")}
              className="font-bold text-gray-600 hover:text-black transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("#about")}
              className="font-bold text-gray-600 hover:text-black transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              About
            </a>
            <a
              onClick={() => scrollToSection("#projects")}
              className="font-bold text-gray-600 hover:text-black transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Projects
            </a>
            <a
              onClick={() => scrollToSection("#contact")}
              className="font-bold text-gray-600 hover:text-black transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Contact
            </a>
            <a
              href="/Phoebe_Lee_CV.pdf"
              target="_blank"
              className="font-bold text-gray-600 hover:text-black transition-colors hover:scale-105 duration-200 ease-in-out"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
