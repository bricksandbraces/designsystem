import { IconCalendar } from "@tabler/icons-react";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";
import { SkeletonAnimatedContainer } from "../Skeleton/SkeletonAnimatedContainer";
import { SkeletonText } from "../Skeleton/SkeletonText";

export type DatePickerSkeletonProps = {
  /**
   * DatePickerSkeleton ClassName
   */
  className?: string;

  /**
   * DatePickerSkeleton Size
   */
  size?: "large" | "default" | "small";
};

export const DatePickerSkeleton = function DatePickerSkeleton({
  size = "default",
  className
}: DatePickerSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--datepicker ${prefix}--skeleton ${prefix}--datepicker-${size}`,

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
        <IconCalendar size={16} />
      </SkeletonAnimatedContainer>
    </div>
  );
};
