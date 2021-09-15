import React, { forwardRef, ReactNode, FocusEvent } from "react";
import cx from "classnames";
import Loading from "../Loading/Loading";

export type ButtonProps = {
  /** Unique identifier for your button */
  id?: string;

  /** Specify the content of your button */
  children?: ReactNode;

  /** Specify button kind */
  kind?: "primary" | "secondary" | "tertiary" | "danger" | "ghost";

  /** Specify an optional className to be added to your button */
  className?: string;

  /** Use the button as an anchor link. Sets component wrapping type to 'a' instead of 'button'. */
  href?: string;

  /** Provide the click handler for the button */
  onClick?: (event: any) => void;
  onHover?: (event: any) => void;

  /** Triggered when the event receives focus */
  onFocus?: (event: FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;

  /** Specify the type of the button */
  type?: "button" | "submit" | "reset";

  /** Specify the role of the button */
  role?: string;

  /** Specify the Loading description of the button */
  loadingDescription?: string;

  /** Set the button disabled */
  disabled?: boolean;

  /** Button size */
  size?: "large" | "default" | "small";

  /** Render icon */
  icon?: ReactNode;
  iconPosition?: "right" | "left" | "only";

  /** Set the button loading */
  isLoading?: boolean;

  /** Set the button fluid */
  fluid?: boolean;

  title?: string;

  /** Enables tooltip */
  showTooltip?: boolean;

  /** Shows Icon */
  withIcon?: boolean;

  /** Tooltip label */
  tooltipLabel?: string;

  /** Tooltip label */
  tooltipPosition?: "top" | "bottom" | "left" | "right";

  /** Tooltip open */
  tooltipOpen?: boolean;

  /** Automatically focus the button */
  autoFocus?: boolean;
};

const Button = (
  {
    kind = "primary",
    size = "default",
    disabled,
    isLoading,
    icon,
    withIcon,
    className,
    iconPosition,
    children,
    fluid,
    href,
    loadingDescription = "Loading",
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => (
  <>
    {href ? (
      <a
        href={href}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={cx(
          `button button--${size} button--${kind}`,
          {
            "button--disabled": disabled,
            "button--fluid": fluid,
            "with-icon-right": icon && iconPosition === "right",
            "with-icon-left": icon && iconPosition === "left",
            "button--loading": isLoading
          },
          className
        )}
        {...rest}
      >
        {isLoading && (
          <Loading
            isLoading
            loadingDescription={loadingDescription}
            disabled={disabled}
            size="inline"
          />
        )}
        <div
          className={cx("button--label", {
            "button--hidden": isLoading
          })}
        >
          {children ? iconPosition && icon : icon}
          {children}
        </div>
      </a>
    ) : (
      <button
        type="button"
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={cx(
          `button button--${size} button--${kind}`,
          {
            "button--disabled": disabled,
            "button--fluid": fluid,
            "with-icon-right": icon && iconPosition === "right",
            "with-icon-left": icon && iconPosition === "left",
            "button--loading": isLoading
          },
          className
        )}
        disabled={disabled}
        {...rest}
      >
        {isLoading && (
          <Loading
            isLoading
            loadingDescription={loadingDescription}
            disabled={disabled}
            size="inline"
          />
        )}
        <div
          className={cx("button--label", {
            "button--hidden": isLoading
          })}
        >
          {children ? iconPosition && icon : icon}
          {children}
        </div>
      </button>
    )}
  </>
);

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  Button
);
