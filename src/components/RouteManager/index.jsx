import React, { useState } from "react";
import RouteSelector from "./RouteSelector";
import { Form, Box, Text, RangeInput, Button } from "grommet";

const RouteManager = () => {
  const [route, setRoute] = useState("");
  const [updateInterval, setUpdateInterval] = useState(10);

  return (
    <Box align="center">
      <h1>Manage routes</h1>
      <Form>
        <Box width="medium" pad="medium" gap="medium">
          <label>Select a route:</label>
          <RouteSelector
            value={route}
            onChange={({ option }) => setRoute(option)}
          />
          <label>Vehicle location update frequency</label>
          <RangeInput
            value={updateInterval}
            min={5}
            max={60}
            onChange={e => setUpdateInterval(e.target.value)}
          />
          <Text>Every {updateInterval} seconds</Text>
          <Button primary label="Add Vehicle" type="submit" />
        </Box>
      </Form>
    </Box>
  );
};

export default RouteManager;
