/*
  `year` shows alongside the project type; projects with `isSoon` read
  "Coming <year>". Years for the placeholder archive projects (Star City,
  Interior Designer, Mine Maniac, Redacted) are stand-ins.
  `device` picks the laptop/phone mockup shown on the homepage and case study
  (see components/devices/ProjectDevice.jsx). Archive projects also set
  `thumb`, the square artwork used in the archive grid.
*/
export const projects = [

  // ---------- Featured ----------
  {
    slug: "koffeekickstart-net",
    title: "koffeekickstart.net",
    projectType: "Web development",
    year: "2026",
    tools: ["Figma", "Wireframing", "React"],
    teaser:
      "A personalised onboarding experience for new Koffeecup employees, from early wireframes to a working React build.",
    intro:
      "A personalised onboarding experience for new Koffeecup employees, from early wireframes through to a working React build.",
    sectionHeading: "Onboarding as a first impression",
    sectionText:
      "The goal was to make someone's first hour at Koffeecup feel as considered as their first day — a shared component library keeps the experience consistent as new steps get added.",
    device: "koffee",
  },
  {
    slug: "hoomanz-game",
    title: "hoomanz.game",
    projectType: "User experience",
    year: "2025",
    tools: ["Figma", "Wireframing", "User flows"],
    linkLabel: "Visit live site",
    linkHref: "https://www.hoomanz.game/",
    teaser:
      "The flow that lets players submit their own character designs to be featured in-game.",
    intro:
      "UX and front-end support for Hoomanz, including the flow that lets players submit their own character designs to be featured in-game.",
    sectionHeading: "Designing the submission flow",
    sectionText:
      "The trickiest part was scoping a form simple enough for a general audience to complete in under a minute, while still capturing everything the art team needed to review a submission.",
    device: "hoomanz",
  },
  {
    slug: "this-portfolio",
    title: "This Portfolio",
    projectType: "Web development",
    year: "2024",
    tools: ["React", "Tailwind CSS", "Figma"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/pholee/Online-Portfolio",
    teaser:
      "A ground-up rebuild with fewer components, one token sheet and a lot more room.",
    intro:
      "A ground-up rebuild of this site: fewer components, one consistent accent system, and a lot more negative space. Every section pulls from the same small set of tokens rather than being styled screen by screen.",
    sectionHeading: "One system, every section",
    sectionText:
      "Instead of a page-by-page redesign, this started as a token sheet — two neutrals, two accents, two typefaces, one spacing scale — and every component on the site pulls from the same handful of decisions.",
    device: "portfolio",
  },

  // ---------- Archive ----------
  {
    slug: "2d-platformer-game",
    archive: true,
    title: "2D Platformer Game",
    projectType: "Game development",
    year: "2024",
    tools: ["Java", "CityEngine"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/pholee/2D-Platformer-Game",
    intro:
      "A small, story-driven platformer retelling Little Red Riding Hood, built solo in Java. The brief was self-imposed: ship one complete, playable level with its own art direction rather than a tech demo.",
    sectionHeading: "Designing a level like a scene",
    sectionText:
      "Each room was blocked out for pacing first — where the player should slow down, where a chase should start — before any art or enemy logic went in.",
    device: "platformer",
    thumb: "platformer",
  },
  {
    slug: "alia-lavery-com",
    archive: true,
    isSoon: true,
    title: "AliaLavery.com",
    projectType: "Web development",
    year: "2027",
    tools: ["React", "Tailwind CSS", "Figma"],
    intro: "Coming soon.",
    sectionHeading: "From paper to product",
    sectionText: "An artist's portfolio, built to fit their style.",
    device: "alia",
    thumb: "moodboard",
  },
  {
    slug: "star-city",
    archive: true,
    title: "Star City",
    projectType: "User experience",
    year: "2025",
    tools: ["Figma", "Wireframing"],
    intro: "Placeholder — add a one or two sentence summary of Star City here.",
    sectionHeading: "Placeholder — Star City headline",
    sectionText:
      "Placeholder — add the story of Star City: the problem, what you designed, and what changed because of it.",
    device: "starCity",
    thumb: "starCity",
  },
  {
    slug: "interior-designer",
    archive: true,
    title: "Interior Designer",
    projectType: "User experience",
    year: "2026",
    tools: ["Figma", "Wireframing"],
    intro:
      "Placeholder — add a one or two sentence summary of Interior Designer here.",
    sectionHeading: "Placeholder — Interior Designer headline",
    sectionText:
      "Placeholder — add the story of Interior Designer: the problem, what you designed, and what changed because of it.",
    device: "interior",
    thumb: "interior",
  },
  {
    slug: "mine-maniac",
    archive: true,
    title: "Mine Maniac",
    projectType: "User experience",
    year: "2025",
    tools: ["Figma", "Wireframing"],
    intro: "Placeholder — add a one or two sentence summary of Mine Maniac here.",
    sectionHeading: "Placeholder — Mine Maniac headline",
    sectionText:
      "Placeholder — add the story of Mine Maniac: the problem, what you designed, and what changed because of it.",
    device: "mine",
    thumb: "mine",
  },
  {
    slug: "redacted",
    archive: true,
    title: "Redacted",
    projectType: "Experiential",
    year: "2027",
    tools: ["Figma", "Wireframing"],
    intro: "Placeholder — add a one or two sentence summary of Redacted here.",
    sectionHeading: "The ocean at your fingertips",
    sectionText:
      "Placeholder — add the story of Redacted: the problem, what you designed, and what changed because of it.",
    device: "redacted",
    thumb: "redacted",
  },
];

export const featuredProjects = projects.filter((project) => !project.archive);
export const archiveProjects = projects.filter((project) => project.archive);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug);

// "Next" stays within the same group — featured steps through featured,
// archive through archive. Returns null at the end of a group, where the
// case study offers a link back home instead of wrapping around.
export const getNextProject = (slug) => {
  const project = getProjectBySlug(slug);
  const group = project?.archive ? archiveProjects : featuredProjects;
  const index = group.findIndex((p) => p.slug === slug);
  return group[index + 1] ?? null;
};
