import { useScrollNav } from "../../hooks/useScrollNav";

const sections = [
  { id: "#work", label: "Featured" },
  { id: "#archive", label: "Archive" },
  { id: "#about", label: "About" },
];

export const Home = () => {
  const scrollTo = useScrollNav();

  return (
    <section id="home">
      {/* Header */}
      <header className="animate-rise flex justify-between items-start gap-6 pt-[clamp(28px,5vw,56px)]">
        <p className="text-[clamp(1.25rem,2.2vw,1.6rem)] leading-[1.15] font-medium tracking-[-.01em]">
          Phoebe Lee
          <span className="block text-text-3 font-normal">2024–2026</span>
        </p>

        <nav aria-label="Primary" className="grid gap-0.5 text-[.9rem] text-text-3 min-[820px]:min-w-28">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className="text-left cursor-pointer hover:text-text-1 transition-colors"
            >
              {section.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Statement */}
      <h1
        className="animate-rise [animation-delay:.12s] text-[clamp(2rem,5.4vw,4.25rem)] leading-[1.06] tracking-[-.028em] font-normal max-w-[19ch] text-balance mt-[clamp(52px,9vw,120px)]"
      >
        Phoebe Lee designs user experiences and builds the apps behind them.{" "}
        <span className="block text-text-3">
          UX designer studying Computer Science in London.
        </span>
      </h1>
    </section>
  );
};
