import { Logo } from "../Logo";
import { useScrollNav } from "../../hooks/useScrollNav";

export const Footer = () => {
  const scrollTo = useScrollNav();

  return (
    <footer className="flex justify-between items-center flex-wrap gap-3 pb-10 font-mono text-[.74rem] text-text-3">
      <span className="inline-flex items-center gap-[.7em]">
        <Logo className="h-[2.2em] w-auto shrink-0 text-text-1" />
        Phoebe Lee · London
      </span>

      <span className="inline-flex items-center gap-[1.2em]">
        <span>© 2026</span>
        {/* Ink fills the pill from the bottom on hover */}
        <button
          type="button"
          onClick={() => scrollTo("#home")}
          className="relative isolate overflow-hidden cursor-pointer rounded-full border border-text-1 px-[1.1em] py-[.6em] leading-none text-text-1 transition-colors duration-300 hover:text-background focus-visible:text-background before:absolute before:inset-0 before:-z-10 before:bg-text-1 before:origin-bottom before:scale-y-0 before:transition-transform before:duration-300 before:ease-out hover:before:scale-y-100 focus-visible:before:scale-y-100"
        >
          Back to top
        </button>
      </span>
    </footer>
  );
};
