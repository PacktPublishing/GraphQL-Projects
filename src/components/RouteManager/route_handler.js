const { routes } = require("../../data/routes.json");

const findRoute = name => routes.find(x => x.name === name);
export const getFirstRoute = () => routes[0].name;
export const getNextLocation = (index, name) => findRoute(name).legs[index + 1];
export const isEndOfRoute = (index, name) =>
  findRoute(name).legs.length - 1 <= index;
