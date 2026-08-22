import { useEffect } from "react";
import { useScrollNav } from "../hooks/useScrollNav";
import { useThemeToggle } from "../hooks/useThemeToggle";

export const Navmenu = ({ menuOpen, setMenuOpen }) => {
  const scrollTo = useScrollNav();
  const [theme, setTheme] = useThemeToggle();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const links = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];

  const themeButtonClass = (pressed) =>
    `bg-transparent border px-[.6rem] py-[.35rem] uppercase cursor-pointer transition-colors duration-200 ${
      pressed ? "text-text-1 border-accent-text" : "text-text-3 border-text-1/10"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-text-1/10">
      <div className="max-w-[var(--container)] mx-auto flex items-center justify-between h-19 px-[var(--pad)]">
        <a
          onClick={() => scrollTo("#home")}
          className="flex items-center gap-2 cursor-pointer font-display font-bold"
        >
          <img
            src="/Online-Portfolio/PL-logo-l.svg"
            alt="PL Logo"
            className="h-5 logo-invert"
          />
          <span>Phoebe Lee</span>
        </a>

        <nav className="hidden md:flex gap-8 font-semibold text-sm" aria-label="Primary">
          {links.map((link, index) => (
            <a
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="cursor-pointer flex items-baseline gap-1.5 text-text-2 hover:text-accent-text transition-colors"
            >
              <i className="not-italic font-mono text-xs text-accent-text">
                {String(index + 1).padStart(2, "0")}
              </i>
              {link.label}
            </a>
          ))}
          <a
            href="/Online-Portfolio/Phoebe_Lee_CV.pdf"
            target="_blank"
            className="flex items-baseline gap-1.5 text-text-2 hover:text-accent-text transition-colors"
          >
            <i className="not-italic font-mono text-xs text-accent-text">05</i>
            Resume
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <div
            className="flex gap-[.4rem] font-mono text-[.7rem] tracking-[.06em]"
            role="group"
            aria-label="Theme preview"
          >
            <button
              type="button"
              onClick={() => setTheme("light")}
              aria-pressed={theme === "light"}
              className={themeButtonClass(theme === "light")}
            >
              Light
            </button>
            <button
              type="button"
              onClick={() => setTheme("dark")}
              aria-pressed={theme === "dark"}
              className={themeButtonClass(theme === "dark")}
            >
              Dark
            </button>
          </div>

          <button
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
};
