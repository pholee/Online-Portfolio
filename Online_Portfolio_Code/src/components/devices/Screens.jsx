import { Mine, Skyline, WoodsCanvas } from "./Artwork";

// Hand-built mini UIs that sit inside the device mockups. Styling lives in
// styles/devices.css (all sizes in cqw, relative to the screen's width).
// Placeholder content — swap for real screenshots as they become available.

/* ---------- Featured ---------- */

export const KoffeeScreen = () => (
  <div className="s-koffee">
    <aside>
      <b>Kickstart</b>
      <i className="done">Welcome</i>
      <i className="done">Your laptop</i>
      <i className="now">Meet your team</i>
      <i>Tools &amp; access</i>
      <i>First project</i>
    </aside>
    <section>
      <small>Day one · step 3 of 5</small>
      <h3>
        Good morning, Sam.
        <br />
        Meet the people you&apos;ll work with.
      </h3>
      <div className="bar"></div>
      <div className="team">
        {[
          ["JM", "#C2703D", "Jess M.", "Your buddy"],
          ["AR", "#6B8F71", "Arun R.", "Design lead"],
          ["LT", "#5B6C9A", "Lena T.", "Producer"],
        ].map(([initials, color, name, role]) => (
          <div key={initials} className="card">
            <div className="av" style={{ background: color }}>
              {initials}
            </div>
            <b>{name}</b>
            {role}
          </div>
        ))}
      </div>
    </section>
  </div>
);

export const KoffeePhoneScreen = () => (
  <div className="s-kphone">
    <small>Day one</small>
    <h4>Your first hour</h4>
    <ul>
      <li className="done">Pick up your laptop</li>
      <li className="done">Say hi in #general</li>
      <li>Coffee with Jess</li>
      <li>Set up Figma</li>
    </ul>
  </div>
);

export const HoomanzUploadScreen = () => (
  <div className="s-hoo">
    <div className="steps">
      <i className="on"></i>
      <i></i>
      <i></i>
    </div>
    <small>STEP 1 OF 3</small>
    <h4>Upload your hooman</h4>
    <div className="drop">
      <div className="critter"></div>
      PNG, up to 5 MB
    </div>
    <div className="btn">Next</div>
  </div>
);

export const HoomanzDetailsScreen = () => (
  <div className="s-hoo">
    <div className="steps">
      <i className="on"></i>
      <i className="on"></i>
      <i></i>
    </div>
    <small>STEP 2 OF 3</small>
    <h4>Tell us about them</h4>
    <div className="field">
      <span>Name</span>Captain Biscuit
    </div>
    <div className="field">
      <span>Your handle</span>@pixelpip
    </div>
    <div className="chips">
      <i className="on">Silly</i>
      <i>Spooky</i>
      <i className="on">Tiny</i>
      <i>Brave</i>
    </div>
    <div className="btn">Submit for review</div>
  </div>
);

export const PortfolioScreen = () => (
  <div className="s-self">
    <div className="t">
      <b>
        Phoebe Lee<span>2026</span>
      </b>
      <i>
        About
        <br />
        LinkedIn
        <br />
        GitHub
      </i>
    </div>
    <p>
      Phoebe Lee designs user experiences and builds the apps behind them.{" "}
      <em>UX designer studying Computer Science.</em>
    </p>
    <div className="r">
      <div className="mini">
        <div></div>
      </div>
      <div className="lines">
        <i></i>
        <i></i>
        <i></i>
        <i style={{ width: "70%" }}></i>
        <b></b>
      </div>
    </div>
  </div>
);

/* ---------- Archive ---------- */

export const PlatformerScreen = () => (
  <div className="s-game">
    <WoodsCanvas width={192} height={120} />
    <div className="hud">
      <span>♥♥♥</span>
      <span>THE WOODS · 1-1</span>
      <span>✿ 07</span>
    </div>
  </div>
);

export const AliaScreen = () => (
  <div className="s-alia">
    <nav>
      <b>Alia Lavery</b>
      <span>
        <i>Gallery</i>
        <i>Shop</i>
        <i>About</i>
      </span>
    </nav>
    <h3>Paintings, 2024 — 2026</h3>
    <div className="grid">
      {[
        ["Harbour at dusk", "£480"],
        ["Still life, pears", "£320"],
        ["Weave No. 3", "Sold"],
      ].map(([title, price]) => (
        <div key={title}>
          <div className="art"></div>
          <div className="cap">
            <span>{title}</span>
            <span>{price}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const StarCityMapScreen = () => (
  <div className="s-star">
    <div className="sky">
      <Skyline fit="slice" />
    </div>
    <div className="panel">
      <small>DISTRICT 7 · NIGHT 12</small>
      <h4>Old Harbour</h4>
      <div className="row">
        <span>Power</span>
        <span>82%</span>
      </div>
      <div className="bar">
        <i style={{ width: "82%" }}></i>
      </div>
      <div className="row">
        <span>Residents</span>
        <span>1,240</span>
      </div>
      <div className="btn">Build here</div>
    </div>
  </div>
);

export const StarCityBuildScreen = () => (
  <div className="s-star list">
    <small>BUILD · ★ 340</small>
    <h4>Light the skyline</h4>
    {[
      ["#F2D16B", "Observatory", "Reveals 2 constellations", "★ 120"],
      ["#7FB2FF", "Tram line", "Links districts 6 & 7", "★ 80"],
      ["#FF8BA7", "Night market", "+40 residents", "★ 60"],
      ["#8D93B8", "Lighthouse", "Unlocks at night 15", "🔒", true],
    ].map(([color, name, detail, cost, locked]) => (
      <div key={name} className={`item${locked ? " dim" : ""}`}>
        <i style={{ background: color }}></i>
        <div>
          <b>{name}</b>
          {detail}
        </div>
        <span>{cost}</span>
      </div>
    ))}
  </div>
);

export const InteriorScreen = () => (
  <div className="s-int">
    <aside>
      <b>Catalogue</b>
      <div className="search">Search sofas, lamps…</div>
      {[
        ["#5D7470", "Sofa, 3 seat"],
        ["#E8B77A", "Armchair"],
        ["#B3523A", "Round rug", true],
        ["#E9A55B", "Floor lamp"],
        ["#6E8F45", "Fig plant", true],
      ].map(([color, label, round]) => (
        <div key={label} className="it">
          <i style={{ background: color, borderRadius: round ? "50%" : undefined }}></i>
          {label}
        </div>
      ))}
    </aside>
    <section>
      <div className="tb">
        <span>Living room · 4.2 × 3.6 m</span>
        <span>100%</span>
      </div>
      <div className="room">
        <div className="rug"></div>
        <div className="sofa sel">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="chair"></div>
        <div className="lamp"></div>
        <div className="plant"></div>
        <div className="door"></div>
      </div>
    </section>
    <aside className="props">
      <b>Sofa, 3 seat</b>
      <div className="kv">
        <span>Width</span>210 cm
      </div>
      <div className="kv">
        <span>Depth</span>90 cm
      </div>
      <div className="kv">
        <span>Rotation</span>0°
      </div>
      <small>Fabric</small>
      <div className="sw">
        {["#5D7470", "#C9A57E", "#2F4B4A", "#B3523A"].map((color) => (
          <i key={color} style={{ background: color }}></i>
        ))}
      </div>
      <div className="cta">Add to basket · £1,240</div>
    </aside>
  </div>
);

export const MineScreen = () => (
  <div className="s-mine">
    <Mine wide />
    <div className="hud">
      <span>DEPTH 42 m</span>
      <span>
        <b style={{ color: "#F2D16B" }}>●</b> 12&nbsp;&nbsp;
        <b style={{ color: "#4FC3E8" }}>◆</b> 3&nbsp;&nbsp;
        <b style={{ color: "#C8322B" }}>♥</b> 3
      </span>
    </div>
    <div className="bar">
      <i className="on">⛏</i>
      <i>🧨</i>
      <i>🔦</i>
      <i>🪜</i>
      <i></i>
      <i></i>
    </div>
  </div>
);

export const RedactedScreen = () => (
  <div className="s-red">
    <div className="nav">
      <i></i>
      <span>
        <i></i>
        <i></i>
        <i></i>
      </span>
    </div>
    <div className="hero">
      <i style={{ width: "62%" }}></i>
      <i style={{ width: "44%" }}></i>
      <i className="t" style={{ width: "70%" }}></i>
      <i className="t" style={{ width: "58%" }}></i>
    </div>
    <div className="cards">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <em>REDACTED · 2027</em>
  </div>
);
