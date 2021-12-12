import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import SkeletonAnimatedContainer from "./SkeletonAnimatedContainer";
import SkeletonContainer from "./SkeletonContainer";
import SkeletonText from "./SkeletonText";

export default { title: "Components/A_REFA_Skeleton", decorators: [withKnobs] };

export const AnimatedContainer = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SkeletonAnimatedContainer style={{ width: "8rem", height: "8rem" }} />
    </div>
  );
};

export const Container = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SkeletonContainer style={{ width: "8rem", height: "8rem" }} />
    </div>
  );
};

export const Text = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "32px" }}>
      <SkeletonText style={{ width: "8rem" }} />
    </div>
  );
};
