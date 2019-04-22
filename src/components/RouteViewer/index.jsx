import { Box, CheckBox } from "grommet";
import React, { useEffect, useState } from "react";
import { useQuery, useSubscription } from "react-apollo-hooks";
import styled from "styled-components";
import { GET_LOCATIONS, GET_VEHICLES } from "../../queries";
import RouteManager from "../RouteManager";
import Vehicle from "./Vehicle";
import Loading from "./Loading";
import SimpleMap from "./SimpleMap";

const RouteViewer = () => {
  const { data, loading, error } = useQuery(GET_VEHICLES);
  const [tracked, setTracked] = useState([]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error! {JSON.stringify(error)}</div>;
  }
  if (tracked.length !== data.vehicle.length) {
    const initialTracking = data.vehicle.map(val => ({
      id: val.id,
      tracked: false,
    }));
    setTracked(initialTracking);
    return <Loading />;
  }

  return (
    <Box direction="row">
      <Box elevation="medium" flex={{ grow: 1, shrink: 1 }} basis="30%">
        <RouteManager width="small" />
      </Box>
      <Box flex={{ grow: 3, shrink: 3 }}>
        <Box elevation="small" pad="small">
          <h3>Vehicles to track:</h3>
          <Box direction="row" wrap justify="between">
            {data.vehicle.map(({ id, name }) => (
              <Box pad="xsmall">
                <CheckBox
                  toggle
                  radioGroup="vehicles"
                  label={name}
                  checked={tracked.find(x => x.id === id).tracked}
                  onChange={e => {
                    setTracked(prevState =>
                      prevState.map(x =>
                        x.id === id ? { ...x, tracked: e.target.checked } : x,
                      ),
                    );
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>
        <SimpleMap width="large" />
      </Box>
    </Box>
  );
};
export default RouteViewer;
