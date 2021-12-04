import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonContainer from "../Skeleton/SkeletonContainer";
import SkeletonText from "../Skeleton/SkeletonText";

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
      <SkeletonContainer
        style={{ width: "16rem" }}
        className={`${prefix}--dropdown-${size}`}
      >
        <SkeletonText style={{ width: "8rem" }} />
        <IconChevronDown size={16} />
      </SkeletonContainer>
    </div>
  );
};

export default DropdownSkeleton;
