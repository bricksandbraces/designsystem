import cx from "classnames";
import React from "react";
import { SkeletonText } from "../..";
import { prefix } from "../../settings";

export type ProgressStepSkeletonProps = {
  /**
   * ProgressStepSkeleton Classnames
   */
  className?: string;
};

export const ProgressStepSkeleton = function ProgressStepSkeleton({
  className,
  ...rest
}: ProgressStepSkeletonProps) {
  return (
    <li
      className={cx(`${prefix}--progress-step ${prefix}--skeleton`, className)}
      {...rest}
    >
      <div className={cx(`${prefix}--progress-step__button`)}>
        <div className={cx(`${prefix}--progress-step__container`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={cx(`${prefix}--progress-step__icon`)}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle
              cx="12"
              cy="12"
              r="9"
              className={cx(`${prefix}--progress-step__icon-circle`)}
            />
          </svg>
          <p className={cx(`${prefix}--progress-step__label`)}>
            <SkeletonText style={{ width: "4rem" }} />
          </p>
        </div>
        <div className={cx(`${prefix}--progress-step__indicator`)} />
      </div>
    </li>
  );
};
