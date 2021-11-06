import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

type RangeInputSkeletonProps = {
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

const RangeInputSkeleton = ({
  size = "default",
  hideInput,
  className
}: RangeInputSkeletonProps) => {
  return (
    <SkeletonContainer
      className={cx(
        `${prefix}--rangeinput ${prefix}--rangeinput-readonly`,
        className
      )}
    >
      <SkeletonAnimatedContainer
        width={64}
        className={cx(`${prefix}--typography-label`)}
      />
      <div className={cx(`${prefix}--rangeinput-container`)}>
        {!hideInput && (
          <SkeletonAnimatedContainer
            width={64}
            className={`${prefix}--numberinput ${prefix}--numberinput-${size}`}
          />
        )}
        <div className={cx(`${prefix}--rangeinput-slider__container`)}>
          <SkeletonAnimatedContainer
            width={24}
            className={cx(
              `${prefix}--typography-label ${prefix}--rangeinput-slider__label`
            )}
          />
          <SkeletonAnimatedContainer
            width={164}
            className={cx(`${prefix}--rangeinput-slider`)}
          />
          <SkeletonAnimatedContainer
            width={24}
            className={cx(
              `${prefix}--typography-label ${prefix}--rangeinput-slider__label`
            )}
          />
        </div>
      </div>
    </SkeletonContainer>
  );
};

export default RangeInputSkeleton;
