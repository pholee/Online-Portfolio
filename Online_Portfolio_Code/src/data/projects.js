export const projects = [
  /*
    {
    slug: "seven-yanbu",
    title: "REDACTED",
    isSoon: true,
    statusLabel: "Coming 2027",
    projectType: "Experiential",
    tools: ["Figma", "Wireframing"],
    linkLabel: null,
    linkHref: null,
    role: "UX Design",
    intro:
      "Coming soon.",
    gallery: [
      "Venue",
      "Activation 1",
      "Activation 2",
    ],
    sectionHeading: "The ocean at your fingertips",
    sectionText:
      "Quote",
    quoteText: "Placeholder — add a line from the client here.",
    quoteAttr: "— placeholder",
    },
  */
  {
    slug: "alia-lavery-com",
    title: "AliaLavery.com",
    titleBreak: ["AliaLavery", ".com"],
    isSoon: true,
    statusLabel: "Coming 2027",
    projectType: "Web development",
    tools: ["React", "Tailwind CSS", "Figma"],
    linkLabel: null,
    linkHref: null,
    role: "Design & Development",
    intro:
      "Coming soon.",
    gallery: [
      "Home",
      "E-commerce page",
      "Gallery",
    ],
    sectionHeading: "From paper to product",
    sectionText:
      "An artist's portfolio, built to fit their style.",
    quoteText: "Placeholder — add a line from the client here.",
    quoteAttr: "— placeholder",
  },
  {
    slug: "koffeekickstart-net",
    title: "koffeekickstart.net",
    titleBreak: ["Koffee", "Kickstart", ".net"],
    projectType: "Web development",
    tools: ["Figma", "Wireframing", "React"],
    linkLabel: null,
    linkHref: null,
    role: "Design & Development",
    intro:
      "A personalised onboarding experience for new Koffeecup employees, from early wireframes through to a working React build.",
    gallery: [
      "Onboarding flow — welcome",
      "Onboarding flow — team setup",
      "Component library excerpt",
    ],
    sectionHeading: "Onboarding as a first impression",
    sectionText:
      "The goal was to make someone's first hour at Koffeecup feel as considered as their first day — a shared component library keeps the experience consistent as new steps get added.",
    quoteText: "Placeholder — add a line from Koffeecup here.",
    quoteAttr: "— placeholder",
  },
  {
    slug: "hoomanz-game",
    title: "hoomanz.game",
    titleBreak: ["hoomanz", ".game"],
    projectType: "User experience",
    tools: ["Figma", "Wireframing", "User Flows"],
    linkLabel: "Visit Live Site",
    linkHref: "https://www.hoomanz.game/",
    role: "UX Design",
    intro:
      "UX and front-end support for Hoomanz, including the flow that lets players submit their own character designs to be featured in-game.",
    gallery: [
      "Submission flow — step 1",
      "Submission flow — step 2",
      "Embedded iframe on site",
    ],
    sectionHeading: "Designing the submission flow",
    sectionText:
      "The trickiest part was scoping a form simple enough for a general audience to complete in under a minute, while still capturing everything the art team needed to review a submission.",
    quoteText: "Placeholder — add a line from the Hoomanz team here.",
    quoteAttr: "— placeholder",
  },
  {
    slug: "2d-platformer-game",
    title: "2D Platformer Game",
    projectType: "Game development",
    tools: ["Java", "CityEngine"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/pholee/CityEngine-2D-Game",
    role: "Design & Development",
    intro:
      "A small, story-driven platformer retelling Little Red Riding Hood, built solo in Java. The brief was self-imposed: ship one complete, playable level with its own art direction rather than a tech demo.",
    gallery: ["Level 1 — the woods", "Enemy encounter", "Title screen"],
    sectionHeading: "Designing a level like a scene",
    sectionText:
      "Each room was blocked out for pacing first — where the player should slow down, where a chase should start — before any art or enemy logic went in.",
    quoteText: "Placeholder — add a line from a playtester here.",
    quoteAttr: "— placeholder",
  },
  {
    slug: "this-portfolio",
    title: "This Portfolio",
    projectType: "Web development",
    tools: ["React", "Tailwind CSS", "Figma"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/pholee/Online-Portfolio",
    role: "Design & Development",
    intro:
      "A ground-up rebuild of this site: fewer components, one consistent accent system, and a lot more negative space. Every section pulls from the same small set of tokens rather than being styled screen by screen.",
    gallery: [
      "Homepage — light",
      "Homepage — dark",
      "This case study template",
    ],
    sectionHeading: "One system, every section",
    sectionText:
      "Instead of a page-by-page redesign, this started as a token sheet — two neutrals, two accents, three typefaces, one spacing scale — and every component on the site pulls from the same handful of decisions.",
    quoteText:
      "Placeholder — add a line from a friend, mentor, or early reader here.",
    quoteAttr: "— placeholder",
  },
];

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug) => {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
};
