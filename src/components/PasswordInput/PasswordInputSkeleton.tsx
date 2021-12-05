import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import { SkeletonText } from "../..";
import { IconEye } from "@tabler/icons";

type PasswordInputSkeletonProps = {
  /**
   * PasswordInputSkeleton ClassName
   */
  className?: string;

  /**
   * PasswordInputSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const PasswordInputSkeleton = ({
  size = "default",
  className
}: PasswordInputSkeletonProps) => {
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
      >
        <IconEye size={16} />
      </SkeletonAnimatedContainer>
    </div>
  );
};

export default PasswordInputSkeleton;
