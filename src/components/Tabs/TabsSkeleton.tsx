import cx from "classnames";
import React from "react";
import { SkeletonText } from "../..";
import { prefix } from "../../settings";

export type TabsSkeletonProps = {
  /**
   * TabsSkeleton ClassName
   */
  className?: string;
};

export const TabsSkeleton = function TabsSkeleton({
  className
}: TabsSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--tabs ${prefix}--skeleton`,

        className
      )}
    >
      <div className={cx(`${prefix}--tabs ${prefix}--tabs-btn`, className)}>
        <SkeletonText style={{ width: "100%" }} />
      </div>
      <div className={cx(`${prefix}--tabs ${prefix}--tabs-btn`, className)}>
        <SkeletonText style={{ width: "100%" }} />
      </div>
      <div className={cx(`${prefix}--tabs ${prefix}--tabs-btn`, className)}>
        <SkeletonText style={{ width: "100%" }} />
      </div>
    </div>
  );
};
