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
      style={{ width: "100%" }}
      className={cx(
        `${prefix}--accordion ${prefix}--accordion-${size}`,

        className
      )}
    >
      <SkeletonStaticContainer style={{ width: "100%" }}>
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
      <SkeletonStaticContainer style={{ width: "100%" }}>
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
      <SkeletonStaticContainer style={{ width: "100%" }}>
        <IconChevronDown size={16} />
      </SkeletonStaticContainer>
    </SkeletonAnimatedContainer>
  );
};

export default AccordionSkeleton;
