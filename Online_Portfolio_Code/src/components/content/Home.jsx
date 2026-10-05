import { useScrollNav } from "../../hooks/useScrollNav";

const RESUME_HREF = "/Online-Portfolio/Phoebe_Lee_Resume.pdf";

const externalLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pholee" },
  { label: "GitHub", href: "https://github.com/pholee" },
  { label: "Resume", href: RESUME_HREF },
];

export const Home = () => {
  const scrollTo = useScrollNav();

  return (
    <section id="home">
      {/* Header */}
      <header className="animate-rise flex justify-between items-start gap-6 pt-[clamp(28px,5vw,56px)]">
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="text-left cursor-pointer text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.15] font-medium tracking-[-.01em]"
        >
          Phoebe Lee
          <span className="block text-text-3 font-normal">2026</span>
        </button>

        <nav aria-label="Elsewhere" className="grid gap-0.5 text-[.9rem] text-text-3 min-[820px]:min-w-28">
          <button
            type="button"
            onClick={() => scrollTo("#about")}
            className="text-left cursor-pointer hover:text-text-1 transition-colors"
          >
            About
          </button>
          {externalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-text-1 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Statement */}
      <h1
        className="animate-rise [animation-delay:.12s] text-[clamp(2rem,5.4vw,4.25rem)] leading-[1.06] tracking-[-.028em] font-normal max-w-[19ch] text-balance mt-[clamp(72px,13vw,168px)]"
      >
        Phoebe Lee designs user experiences and builds the apps behind them.{" "}
        <span className="block text-text-3">
          UX designer studying Computer Science in London.
        </span>
      </h1>
    </section>
  );
};
