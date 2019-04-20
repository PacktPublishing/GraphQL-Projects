import React from "react";
import { Select } from "grommet";
const routes = require("../../data/routes.json");

const RouteSelector = props => {
  return <Select {...props} options={routes.routes.map(x => x.name)} />;
};

export default RouteSelector;
