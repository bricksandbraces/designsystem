import React from "react";
import cx from "classnames";
import { prefix } from "../../../settings";
import { SkeletonText } from "../../..";

type WebTabsSkeletonProps = {
  /**
   * WebTabsSkeleton ClassName
   */
  className?: string;
};

const WebTabsSkeleton = ({ className }: WebTabsSkeletonProps) => {
  return (
    <div
      className={cx(
        `${prefix}--webtabs ${prefix}--skeleton`,

        className
      )}
    >
      <div className={cx(`${prefix}--webtabs ${prefix}--webtabs-btn`, className)}>
        <SkeletonText style={{ width: "100%" }} />
      </div>
      <div className={cx(`${prefix}--webtabs ${prefix}--webtabs-btn`, className)}>
        <SkeletonText style={{ width: "100%" }} />
      </div>
      <div className={cx(`${prefix}--webtabs ${prefix}--webtabs-btn`, className)}>
        <SkeletonText style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default WebTabsSkeleton;
