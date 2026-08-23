import { RevealOnScroll } from "../RevealOnScroll";
import { useScrollNav } from "../../hooks/useScrollNav";

export const Home = () => {
  const scrollTo = useScrollNav();

  return (
    <section id="home" className="relative overflow-hidden py-[var(--band-y)]">
      <RevealOnScroll>
        {/* Background */}
        <div className="absolute top-[-15%] right-[-12%] w-[min(60vw,640px)] h-[min(60vw,640px)] bg-accent-bg rounded-full blur-[90px] opacity-60 -z-10"></div>

        <div className="relative z-[1] max-w-[var(--container)] mx-auto px-[var(--pad)]">
          <p className="font-mono text-[.72rem] tracking-widest uppercase text-text-3">
            UX &amp; Front-End
          </p>

          <h1 className="font-display font-black uppercase leading-[0.94] tracking-[-0.01em] text-[clamp(3rem,11vw,8rem)] mt-[0.6em]">
            Systems
            <br />
            Made
            <br />
            Intuitive
          </h1>

          <div className="mt-[var(--gap-section)] max-w-[56ch]">
            {/* Reserved space */}
            <p aria-hidden="true" className="text-[clamp(1.05rem,1.8vw,1.2rem)] min-h-[6em] m-0"></p>

            <div className="flex flex-wrap gap-[1.75rem] mt-[1.5rem] font-mono text-[.82rem] uppercase tracking-[.06em]">
              <a onClick={() => scrollTo("#about")} className="cursor-pointer hover:text-accent-text transition-colors">
                About Me <span className="text-accent-text">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
