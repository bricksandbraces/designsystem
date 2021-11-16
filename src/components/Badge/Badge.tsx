import React, { ReactNode } from "react";
import { IconX } from "@tabler/icons";
import cx from "classnames";
import { prefix } from "../../settings";

export type BadgeColor =
  | "red"
  | "yellow"
  | "purple"
  | "gray"
  | "cyan"
  | "blue"
  | "orange"
  | "green";

type BadgeProps = {
  /**
   * Badge Message
   */
  children?: string | ReactNode;

  /**
   * Badge ClassName
   */
  className?: string;

  /**
   * Badge Title
   */
  title?: string;

  /**
   * Badge Type
   */
  colorType?: BadgeColor;

  /**
   * Badge TabIndex
   */
  tabIndex?: number;

  /**
   * Badge onClose Function
   */
  onClose?: (event: any) => void;

  /**
   * Badge onClick Function
   */
  onClick?: (event: any) => void;
};

const Badge = ({
  children,
  className,
  tabIndex,
  onClose,
  onClick,
  colorType = "gray",
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
            `${prefix}--badge ${prefix}--badge-${colorType}`,
            className
          )}
        >
          <div className={`${prefix}--badge-content`}>
            <p>{children}</p>
          </div>
        </button>
      ) : (
        <div
          tabIndex={tabIndex}
          className={cx(
            `${prefix}--badge ${prefix}--badge-${colorType}`,
            className
          )}
        >
          <div className={`${prefix}--badge-content`}>
            <p>{children}</p>
            {onClose && (
              <button
                type="button"
                tab-index={0}
                className={`${prefix}--badge-close`}
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
