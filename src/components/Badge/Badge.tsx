import React, { ReactNode } from "react";
import { IconX } from "@tabler/icons";
import cx from "classnames";
import { prefix } from "../../settings";
import Label from "../Typography/Label";

export type BadgeColor =
  | "red"
  | "yellow"
  | "purple"
  | "warm-gray"
  | "cold-gray"
  | "cyan"
  | "blue"
  | "orange"
  | "green";

type BadgeProps = {
  /**
   * Message that is shown.
   */
  children?: string | ReactNode;

  /**
   * ClassName
   */
  className?: string;

  /**
   * Title
   */
  title?: string;

  /**
   * Type
   */
  colorType?: BadgeColor;

  tabIndex?: number;

  /**
   * onClose function
   */
  onClose?: (event: any) => void;

  /**
   * onClick Function
   */
  onClick?: (event: any) => void;
};

const Badge = ({
  children,
  className,
  tabIndex,
  onClose,
  onClick,
  colorType = "warm-gray",
  title
}: BadgeProps) => {
  return (
    <>
      {onClick ? (
        <button
          aria-label={title}
          type="button"
          tabIndex={tabIndex}
          className={cx(
            `${prefix}--badge ${prefix}--badge--interactive ${prefix}--badge--${colorType} ${prefix}--badge--${colorType}-interactive`,
            className
          )}
        >
          <div className={`${prefix}--badge--content`}>
            <Label>{children}</Label>
          </div>
        </button>
      ) : (
        <div
          tabIndex={tabIndex}
          className={cx(
            `${prefix}--badge ${prefix}--badge--${colorType}`,
            { [`${prefix}--badge--interactive`]: onClose },
            className
          )}
        >
          <div className={`${prefix}--badge--content`}>
            <Label>{children}</Label>
            {onClose && (
              <button
                type="button"
                tab-index={0}
                className={`${prefix}--badge--close`}
                title={title}
                onClick={onClose}
              >
                <IconX size={12} stroke={2} strokeLinejoin="miter" />
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Badge;
