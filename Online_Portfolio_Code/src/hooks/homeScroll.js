// Remembers how far down the homepage the visitor had scrolled, so returning
// from a case study puts them back exactly where they left off. Kept in
// memory only: a reload starts fresh at the top.
let savedY = null;

export const saveHomeScroll = (y) => {
  savedY = y;
};

export const getHomeScroll = () => savedY;
