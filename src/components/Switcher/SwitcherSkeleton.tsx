import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import { SkeletonContainer } from "../..";

type SwitcherSkeletonProps = {
  /**
   * SwitcherSkeleton ClassName
   */
  className?: string;

  /**
   * SwitcherSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const SwitcherSkeleton = ({
  size = "default",
  className
}: SwitcherSkeletonProps) => {
  return (
    <div
      className={cx(
        `${prefix}--switcher ${prefix}--skeleton ${prefix}--switcher-${size}`,

        className
      )}
    >
      <SkeletonContainer
        style={{ width: "100%" }}
        className={`${prefix}--switcher-${size}`}
      >
        <SkeletonAnimatedContainer
          style={{ width: "33.3%" }}
          className={`${prefix}--switcher-${size}`}
        />
        <div
          style={{ width: "33.3%" }}
          className={`${prefix}--switcher-${size}`}
        />
      </SkeletonContainer>
    </div>
  );
};

export default SwitcherSkeleton;
