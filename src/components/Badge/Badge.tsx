import React, { ReactNode } from "react";
import { IconX } from "@tabler/icons";
import cx from "classnames";
import Typography from "../Typography/Typography";
import { prefix } from "../../settings";

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
  colorType?:
    | "red"
    | "yellow"
    | "purple"
    | "warm-gray"
    | "cold-gray"
    | "cyan"
    | "blue"
    | "orange"
    | "green";

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
          className={cx(
            `${prefix}--badge ${prefix}--badge--interactive ${prefix}--badge--${colorType} ${prefix}--badge--${colorType}-interactive`,
            className
          )}
        >
          <div className={`${prefix}--badge--content`}>
            <Typography type="span" token="label">
              {children}
            </Typography>
          </div>
        </button>
      ) : (
        <div
          className={cx(
            `${prefix}--badge ${prefix}--badge--${colorType}`,
            { [`${prefix}--badge--interactive`]: onClose },
            className
          )}
        >
          <div className={`${prefix}--badge--content`}>
            <Typography type="span" token="label">
              {children}
            </Typography>
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
