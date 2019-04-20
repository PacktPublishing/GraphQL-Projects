import React from "react";
import { Router } from "@reach/router";

const RouteManager = () => <h1>Manage routes</h1>;
const RouteViewer = () => <h1>View routes</h1>;
const Routes = () => (
  <Router>
    <RouteViewer path="/" />
    <RouteManager path="/manage" />
  </Router>
);

export default Routes;
