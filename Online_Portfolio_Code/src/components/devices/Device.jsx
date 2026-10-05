export const Laptop = ({ children }) => (
  <div className="device laptop">
    <div className="lid">
      <div className="screen">{children}</div>
    </div>
    <div className="base"></div>
  </div>
);

export const Phone = ({ children }) => (
  <div className="device phone">
    <div className="screen">{children}</div>
  </div>
);

// Laptop with a phone tucked against its lower-right corner.
export const Combo = ({ laptop, phone }) => (
  <div className="combo">
    <Laptop>{laptop}</Laptop>
    <Phone>{phone}</Phone>
  </div>
);

// Two phones side by side, the first raised slightly.
export const Pair = ({ first, second }) => (
  <div className="pair">
    <Phone>{first}</Phone>
    <Phone>{second}</Phone>
  </div>
);
