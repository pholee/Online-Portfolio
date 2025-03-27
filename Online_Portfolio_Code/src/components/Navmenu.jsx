import { useEffect } from "react";

export const Navmenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(255,255,255,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#about" className="text-xl font-bold">
            phoebe<span className="text-blue-500">.tech</span>
          </a>

          {/* Mobile */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
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
