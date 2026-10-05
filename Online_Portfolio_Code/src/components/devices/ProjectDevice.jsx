import { Combo, Laptop, Pair, Phone, Screenshot } from "./Device";
import { AliaScreen, RedactedScreen } from "./Screens";

// Keyed by each project's `device` field in data/projects.js. Screenshots live
// in public/work/<slug>/; AliaLavery.com and Redacted have no screenshots yet,
// so they show hand-built placeholder screens (Screens.jsx).
const devices = {
  koffee: () => (
    <Combo
      laptop={<Screenshot src="work/koffeekickstart-net/home.webp" alt="koffeekickstart.net home page" position="top" />}
      phone={<Screenshot src="work/koffeekickstart-net/mobile-checklist.webp" alt="koffeekickstart.net onboarding checklist on mobile" fit="contain" background="#fff" />}
    />
  ),
  hoomanz: () => (
    <Combo
      laptop={<Screenshot src="work/hoomanz-game/landing-desktop.webp" alt="hoomanz.game landing page on desktop" position="top" />}
      phone={<Screenshot src="work/hoomanz-game/landing-mobile.webp" alt="hoomanz.game landing page on mobile" fit="top" background="#000" />}
    />
  ),
  portfolio: () => (
    <Laptop>
      <Screenshot src="work/this-portfolio/code-editor.webp" alt="This portfolio's source code open in VS Code" position="top" />
    </Laptop>
  ),
  platformer: () => (
    <Laptop>
      <Screenshot src="work/2d-platformer-game/forest.webp" alt="The forest level of the Little Red Riding Hood platformer" />
    </Laptop>
  ),
  alia: () => (
    <Laptop>
      <AliaScreen />
    </Laptop>
  ),
  starCity: () => (
    <Phone landscape>
      <Screenshot src="work/star-city/environment.webp" alt="Star City's town square with the in-game HUD" />
    </Phone>
  ),
  interior: () => (
    <Pair
      first={<Screenshot src="work/interior-designer/screen-1.webp" alt="Interior Designer: a customer's brief" fit="blur" />}
      second={<Screenshot src="work/interior-designer/screen-5.webp" alt="Interior Designer: the customer review" fit="blur" />}
    />
  ),
  redacted: () => (
    <Laptop>
      <RedactedScreen />
    </Laptop>
  ),
};

export const ProjectDevice = ({ device }) => devices[device]?.() ?? null;

// Placeholder square artwork for archive projects without an image yet.
const thumbs = {
  moodboard: () => (
    <div className="a-mood">
      <i></i>
      <i></i>
      <i></i>
    </div>
  ),
  redacted: () => (
    <div className="a-redact">
      <em>REDACTED</em>
    </div>
  ),
};

// `thumb` is either an image path (relative to public/) or a placeholder name.
export const ProjectThumb = ({ thumb }) => {
  if (thumbs[thumb]) return thumbs[thumb]();
  return (
    <img
      src={`${import.meta.env.BASE_URL.replace(/\/?$/, "/")}${thumb}`}
      alt=""
      width="800"
      height="800"
      loading="lazy"
      decoding="async"
      className="w-full h-full object-cover"
    />
  );
};
