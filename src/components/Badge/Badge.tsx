import { IconX } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { useTheme } from "../..";
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

export type ButtonOrDiv = HTMLButtonElement | HTMLDivElement;

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
  color?: BadgeColor;

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

export const Badge = React.forwardRef(function Badge(
  {
    children,
    className,
    tabIndex,
    onClose,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    role,
    color = "gray",
    title,
    "aria-label": ariaLabel
  }: BadgeProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLDivElement>
) {
  const currentTheme = useTheme();
  console.log("= = = = =");
  console.log(color);
  console.log(currentTheme);
  console.log("= = = = =");
  const baseProps = {
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    tabIndex,
    title,
    role,
    "aria-label": ariaLabel,
    className: cx(`${prefix}--badge ${prefix}--badge-${color}`, className)
  };
  return (
    <>
      {onClick ? (
        <button
          type="button"
          {...baseProps}
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
        >
          <div className={`${prefix}--badge-content`}>
            <p>{children}</p>
          </div>
        </button>
      ) : (
        <div {...baseProps} ref={ref as React.ForwardedRef<HTMLDivElement>}>
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
});
