import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

type DropdownSkeletonProps = {
  /**
   * DropdownSkeleton ClassName
   */
  className?: string;

  /**
   * DropdownSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const DropdownSkeleton = ({
  size = "default",
  className
}: DropdownSkeletonProps) => {
  return (
    <SkeletonContainer
      className={cx(
        `${prefix}--dropdown`,

        className
      )}
    >
      <SkeletonAnimatedContainer
        width={64}
        className={cx(
          `${prefix}--typography-label`,

          className
        )}
      />
      <SkeletonAnimatedContainer
        width={256}
        className={`${prefix}--dropdown-${size}`}
      >
        <IconChevronDown size={16} />
      </SkeletonAnimatedContainer>
    </SkeletonContainer>
  );
};

export default DropdownSkeleton;
