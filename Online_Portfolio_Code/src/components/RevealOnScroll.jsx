import { useEffect, useRef } from "react";

export const RevealOnScroll = ({children}) => {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Already in view at mount (e.g. a direct/cold load) — IntersectionObserver's
    // first callback can be delayed by layout still settling, so check synchronously too.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      node.classList.add("visible");
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("visible");
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}