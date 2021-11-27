import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

export type TextInputSkeletonProps = {
  /**
   * TextInputSkeleton ClassName
   */
  className?: string;

  /**
   * TextInputSkeleton fluid
   */
  fluid?: boolean;

  /**
   * TextInputSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const TextInputSkeleton = ({
  size = "default",
  fluid,
  className
}: TextInputSkeletonProps) => {
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

export default TextInputSkeleton;
