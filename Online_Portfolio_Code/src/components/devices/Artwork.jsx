import { useEffect, useRef } from "react";

// Illustrations shared between the device screens and the archive thumbnails.

// Deterministic pseudo-random, so the scenes don't reshuffle on every render.
const seeded = (seed) => () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

/* ---------- Platformer: pixel woods, drawn at low res and scaled up ---------- */

const drawWoods = (canvas) => {
  const ctx = canvas.getContext("2d");
  const W = canvas.width;
  const H = canvas.height;
  const rect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };

  const sky = ctx.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, "#1B2B36");
  sky.addColorStop(1, "#3B4A3F");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, W, H);

  // Moon
  rect(150, 14, 10, 10, "#F4E9D0");
  rect(152, 12, 6, 14, "#F4E9D0");
  rect(148, 16, 14, 6, "#F4E9D0");

  const random = seeded(7);
  // Far trees
  for (let i = 0; i < 14; i++) {
    const tx = Math.floor(random() * W);
    const th = 40 + random() * 40;
    rect(tx, H - th - 18, 4, th, "#22332E");
    for (let k = 0; k < 4; k++) rect(tx - 6 + k, H - th - 18 + k * 6, 16 - k * 2, 6, "#263A33");
  }
  // Near trees
  for (let i = 0; i < 9; i++) {
    const tx = Math.floor(i * 22 + random() * 8);
    const th = 60 + random() * 30;
    rect(tx, H - th - 18, 6, th, "#15211E");
    for (let k = 0; k < 6; k++) rect(tx - 9 + k, H - th - 22 + k * 7, 24 - k * 2, 7, "#1A2B25");
  }

  // Ground and platforms
  rect(0, H - 18, W, 18, "#3A2A1E");
  for (let i = 0; i < W; i += 4) rect(i, H - 18, 4, 2 + (i % 8 ? 0 : 1), "#5E7A3E");
  rect(54, 78, 34, 6, "#4A3626");
  rect(54, 78, 34, 2, "#6E8F45");
  rect(112, 60, 28, 6, "#4A3626");
  rect(112, 60, 28, 2, "#6E8F45");
  [[60, 75], [118, 57], [160, 97]].forEach(([x, y]) => rect(x, y, 2, 2, "#F2D16B"));

  // Red Riding Hood
  const hx = 30;
  const hy = H - 31;
  rect(hx + 1, hy, 6, 3, "#C8322B");
  rect(hx, hy + 3, 8, 6, "#C8322B");
  rect(hx + 2, hy + 3, 4, 3, "#F0C9A6");
  rect(hx + 1, hy + 9, 2, 4, "#2A1D15");
  rect(hx + 5, hy + 9, 2, 4, "#2A1D15");
  rect(hx + 7, hy + 6, 3, 3, "#8C5A2B");

  // Wolf eyes
  rect(170, H - 27, 2, 2, "#F2D16B");
  rect(174, H - 27, 2, 2, "#F2D16B");
};

export const WoodsCanvas = ({ width, height }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) drawWoods(ref.current);
  }, []);
  return <canvas ref={ref} width={width} height={height} aria-hidden="true"></canvas>;
};

/* ---------- Star City: night skyline ---------- */

const starRandom = seeded(4);
const STARS = Array.from({ length: 30 }, () => ({
  cx: Math.round(2 + starRandom() * 96),
  cy: Math.round(2 + starRandom() * 44),
  r: [0.4, 0.5, 0.7][Math.floor(starRandom() * 3)],
  opacity: [0.5, 0.8, 1][Math.floor(starRandom() * 3)],
}));
const WINDOWS = [
  [22, 62], [25, 66], [36, 52], [39, 58], [36, 64], [52, 66], [58, 60],
  [73, 58], [76, 64], [73, 70], [88, 70], [10, 76], [62, 74], [44, 70],
];

export const Skyline = ({ fit = "meet" }) => (
  <svg viewBox="0 0 100 100" preserveAspectRatio={`xMidYMax ${fit}`} aria-hidden="true">
    <rect width="100" height="100" fill="#151B36" />
    {STARS.map((star, i) => (
      <circle key={i} {...star} fill="#E8ECFF" />
    ))}
    <circle cx="78" cy="22" r="7" fill="#F4E9D0" />
    <circle cx="81" cy="20" r="6" fill="#151B36" />
    <path
      d="M0 100V72h8v-8h6v12h5V58h9v14h4V48h7l3-6 3 6v26h5V62h8v-6h6v20h6V54h10v18h5V66h5v34Z"
      fill="#0A0D1C"
    />
    {WINDOWS.map(([x, y]) => (
      <rect key={`${x}-${y}`} x={x} y={y} width="1.6" height="1.6" fill="#F2D16B" />
    ))}
  </svg>
);

/* ---------- Interior Designer: living room ---------- */

export const Room = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect width="100" height="100" fill="#ECE3D5" />
    <rect y="70" width="100" height="30" fill="#C9A57E" />
    <path d="M0 70H100" stroke="#B48E66" strokeWidth=".8" />
    <rect x="58" y="18" width="22" height="16" fill="#F7F2EA" stroke="#2F4B4A" strokeWidth="1.6" />
    <path d="M60 32l7-8 5 5 3-3 4 6z" fill="#5D7470" />
    <ellipse cx="46" cy="86" rx="32" ry="6" fill="#B3523A" opacity=".85" />
    <rect x="20" y="56" width="52" height="18" rx="4" fill="#5D7470" />
    <rect x="16" y="52" width="10" height="22" rx="4" fill="#4C625F" />
    <rect x="66" y="52" width="10" height="22" rx="4" fill="#4C625F" />
    <rect x="28" y="50" width="16" height="10" rx="3" fill="#E8B77A" />
    <rect x="46" y="50" width="16" height="10" rx="3" fill="#D9C7AE" />
    <path d="M88 74V40" stroke="#2B2420" strokeWidth="1" />
    <path d="M82 40h12l-3-9h-6z" fill="#E9A55B" />
    <rect x="84" y="73" width="8" height="2" fill="#2B2420" />
    <path d="M10 70V44c0-6 8-6 8 0v26" fill="#6E8F45" />
  </svg>
);

/* ---------- Mine Maniac: pixel mine ---------- */

const BLOCKS = {
  b: "#9CC8E8", g: "#5E9E3E", d: "#7A5236", s: "#6F6A66", S: "#5E5955",
  t: "#2A2522", o: "#F2D16B", c: "#4FC3E8", r: "#C8322B",
};

const MINE_SQUARE = [
  "bbbbbbbbbb",
  "bbbbbbbbbb",
  "gggggtgggg",
  "dddddtdddd",
  "dsdddtddsd",
  "ssosstttSs",
  "sSssssStss",
  "ssSsrsstcs",
  "sssSssttts",
  "csssSsssos",
];

const MINE_WIDE = [
  "bbbbbbbbbbbbbbbb",
  "bbbbbbbbbbbbbbbb",
  "gggggggtgggggggg",
  "ddddsddtddddsddd",
  "dsddddttddsdddds",
  "ssosssStttttsSss",
  "sSsssssssStssocs",
  "ssSsrssSsstttsss",
  "csssSssossssStss",
  "sssosSssssSsssss",
];

const Miner = ({ x, y }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x="1" y="2" width="6" height="6" fill="#F0C9A6" />
    <rect x="0" y="0" width="8" height="3" fill="#F2D16B" />
    <rect x="1" y="8" width="6" height="6" fill="#3B5FA0" />
    <path d="M9 4l6-4M13 -2l4 4" stroke="#C9C5BD" strokeWidth="1.4" />
  </g>
);

export const Mine = ({ wide = false }) => {
  const grid = wide ? MINE_WIDE : MINE_SQUARE;
  return (
    <svg
      viewBox={`0 0 ${grid[0].length * 10} 100`}
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {grid.map((row, y) =>
        [...row].map((block, x) => (
          <rect key={`${x}-${y}`} x={x * 10} y={y * 10} width="10.2" height="10.2" fill={BLOCKS[block]} />
        ))
      )}
      {wide ? <Miner x={101} y={60} /> : <Miner x={71} y={70} />}
    </svg>
  );
};
