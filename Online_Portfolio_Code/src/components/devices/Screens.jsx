// Hand-built placeholder screens for projects without screenshots yet. They sit
// inside the device mockups (Device.jsx); styling is in styles/devices.css and
// sized in cqw, relative to the screen's width.

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
