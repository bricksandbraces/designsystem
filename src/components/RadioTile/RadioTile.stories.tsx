import { action } from "@storybook/addon-actions";
import React, { useState } from "react";
import { RadioTile } from "./RadioTile";
import { RadioTileGroup } from "./RadioTileGroup";
import { RadioTileSkeleton } from "./RadioTileSkeleton";

export default {
  title: "Input/RadioTile",
  decorators: [
    (Story: any) => (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          padding: "32px"
        }}
      >
        <Story />
      </div>
    )
  ],
  args: {
    light: false,
    label1: "Café Latte",
    label2: "Espresso"
  }
};

export const Default = {
  args: {
    readOnly2: false,
    disabled2: false
  },
  render: (args: any) => {
    return (
      <form>
        <fieldset
          style={{
            display: "flex",
            gap: "1rem"
          }}
        >
          <RadioTile
            light={args.light}
            name="g1"
            id="checkbox-1"
            value="value-1"
            onFocus={action("onFocus")}
            onBlur={action("onBlur")}
            onChange={action("onChange")}
          >
            {args.label1}
          </RadioTile>
          <RadioTile
            light={args.light}
            name="g1"
            id="checkbox-2"
            value="value-2"
            readOnly={args.readOnly2}
            disabled={args.disabled2}
            onFocus={action("onFocus")}
            onBlur={action("onBlur")}
            onChange={action("onChange")}
          >
            {args.label2}
          </RadioTile>
        </fieldset>
      </form>
    );
  }
};

export const Controlled = {
  render: (args: any) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(
      "value-1"
    );
    return (
      <form>
        <fieldset
          style={{
            display: "flex",
            gap: "1rem"
          }}
        >
          <RadioTile
            light={args.light}
            value="value-1"
            id="checkbox-1"
            name="1"
            checked={selectedValue === "value-1"}
            onChange={(event) => {
              setSelectedValue("value-1");
              action("onChange")(event);
            }}
          >
            {args.label1}
          </RadioTile>
          <RadioTile
            light={args.light}
            value="value-2"
            id="checkbox-2"
            name="1"
            checked={selectedValue === "value-2"}
            onChange={(event) => {
              setSelectedValue("value-2");
              action("onChange")(event);
            }}
          >
            {args.label2}
          </RadioTile>
        </fieldset>
      </form>
    );
  }
};

export const AsGroupUncontrolled = {
  args: {
    disabled: false,
    legendLabel: "Radio tile group label",
    name: "radio-tile-group"
  },
  render: (args: any) => {
    return (
      <form>
        <RadioTileGroup
          disabled={args.disabled}
          legendLabel={args.legendLabel}
          name={args.name}
          defaultValue="coffee2"
          onChange={action("onChange")}
        >
          <RadioTile light={args.light} id="c1" value="coffee1">
            {args.label1}
          </RadioTile>
          <RadioTile light={args.light} id="c2" value="coffee2">
            {args.label2}
          </RadioTile>
        </RadioTileGroup>
      </form>
    );
  }
};

export const AsGroupControlled = {
  args: {
    disabled: false,
    legendLabel: "Radio tile group label",
    name: "radio-tile-group"
  },
  render: (args: any) => {
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    return (
      <form>
        <RadioTileGroup
          disabled={args.disabled}
          legendLabel={args.legendLabel}
          name={args.name}
          value={selectedValue}
          onChange={(newValue, event) => {
            setSelectedValue(newValue);
            action("onChange")(newValue, event);
          }}
        >
          <RadioTile id="c1" value="coffee1">
            {args.label1}
          </RadioTile>
          <RadioTile id="c2" value="coffee2">
            {args.label2}
          </RadioTile>
        </RadioTileGroup>
      </form>
    );
  }
};

export const Skeleton = {
  render: () => {
    return (
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
    );
  }
};
