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
import Tippy, { useSingleton } from "@tippyjs/react";
import Button from "./Button";
import IconOnlyButton from "./IconOnlyButton";
import ButtonGroup from "./ButtonGroup";
import IconOnlyButtonSkeleton from "./IconOnlyButtonSkeleton";
import ButtonSkeleton from "./ButtonSkeleton";

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
  const [source, target] = useSingleton({});

  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <ButtonGroup withDivider={boolean("withDivider", false)}>
          <Tippy singleton={source} delay={1000} />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Align Left",
              singleton: target
            }}
            icon={<IconAlignLeft />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Center",
              singleton: target
            }}
            icon={<IconAlignCenter />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Align Right",
              singleton: target
            }}
            icon={<IconAlignRight />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Bold",
              singleton: target
            }}
            icon={<IconBold />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Italic",
              singleton: target
            }}
            icon={<IconItalic />}
          />
          <IconOnlyButton
            danger={boolean("danger", false)}
            kind={select("kind", options, defaultValue) as any}
            size={select("size", sizeOptions, defaultSize) as any}
            tooltipProps={{
              tooltipContent: "Underline",
              singleton: target
            }}
            icon={<IconUnderline />}
          />
        </ButtonGroup>
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
