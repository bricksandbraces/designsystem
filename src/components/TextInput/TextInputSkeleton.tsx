import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import { SkeletonText } from "../..";

export type TextInputSkeletonProps = {
  /**
   * TextInputSkeleton ClassName
   */
  className?: string;

  /**
   * TextInputSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const TextInputSkeleton = ({
  size = "default",
  className
}: TextInputSkeletonProps) => {
  return (
    <div
      className={cx(
        `${prefix}--textinput ${prefix}--skeleton ${prefix}--textinput-${size}`,

        className
      )}
    >
      <SkeletonText
        style={{ width: "4rem" }}
        className={cx(`${prefix}--typography-label`)}
      />
      <SkeletonAnimatedContainer
        style={{ width: "16rem" }}
        className={`${prefix}--textinput-${size}`}
      ></SkeletonAnimatedContainer>
    </div>
  );
};

export default TextInputSkeleton;
