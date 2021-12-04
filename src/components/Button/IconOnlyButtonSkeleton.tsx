import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonContainer from "../Skeleton/SkeletonContainer";
import SkeletonText from "../Skeleton/SkeletonText";

export type IconOnlyButtonSkeletonProps = {
  /**
   * IconOnlyButtonSkeleton ClassName
   */
  className?: string;

  /**
   * IconOnlyButtonSkeleton Size
   */
  size?: "large" | "default" | "small";

  /**
   * IconOnlyButtonSkeleton Light
   */
  light?: boolean;
};

const IconOnlyButtonSkeleton = ({
  size = "default",
  className
}: IconOnlyButtonSkeletonProps) => (
  <SkeletonContainer
    className={cx(
      `${prefix}--button ${prefix}--button-icon-only ${prefix}--button-${size}`,
      className
    )}
  >
    <SkeletonText style={{ width: "1rem" }} />
  </SkeletonContainer>
);

export default IconOnlyButtonSkeleton;
