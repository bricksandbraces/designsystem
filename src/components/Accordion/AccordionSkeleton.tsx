import { IconChevronDown } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonContainer } from "../Skeleton/SkeletonContainer";
import { SkeletonText } from "../Skeleton/SkeletonText";

export type AccordionSkeletonProps = {
  /**
   * AccordionSkeleton ClassName
   */
  className?: string;

  /**
   * AccordionSkeleton size
   */
  size?: "large" | "default" | "small";
};

export const AccordionSkeleton = function AccordionSkeleton({
  size,
  className
}: AccordionSkeletonProps) {
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
