import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center flex-wrap gap-3 pb-10 font-mono text-[.74rem] text-text-3">
      <span className="inline-flex items-center gap-[.7em]">
        <Logo className="h-[2.2em] w-auto shrink-0 text-text-1" />
        Phoebe Lee · London
      </span>
      <span>© 2026</span>
    </footer>
  );
};
