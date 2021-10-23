import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

type NumberInputSkeletonProps = {
  /**
   * NumberInputSkeleton ClassName
   */
  className?: string;

  /**
   * NumberInputSkeleton fluid
   */
  fluid?: boolean;

  /**
   * NumberInputSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const NumberInputSkeleton = ({
  size = "default",
  fluid,
  className
}: NumberInputSkeletonProps) => {
  return (
    <SkeletonContainer
      className={cx(
        `${prefix}--numberinput`,
        {
          [`${prefix}--numberinput-fluid`]: fluid
        },

        className
      )}
    >
      {!fluid && (
        <SkeletonAnimatedContainer
          width={64}
          className={cx(
            `${prefix}--typography--label`,

            className
          )}
        />
      )}
      <SkeletonAnimatedContainer
        width={256}
        className={`${prefix}--numberinput-${size}`}
      />
    </SkeletonContainer>
  );
};

export default NumberInputSkeleton;
