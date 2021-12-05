import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { SkeletonText } from "../..";

export type RadioButtonSkeletonProps = {
  /**
   * RadioButtonSkeleton ClassName
   */
  className?: string;
};

const RadioButtonSkeleton = ({ className }: RadioButtonSkeletonProps) => (
  <div
    className={cx(
      `${prefix}--skeleton ${prefix}--radiobutton`,

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
    <SkeletonText
      style={{ width: "8rem" }}
      className={cx(`${prefix}--radiobutton`)}
    />
  </div>
);

export default RadioButtonSkeleton;
