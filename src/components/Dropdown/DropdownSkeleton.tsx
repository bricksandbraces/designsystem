import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonText from "../Skeleton/SkeletonText";
import { SkeletonAnimatedContainer } from "../..";

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

export default DropdownSkeleton;
