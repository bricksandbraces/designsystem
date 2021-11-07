import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

type SelectSkeletonProps = {
  /**
   * SelectSkeleton ClassName
   */
  className?: string;

  /**
   * SelectSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const SelectSkeleton = ({
  size = "default",
  className
}: SelectSkeletonProps) => {
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

export default SelectSkeleton;
