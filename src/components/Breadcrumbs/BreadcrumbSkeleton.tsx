import { IconArrowRight } from "@tabler/icons-react";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonText } from "../Skeleton/SkeletonText";

export type BreadcrumbSkeletonProps = {
  /**
   * BreadcrumbSkeleton ClassName
   */
  className?: string;
};

export const BreadcrumbSkeleton = function BreadcrumbSkeleton({
  className
}: BreadcrumbSkeletonProps) {
  return (
    <div className={cx(`${prefix}--skeleton ${prefix}--breadcrumb`, className)}>
      <div className={cx(`${prefix}--breadcrumb-list`)}>
        <div className={cx(`${prefix}--breadcrumb-item`)}>
          <SkeletonText style={{ width: "4rem" }} />
          <IconArrowRight aria-hidden />
        </div>
        <div className={cx(`${prefix}--breadcrumb-item`)}>
          <SkeletonText style={{ width: "4rem" }} />
          <IconArrowRight aria-hidden />
        </div>
        <div className={cx(`${prefix}--breadcrumb-item`)}>
          <SkeletonText style={{ width: "4rem" }} />
          <IconArrowRight aria-hidden />
        </div>
      </div>
    </div>
  );
};
