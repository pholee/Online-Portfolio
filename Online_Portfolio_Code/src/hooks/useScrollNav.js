import { useNavigate, useLocation } from "react-router";
import { useLenis, SCROLL_EASE } from "../context/LenisContext";

export const useScrollNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const lenisRef = useLenis();

  return (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }
    if (id === "#home") {
      // "Home" means the very top of the page, not the #home section's own
      // element position — that section sits just below the sticky header
      // in normal flow, so scrolling to it leaves the header awkwardly
      // overlapping the hero's first line instead of a clean top.
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(0, SCROLL_EASE);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    // getElementById rather than querySelector — project slugs like
    // "2d-platformer-game" start with a digit, which isn't a valid CSS id
    // selector.
    const el = document.getElementById(id.replace(/^#/, ""));
    if (!el) return;
    if (lenisRef?.current) {
      // Lenis 1.3's scrollTo doesn't resolve CSS-selector strings — pass the
      // resolved element itself.
      lenisRef.current.scrollTo(el, SCROLL_EASE);
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
};
