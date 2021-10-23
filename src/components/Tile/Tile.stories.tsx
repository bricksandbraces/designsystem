import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import ClickableTile from "./ClickableTile";
import Tile from "./Tile";

export default { title: "Components/A_REFA_Tile", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Tile>Default Tile</Tile>
      </div>
    </div>
  );
};

export const Clickable = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <ClickableTile target="_blank" href="#">
          Clickable Tile
        </ClickableTile>
      </div>
    </div>
  );
};
