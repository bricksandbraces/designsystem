import React from "react";
import { IconX } from "@tabler/icons";
import cx from "classnames";
import { prefix } from "../../settings";

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

type ButtonOrDiv = HTMLButtonElement | HTMLDivElement;

export type BadgeProps = {
  /**
   * Badge React Children as Message
   */
  children?: React.ReactNode;

  /**
   * Badge ClassName
   */
  className?: string;

  /**
   * Badge aria-label
   */
  "aria-label"?: string;

  /**
   * Badge Type Defaults to warm-gray
   */
  colorType?: BadgeColor;

  /**
   * Badge TabIndex
   */
  tabIndex?: number;

  /**
   * Badge Role
   */
  role?: React.AriaRole;

  /**
   * Badge Title
   */
  title?: string;

  /**
   * Badge onClose Function
   */
  onClose?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Badge closeTitle
   */
  closeTitle?: string;

  /**
   * Badge onClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;

  /**
   * Badge onFocus Function
   */
  onFocus?: React.FocusEventHandler<ButtonOrDiv>;

  /**
   * Badge onBlur Function
   */
  onBlur?: React.FocusEventHandler<ButtonOrDiv>;

  /**
   * Badge onMouseEnter Function
   */
  onMouseEnter?: React.MouseEventHandler<ButtonOrDiv>;

  /**
   * Badge onMouseLeave Function
   */
  onMouseLeave?: React.MouseEventHandler<ButtonOrDiv>;
};

const Badge = (
  {
    children,
    className,
    tabIndex,
    role,
    title,
    onClose,
    closeTitle,
    onClick,
    colorType = "warm-gray",
    "aria-label": ariaLabel,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave
  }: BadgeProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLDivElement>
) => {
  const baseProps = {
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    tabIndex,
    title,
    role,
    "aria-label": ariaLabel,
    className: cx(`${prefix}--badge ${prefix}--badge-${colorType}`, className)
  };

  return onClick ? (
    <button
      type="button"
      onClick={onClick}
      ref={ref as React.ForwardedRef<HTMLButtonElement>}
      {...baseProps}
    >
      <div className={`${prefix}--badge-content`}>
        <p>{children}</p>
      </div>
    </button>
  ) : (
    <div ref={ref as React.ForwardedRef<HTMLDivElement>} {...baseProps}>
      <div className={`${prefix}--badge-content`}>
        <p>{children}</p>
        {onClose && (
          <button
            type="button"
            tab-index={0}
            className={`${prefix}--badge-close`}
            title={closeTitle}
            onClick={onClose}
          >
            <IconX size={12} stroke={2} strokeLinejoin="miter" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Badge;
