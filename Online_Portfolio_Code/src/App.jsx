import "./App.css";
import "./index.css";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router";
import { LenisContext, useLenis, SCROLL_EASE } from "./context/LenisContext";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navmenu } from "./components/Navmenu";
import { NavmenuMobile } from "./components/NavmenuMobile";
import { Marquee } from "./components/Marquee";
import { Home } from "./components/content/Home";
import { Projects } from "./components/content/Projects";
import { Contact } from "./components/content/Contact";
import { CaseStudy } from "./components/content/CaseStudy";

function MainPage() {
  const location = useLocation();
  const lenisRef = useLenis();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    // Called synchronously (no rAF/timeout deferral) — MainPage's own sections
    // are already in the DOM by the time this effect runs, since React commits
    // before effects fire.
    if (target === "#home") {
      // "Home" means the very top of the page, not the #home section's own
      // element position — see the same check in useScrollNav.js.
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, SCROLL_EASE);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    const el = document.querySelector(target);
    if (!el) return;
    if (lenisRef?.current) {
      // Lenis's content ResizeObserver is debounced, so right after a route
      // swap (short case-study page -> tall MainPage) its cached scroll limit
      // is still the old, shorter one — scrollTo would clamp short of the
      // target. Force a synchronous recalculation first.
      lenisRef.current.resize();
      // Lenis 1.3's scrollTo doesn't resolve CSS-selector strings — pass
      // the resolved element itself.
      lenisRef.current.scrollTo(el, SCROLL_EASE);
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location, lenisRef]);

  return (
    <>
      <Home />
      <Marquee />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lenisRef = useRef(null);
  const location = useLocation();

  {/* Smooth scrolling */}
  useEffect( () => {
    const lenis = new Lenis({ autoRaf: true })
    lenisRef.current = lenis

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  {/* Reset scroll on route change — Lenis keeps its own scroll position, so a
      plain window.scrollTo(0,0) gets fought/overridden on the next frame unless
      Lenis itself is told to reset. Keyed on pathname only (not all of location)
      so a nav link asking MainPage to scroll to an anchor via location.state
      isn't also forced back to the top first. */}
  useEffect(() => {
    if (location.state?.scrollTo) return;
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navmenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavmenuMobile menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
        </Routes>
      </div>
    </LenisContext.Provider>
  );
}

export default App;
