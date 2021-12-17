import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import ClickableTile from "./ClickableTile";
import Tile from "./Tile";
import TileSkeleton from "./TileSkeleton";

export default { title: "Components Ready/Tile", decorators: [withKnobs] };

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Tile
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
        >
          Default Tile
        </Tile>
      </div>
    </div>
  );
};

export const Clickable = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <ClickableTile
          disabled={boolean("disabled", false)}
          readOnly={boolean("readOnly", false)}
          href={text("href", "#")}
          target={text("target", "_blank")}
        >
          Clickable Tile
        </ClickableTile>
      </div>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <TileSkeleton />
      </div>
    </div>
  );
};
