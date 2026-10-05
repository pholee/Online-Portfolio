/*
  `year` shows alongside the project type; projects with `isSoon` read
  "Coming <year>".
  `device` picks the laptop/phone mockup shown on the homepage and case study
  (see components/devices/ProjectDevice.jsx). Archive projects also set
  `thumb`, their square image in the archive grid: a path relative to public/
  (e.g. "work/<slug>/thumb.webp"), or the name of a placeholder artwork.

  `sections` is the case study body, rendered top to bottom by
  components/content/CaseStudySections.jsx. Add, remove or reorder blocks
  freely. Media paths are relative to public/ (put files in public/work/<slug>/).

    { type: "heading", text }
    { type: "text", text }                 one paragraph, or [paragraph, …]
    { type: "list", items: [text, …] }     bullet points
    { type: "image", src, alt, width, height, caption?, size?: "wide" | "narrow" | "phone",
      fullSrc? }                           fullSrc adds an "Open full size" link
    { type: "gallery", items: [{ src, alt, width, height, label? }], caption? }
                                           one row at equal height
    { type: "compare", before: { …, label }, after: { …, label }, caption? }
    { type: "scroll", src, alt, width, height, caption?, fullSrc? }
                                           very wide diagrams, scrolled sideways
    { type: "quote", text, attribution? }

  `width` / `height` are the file's pixel size (they keep the layout steady
  while it loads). .mp4 files play as video — add `loop: true` for short
  silent clips that should play like a GIF, or `poster` for a still frame.
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
      "An in-house onboarding platform that standardised how Koffeecup welcomed new hires, from a staff survey to a working React build.",
    intro:
      "An in-house onboarding platform that standardised how Koffeecup welcomed new hires across the UK, Poland and France — from a staff survey and Figma wireframes to a React build integrated with Notion, HiBob and Google.",
    sections: [
      { type: "heading", text: "The problem" },
      {
        type: "text",
        text: [
          "Koffeecup had a known problem with staff turnover: [X% of] new hires were leaving within their first month. Onboarding had never been standardised — each department lead was trusted to run their own, so what a new starter learnt, and when, depended entirely on which team they joined.",
          "HR asked me to design and build an in-house platform to support new hires. The brief was to standardise onboarding across the company — introducing past products, setting out the logins and tech each person needed, and pointing people to their department's tutorials — in something branded and stylish enough to reflect the studio. It also had to integrate with Notion, HiBob and Google, so the company's information could be pulled together in one place.",
        ],
      },
      { type: "heading", text: "Asking new starters what was missing" },
      {
        type: "text",
        text:
          "Before designing anything, I ran a short survey of [X] recent hires, asking what they wished they'd had in their first weeks. Three needs stood out:",
      },
      {
        type: "list",
        items: [
          "A single onboarding checklist, so tasks could be tracked in one place rather than pieced together from emails and Slack messages.",
          "A clear reading list from Notion, so new starters knew which of Koffeecup's hundreds of documents were relevant to them.",
          "A way to get to know their teammates — who they would be working with, and who was nearby, in a company spread across the UK, Poland and France.",
        ],
      },
      {
        type: "image",
        src: "work/koffeekickstart-net/home.webp",
        alt: "koffeekickstart.net home page: a \"Kickstarting your journey\" welcome with illustrated Koffeecup team characters",
        width: 2400,
        height: 1535,
        caption: "Home — the welcome page new starters land on",
      },
      { type: "heading", text: "From wireframes to a working build" },
      {
        type: "text",
        text:
          "Each need became its own page — Checklist, Documents and Team — alongside an HR page holding each new starter's personal details, role and office. I designed the wireframes in Figma, then built the site in React, integrating it with Notion, HiBob and Google so it drew on the systems the company already used.",
      },
      {
        type: "image",
        src: "work/koffeekickstart-net/hr.webp",
        alt: "koffeekickstart.net HR page showing a new starter's personal details, role and office",
        width: 2400,
        height: 1481,
        caption: "HR — personal details, role and office in one place (contact details hidden)",
      },
      { type: "heading", text: "The outcome" },
      {
        type: "text",
        text: [
          "All three needs from the survey shipped as pages on the live platform. Every new starter now follows the same onboarding path, and HR is notified when someone completes it, giving the team visibility of every step along the way.",
          "[Add the impact here if you have it — e.g. X new starters onboarded since launch, or the change in first-month turnover.]",
        ],
      },
    ],
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
      "A launch redesign for Koffeecup's game Hoomanz, including a web app that let players design their own outfit for its hero, Shoo.",
    intro:
      "A launch redesign of hoomanz.game for Koffeecup's puzzle platformer — new navigation, a responsive layout, and an embedded web app that brought a Gamescom 2025 character competition to players everywhere.",
    sections: [
      { type: "heading", text: "The brief" },
      {
        type: "text",
        text: [
          "Hoomanz is a short, cosy puzzle platformer — around three hours long — in which players control Shoo, a small creature shooing away the hoomanz invading their planet. For the game's launch, Koffeecup asked me to redesign hoomanz.game: adding launch links, new information about the game including trailers, and space for community events.",
          "The existing site had difficult navigation and didn't adapt to mobile screens, so the redesign started from both.",
        ],
      },
      { type: "heading", text: "Navigation that works on every screen" },
      {
        type: "text",
        text:
          "I introduced a new navigation header and designed the layout responsively from the start, working closely with two developers and iterating back and forth to resolve the details at each screen size. The launch links point players to all six storefronts: Steam, PlayStation 5, Xbox, Nintendo Switch, the Epic Games Store and macOS.",
      },
      {
        type: "gallery",
        caption: "Landing page on desktop and mobile",
        items: [
          {
            src: "work/hoomanz-game/landing-desktop.webp",
            alt: "Hoomanz landing page on desktop, with the game logo over key art of the characters",
            width: 1982,
            height: 1281,
          },
          {
            src: "work/hoomanz-game/landing-mobile.webp",
            alt: "Hoomanz landing page on mobile, listing the platforms the game is available on",
            width: 766,
            height: 1510,
          },
        ],
      },
      {
        type: "text",
        text:
          "The site also leans into the game's personality, with micro-animations throughout and a live scare counter that tallies every time a player scares a hooman in-game — and yes, it really updates.",
      },
      { type: "heading", text: "Taking a Gamescom competition online" },
      {
        type: "text",
        text: [
          "To build hype for launch, Koffeecup ran a competition at Gamescom 2025 inviting visitors to design their own version of Shoo, with the winning design added to the game as an unlockable outfit.",
          "To open the competition to players beyond the event, I designed an embedded web app on hoomanz.game that let anyone take part from home:",
        ],
      },
      {
        type: "list",
        items: [
          "Print the character sheet.",
          "Colour in their own version of Shoo.",
          "Photograph the finished design.",
          "Preview it on a 3D model of Shoo before submitting.",
        ],
      },
      { type: "heading", text: "Working within constraints" },
      {
        type: "text",
        text:
          "I proposed giving community events and competitions their own tabs, so they could grow independently of the launch content. Time and budget didn't allow it, so they live in a dedicated section on the homepage instead.",
      },
      { type: "heading", text: "The outcome" },
      {
        type: "text",
        text: [
          "The redesigned site went live for the game's launch, with clearer navigation, a layout that works on phones, and a way for players everywhere to enter the character competition.",
          "The competition received around 120 submissions. Only 30 came from Gamescom itself; around 90, three-quarters of the total, came through the web app, and all five designs on the final shortlist were submitted online.",
        ],
      },
    ],
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
    sections: [
      {
        type: "heading",
        text: "One system, every section",
      },
      {
        type: "text",
        text: "Instead of a page-by-page redesign, this started as a token sheet — two neutrals, two accents, two typefaces, one spacing scale — and every component on the site pulls from the same handful of decisions.",
      },
    ],
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
    sections: [
      {
        type: "heading",
        text: "Designing a level like a scene",
      },
      {
        type: "text",
        text: "Each room was blocked out for pacing first — where the player should slow down, where a chase should start — before any art or enemy logic went in.",
      },
      {
        type: "image",
        src: "work/2d-platformer-game/forest.webp",
        alt: "The forest level: platforms over a pixel-art forest, with a pig to collect",
        width: 2000,
        height: 1257,
        caption: "The forest — platforming over the undergrowth",
      },
      {
        type: "gallery",
        items: [
          {
            src: "work/2d-platformer-game/title.webp",
            alt: "Title screen reading \"Little Red Riding Hood — Press any key to start\"",
            width: 2000,
            height: 1257,
            label: "Title screen",
          },
          {
            src: "work/2d-platformer-game/clearing.webp",
            alt: "A clearing with wolves near grandma's house, and a portal to the next area",
            width: 2000,
            height: 1257,
            label: "The clearing",
          },
        ],
      },
    ],
    device: "platformer",
    thumb: "work/2d-platformer-game/thumb.webp",
  },
  /*
  {
    slug: "alia-lavery-com",
    archive: true,
    isSoon: true,
    title: "AliaLavery.com",
    projectType: "Web development",
    year: "2027",
    tools: ["React", "Tailwind CSS", "Figma"],
    intro: "Coming soon.",
    sections: [
      {
        type: "heading",
        text: "From paper to product",
      },
      {
        type: "text",
        text: "An artist's portfolio, built to fit their style.",
      },
    ],
    device: "alia",
    thumb: "moodboard",
  },
  */
  {
    slug: "star-city",
    archive: true,
    title: "Star City",
    projectType: "User experience",
    year: "2025",
    tools: ["Figma", "Wireframing"],
    linkLabel: "Play in Horizon Worlds",
    linkHref: "https://horizon.meta.com/world/1210055420890187/?hwsh=JyKmhJIgPZ",
    intro:
      "UX for Star City, a cosy life-sim on Meta's Horizon Worlds — adapting a game built for VR into a mobile-first experience, with its menus redesigned for tap and swipe.",
    sections: [
      {
        type: "heading",
        text: "From VR to mobile-first",
      },
      {
        type: "text",
        text: [
          "Star City is a cosy life-sim game on Meta's Horizon Worlds platform. It began life as a VR game and had to be adapted into a mobile-first experience.",
          "I joined the project as its VR lifecycle was coming to an end. My task was to review the existing flows and wireframes, add the affordances mobile players needed, and update the design to suit a phone screen.",
        ],
      },
      {
        type: "image",
        src: "work/star-city/welcome.webp",
        alt: "Star City welcome screen over the player's new house, with daily career tasks",
        width: 1600,
        height: 736,
        caption: "Welcome — the first thing players see in their new home",
      },
      {
        type: "heading",
        text: "Reviewing the flows",
      },
      {
        type: "text",
        text: "Interfaces built for VR can assume a player who looks around freely and points with a controller. On a phone, every action has to be clear at a glance and reachable with a thumb on a much smaller screen. I worked through the game's existing flows — the HUD and its menus, and systems such as player needs and constellations — to find where interactions would break down or become unclear on touch.",
      },
      {
        type: "scroll",
        src: "work/star-city/needs-wireflow.webp",
        alt: "Wireflow of the needs, notification and player engagement systems",
        width: 6438,
        height: 1400,
        caption: "Needs system wireflow",
      },
      {
        type: "image",
        src: "work/star-city/vr-hud.webp",
        alt: "VR HUD navigation map",
        width: 2400,
        height: 1160,
        fullSrc: "work/star-city/vr-hud-full.webp",
        caption: "VR HUD — navigation map",
      },
      {
        type: "image",
        src: "work/star-city/vr-hud-menu.webp",
        alt: "VR HUD bottom menu navigation flows",
        width: 2400,
        height: 1496,
        fullSrc: "work/star-city/vr-hud-menu-full.webp",
        caption: "VR HUD — bottom menu flows",
      },
      {
        type: "image",
        src: "work/star-city/constellation-flows.webp",
        alt: "Star City constellation feature flows",
        width: 2400,
        height: 1604,
        fullSrc: "work/star-city/constellation-flows-full.webp",
        caption: "Constellation feature flows",
      },
      {
        type: "heading",
        text: "Redesigning menus for touch",
      },
      {
        type: "text",
        text: "The VR version relied on floating menus and diegetic menus — interfaces placed within the game world itself. I redesigned both for tap and swipe interactions, and added buttons and clearer affordances wherever an action had depended on VR controls, so players could see what was interactive and reach it comfortably on a phone.",
      },
      {
        type: "compare",
        caption: "HUD wireframe and the in-game HUD",
        before: {
          src: "work/star-city/hud-wireframe.webp",
          alt: "Greyscale HUD wireframe with placeholder tasks and controls",
          width: 1704,
          height: 788,
          label: "Wireframe",
        },
        after: {
          src: "work/star-city/environment.webp",
          alt: "The HUD in the game environment",
          width: 1600,
          height: 735,
          label: "In game",
        },
      },
      {
        type: "image",
        src: "work/star-city/fame.webp",
        alt: "The Fame screen: level 7 \"Star City Legend\" with unlockable cars and houses",
        width: 1226,
        height: 563,
        size: "narrow",
        caption: "Fame progression",
      },
    ],
    device: "starCity",
    thumb: "work/star-city/thumb.webp",
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
    sections: [
      {
        type: "heading",
        text: "Placeholder — Interior Designer headline",
      },
      {
        type: "text",
        text: "Placeholder — add the story of Interior Designer: the problem, what you designed, and what changed because of it.",
      },
      {
        type: "image",
        src: "work/interior-designer/title-art.webp",
        alt: "Interior Designer title art: the game's cast of customers in a furnished room",
        width: 2400,
        height: 1350,
      },
      {
        type: "gallery",
        caption: "The core loop, from a customer's brief to their review",
        items: [
          {
            src: "work/interior-designer/screen-1.webp",
            alt: "A customer, Baron Blanket, briefs the player on their living room",
            width: 810,
            height: 1440,
            label: "1 · Brief",
          },
          {
            src: "work/interior-designer/screen-2.webp",
            alt: "A customer reacting to the room with hearts and smiles as it is furnished",
            width: 810,
            height: 1440,
            label: "2 · Reaction",
          },
          {
            src: "work/interior-designer/screen-3.webp",
            alt: "Placing furniture from the inventory, grouped by category",
            width: 810,
            height: 1438,
            label: "3 · Inventory",
          },
          {
            src: "work/interior-designer/screen-4.webp",
            alt: "A lootbox reveal: \"You unboxed 5 items!\"",
            width: 810,
            height: 1440,
            label: "4 · Rewards",
          },
          {
            src: "work/interior-designer/screen-5.webp",
            alt: "The customer review screen with a rating and rewards",
            width: 810,
            height: 1440,
            label: "5 · Review",
          },
        ],
      },
      {
        type: "compare",
        caption: "Feedback when moving furniture, from first prototype to final",
        before: {
          src: "work/interior-designer/prototype-start.mp4",
          alt: "First prototype of the feedback shown while moving a bed in edit mode",
          width: 480,
          height: 880,
          loop: true,
          label: "First prototype",
        },
        after: {
          src: "work/interior-designer/prototype-final.mp4",
          alt: "Final prototype of the feedback shown while moving a bed in edit mode",
          width: 480,
          height: 882,
          loop: true,
          label: "Final",
        },
      },
      {
        type: "image",
        src: "work/interior-designer/gameplay.mp4",
        alt: "Gameplay recording of Interior Designer",
        width: 540,
        height: 930,
        size: "phone",
        poster: "work/interior-designer/gameplay-poster.webp",
        caption: "Gameplay walkthrough (5 min)",
      },
    ],
    device: "interior",
    thumb: "work/interior-designer/thumb.webp",
  },
  /*
  {
    slug: "redacted",
    archive: true,
    title: "Redacted",
    projectType: "Experiential",
    year: "2027",
    tools: ["Figma", "Wireframing"],
    intro: "Placeholder — add a one or two sentence summary of Redacted here.",
    sections: [
      {
        type: "heading",
        text: "The ocean at your fingertips",
      },
      {
        type: "text",
        text: "Placeholder — add the story of Redacted: the problem, what you designed, and what changed because of it.",
      },
    ],
    device: "redacted",
    thumb: "redacted",
  },
  */
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
