import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
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

  return (
    <section id="about" className="border-t border-text-1/10 py-[var(--band-y)]">
      <RevealOnScroll>
        <div className="max-w-[var(--container)] mx-auto px-[var(--pad)]">
          {/* Heading */}
          <div className="flex items-baseline justify-between gap-4 mb-[var(--gap-section)] flex-wrap">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
              About
            </h2>
            <p className="font-mono text-xs tracking-widest uppercase text-text-3 text-right">
              Education, experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--gap-about)] items-start">
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
            <div className="md:col-span-2 border-t border-text-1/10">
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
      </RevealOnScroll>
    </section>
  );
};
