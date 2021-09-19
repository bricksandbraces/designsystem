import { boolean, select, text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import {
  Icon3dCubeSphere,
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconItalic,
  IconLayoutGridAdd,
  IconUnderline
} from "@tabler/icons";
import Button from "./Button";
import IconOnlyButton from "./IconOnlyButton";
import ButtonGroup from "./ButtonGroup";

export default { title: "Components/Button", decorators: [withKnobs] };

const options = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Danger: "danger",
  Ghost: "ghost"
};

const defaultValue = "primary";

const sizeOptions = {
  Large: "large",
  Small: "small",
  Default: "default"
};

const defaultSize = "default";

const iconPositionOptions = {
  Right: "right",
  Left: "left"
};

const defaultIconPosition = "right";

export const Default = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <Button
        kind={select("Kind", options, defaultValue) as any}
        size={select("Size", sizeOptions, defaultSize) as any}
        fluid={boolean("Fluid", false)}
        isLoading={boolean("is Loading?", false)}
        disabled={boolean("Disabled", false)}
      >
        {text("Label", "Button")}
      </Button>
    </div>
  </div>
);

export const WithIcon = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <Button
        kind={select("Kind", options, defaultValue) as any}
        size={select("Size", sizeOptions, defaultSize) as any}
        iconPosition={
          select(
            "Icon Position",
            iconPositionOptions,
            defaultIconPosition
          ) as any
        }
        fluid={boolean("Fluid", false)}
        icon={<Icon3dCubeSphere />}
        isLoading={boolean("is Loading?", false)}
        disabled={boolean("Disabled", false)}
      >
        {text("Label", "Button")}
      </Button>
    </div>
  </div>
);

export const WithIconOnly = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <IconOnlyButton
        kind={select("Kind", options, defaultValue) as any}
        size={select("Size", sizeOptions, defaultSize) as any}
        tooltipLabel={text("Tooltip Label", "Label") as any}
        icon={<IconLayoutGridAdd />}
        isLoading={boolean("is Loading?", false)}
        disabled={boolean("Disabled", false)}
      />
    </div>
  </div>
);

export const IconOnlyGroup = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <ButtonGroup withDivider={boolean("withDivider", false)}>
        <IconOnlyButton
          kind={select("Kind", options, defaultValue) as any}
          size={select("Size", sizeOptions, defaultSize) as any}
          tooltipLabel="Align Left"
          icon={<IconAlignLeft />}
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
        />
        <IconOnlyButton
          kind={select("Kind", options, defaultValue) as any}
          size={select("Size", sizeOptions, defaultSize) as any}
          tooltipLabel="Center"
          icon={<IconAlignCenter />}
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
        />
        <IconOnlyButton
          kind={select("Kind", options, defaultValue) as any}
          size={select("Size", sizeOptions, defaultSize) as any}
          tooltipLabel="Align Right"
          icon={<IconAlignRight />}
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
        />
        <IconOnlyButton
          kind={select("Kind", options, defaultValue) as any}
          size={select("Size", sizeOptions, defaultSize) as any}
          tooltipLabel="Bold"
          icon={<IconBold />}
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
        />
        <IconOnlyButton
          kind={select("Kind", options, defaultValue) as any}
          size={select("Size", sizeOptions, defaultSize) as any}
          tooltipLabel="Italic"
          icon={<IconItalic />}
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
        />
        <IconOnlyButton
          kind={select("Kind", options, defaultValue) as any}
          size={select("Size", sizeOptions, defaultSize) as any}
          tooltipLabel="Underline"
          icon={<IconUnderline />}
          isLoading={boolean("is Loading?", false)}
          disabled={boolean("Disabled", false)}
        />
      </ButtonGroup>
    </div>
  </div>
);
