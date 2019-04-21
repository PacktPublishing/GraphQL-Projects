import React, { useState, useEffect } from "react";
import { Box } from "grommet";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import "./map_hacks.css";

function SimpleMap(incomingProps) {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const props = { ...defaultProps, ...incomingProps };

  const Marker = styled(Box)`
    transition: all 500ms ease-in;
  `;

  const [lng, setLng] = useState(30.337844);
  useEffect(() => {
    setInterval(() => {
      console.log("updating");
      setLng(lng => lng + 0.01);
    }, 2000);
  }, []);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <Box
          lat={59.965413}
          lng={lng}
          $markerHolderClassName="marker"
          style={{
            transition: "all 500ms ease-in",
          }}
        >
          Vehicle 123
          <Marker pad="small" round background="accent-1" />
        </Box>
      </GoogleMapReact>
    </div>
  );
}
const RouteViewer = () => <SimpleMap />;
export default RouteViewer;
