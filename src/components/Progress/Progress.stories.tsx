import React from "react";
import { Progress } from "./Progress";
import { ProgressStep } from "./ProgressStep";
import { ProgressStepSkeleton } from "./ProgressStepSkeleton";

export default {
  title: "Navigation/Progress",
  decorators: [
    (Story: any) => (
      <div
        style={{
          display: "flex",
          padding: "32px",
          width: "100vw",
          height: "100vh"
        }}
      >
        <Story />
      </div>
    )
  ]
};

export const Horizontal = {
  render: (args: any) => {
    return (
      <div>
        <Progress {...args}>
          <ProgressStep inactive label="Cart" />
          <ProgressStep error label="Items" />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </div>
    );
  }
};

export const Vertical = {
  render: (args: any) => {
    return (
      <div>
        <Progress vertical {...args}>
          <ProgressStep inactive label="Cart" />
          <ProgressStep error label="Items" />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </div>
    );
  }
};

export const WithTooltip = {
  render: (args: any) => {
    return (
      <div>
        <Progress {...args}>
          <ProgressStep inactive label="Cart" />
          <ProgressStep
            tooltipContent="This is an error message"
            tooltipPlacement="right"
            error
            label="Items"
          />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </div>
    );
  }
};

export const SkeletonHorizontal = {
  render: (args: any) => {
    return (
      <div>
        <Progress {...args}>
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
        </Progress>
      </div>
    );
  }
};

export const SkeletonVertical = {
  render: (args: any) => {
    return (
      <div>
        <Progress vertical {...args}>
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
        </Progress>
      </div>
    );
  }
};
