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
    { type: "image", src, alt, width, height, caption?, size?: "wide" | "narrow" | "phone" | "small",
      fullSrc? }                           fullSrc adds an "Open full size" link
    { type: "gallery", items: [{ src, alt, width, height, label? }], caption? }
                                           one row at equal height
    { type: "compare", before: { …, label }, after: { …, label }, caption? }
    { type: "scroll", src, alt, width, height, caption?, fullSrc? }
                                           very wide diagrams, scrolled sideways
    { type: "page", src, alt, width, height, caption?, fullSrc?, size? }
                                           very tall pages, scrolled within a frame
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
      "An in-house onboarding platform I designed and built for Koffeecup, giving every new hire the same start.",
    intro:
      "Koffeecup is an interactive studio of 50+ people working across the UK, Poland and France. I designed and built koffeekickstart.net, an onboarding platform that gave every new hire the same start, whichever team they joined.",
    sections: [
      {
        type: "summary",
        role: [
          "Ran discovery research with recent hires.",
          "Designed the wireframes and UI in Figma.",
          "Built the site in React, integrated with Notion, HiBob and Google.",
        ],
        results: [
          "Every new starter followed one onboarding path, across three countries.",
          "HR was notified automatically whenever onboarding was completed.",
        ],
      },
      { type: "heading", text: "A new starter's first month depended on which team they joined" },
      {
        type: "text",
        text: [
          "Koffeecup had a known problem with staff turnover, with 30% of new hires leaving within their first month. Onboarding had never been standardised - each department lead was trusted to run their own, so what a new starter learnt, and when, varied from team to team.",
          "HR asked me to design and build an in-house platform to support new hires. It needed to bring onboarding into one place - introducing past products, setting out the logins and tech each person needed, and pointing people to their department's tutorials - while feeling branded and stylish enough to reflect the studio. Integration with Notion, HiBob and Google was a must, so the company could pull all of its information together.",
        ],
      },
      { type: "heading", text: "Starting with the people it was for" },
      {
        type: "text",
        text:
          "Before designing anything, I ran a short survey with four recent hires, asking what they wished they'd had in their first weeks. With such a small sample, it served as a quick discovery step rather than conclusive research - given more time, I would have followed up with interviews in each department and country. Even so, three needs came up consistently:",
      },
      {
        type: "list",
        items: [
          "A single onboarding checklist, so tasks could be tracked in one place rather than pieced together from emails and Slack messages.",
          "A clear reading list from Notion, so new starters knew which of Koffeecup's hundreds of documents were relevant to them.",
          "A way to get to know their teammates - who they would be working with, and who was nearby, in a company spread across three countries.",
        ],
      },
      { type: "heading", text: "Each need became a page" },
      {
        type: "text",
        text: [
          "Building on the survey, I turned each need into its own page - Checklist, Documents and Team - alongside an HR page holding each new starter's personal details, role and office.",
          "HR's brief only asked for an onboarding website with integration, so the structure, design and build were my own decisions. I wireframed the site in Figma before building it in React, connecting it to Notion, HiBob and Google so it drew on the systems the company already used. HR reviewed the platform as it came together.",
        ],
      },
      { type: "heading", text: "The outcome" },
      {
        type: "text",
        text: [
          "All three needs from the survey shipped as pages on the platform. As a result, every new starter followed the same onboarding path, and HR received an email whenever someone completed it - giving them visibility of every step along the way.",
          "When I presented the platform to my line manager, they described the integration as beyond expectation and said they were looking forward to using it.",
        ],
      },
      { type: "heading", text: "What I'd measure" },
      {
        type: "text",
        text:
          "The platform had not been running long enough to measure its impact. To judge whether it worked, I would track:",
      },
      {
        type: "list",
        items: [
          "First-month turnover, against the 30% of new hires who were leaving before the platform existed.",
          "Checklist completion rate - how many new starters finished every task.",
          "Time to complete onboarding, from first login to the final checklist item.",
          "A short survey at the end of each new starter's first month, repeating the discovery questions to see whether the original needs had been met.",
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
      "A launch redesign for Koffeecup's first in-house game, and a web app that took its Gamescom competition online.",
    intro:
      "Hoomanz is Koffeecup's first in-house game - a short, cosy puzzle platformer about a small creature called Shoo. I redesigned hoomanz.game for launch and designed the web app that brought its Gamescom 2025 competition to players at home.",
    sections: [
      {
        type: "summary",
        role: [
          "Redesigned the site's structure, navigation and responsive layout.",
          "Designed the UX for the competition web app.",
          "Worked with the developers throughout the build.",
        ],
        results: [
          "The competition received around 120 entries, three-quarters through the web app.",
          "All five shortlisted designs were submitted online after Gamescom 2025.",
          "The site linked players to all six launch storefronts.",
        ],
      },
      { type: "heading", text: "A launch site that had to work on every screen" },
      {
        type: "text",
        text: [
          "In Hoomanz, players control Shoo, a small creature shooing away the hoomanz invading their planet. For the game's launch, I redesigned hoomanz.game alongside Koffeecup's Marketing Lead. They made the main calls on content - launch links, new information about the game including trailers, and space for community events - while I redesigned the site itself.",
          "The previous site was difficult to navigate and wasn't responsive on mobile, so both became the starting point for the redesign.",
        ],
      },
      { type: "heading", text: "Navigation and layout" },
      {
        type: "text",
        text:
          "I introduced a new navigation header and designed the layout responsively from the start. Two developers built the site, and I worked with them on and off throughout to get the details right at each screen size. The launch links point players to all six storefronts: Steam, PlayStation 5, Xbox, Nintendo Switch, the Epic Games Store and macOS.",
      },
      {
        type: "page",
        src: "work/hoomanz-game/wireframe-desktop.webp",
        alt: "Desktop wireframe of the redesigned hoomanz.game homepage, from the navigation header and launch links through the trailer, game features and team section",
        width: 1400,
        height: 7990,
        caption: "Desktop homepage wireframe",
        size: "small",
        fullSrc: "work/hoomanz-game/wireframe-desktop-full.webp",
      },
      {
        type: "text",
        text:
          "The site also leans into the game's personality, with micro-animations throughout and a live scare counter that tallies every time a player scares a hooman in-game - and it really does update.",
      },
      { type: "heading", text: "Taking a Gamescom competition online" },
      {
        type: "text",
        text: [
          "To build hype for launch, Koffeecup ran a competition at Gamescom 2025, inviting visitors to design their own version of Shoo. The winning design would be added to the game as an unlockable outfit.",
          "Koffeecup also wanted the competition to reach players beyond the event. With that in mind, I designed an embedded web app on hoomanz.game that gathered every entry in one place for judging, and let anyone take part from the show floor or from home:",
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
      {
        type: "gallery",
        items: [
          {
            src: "work/hoomanz-game/gamescom-scanning.webp",
            alt: "A visitor at Gamescom 2025 holding a coloured-in Hoomanz character sheet and scanning it with their phone",
            width: 2000,
            height: 1125,
            label: "Scanning a character sheet at Gamescom 2025",
          },
          {
            src: "work/hoomanz-game/shoo-app.mp4",
            alt: "The hoomanz.game web app on a phone, capturing a coloured-in Shoo character sheet",
            width: 720,
            height: 720,
            loop: true,
            label: "Instructional video",
          },
        ],
      },
      {
        type: "text",
        text:
          "At Gamescom, visitors used the scanner on their own phones, while players at home entered through the same app.",
      },
      { type: "heading", text: "Working within constraints" },
      {
        type: "text",
        text:
          "I proposed giving community events and competitions their own tabs, so they could grow independently of the launch content. However, time and budget didn't allow for it, so they live in a dedicated section on the homepage instead.",
      },
      {
        type: "page",
        src: "work/hoomanz-game/wireframe-community.webp",
        alt: "Wireframe of a dedicated Community page with a Discord link, the scare count, community-made skins, speedruns and the blog",
        width: 1400,
        height: 4238,
        caption: "Community page wireframe",
        size: "small",
        fullSrc: "work/hoomanz-game/wireframe-community-full.webp",
      },
      { type: "heading", text: "The outcome" },
      {
        type: "text",
        text: [
          "The redesigned site went live for the game's launch, with clearer navigation, a layout that works on phones, and a way for players anywhere to enter the competition.",
          "The competition received around 120 submissions. Only 30 came from Gamescom itself - around 90, three-quarters of the total, came through the web app, and all five designs on the final shortlist were submitted online.",
        ],
      },
    ],
    device: "hoomanz",
  },

  {
    slug: "star-city",
    title: "Star City",
    projectType: "User experience",
    year: "2025",
    tools: ["Figma", "Wireframing"],
    linkLabel: "Play in Meta Horizon Worlds",
    linkHref: "https://horizon.meta.com/world/1210055420890187/?hwsh=JyKmhJIgPZ",
    teaser:
      "Adapting a cosy VR life-sim on Meta Horizon Worlds into a game that feels at home on a phone.",
    intro:
      "Star City is a cosy life-sim on Meta Horizon Worlds. Originally built for VR, it needed to become mobile-first - I redesigned its menus, controls and mini-games for touch.",
    sections: [
      {
        type: "summary",
        role: [
          "Designed the VR controller mapping flow and redesigned the VR onboarding.",
          "Took over the mobile UX, redesigning flows, menus, controls and mini-games.",
          "Took part in weekly playtests with the team.",
        ],
        results: [
          "Star City is live on mobile on Meta Horizon Worlds.",
          "Players aged 14-16 voted its environment the most visually appealing and easiest to understand, against around five top-performing games on the platform.",
        ],
      },
      {
        type: "heading",
        text: "From VR to mobile-first",
      },
      {
        type: "text",
        text: [
          "I joined Star City towards the end of its VR lifecycle and inherited the existing VR screens. In that final stretch, I designed the controller mapping flow and redesigned the VR onboarding, before taking over the mobile work.",
          "From there, the task was to review the existing flows and wireframes, add the affordances mobile players needed, and update the design to suit a phone screen.",
        ],
      },
      {
        type: "heading",
        text: "Reviewing the flows",
      },
      {
        type: "text",
        text: "Interfaces built for VR can assume a player who looks around freely and points with a controller. On a phone, every action has to be clear at a glance and reachable with a thumb on a much smaller screen. I worked through the game's existing flows - the HUD and its menus, and systems such as player needs and constellations - to find where interactions would break down on touch.",
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
        caption: "VR HUD - navigation map",
      },
      {
        type: "image",
        src: "work/star-city/vr-hud-menu.webp",
        alt: "VR HUD bottom menu navigation flows",
        width: 2400,
        height: 1496,
        fullSrc: "work/star-city/vr-hud-menu-full.webp",
        caption: "VR HUD - bottom menu flows",
      },
      {
        type: "heading",
        text: "Redesigning menus for touch",
      },
      {
        type: "text",
        text: [
          "In VR, menus floated in space or sat within the game world itself, and many actions were mapped to the controller's physical buttons. A phone has no such buttons, so every action needed something on screen to tap.",
          "I remapped the controls to on-screen buttons, redesigned the menus for tap and swipe, and moved key menus to full screen - a pattern that works on a phone but would feel uncomfortable in VR. I also made interactive items larger and added more visual feedback. In VR, that level of feedback would disorient players; on a small screen, it makes clear what can be tapped and what has just happened.",
        ],
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
      { type: "heading", text: "Rethinking the mini-games" },
      {
        type: "text",
        text:
          "Some mini-games relied on physical motion. Sweeping and cleaning worked by moving the controllers in VR, which has no equivalent on a phone. Rather than port it across, I designed a new timed mini-game for mobile to keep that moment of delight.",
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
      { type: "heading", text: "Testing with players" },
      {
        type: "text",
        text:
          "We held weekly half-hour playtest sessions throughout development. Before launch, Star City was also tested with its target audience - around 10 players aged 14-16 compared it with around five other top-performing games on the platform, and voted its environment the most visually appealing and the easiest to understand.",
      },
      { type: "heading", text: "The outcome" },
      {
        type: "text",
        text:
          "Star City is now live on mobile on Meta Horizon Worlds.",
      },
      { type: "heading", text: "What I learned" },
      {
        type: "text",
        text:
          "I was surprised by how different the affordances are. In VR, we wanted players to feel they could grab anything, just as in real life. On mobile, the same game needed larger items, a button for every action, full-screen menus and more visual feedback. Adapting it meant rethinking the interactions themselves, not just resizing the screens.",
      },
    ],
    device: "starCity",
  },

  // ---------- Archive ----------
   /*
  {
    slug: "redacted",
    archive: true,
    title: "Redacted",
    projectType: "Experiential",
    year: "2027",
    tools: ["Figma", "Wireframing"],
    intro: "Placeholder - add a one or two sentence summary of Redacted here.",
    sections: [
      {
        type: "heading",
        text: "The ocean at your fingertips",
      },
      {
        type: "text",
        text: "Placeholder - add the story of Redacted: the problem, what you designed, and what changed because of it.",
      },
    ],
    device: "redacted",
    thumb: "redacted",
  },
  */
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
    slug: "interior-designer",
    archive: true,
    title: "Interior Designer",
    projectType: "User experience",
    year: "2026",
    tools: ["Figma", "Wireframing"],
    intro:
      "Interior Designer is a short, 20-minute decorating game on Meta Horizon Worlds. Players earn furniture through a gacha-style system while decorating rooms for a cast of quirky clients. I was the main designer on the project.",
    sections: [
      {
        type: "summary",
        role: [
          "Led the design, from brief to final game.",
          "Produced the wireframes and the wireflow for the project kickoff.",
          "Prototyped and refined the room customisation system.",
        ],
        results: [
          "Interior Designer is live on Meta Horizon Worlds.",
          "The team delivered a polished game on a tight turnaround of around two months.",
        ],
      },
      { type: "heading", text: "From brief to wireflow" },
      {
        type: "text",
        text: [
          "I started on the project with one game designer and the brief. Working from references to other games, I built up wireframes and worked with the game designer to iron out early UX issues, such as how the game economy would work.",
          "After a week of collaboration, this became a wireflow for the creative director to review, and the starting point for the project kickoff with the wider team.",
        ],
      },
      {
        type: "image",
        src: "work/interior-designer/title-art.webp",
        alt: "Interior Designer title art: the game's cast of customers in a furnished room",
        width: 2400,
        height: 1350,
      },
      { type: "heading", text: "The core loop" },
      {
        type: "gallery",
        caption: "The core loop, from a client's brief to their review",
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
      { type: "heading", text: "Iterating on moving furniture" },
      {
        type: "text",
        text: [
          "The goal of the prototypes was to find what felt and looked best when moving furniture. The first version was clunky, with a large 3D bounding box around each item. Since items couldn't be stacked, the full box wasn't needed, so I confined the placement grid to the floor.",
          "Overlapping items were also hard to notice on a static model, so I added a slight animation and an alert pip to flag them. I spotted these issues in my own testing and while working with the developers as they brought the initial wireflow into the game, alongside our weekly half-hour playtest sessions.",
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
        type: "text",
        text:
          "Many smaller refinements then added up to a smooth final experience:",
      },
      {
        type: "list",
        items: [
          "Deciding what happens to a misplaced item when the inventory is opened and another item is placed.",
          "Working around edge cases in item placement.",
          "Manually tuning the camera's speed while dragging items.",
        ],
      },
      { type: "heading", text: "The final game" },
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
      "A short, story-driven platformer retelling Little Red Riding Hood, built solo in Java. I set myself the brief of shipping one complete, playable level with its own art direction, rather than a tech demo.",
    sections: [
      {
        type: "summary",
        role: [
          "Designed and developed the game.",
          "Built it solo in Java.",
        ],
        results: [
          "The game was completed with player movement, simple mechanics and music.",
          "All of the 2D pixel art was hand-drawn and edited.",
        ],
      },
    ],
    device: "platformer",
    thumb: "work/2d-platformer-game/thumb.webp",
  },
  {
    slug: "this-portfolio",
    archive: true,
    title: "This Portfolio",
    projectType: "Web development",
    year: "2024",
    tools: ["React", "JavaScript", "Tailwind CSS", "Figma"],
    linkLabel: "View on GitHub",
    linkHref: "https://github.com/pholee/Online-Portfolio",
    intro:
      "A ground-up rebuild of this site: fewer components, one consistent accent system, and a lot more negative space. Every section pulls from the same small set of tokens rather than being styled screen by screen.",
    sections: [
      {
        type: "summary",
        role: [
          "Designed the UX and developed the site.",
        ],
        results: [
          "The site is a working build in React and JavaScript, styled with Tailwind CSS.",
          "It has been updated, redesigned and refined over two years.",
        ],
      },
    ],
    device: "portfolio",
    thumb: "work/this-portfolio/thumb.webp",
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
