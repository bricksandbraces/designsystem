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

export default {
  component: Button,
  title: "Navigation/Button",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <div style={{ width: "405px" }}>
          <Story />
        </div>
      </div>
    )
  ],
  argTypes: {
    kind: {
      control: {
        type: "select",
        options: ["primary", "secondary", "tertiary", "ghost"]
      }
    },
    size: {
      control: {
        type: "select",
        options: ["large", "default", "small"]
      }
    },
    iconPosition: {
      control: {
        type: "select",
        options: ["right", "left"]
      }
    }
  },
  args: {
    kind: "primary",
    size: "default",
    iconPosition: "right",
    fluid: false,
    danger: false,
    isLoading: false,
    disabled: false,
    label: "Button",
    ...actions("onClick", "onFocus", "onBlur", "onMouseEnter", "onMouseLeave")
  }
};

export const Default = {};

export const WithIcon = {
  args: {
    iconPosition: "right",
    icon: <Icon3dCubeSphere />
  },
  argTypes: {
    iconPosition: {
      control: {
        type: "select",
        options: ["right", "left"]
      }
    }
  }
};

export const WithIconOnly = {
  component: IconOnlyButton,
  args: {
    icon: <IconLayoutGridAdd />,
    tooltipProps: { tooltipContent: "Label" }
  }
};

export const IconOnlyGroup = {
  args: {
    daner: false,
    kind: "primary",
    size: "default",
    tooltipProps: { tooltipContent: "Tooltip" }
  },
  render: (args: any) => {
    return (
      <IconOnlyButtonGroup withDivider singletonProps={{ delay: 900 }}>
        <IconOnlyButton icon={<IconAlignLeft />} {...args} />
        <IconOnlyButton icon={<IconAlignCenter />} {...args} />
        <IconOnlyButton icon={<IconAlignRight />} {...args} />
        <IconOnlyButton icon={<IconBold />} {...args} />
        <IconOnlyButton icon={<IconItalic />} {...args} />
        <IconOnlyButton icon={<IconUnderline />} {...args} />
      </IconOnlyButtonGroup>
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
      <IconOnlyButtonSkeleton size={args.size} {...args} />
      <ButtonSkeleton size={args.size} />
    </div>
  )
};
