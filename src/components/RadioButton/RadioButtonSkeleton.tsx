import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

export type RadioButtonSkeletonProps = {
  /**
   * RadioButtonSkeleton ClassName
   */
  className?: string;
};

const RadioButtonSkeleton = ({ className }: RadioButtonSkeletonProps) => (
  <SkeletonContainer
    className={cx(
      `${prefix}--radiobutton`,

      className
    )}
  >
    <svg
      className={`${prefix}--radiobutton-selected`}
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
      <circle
        cx="12"
        cy="12"
        r="9"
        className={`${prefix}--radiobutton-selected__box`}
      />
    </svg>
    <SkeletonAnimatedContainer
      width={128}
      className={cx(`${prefix}--radiobutton`)}
    />
  </SkeletonContainer>
);

export default RadioButtonSkeleton;
