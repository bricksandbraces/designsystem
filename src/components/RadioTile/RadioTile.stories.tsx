import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { ChangeEvent, useState } from "react";
import RadioTile from "./RadioTile";
import RadioTileGroup from "./RadioTileGroup";
import RadioTileSkeleton from "./RadioTileSkeleton";

export default {
  title: "Components/A_REFA_RadioTile",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div>
        <form>
          <RadioTileGroup name="1" legendLabel="RadioTiles">
            <RadioTile
              label={text("label", "RadioTile label")}
              id="checkbox"
              value="value-1"
            >
              123
            </RadioTile>
            <RadioTile
              label={text("label", "RadioTile label")}
              id="checkbox-2"
              value="value-2"
              readOnly={boolean("readOnly (Radio 2)", false)}
              disabled={boolean("disabled (Radio 2)", false)}
            >
              456
            </RadioTile>
          </RadioTileGroup>
        </form>
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div>
        <form>
          <RadioTileGroup
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
          >
            <RadioTile
              label={text("label", "RadioTile label")}
              value="value-1"
              id="checkbox"
              name="1"
            >
              123
            </RadioTile>
            <RadioTile
              label={text("label", "RadioTile label")}
              value="value-2"
              id="checkbox-2"
              name="1"
              checked={checked}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setChecked(event.target.checked);
              }}
            >
              456
            </RadioTile>
          </RadioTileGroup>
        </form>
      </div>
    </div>
  );
};

export const AsGroupUncontrolled = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div>
        <form>
          <RadioTileGroup
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            defaultValue="coffee2"
          >
            <RadioTile id="c1" value="coffee1">
              Coffee
            </RadioTile>
            <RadioTile id="c2" value="coffee2">
              Espresso
            </RadioTile>
          </RadioTileGroup>
        </form>
      </div>
    </div>
  );
};

export const AsGroupControlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div>
        <form>
          <RadioTileGroup
            disabled={boolean("disabled", false)}
            legendLabel={text("legendLabel", "Legend Label")}
            name={text("name", "radio-grop-demo")}
            value={selectedValue}
            onChange={(newValue) => {
              setSelectedValue(newValue);
            }}
          >
            <RadioTile id="c1" value="coffee1">
              Coffee
            </RadioTile>
            <RadioTile id="c2" value="coffee2">
              Espresso
            </RadioTile>
          </RadioTileGroup>
        </form>
      </div>
    </div>
  );
};

export const Skeleton = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          flexDirection: "row"
        }}
      >
        <RadioTileSkeleton />
        <RadioTileSkeleton />
      </div>
    </div>
  );
};
