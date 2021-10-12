import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonText from "../Skeleton/SkeletonText";
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
    <SkeletonStaticContainer
      width="100%"
      className={cx(
        `${prefix}--accordion ${prefix}--accordion-${size}`,

        className
      )}
    >
      <SkeletonStaticContainer width="100%">
        <SkeletonAnimatedContainer width="80%">
          <SkeletonText size="small" width={0} />
        </SkeletonAnimatedContainer>
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
      <SkeletonStaticContainer width="100%">
        <SkeletonAnimatedContainer width="80%">
          <SkeletonText size="small" width={0} />
        </SkeletonAnimatedContainer>
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
      <SkeletonStaticContainer width="100%">
        <SkeletonAnimatedContainer width="50%">
          <SkeletonText size="small" width={0} />
        </SkeletonAnimatedContainer>
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
    </SkeletonStaticContainer>
  );
};

export default AccordionSkeleton;
