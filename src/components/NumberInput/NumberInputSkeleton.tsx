import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { IconOnlyButtonGroup } from "../Button/IconOnlyButtonGroup";
import { IconOnlyButton } from "../Button/IconOnlyButton";
import { IconMinus, IconPlus } from "@tabler/icons";
import { SkeletonText } from "../Skeleton/SkeletonText";
import { SkeletonAnimatedContainer } from "../..";

export type NumberInputSkeletonProps = {
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

export const NumberInputSkeleton = function NumberInputSkeleton({
  size = "default",
  fluid,
  className
}: NumberInputSkeletonProps) {
  return (
    <div
      className={cx(
        `${prefix}--numberinput ${prefix}--skeleton`,
        {
          [`${prefix}--numberinput-fluid`]: fluid
        },

        className
      )}
    >
      {!fluid && (
        <SkeletonText
          style={{ width: "4rem" }}
          className={cx(
            `${prefix}--typography-label`,

            className
          )}
        />
      )}
      <SkeletonAnimatedContainer
        style={{ width: "16rem" }}
        className={`${prefix}--numberinput-${size}`}
      >
        <IconOnlyButtonGroup withDivider>
          <IconOnlyButton
            disabled
            kind="ghost"
            className={`${prefix}--numberinput-spin__button`}
            hideTooltip
            size={size}
            icon={<IconMinus />}
          />
          <IconOnlyButton
            disabled
            kind="ghost"
            className={`${prefix}--numberinput-spin__button`}
            hideTooltip
            size={size}
            icon={<IconPlus />}
          />
        </IconOnlyButtonGroup>
      </SkeletonAnimatedContainer>
    </div>
  );
};
