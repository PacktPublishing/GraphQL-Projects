import React, { useState } from "react";
import RouteSelector from "./RouteSelector";
import { Form, Box, Text, RangeInput, Button, FormField } from "grommet";
import { useMutation } from "react-apollo-hooks";
import { ADD_VEHICLE, ADD_LOCATION } from "../../queries";
import { getNextLocation, isEndOfRoute } from "./route_handler";

function updateLocation({ vehicleId, setPolls }) {
  return () => {
    setPolls(polls => {
      const poll = polls.find(x => x.vehicleId === vehicleId);
      const { index, route, pollId } = poll;
      if (isEndOfRoute(index, route)) {
        clearInterval(pollId);
        return polls.filter(x => x.vehicleId !== vehicleId);
      } else {
        const newLocation = getNextLocation(index, route);
        console.log("ADDING NEW LOCATION", newLocation);
        return polls.map(poll =>
          poll.vehicleId === vehicleId ? { ...poll, index: index + 1 } : poll,
        );
      }
    });
  };
}
const RouteManager = () => {
  const [route, setRoute] = useState("");
  const [updateInterval, setUpdateInterval] = useState(10);
  const [name, setName] = useState("");
  const [polls, setPolls] = useState([]);
  const addVehicle = useMutation(ADD_VEHICLE);

  const handleSubmit = e => {
    e.preventDefault();
    addVehicle({
      variables: {
        name,
      },
    }).then(x => {
      const vehicleId = x.data.insert_vehicle.returning[0].id;
      const newInterval = setInterval(
        updateLocation({ polls, vehicleId, setPolls }),
        updateInterval * 1000,
      );
      setPolls(
        polls.concat([
          { pollId: newInterval, vehicleId: vehicleId, route, index: -1 },
        ]),
      );
    });
  };

  return (
    <Box align="center">
      <h1>Manage routes</h1>
      <Form onSubmit={handleSubmit}>
        <Box width="medium" pad="medium" gap="medium">
          <FormField
            label="Vehicle name"
            onChange={e => setName(e.target.value)}
          />
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
