const workExperience = [
  {
    title: "UX Designer, Koffeecup",
    description:
      "Wireframes and user flows for websites, experiential projects, mobile and VR games.",
    period: "Aug 2025 — now",
  },
  {
    title: "UX Design Intern, Koffeecup",
    description: "Shadowed senior designers and learnt the tools of the trade.",
    period: "Jun — Aug 2025",
  },
];

const education = [
  {
    title: "BSc Computer Science",
    description: "City St George's, University of London",
    period: "2024 — 2028",
  },
];

const elsewhere = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pholee" },
  { label: "Resume", href: "/Online-Portfolio/Phoebe_Lee_Resume.pdf" },
];

const Column = ({ heading, children }) => (
  <div>
    <h3 className="text-[.95rem] font-medium mb-4">
      {heading} <span className="text-text-3">—</span>
    </h3>
    <ul className="grid gap-4">{children}</ul>
  </div>
);

const Entry = ({ title, description, period }) => (
  <li className="text-text-2 text-[.95rem] leading-[1.4]">
    <b className="block text-text-1 font-normal">{title}</b>
    {description}
    <span className="block font-mono text-[.74rem] text-text-3">{period}</span>
  </li>
);

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About"
      className="border-t border-line pt-[clamp(56px,8vw,96px)] pb-[clamp(48px,7vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-[clamp(36px,5vw,64px)]"
    >
      <Column heading="Experience">
        {workExperience.map((job) => (
          <Entry key={job.title} {...job} />
        ))}
      </Column>

      <Column heading="Education">
        {education.map((item) => (
          <Entry key={item.title} {...item} />
        ))}
      </Column>

      <Column heading="Elsewhere">
        {elsewhere.map((link) => (
          <li key={link.label} className="text-text-2 text-[.95rem] leading-[1.4]">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group hover:text-accent transition-colors"
            >
              {link.label}{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-[.15em] group-hover:-translate-y-[.15em]">
                ↗
              </span>
            </a>
          </li>
        ))}
      </Column>
    </section>
  );
};
