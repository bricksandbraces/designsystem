import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { SkeletonText } from "../..";

export type CheckboxSkeletonProps = {
  /**
   * CheckboxSkeleton ClassName
   */
  className?: string;
};

export const CheckboxSkeleton = React.forwardRef(function CheckboxSkeleton({
  className
}: CheckboxSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--skeleton ${prefix}--checkbox`,

        className
      )}
    >
      <svg
        className={`${prefix}--checkbox-check`}
        width="20"
        height="20"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          rx="2"
          className={`${prefix}--checkbox-check__box`}
        />
      </svg>
      <SkeletonText
        style={{ width: 128 }}
        className={cx(`${prefix}--checkbox`)}
      />
    </div>
  );
});
