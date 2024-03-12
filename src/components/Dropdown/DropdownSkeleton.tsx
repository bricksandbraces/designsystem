import { IconChevronDown } from "@tabler/icons-react";
import cx from "classnames";
import React from "react";
import { SkeletonAnimatedContainer } from "../..";
import { prefix } from "../../settings";
import { SkeletonText } from "../Skeleton/SkeletonText";

export type DropdownSkeletonProps = {
  /**
   * DropdownSkeleton ClassName
   */
  className?: string;

  /**
   * DropdownSkeleton Size
   */
  size?: "large" | "default" | "small";
};

export const DropdownSkeleton = function DropdownSkeleton({
  size = "default",
  className
}: DropdownSkeletonProps) {
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
};
