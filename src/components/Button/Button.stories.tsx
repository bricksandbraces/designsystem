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
import IconOnlyButtonSkeleton from "./IconOnlyButtonSkeleton";
import ButtonSkeleton from "./ButtonSkeleton";
import IconOnlyButtonGroup from "./IconOnlyButtonGroup";

export default { title: "Components/A_REFA_Button", decorators: [withKnobs] };

const options = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
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
        kind={select("kind", options, defaultValue) as any}
        size={select("size", sizeOptions, defaultSize) as any}
        fluid={boolean("fluid", false)}
        danger={boolean("danger", false)}
        isLoading={boolean("isLoading", false)}
        disabled={boolean("disabled", false)}
      >
        {text("label", "Button")}
      </Button>
    </div>
  </div>
);

export const WithIcon = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <Button
        kind={select("kind", options, defaultValue) as any}
        danger={boolean("danger", false)}
        size={select("size", sizeOptions, defaultSize) as any}
        iconPosition={
          select(
            "iconPosition",
            iconPositionOptions,
            defaultIconPosition
          ) as any
        }
        fluid={boolean("fluid", false)}
        icon={<Icon3dCubeSphere />}
        isLoading={boolean("isLoading", false)}
        disabled={boolean("disabled", false)}
      >
        {text("label", "Button")}
      </Button>
    </div>
  </div>
);

export const WithIconOnly = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px" }}>
      <IconOnlyButton
        danger={boolean("danger", false)}
        kind={select("kind", options, defaultValue) as any}
        size={select("size", sizeOptions, defaultSize) as any}
        tooltipProps={{
          tooltipContent: text("tooltipLabel", "Label") as any
        }}
        icon={<IconLayoutGridAdd />}
        isLoading={boolean("isLoading", false)}
        disabled={boolean("disabled", false)}
      />
    </div>
  </div>
);

export const IconOnlyGroup = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <IconOnlyButtonGroup singletonProps={{ delay: 900 }}>
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Align Left"
            }}
            icon={<IconAlignLeft />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Center"
            }}
            icon={<IconAlignCenter />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Align Right"
            }}
            icon={<IconAlignRight />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Bold"
            }}
            icon={<IconBold />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Italic"
            }}
            icon={<IconItalic />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Underline"
            }}
            icon={<IconUnderline />}
          />
        </IconOnlyButtonGroup>
      </div>
    </div>
  );
};

export const Skeleton = () => (
  <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
    <div style={{ width: "405px", display: "flex", gap: "24px" }}>
      <IconOnlyButtonSkeleton
        size={select("size", sizeOptions, defaultSize) as any}
      />
      <ButtonSkeleton size={select("size", sizeOptions, defaultSize) as any} />
    </div>
  </div>
);
