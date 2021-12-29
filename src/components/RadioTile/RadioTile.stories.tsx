import { action } from "@storybook/addon-actions";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import React, { useState } from "react";
import { RadioTile } from "./RadioTile";
import { RadioTileGroup } from "./RadioTileGroup";
import { RadioTileSkeleton } from "./RadioTileSkeleton";

export default {
  title: "Components/RadioTile",
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px"
      }}
    >
      <div>
        <form>
          <fieldset
            style={{
              display: "flex",
              gap: "1rem"
            }}
          >
            <RadioTile
              light={boolean("light", false)}
              name="g1"
              id="checkbox-1"
              value="value-1"
              onFocus={action("onFocus")}
              onBlur={action("onBlur")}
              onChange={action("onChange")}
            >
              {text("label", "Café Latte")}
            </RadioTile>
            <RadioTile
              light={boolean("light", false)}
              name="g1"
              id="checkbox-2"
              value="value-2"
              readOnly={boolean("readOnly (Radio 2)", false)}
              disabled={boolean("disabled (Radio 2)", false)}
              onFocus={action("onFocus")}
              onBlur={action("onBlur")}
              onChange={action("onChange")}
            >
              {text("label", "Espresso")}
            </RadioTile>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export const Controlled = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>("value-1");
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px"
      }}
    >
      <div>
        <form>
          <fieldset
            style={{
              display: "flex",
              gap: "1rem"
            }}
          >
            <RadioTile
              light={boolean("light", false)}
              value="value-1"
              id="checkbox-1"
              name="1"
              checked={selectedValue === "value-1"}
              onChange={(event) => {
                setSelectedValue("value-1");
                action("onChange")(event);
              }}
            >
              {text("label", "Café Latte")}
            </RadioTile>
            <RadioTile
              light={boolean("light", false)}
              value="value-2"
              id="checkbox-2"
              name="1"
              checked={selectedValue === "value-2"}
              onChange={(event) => {
                setSelectedValue("value-2");
                action("onChange")(event);
              }}
            >
              {text("label", "Espresso")}
            </RadioTile>
          </fieldset>
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
            name={text("name", "radio-group-demo")}
            defaultValue="coffee2"
            onChange={action("onChange")}
          >
            <RadioTile light={boolean("light", false)} id="c1" value="coffee1">
              Coffee
            </RadioTile>
            <RadioTile light={boolean("light", false)} id="c2" value="coffee2">
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
            onChange={(newValue, event) => {
              setSelectedValue(newValue);
              action("onChange")(newValue, event);
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
