import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import { IconChevronRight } from "@tabler/icons";

type BreadcrumbSkeletonProps = {
  /**
   * BreadcrumbSkeleton ClassName
   */
  className?: string;
};

const BreadcrumbSkeleton = ({ className }: BreadcrumbSkeletonProps) => {
  return (
    <div className={cx(`${prefix}--breadcrumb`, className)}>
      <div className={cx(`${prefix}--breadcrumb-list`)}>
        <div className={cx(`${prefix}--breadcrumb-item`)}>
          <SkeletonAnimatedContainer width={64} />
          <IconChevronRight aria-hidden />
        </div>
        <div className={cx(`${prefix}--breadcrumb-item`)}>
          <SkeletonAnimatedContainer width={64} />
          <IconChevronRight aria-hidden />
        </div>
        <div className={cx(`${prefix}--breadcrumb-item`)}>
          <SkeletonAnimatedContainer width={64} />
          <IconChevronRight aria-hidden />
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSkeleton;
