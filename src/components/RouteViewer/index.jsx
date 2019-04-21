import React, { useEffect, useState } from "react";
import { Box } from "grommet";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import "./map_hacks.css";
import { useSubscription } from "react-apollo-hooks";
import { GET_LOCATIONS } from "../../queries";
import { deserialize } from "../../coordinates";
import { sample } from "lodash";

function Loading() {
  return (
    <Box align="center" justify="center" height="100vh">
      <svg
        version="1.1"
        id="loader-1"
        x="0px"
        y="0px"
        width="40px"
        height="40px"
        viewBox="0 0 40 40"
        enable-background="new 0 0 40 40"
      >
        <path
          opacity="0.2"
          fill="#000"
          d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
   s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
   c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
        />
        <path
          fill="#000"
          d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
   C22.32,8.481,24.301,9.057,26.013,10.047z"
        >
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Box>
  );
}
const colors = [
  "brand",
  "accent-1",
  "accent-2",
  "accent-3",
  "accent-4",
  "neutral-1",
  "neutral-2",
  "neutral-3",
  "neutral-4",
];
const Marker = styled(Box)``;
const MarkerContainer = styled(Box)`
  /* Centering the circle at the center of positon */
  transform: translate(-12px, -12px);
`;

function renderVehicle({ locations, id, name }, index) {
  if (locations.length > 0) {
    const lastLocation = locations[0].location;
    const [lat, lng] = deserialize(lastLocation);
    return (
      <Vehicle {...{ id, lat, lng, name }} $markerHolderClassName="marker" />
    );
  }
}
function Vehicle({ id, lat, lng, name }) {
  const [color, setColor] = useState("brand");
  useEffect(() => {
    setColor(sample(colors));
  }, []);
  return (
    <MarkerContainer key={id}>
      <Marker pad="small" round background={color} />
      {name}
    </MarkerContainer>
  );
}
function SimpleMap(incomingProps) {
  const { data, loading } = useSubscription(GET_LOCATIONS);
  if (loading) {
    return <Loading />;
  } else {
    const vehicles = data.vehicle.map(renderVehicle);
    const defaultProps = {
      center: {
        lat: 39.3444798,
        lng: -100.0677148,
      },
      zoom: 5,
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
}
const RouteViewer = () => <SimpleMap />;
export default RouteViewer;
