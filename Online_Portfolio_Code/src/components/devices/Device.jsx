// Device mockups built from photographed frames (public/devices/*.webp). Each
// frame image has its screen cut out; whatever is passed as `children` shows
// through the hole. Coordinates are in the frame image's own pixels.

const asset = (path) => `${import.meta.env.BASE_URL.replace(/\/?$/, "/")}${path}`;

const FRAMES = {
  laptop: {
    src: "devices/laptop.webp",
    width: 2000,
    height: 1260,
    screen: { x: 236, y: 62, width: 1528, height: 951 },
  },
  phone: {
    src: "devices/phone.webp",
    width: 899,
    height: 2000,
    screen: { x: 39, y: 37, width: 820, height: 1926, radius: 108 },
  },
};

const pct = (value, total) => `${(value / total) * 100}%`;

const FrameImage = ({ frame }) => (
  <img
    src={asset(frame.src)}
    alt=""
    width={frame.width}
    height={frame.height}
    draggable="false"
    className="absolute inset-0 w-full h-full pointer-events-none select-none"
  />
);

// Laptop or upright phone with a rectangular screen — positioned purely in
// percentages, so it scales with its container.
const FlatDevice = ({ type, children }) => {
  const frame = FRAMES[type];
  const { screen } = frame;
  return (
    <div className="relative w-full" style={{ aspectRatio: `${frame.width} / ${frame.height}` }}>
      <div
        className="absolute overflow-hidden bg-black [container-type:inline-size]"
        style={{
          left: pct(screen.x, frame.width),
          top: pct(screen.y, frame.height),
          width: pct(screen.width, frame.width),
          height: pct(screen.height, frame.height),
          borderRadius: screen.radius
            ? `${pct(screen.radius, screen.width)} / ${pct(screen.radius, screen.height)}`
            : undefined,
        }}
      >
        {children}
      </div>
      <FrameImage frame={frame} />
    </div>
  );
};

// The upright phone frame turned on its side, with the screen content turned
// back so it reads the right way up.
const LandscapePhone = ({ children }) => {
  const { width, height, screen } = FRAMES.phone;
  return (
    <div className="relative w-full" style={{ aspectRatio: `${height} / ${width}` }}>
      <div
        className="absolute left-1/2 top-1/2 -rotate-90"
        style={{ width: pct(width, height), height: pct(height, width), translate: "-50% -50%" }}
      >
        <FlatDevice type="phone">
          <div
            className="absolute left-1/2 top-1/2 rotate-90 [container-type:inline-size]"
            style={{
              width: pct(screen.height, screen.width),
              height: pct(screen.width, screen.height),
              translate: "-50% -50%",
            }}
          >
            {children}
          </div>
        </FlatDevice>
      </div>
    </div>
  );
};

export const Laptop = ({ children }) => <FlatDevice type="laptop">{children}</FlatDevice>;

export const Phone = ({ landscape = false, children }) =>
  landscape ? <LandscapePhone>{children}</LandscapePhone> : <FlatDevice type="phone">{children}</FlatDevice>;

// Laptop with a phone tucked against its lower-right corner.
export const Combo = ({ laptop, phone }) => (
  <div className="relative pr-[13%] pb-[3%]">
    <Laptop>{laptop}</Laptop>
    <div className="absolute right-0 bottom-0 w-[23%]">
      <Phone>{phone}</Phone>
    </div>
  </div>
);

// Two phones side by side, the first raised slightly.
export const Pair = ({ first, second }) => (
  <div className="flex gap-[6%] justify-center items-end px-[10%]">
    <div className="w-[40%] mb-[8%]">
      <Phone>{first}</Phone>
    </div>
    <div className="w-[40%]">
      <Phone>{second}</Phone>
    </div>
  </div>
);

// A screenshot filling the screen. `fit`:
//   "cover" (default) — fills the screen, trimming whatever overflows
//   "top"             — full width, pinned to the top (for tall pages)
//   "contain"         — the whole image, centred; `background` fills the rest
//   "blur"            — the whole image, letterboxed over a blurred copy of itself
export const Screenshot = ({ src, alt, fit = "cover", position = "center", background }) => {
  const url = asset(src);
  if (fit === "blur") {
    return (
      <div className="absolute inset-0">
        <img src={url} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-[6cqw] opacity-80" />
        <img src={url} alt={alt} decoding="async" className="absolute inset-0 w-full h-full object-contain" />
      </div>
    );
  }
  return (
    <div className="absolute inset-0" style={{ background }}>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full ${
          fit === "top" ? "h-auto" : fit === "contain" ? "h-full object-contain" : "h-full object-cover"
        }`}
        style={fit === "top" ? undefined : { objectPosition: position }}
      />
    </div>
  );
};
