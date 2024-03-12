import { StoryObj } from "@storybook/react";
import React from "react";
import { Badge } from "./Badge";
import { BadgeSkeleton } from "./BadgeSkeleton";

export default {
  component: Badge,
  title: "Miscellaneous/Badge",
  decorators: [
    (Story: any) => (
      <div
        style={{
          padding: "32px",
          display: "flex",
          gap: "16px",
          flexWrap: "wrap"
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Default: StoryObj<typeof Badge> = {
  render: () => {
    return (
      <>
        <Badge title="Button" color="blue">
          Blue Badge
        </Badge>
        <Badge title="Button" color="yellow">
          Yellow Badge
        </Badge>
        <Badge title="Button" color="red">
          Red Badge
        </Badge>
        <Badge title="Button" color="green">
          Green Badge
        </Badge>
        <Badge title="Button" color="orange">
          Orange Badge
        </Badge>
        <Badge title="Button" color="gray">
          Gray Badge
        </Badge>
        <Badge title="Button" color="purple">
          Purple Badge
        </Badge>
        <Badge title="Button" color="cyan">
          Cyan Badge
        </Badge>
      </>
    );
  }
};

export const WithClose = {
  render: () => {
    return (
      <>
        <Badge title="Button" color="blue" onClose={() => {}}>
          Blue Badge
        </Badge>
        <Badge title="Button" color="yellow" onClose={() => {}}>
          Yellow Badge
        </Badge>
        <Badge title="Button" color="red" onClose={() => {}}>
          Red Badge
        </Badge>
        <Badge title="Button" color="green" onClose={() => {}}>
          Green Badge
        </Badge>
        <Badge title="Button" color="orange" onClose={() => {}}>
          Orange Badge
        </Badge>
        <Badge title="Button" color="gray" onClose={() => {}}>
          Gray Badge
        </Badge>
        <Badge title="Button" color="purple" onClose={() => {}}>
          Purple Badge
        </Badge>
        <Badge title="Button" color="cyan" onClose={() => {}}>
          Cyan Badge
        </Badge>
      </>
    );
  }
};

export const Interactive = {
  render: () => {
    return (
      <>
        <Badge title="Button" color="blue" onClick={() => {}}>
          Blue Badge
        </Badge>
        <Badge title="Button" color="yellow" onClick={() => {}}>
          Yellow Badge
        </Badge>
        <Badge title="Button" color="red" onClick={() => {}}>
          Red Badge
        </Badge>
        <Badge title="Button" color="green" onClick={() => {}}>
          Green Badge
        </Badge>
        <Badge title="Button" color="orange" onClick={() => {}}>
          Orange Badge
        </Badge>
        <Badge title="Button" color="gray" onClick={() => {}}>
          Gray Badge
        </Badge>
        <Badge title="Button" color="purple" onClick={() => {}}>
          Purple Badge
        </Badge>
        <Badge title="Button" color="cyan" onClick={() => {}}>
          Cyan Badge
        </Badge>
      </>
    );
  }
};

export const Skeleton = {
  render: () => {
    return (
      <>
        <BadgeSkeleton />
        <BadgeSkeleton />
        <BadgeSkeleton />
      </>
    );
  }
};
