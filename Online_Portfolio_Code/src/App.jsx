import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router";
import { LenisContext, useLenis } from "./context/LenisContext";
import { Home } from "./components/content/Home";
import { Projects } from "./components/content/Projects";
import { Archive } from "./components/content/Archive";
import { About } from "./components/content/About";
import { Footer } from "./components/content/Footer";
import { CaseStudy } from "./components/content/CaseStudy";

function MainPage() {
  const location = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    // Called synchronously (no rAF/timeout deferral) — MainPage's own sections
    // are already in the DOM by the time this effect runs, since React commits
    // before effects fire. getElementById rather than querySelector, since
    // slugs like "2d-platformer-game" aren't valid CSS id selectors.
    const el = document.getElementById(target.replace(/^#/, ""));
    if (!el) return;
    // Arriving back from a case study should land on that project straight
    // away, not animate down the whole page.
    const offset = -Math.round(window.innerHeight * 0.15);
    if (lenisRef?.current) {
      // Lenis's content ResizeObserver is debounced, so right after a route
      // swap (short case-study page -> tall MainPage) its cached scroll limit
      // is still the old, shorter one — scrollTo would clamp short of the
      // target. Force a synchronous recalculation first.
      lenisRef.current.resize();
      // Lenis 1.3's scrollTo doesn't resolve CSS-selector strings — pass
      // the resolved element itself.
      lenisRef.current.scrollTo(el, { immediate: true, offset });
    } else {
      window.scrollTo(0, el.getBoundingClientRect().top + window.scrollY + offset);
    }
  }, [location, lenisRef]);

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
    if (location.state?.scrollTo) return;
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
