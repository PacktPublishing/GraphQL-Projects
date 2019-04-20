// Map.json is output of google directions api
const json = require("./map.json");
const allLegs = json.routes[0].legs.reduce((acc, val) => acc.concat([val]), []);
const allSteps = allLegs.reduce((acc, val) => acc.concat(val.steps), []);

const locations = allSteps.map(x => [
  x.start_location.lat,
  x.start_location.lng,
]);
// This will output the array which can be pasted to routes.json
console.log(locations);
