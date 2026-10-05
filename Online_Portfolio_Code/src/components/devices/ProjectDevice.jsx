import { Combo, Laptop, Pair } from "./Device";
import { Mine, Room, Skyline, WoodsCanvas } from "./Artwork";
import {
  AliaScreen,
  HoomanzDetailsScreen,
  HoomanzUploadScreen,
  InteriorScreen,
  KoffeePhoneScreen,
  KoffeeScreen,
  MineScreen,
  PlatformerScreen,
  PortfolioScreen,
  RedactedScreen,
  StarCityBuildScreen,
  StarCityMapScreen,
} from "./Screens";

// Keyed by each project's `device` field in data/projects.js.
const devices = {
  koffee: () => <Combo laptop={<KoffeeScreen />} phone={<KoffeePhoneScreen />} />,
  hoomanz: () => <Pair first={<HoomanzUploadScreen />} second={<HoomanzDetailsScreen />} />,
  portfolio: () => <Laptop><PortfolioScreen /></Laptop>,
  platformer: () => <Laptop><PlatformerScreen /></Laptop>,
  alia: () => <Laptop><AliaScreen /></Laptop>,
  starCity: () => <Pair first={<StarCityMapScreen />} second={<StarCityBuildScreen />} />,
  interior: () => <Laptop><InteriorScreen /></Laptop>,
  mine: () => <Laptop><MineScreen /></Laptop>,
  redacted: () => <Laptop><RedactedScreen /></Laptop>,
};

export const ProjectDevice = ({ device }) => devices[device]?.() ?? null;

// Square artwork for the archive grid, keyed by each project's `thumb` field.
const thumbs = {
  platformer: () => (
    <div className="a-sprite">
      <WoodsCanvas width={96} height={96} />
    </div>
  ),
  moodboard: () => (
    <div className="a-mood">
      <i></i>
      <i></i>
      <i></i>
    </div>
  ),
  starCity: () => <div className="a-svg"><Skyline /></div>,
  interior: () => <div className="a-svg"><Room /></div>,
  mine: () => <div className="a-svg"><Mine /></div>,
  redacted: () => (
    <div className="a-redact">
      <em>REDACTED</em>
    </div>
  ),
};

export const ProjectThumb = ({ thumb }) => thumbs[thumb]?.() ?? null;
