import cx from "classnames";
import React from "react";
import { SkeletonText } from "../..";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

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

export const ToggleSkeleton = function ToggleSkeleton({
  size = "default",
  className
}: ToggleSkeletonProps) {
  return (
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
};
