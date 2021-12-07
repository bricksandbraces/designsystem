import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import { SkeletonText } from "../..";

export type ToggleSkeletonProps = {
  /**
   * ToggleSkeleton ClassName
   */
  className?: string;

  /**
   * ToggleSkeleton Size
   */
  size?: "small" | "default";
};

const ToggleSkeleton = ({
  size = "default",
  className
}: ToggleSkeletonProps) => (
  <div
    className={cx(
      `${prefix}--toggle ${prefix}--skeleton ${prefix}--toggle-${size}`,

      className
    )}
  >
    <SkeletonAnimatedContainer className={cx(`${prefix}--toggle-switch`)} />
    <SkeletonText style={{ width: "8rem" }} />
  </div>
);

export default ToggleSkeleton;
