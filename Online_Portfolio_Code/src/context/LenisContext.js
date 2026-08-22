import { createContext, useContext } from "react";

// Holds a ref to the single Lenis instance created in App.jsx. Anywhere that
// needs to scroll the page (nav links, buttons, route-change resets) should
// go through lenis.scrollTo(...) rather than window.scrollTo/scrollIntoView —
// Lenis tracks its own internal scroll position, and native scroll calls it
// doesn't know about get fought/overridden on the next animation frame.
export const LenisContext = createContext(null);

export const useLenis = () => useContext(LenisContext);

// Lenis's own documented example easing (sine ease-out) — shared so every
// nav-triggered scroll animates the same way.
export const SCROLL_EASE = {
  duration: 1,
  easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
};
