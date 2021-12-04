import React from "react";
import cx from "classnames";
import { IconCalendar } from "@tabler/icons";
import { prefix } from "../../settings";
import SkeletonContainer from "../Skeleton/SkeletonContainer";
import SkeletonText from "../Skeleton/SkeletonText";

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
      <SkeletonContainer
        style={{ width: "16rem" }}
        className={`${prefix}--textinput-${size}`}
      >
        <SkeletonText style={{ width: "8rem" }} />
        <IconCalendar size={16} />
      </SkeletonContainer>
    </div>
  );
};

export default DatePickerSkeleton;
