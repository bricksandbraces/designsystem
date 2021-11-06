import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonStaticContainer from "../Skeleton/SkeletonStaticContainer";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";

type AccordionSkeletonProps = {
  /**
   * AccordionSkeleton ClassName
   */
  className?: string;

  /**
   * AccordionSkeleton size
   */
  size?: "large" | "default" | "small";
};

const AccordionSkeleton = ({ size, className }: AccordionSkeletonProps) => {
  return (
    <SkeletonAnimatedContainer
      width="100%"
      className={cx(
        `${prefix}--accordion ${prefix}--accordion-${size}`,

        className
      )}
    >
      <SkeletonStaticContainer width="100%">
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
      <SkeletonStaticContainer width="100%">
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
      <SkeletonStaticContainer width="100%">
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
    </SkeletonAnimatedContainer>
  );
};

export default AccordionSkeleton;
