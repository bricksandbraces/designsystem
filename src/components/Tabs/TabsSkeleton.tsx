import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { SkeletonText } from "../..";

type TabsSkeletonProps = {
  /**
   * TabsSkeleton ClassName
   */
  className?: string;
};

const TabsSkeleton = ({ className }: TabsSkeletonProps) => {
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

export default TabsSkeleton;
