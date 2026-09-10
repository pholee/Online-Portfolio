import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "../context/LenisContext";

const workExperience = [
  {
    role: "UX Designer",
    company: "Koffeecup",
    period: "Aug 2025 - present",
    description:
      "Designing wireframes and user flows for digital experiences (including experiential projects, mobile and VR games).",
  },
  {
    role: "UX Design Intern",
    company: "Koffeecup",
    period: "Jun 2025 - Aug 2025",
    description:
      "Shadowed senior designers and learnt the tools of the trade.",
  },
  {
    role: "UKSEDS National Rocketry Championship 2025",
    company: "City St.George's, University of London",
    period: "Nov 2024 - Jun 2025",
    description:
      "Constructed and soldered flight circuits. Developed data collection software to access remote flight information.",
  },
];

export const AboutModal = ({ open, onClose }) => {
  const closeButtonRef = useRef(null);
  const previouslyFocused = useRef(null);
  const lenisRef = useLenis();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    // Lenis intercepts wheel/touch for the whole page itself, so hiding body
    // overflow alone doesn't stop it — it must be paused directly, or it
    // keeps scrolling the page from underneath the modal's backdrop.
    const lenis = lenisRef?.current;
    if (open) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [open, lenisRef]);

  useEffect(() => {
    if (open) {
      previouslyFocused.current = document.activeElement;
      closeButtonRef.current?.focus();
    } else {
      previouslyFocused.current?.focus?.();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return createPortal(
    <div
      inert={!open}
      className={`fixed inset-0 z-[60] flex items-center justify-center p-[var(--pad)] ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-heading"
    >
      {/* Backdrop — a sibling of the panel (not an ancestor), so clicks
          inside the panel never bubble into this onClick. */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ease-in-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        data-lenis-prevent
        className={`relative bg-background border border-text-1/10 max-w-[720px] w-full max-h-[85vh] overflow-y-auto p-[clamp(1.5rem,4vw,3rem)] transition-all duration-300 ease-in-out ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-2xl leading-none cursor-pointer text-text-2 hover:text-accent-text transition-colors"
        >
          &times;
        </button>

        {/* Heading */}
        <div className="mb-[var(--gap-section)]">
          <h2 id="about-modal-heading" className="font-display font-extrabold text-3xl sm:text-4xl">
            About
          </h2>
          <p className="font-mono text-xs tracking-widest uppercase text-text-3 mt-1">
            Education, experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[var(--gap-about)]">
          {/* Education */}
          <div className="p-6 border border-text-1/10">
            <h3 className="font-bold text-sm uppercase tracking-wide text-text-2 mb-4">
              Education
            </h3>
            <p className="text-text-1">
              <span className="font-bold">BSc Computer Science</span>
              <br />
              City St.George&apos;s University of London
            </p>
            <span className="font-mono text-xs text-text-3 mt-2 inline-block">
              2024 — 2028
            </span>
          </div>

          {/* Experience — hairline rows, matching the Projects list */}
          <div className="border-t border-text-1/10">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="grid grid-cols-[2.5rem_1fr] gap-5 py-[var(--gap-row-job)] border-b border-text-1/10"
              >
                <span className="font-mono text-xs text-text-3 pt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display font-bold text-lg sm:text-xl">
                    {job.role}
                  </h4>
                  <span className="font-mono text-xs text-text-3 block mt-[.4rem] mb-[.6rem]">
                    {job.company} · {job.period}
                  </span>
                  <p className="text-text-2 text-sm max-w-xl">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
