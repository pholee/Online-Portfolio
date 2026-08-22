import { useScrollNav } from "../hooks/useScrollNav";

export const NavmenuMobile = ({ menuOpen, setMenuOpen }) => {
  const scrollTo = useScrollNav();

  const goTo = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  const links = [
    { id: "#home", label: "Home" },
    { id: "#about", label: "About" },
    { id: "#projects", label: "Projects" },
    { id: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`
        flip-menu fixed inset-0 top-19 z-40 bg-background flex flex-col items-start justify-center gap-[1.6rem] px-[var(--pad)]
        transition-opacity duration-300 ease-in-out
        ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {links.map((link, index) => (
        <a
          key={link.id}
          onClick={() => goTo(link.id)}
          className={`flip-link cursor-pointer font-display font-bold text-2xl flex items-baseline gap-2 ${
            menuOpen ? "is-open" : ""
          }`}
          style={{ transitionDelay: menuOpen ? `${50 + index * 60}ms` : "0ms" }}
        >
          <i className="not-italic font-mono text-sm text-accent-text">
            {String(index + 1).padStart(2, "0")}
          </i>
          {link.label}
        </a>
      ))}
      <a
        href="/Online-Portfolio/Phoebe_Lee_CV.pdf"
        target="_blank"
        className={`flip-link font-display font-bold text-2xl flex items-baseline gap-2 ${
          menuOpen ? "is-open" : ""
        }`}
        style={{ transitionDelay: menuOpen ? `${50 + links.length * 60}ms` : "0ms" }}
        onClick={() => setMenuOpen(false)}
      >
        <i className="not-italic font-mono text-sm text-accent-text">05</i>
        Resume
      </a>
    </div>
  );
};
