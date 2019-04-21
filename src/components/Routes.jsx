import React from "react";
import { Router } from "@reach/router";
import RouteManager from "./RouteManager";
import RouteViewer from "./RouteViewer";
import { Grommet } from "grommet";

const Routes = () => (
  <Grommet plain>
    <Router>
      <RouteViewer path="/" />
      <RouteManager path="/manage" />
    </Router>
  </Grommet>
);

export default Routes;
