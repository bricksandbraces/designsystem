import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

type PasswordInputSkeletonProps = {
  /**
   * PasswordInputSkeleton ClassName
   */
  className?: string;

  /**
   * PasswordInputSkeleton fluid
   */
  fluid?: boolean;

  /**
   * PasswordInputSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const PasswordInputSkeleton = ({
  size = "default",
  fluid,
  className
}: PasswordInputSkeletonProps) => {
  return (
    <SkeletonContainer
      className={cx(
        `${prefix}--textinput`,
        {
          [`${prefix}--textinput-fluid`]: fluid
        },

        className
      )}
    >
      {!fluid && (
        <SkeletonAnimatedContainer
          style={{ width: 64 }}
          className={cx(
            `${prefix}--typography-label`,

            className
          )}
        />
      )}
      <SkeletonAnimatedContainer
        style={{ width: 256 }}
        className={`${prefix}--textinput-${size}`}
      />
    </SkeletonContainer>
  );
};

export default PasswordInputSkeleton;
