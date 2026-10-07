import { useEffect, useState } from "react";

// Renders a case study's `sections` array (see data/projects.js for the
// block types). Each block is styled once here, so pages can take any shape
// while spacing and type stay consistent.

// Files in public/ are served under the site's base path (/Online-Portfolio/).
const asset = (path) => `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}${path}`;

const usePrefersReducedMotion = () => {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setReduced(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
};

const Caption = ({ children }) =>
  children ? (
    <figcaption className="mt-3 font-mono text-[.74rem] text-text-3">{children}</figcaption>
  ) : null;

// One image or video. Short `loop` clips (former GIFs) play silently on a
// loop like a GIF would; anything else gets player controls.
const Media = ({ item, className = "" }) => {
  const reduced = usePrefersReducedMotion();
  const style = { aspectRatio: `${item.width} / ${item.height}` };
  const classes = `block w-full h-auto rounded-[4px] border border-line bg-line ${className}`;

  if (item.src.endsWith(".mp4")) {
    const autoplay = item.loop && !reduced;
    return (
      <video
        src={asset(item.src)}
        poster={item.poster ? asset(item.poster) : undefined}
        width={item.width}
        height={item.height}
        style={style}
        className={classes}
        aria-label={item.alt}
        playsInline
        muted={item.loop}
        loop={item.loop}
        autoPlay={autoplay}
        controls={!autoplay}
        preload={item.loop ? "auto" : "none"}
      />
    );
  }

  return (
    <img
      src={asset(item.src)}
      alt={item.alt}
      width={item.width}
      height={item.height}
      style={style}
      loading="lazy"
      decoding="async"
      className={classes}
    />
  );
};

const FullSizeLink = ({ href }) => (
  <a
    href={asset(href)}
    target="_blank"
    rel="noreferrer"
    className="group text-text-2 hover:text-text-1 transition-colors"
  >
    Open full size{" "}
    <span className="inline-block transition-transform duration-300 group-hover:translate-x-[.15em] group-hover:-translate-y-[.15em]">
      ↗
    </span>
  </a>
);

const widths = {
  small: "max-w-[280px]",
  phone: "max-w-[360px]",
  narrow: "max-w-[720px]",
  wide: "max-w-full",
};

const blocks = {
  heading: ({ text }) => (
    <h2 className="text-[clamp(1.6rem,3.4vw,2.6rem)] leading-[1.08] tracking-[-.025em] font-normal max-w-[20ch] text-balance mt-[clamp(16px,4vw,48px)] first:mt-0">
      {text}
    </h2>
  ),

  // `text` is one paragraph, or a list of paragraphs.
  text: ({ text }) => (
    <div className="grid gap-4 max-w-[60ch] text-text-2 text-[1.1rem]">
      {[].concat(text).map((paragraph, i) => (
        <p key={i}>{paragraph.trim()}</p>
      ))}
    </div>
  ),

  // size: "wide" (default), "narrow", "phone" for portrait screens/video, or "small". fullSrc adds an "Open full size" link
  // for detailed diagrams.
  image: ({ size = "wide", caption, fullSrc, ...item }) => (
    <figure className={`w-full ${widths[size]}`}>
      <Media item={item} />
      {(caption || fullSrc) && (
        <Caption>
          {caption}
          {fullSrc && (
            <>
              {caption && " · "}
              <FullSizeLink href={fullSrc} />
            </>
          )}
        </Caption>
      )}
    </figure>
  ),

  // A row of images at equal height, each as wide as its proportions need.
  // Rows of narrow (phone) screens scroll sideways on small screens rather
  // than shrinking to unreadable.
  gallery: ({ items, caption }) => {
    const portrait = items.every((item) => item.height > item.width);
    return (
      <figure className="w-full">
        <div className={portrait ? "overflow-x-auto pb-2 -mx-[var(--pad)] px-[var(--pad)] min-[820px]:mx-0 min-[820px]:px-0 min-[820px]:overflow-visible" : ""}>
          <div className={`flex gap-[clamp(10px,1.6vw,20px)] ${portrait ? "w-max min-[820px]:w-full" : "flex-col min-[560px]:flex-row"}`}>
            {items.map((item) => (
              // Grow in proportion to aspect ratio so the row shares one
              // height — only once the row is laid out horizontally.
              <div
                key={item.src}
                className={
                  portrait
                    ? "w-[min(62vw,240px)] shrink-0 min-[820px]:w-auto min-[820px]:[flex:var(--ratio)_1_0%]"
                    : "min-[560px]:[flex:var(--ratio)_1_0%]"
                }
                style={{ "--ratio": item.width / item.height }}
              >
                <Media item={item} />
                {item.label && <Caption>{item.label}</Caption>}
              </div>
            ))}
          </div>
        </div>
        <Caption>{caption}</Caption>
      </figure>
    );
  },

  // Two versions side by side, e.g. an early prototype and the final one.
  compare: ({ before, after, caption }) => (
    // Portrait pairs (phone screens) are kept narrower so they don't tower
    <figure className={`w-full ${before.height > before.width ? "max-w-[600px]" : "max-w-[880px]"}`}>
      <div className="grid grid-cols-2 gap-[clamp(10px,1.6vw,20px)] items-start">
        {[before, after].map((item) => (
          <div key={item.src}>
            <Media item={item} />
            <Caption>{item.label}</Caption>
          </div>
        ))}
      </div>
      <Caption>{caption}</Caption>
    </figure>
  ),

  // Very wide diagrams (wireflows): shown at a readable height and scrolled
  // sideways.
  scroll: ({ caption, fullSrc, ...item }) => (
    <figure className="w-full">
      <div className="overflow-x-auto rounded-[4px] border border-line" tabIndex={0} aria-label={`${item.alt} — scroll sideways`}>
        <img
          src={asset(item.src)}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
          decoding="async"
          className="block h-[clamp(320px,48vw,560px)] w-auto max-w-none"
        />
      </div>
      <Caption>
        {caption ? `${caption} · ` : ""}Scroll sideways
        {fullSrc && (
          <>
            {" · "}
            <FullSizeLink href={fullSrc} />
          </>
        )}
      </Caption>
    </figure>
  ),

  // Tall full-page designs (wireframes, long pages): shown in a fixed-height
  // frame that scrolls vertically. data-lenis-prevent lets the mouse wheel
  // scroll the frame instead of the page's smooth scroller.
  page: ({ size = "narrow", caption, fullSrc, ...item }) => (
    <figure className={`w-full ${widths[size]}`}>
      <div
        data-lenis-prevent
        tabIndex={0}
        aria-label={`${item.alt} — scroll to see the whole page`}
        className={`${size === "small" ? "max-h-[min(60vh,480px)]" : "max-h-[clamp(420px,72vh,760px)]"} overflow-y-auto overscroll-contain rounded-[4px] border border-line bg-line`}
      >
        <img
          src={asset(item.src)}
          alt={item.alt}
          width={item.width}
          height={item.height}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto"
        />
      </div>
      <Caption>
        {caption ? `${caption} · ` : ""}Scroll to see the whole page
        {fullSrc && (
          <>
            {" · "}
            <FullSizeLink href={fullSrc} />
          </>
        )}
      </Caption>
    </figure>
  ),

  // "My role" / "Results" summary at the top of a case study: two short
  // labelled lists side by side.
  summary: ({ role, results }) => (
    <div className="w-full grid grid-cols-1 min-[620px]:grid-cols-2 gap-x-[clamp(32px,6vw,96px)] gap-y-8 border-y border-line py-[clamp(24px,3vw,36px)]">
      {[
        ["My role", role],
        ["Results", results],
      ]
        .filter(([, items]) => items?.length)
        .map(([label, items]) => (
          <div key={label}>
            <div className="font-mono text-[.7rem] tracking-[.06em] uppercase text-text-3 mb-3">{label}</div>
            <ul className="grid gap-1.5 text-text-1 text-[1rem] leading-[1.45]">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  ),

  list: ({ items }) => (
    <ul className="grid gap-3 max-w-[60ch] text-text-2 text-[1.1rem] list-disc pl-[1.2em] marker:text-text-3">
      {items.map((item, i) => (
        <li key={i} className="pl-1">
          {item}
        </li>
      ))}
    </ul>
  ),

  quote: ({ text, attribution }) => (
    <blockquote className="max-w-[40ch] my-[clamp(8px,2vw,24px)]">
      <p className="text-[clamp(1.35rem,2.6vw,1.9rem)] leading-[1.25] tracking-[-.015em] text-balance">
        “{text}”
      </p>
      {attribution && (
        <footer className="mt-3 font-mono text-[.74rem] text-text-3">- {attribution}</footer>
      )}
    </blockquote>
  ),
};

export const CaseStudySections = ({ sections }) => (
  // minmax(0, 1fr) stops wide content (the scroll block) stretching the column
  <div className="grid grid-cols-[minmax(0,1fr)] gap-[clamp(28px,4vw,48px)] justify-items-start">
    {sections.map((section, i) => {
      const Block = blocks[section.type];
      return Block ? <Block key={i} {...section} /> : null;
    })}
  </div>
);
