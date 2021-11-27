import React from "react";
import cx from "classnames";
import { IconCalendar } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonAnimatedContainer from "../Skeleton/SkeletonAnimatedContainer";
import SkeletonContainer from "../Skeleton/SkeletonContainer";

type DatePickerSkeletonProps = {
  /**
   * DatePickerSkeleton ClassName
   */
  className?: string;

  /**
   * DatePickerSkeleton Size
   */
  size?: "large" | "default" | "small";
};

const DatePickerSkeleton = ({
  size = "default",
  className
}: DatePickerSkeletonProps) => {
  return (
    <SkeletonContainer
      className={cx(
        `${prefix}--datepicker-skeleton`,

        className
      )}
    >
      <SkeletonAnimatedContainer
        width={64}
        className={cx(
          `${prefix}--typography-label`,

          className
        )}
      />
      <SkeletonAnimatedContainer
        width={256}
        className={`${prefix}--textinput-${size}`}
      >
        <IconCalendar size={16} />
      </SkeletonAnimatedContainer>
    </SkeletonContainer>
  );
};

export default DatePickerSkeleton;
