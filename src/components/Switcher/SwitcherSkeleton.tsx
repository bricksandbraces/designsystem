import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { SkeletonContainer, SkeletonText } from "../..";

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
        <div>
          <SkeletonText />
        </div>

        <div>
          <SkeletonText />
        </div>

        <div>
          <SkeletonText />
        </div>
      </SkeletonContainer>
    </div>
  );
};

export default SwitcherSkeleton;
