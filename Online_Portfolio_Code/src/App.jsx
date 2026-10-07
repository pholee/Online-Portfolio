import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation, useNavigate, useNavigationType } from "react-router";
import { getHomeScroll, saveHomeScroll } from "./hooks/homeScroll";
import { LenisContext, useLenis } from "./context/LenisContext";
import { Home } from "./components/content/Home";
import { Projects } from "./components/content/Projects";
import { Archive } from "./components/content/Archive";
import { About } from "./components/content/About";
import { Footer } from "./components/content/Footer";
import { CaseStudy } from "./components/content/CaseStudy";

function MainPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const lenisRef = useLenis();

  // Remember how far down the homepage the visitor is, so coming back from a
  // case study can return them to exactly the same spot. Only recorded while
  // the homepage is showing (the hash check ignores the scroll reset that
  // happens as a case study opens).
  useEffect(() => {
    const onScroll = () => {
      if (window.location.hash.replace(/^#/, "") === "/" || window.location.hash === "") {
        saveHomeScroll(window.scrollY);
      }
    };
    // Also capture the exact position at the moment a case study is opened,
    // so it never depends on the last scroll event having fired.
    const onClick = (e) => {
      if (e.target.closest?.('a[href*="#/work/"]')) saveHomeScroll(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  useEffect(() => {
    const state = location.state;
    const savedY = getHomeScroll();
    // Coming back via a case study's back arrow / Esc (restoreScroll), or the
    // browser's back button (POP).
    const returning = state?.restoreScroll || navigationType === "POP";
    if (!returning && !state?.scrollTo) return;

    // Scroll instructions are one-offs. The browser keeps history state across
    // reloads, so clear it once used — otherwise every reload would jump
    // somewhere other than the top.
    if (state) navigate(location.pathname, { replace: true, state: null });

    const lenis = lenisRef?.current;
    // Lenis's content ResizeObserver is debounced, so right after a route swap
    // (short case-study page -> tall MainPage) its cached scroll limit is
    // still the old, shorter one — scrollTo would clamp short of the target.
    // Force a synchronous recalculation first.
    lenis?.resize();

    if (returning && savedY !== null) {
      // Back to exactly where they were.
      if (lenis) lenis.scrollTo(savedY, { immediate: true });
      else window.scrollTo(0, savedY);
      return;
    }

    // No remembered position (e.g. the case study was opened from a shared
    // link): fall back to that project's row. getElementById rather than
    // querySelector, since slugs like "2d-platformer-game" aren't valid CSS
    // id selectors.
    const el = state?.scrollTo && document.getElementById(state.scrollTo.replace(/^#/, ""));
    if (!el) return;
    const offset = -Math.round(window.innerHeight * 0.15);
    // Lenis 1.3's scrollTo doesn't resolve CSS-selector strings — pass the
    // resolved element itself.
    if (lenis) lenis.scrollTo(el, { immediate: true, offset });
    else window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + offset);
  }, [location, navigate, navigationType, lenisRef]);

  return (
    <>
      <Home />
      <Projects />
      <Archive />
      <About />
      <Footer />
    </>
  );
}

function App() {
  const lenisRef = useRef(null);
  const location = useLocation();
  const navigationType = useNavigationType();

  // Smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll on route change — Lenis keeps its own scroll position, so a
  // plain window.scrollTo(0,0) gets fought/overridden on the next frame unless
  // Lenis itself is told to reset. Keyed on pathname only (not all of location)
  // so returning to MainPage with a project to scroll to (location.state)
  // isn't also forced back to the top first.
  useEffect(() => {
    if (location.state?.scrollTo || location.state?.restoreScroll) return;
    // Browser back to the homepage: MainPage restores the saved position.
    if (navigationType === "POP" && location.pathname === "/" && getHomeScroll() !== null) return;
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      <main className="min-h-screen overflow-x-clip px-[var(--pad)]">
        <div className="max-w-[var(--container)] mx-auto">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/work/:slug" element={<CaseStudy />} />
          </Routes>
        </div>
      </main>
    </LenisContext.Provider>
  );
}

export default App;
