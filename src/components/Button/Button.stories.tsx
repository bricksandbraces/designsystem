import { actions } from "@storybook/addon-actions";
import {
  Icon3dCubeSphere,
  IconAlignCenter,
  IconAlignLeft,
  IconAlignRight,
  IconBold,
  IconItalic,
  IconLayoutGridAdd,
  IconUnderline
} from "@tabler/icons-react";
import React from "react";
import { Button } from "./Button";
import { ButtonSkeleton } from "./ButtonSkeleton";
import { IconOnlyButton } from "./IconOnlyButton";
import { IconOnlyButtonGroup } from "./IconOnlyButtonGroup";
import { IconOnlyButtonSkeleton } from "./IconOnlyButtonSkeleton";

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

export default {
  title: "Navigation/Button",
  decorators: [],
  argTypes: {
    kind: {
      control: {
        type: "select",
        options: options
      }
    },
    size: {
      control: {
        type: "select",
        options: sizeOptions
      }
    }
  },
  args: {
    kind: defaultValue,
    size: defaultSize,
    danger: false,
    fluid: false,
    isLoading: false,
    disabled: false
  }
};

const buttonActions = actions(
  "onClick",
  "onFocus",
  "onBlur",
  "onMouseEnter",
  "onMouseLeave"
);

export const Default = {
  render: (args: any) => (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Button {...args} {...buttonActions}>
          Button
        </Button>
      </div>
    </div>
  )
};

export const WithIcon = {
  argTypes: {
    iconPosition: {
      control: {
        type: "select",
        options: iconPositionOptions
      }
    },
    icon: {
      control: {
        type: "object"
      }
    }
  },
  args: {
    iconPosition: defaultIconPosition,
    icon: <Icon3dCubeSphere />
  },
  render: (args: any) => (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <Button {...args} {...buttonActions}>
          Button
        </Button>
      </div>
    </div>
  )
};

export const WithIconOnly = {
  args: {
    tooltipProps: {
      tooltipContent: "Label"
    }
  },
  render: (args: any) => (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <div style={{ width: "405px" }}>
        <IconOnlyButton
          {...args}
          icon={<IconLayoutGridAdd />}
          {...buttonActions}
        />
      </div>
    </div>
  )
};

export const IconOnlyGroup = {
  render: (args: any) => {
    return (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <IconOnlyButtonGroup withDivider singletonProps={{ delay: 900 }}>
          <IconOnlyButton
            {...args}
            tooltipProps={{
              tooltipContent: "Align Left"
            }}
            icon={<IconAlignLeft />}
          />
          <IconOnlyButton
            {...args}
            tooltipProps={{
              tooltipContent: "Center"
            }}
            icon={<IconAlignCenter />}
          />
          <IconOnlyButton
            {...args}
            tooltipProps={{
              tooltipContent: "Align Right"
            }}
            icon={<IconAlignRight />}
          />
          <IconOnlyButton
            {...args}
            tooltipProps={{
              tooltipContent: "Bold"
            }}
            icon={<IconBold />}
          />
          <IconOnlyButton
            {...args}
            tooltipProps={{
              tooltipContent: "Italic"
            }}
            icon={<IconItalic />}
          />
          <IconOnlyButton
            {...args}
            tooltipProps={{
              tooltipContent: "Underline"
            }}
            icon={<IconUnderline />}
          />
        </IconOnlyButtonGroup>
      </div>
    );
  }
};

export const Skeleton = {
  render: (args: any) => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        padding: "32px",
        display: "flex",
        gap: "1rem"
      }}
    >
      <IconOnlyButtonSkeleton size={args.size} />
      <ButtonSkeleton size={args.size} />
    </div>
  )
};
