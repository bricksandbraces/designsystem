import cx from "classnames";
import React from "react";
import { SkeletonText } from "../..";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";

export type RangeInputSkeletonProps = {
  /**
   * RangeInputSkeleton ClassName
   */
  className?: string;

  /**
   * RangeInputSkeleton HideInput
   */
  hideInput?: boolean;

  /**
   * RangeInputSkeleton Size
   */
  size?: "large" | "default" | "small";
};

export const RangeInputSkeleton = function RangeInputSkeleton({
  size = "default",
  hideInput,
  className
}: RangeInputSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--rangeinput ${prefix}--skeleton ${prefix}--rangeinput-readonly`,
        className
      )}
    >
      <SkeletonText
        style={{ width: "4rem" }}
        className={cx(`${prefix}--typography-label`)}
      />
      <div className={cx(`${prefix}--rangeinput-container`)}>
        {!hideInput && (
          <SkeletonAnimatedContainer
            style={{ width: "4rem" }}
            className={`${prefix}--numberinput ${prefix}--numberinput-${size}`}
          />
        )}
        <div className={cx(`${prefix}--rangeinput-slider__container`)}>
          <SkeletonText
            style={{ width: "10%" }}
            className={cx(
              `${prefix}--typography-label ${prefix}--rangeinput-slider__label`
            )}
          />
          <SkeletonAnimatedContainer
            style={{ width: "100%" }}
            className={cx(`${prefix}--rangeinput-slider`)}
          />
          <SkeletonText
            style={{ width: "10%" }}
            className={cx(
              `${prefix}--typography-label ${prefix}--rangeinput-slider__label`
            )}
          />
        </div>
      </div>
    </div>
  );
};
