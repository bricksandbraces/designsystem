import React from "react";
import cx from "classnames";
import { IconChevronDown } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonContainer from "../Skeleton/SkeletonContainer";
import SkeletonText from "../Skeleton/SkeletonText";

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
    <SkeletonContainer
      style={{ width: "100%" }}
      className={cx(
        `${prefix}--accordion ${prefix}--accordion-${size}`,

        className
      )}
    >
      <div
        className={`${prefix}--skeleton ${prefix}--accordion-list__item-title`}
      >
        <SkeletonText style={{ width: "75%" }} />
        <IconChevronDown />
      </div>
      <div
        className={`${prefix}--skeleton ${prefix}--accordion-list__item-title`}
      >
        <SkeletonText style={{ width: "75%" }} />
        <IconChevronDown />
      </div>
      <div
        className={`${prefix}--skeleton ${prefix}--accordion-list__item-title`}
      >
        <SkeletonText style={{ width: "75%" }} />
        <IconChevronDown />
      </div>
    </SkeletonContainer>
  );
};

export default AccordionSkeleton;
