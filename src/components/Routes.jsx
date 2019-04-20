import React from "react";
import { Router } from "@reach/router";
import RouteManager from "./RouteManager";
import { Grommet } from "grommet";

const RouteViewer = () => <h1>View routes</h1>;
const Routes = () => (
  <Grommet plain>
    <Router>
      <RouteViewer path="/" />
      <RouteManager path="/manage" />
    </Router>
  </Grommet>
);

export default Routes;
