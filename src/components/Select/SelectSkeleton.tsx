import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";
import { SkeletonText } from "../..";

export type SelectSkeletonProps = {
  /**
   * SelectSkeleton ClassName
   */
  className?: string;

  /**
   * SelectSkeleton Size
   */
  size?: "large" | "default" | "small";
};

export const SelectSkeleton = React.forwardRef(function SelectSkeleton({
  size = "default",
  className
}: SelectSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--dropdown ${prefix}--skeleton ${prefix}--dropdown-${size}`,

        className
      )}
    >
      <SkeletonText
        style={{ width: "4rem" }}
        className={cx(`${prefix}--typography-label`)}
      />
      <SkeletonAnimatedContainer
        style={{ width: "16rem" }}
        className={`${prefix}--dropdown-${size}`}
      >
        <IconChevronDown size={16} />
      </SkeletonAnimatedContainer>
    </div>
  );
});
