import React from "react";
import { SkeletonAnimatedContainer } from "./SkeletonAnimatedContainer";
import { SkeletonContainer } from "./SkeletonContainer";
import { SkeletonText } from "./SkeletonText";

export default {
  title: "Utilities/Skeleton",
  decorators: [
    (Story: any) => (
      <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
        <Story />
      </div>
    )
  ]
};

export const AnimatedContainer = {
  render: () => {
    return (
      <SkeletonAnimatedContainer style={{ width: "8rem", height: "8rem" }} />
    );
  }
};

export const Container = {
  render: () => {
    return <SkeletonContainer style={{ width: "8rem", height: "8rem" }} />;
  }
};

export const Text = {
  render: () => {
    return <SkeletonText style={{ width: "8rem" }} />;
  }
};
