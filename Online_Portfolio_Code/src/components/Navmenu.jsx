import { useEffect } from "react";

export const Navmenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 right-0 w-full z-40">
      <div className="max-w-5xl mx-auto p-4">
        <div className="flex flex-col items-end space-y-4">

          {/* Mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col items-end gap-1">
          <hr className="w-48 border-black mb-2" />
          <a
              href="#home"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-black transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </a>
            <a
              href="/Phoebe_Lee_CV.pdf"
              target="_blank"
              className="text-gray-600 hover:text-black transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
