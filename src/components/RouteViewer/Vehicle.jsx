import React, { useEffect, useState } from "react";
import { sample } from "lodash";
import styled from "styled-components";
import { Box } from "grommet";

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

function Vehicle({ id, lat, lng, name }) {
  const [color, setColor] = useState("brand");
  useEffect(() => {
    setColor(sample(colors));
  }, []);
  return (
    <MarkerContainer>
      <Marker pad="small" round background={color} />
      {name}
    </MarkerContainer>
  );
}
export default Vehicle;
