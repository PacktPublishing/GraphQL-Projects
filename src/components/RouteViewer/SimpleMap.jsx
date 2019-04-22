import React, { useState } from "react";
import { useSubscription } from "react-apollo-hooks";
import "./map_hacks.css";
import { GET_LOCATIONS } from "../../queries";
import Loading from "./Loading";
import { deserialize } from "../../coordinates";
import Vehicle from "./Vehicle";
import GoogleMapReact from "google-map-react";

function renderVehicle({ locations, id, name }, index) {
  if (locations.length > 0) {
    const lastLocation = locations[0].location;
    const [lat, lng] = deserialize(lastLocation);
    return (
      <Vehicle
        key={id}
        {...{ id, lat, lng, name }}
        $markerHolderClassName="marker"
      />
    );
  }
}
function SimpleMap(incomingProps) {
  const { data, loading, error } = useSubscription(GET_LOCATIONS, {});
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error! {JSON.stringify(error)}</div>;
  }
  const vehicles = data.vehicle.map(renderVehicle);
  const defaultProps = {
    center: {
      lat: 39.3444798,
      lng: -100.0677148,
    },
    zoom: 4,
  };
  const props = { ...defaultProps, ...incomingProps };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        {vehicles}
      </GoogleMapReact>
    </div>
  );
}
export default SimpleMap;
