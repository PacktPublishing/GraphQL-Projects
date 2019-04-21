export const deserialize = str => {
  const coords = str
    .replace("(", "")
    .replace(")", "")
    .split(","); /*?*/
  const [lat, lng] = coords.map(x => parseFloat(x)); /*?*/
  return [lat, lng];
};

export const serialize = location => `(${location[0]}, ${location[1]})`;
