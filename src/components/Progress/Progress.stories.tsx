import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Progress } from "./Progress";
import { ProgressStep } from "./ProgressStep";
import { ProgressStepSkeleton } from "./ProgressStepSkeleton";

export default {
  title: "Navigation/Progress",
  decorators: [withKnobs]
};

export const Horizontal = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "32px",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div>
        <Progress>
          <ProgressStep inactive label="Cart" />
          <ProgressStep error label="Items" />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </div>
    </div>
  );
};

export const Vertical = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "32px",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div>
        <Progress vertical>
          <ProgressStep inactive label="Cart" />
          <ProgressStep error label="Items" />
          <ProgressStep current label="Address and Shipment Information" />
          <ProgressStep onClick={() => {}} label="Payment" />
          <ProgressStep label="Summary" />
        </Progress>
      </div>
    </div>
  );
};

export const WithTooltip = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "32px",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div>
        <Progress>
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
    </div>
  );
};

export const SkeletonHorizontal = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "32px",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div>
        <Progress>
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
        </Progress>
      </div>
    </div>
  );
};

export const SkeletonVertical = () => {
  return (
    <div
      style={{
        display: "flex",
        padding: "32px",
        width: "100vw",
        height: "100vh"
      }}
    >
      <div>
        <Progress vertical>
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
          <ProgressStepSkeleton />
        </Progress>
      </div>
    </div>
  );
};
