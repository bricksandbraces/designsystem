import React, { forwardRef, ReactNode, FocusEvent } from "react";
import cx from "classnames";
import Loading from "../Loading/Loading";
import Tooltip from "../Tooltip/Tooltip";

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
  icon?: "right" | "left" | "only";
  renderIcon?: ReactNode;

  /** Set the button loading */
  isLoading?: boolean;

  /** Set the button fluid */
  fluid?: boolean;

  /** Enables tooltip */
  showTooltip?: boolean;

  /** Shows caret for tooltip */
  withCaret?: boolean;

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
    showTooltip = false,
    tooltipLabel = "Label",
    tooltipPosition = "bottom",
    tooltipOpen = false,
    disabled,
    isLoading,
    withCaret,
    icon,
    children,
    fluid,
    href,
    className,
    renderIcon,
    loadingDescription = "Loading",
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => (
  <>
    {href ? (
      <Tooltip
        label={tooltipLabel}
        withCaret={withCaret}
        position={tooltipPosition}
        open={tooltipOpen}
        disabled={disabled || (!showTooltip && icon !== "only")}
        className={cx(
          {
            "button--notallowed": isLoading || disabled,
            "button--fluid": fluid && icon !== "only"
          },
          className
        )}
      >
        <a
          href={href}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={cx(`button button--${size} button--${kind}`, {
            "icon-only": icon === "only",
            "button--disabled": disabled,
            "button--fluid": fluid && icon !== "only",
            "with-icon-right": icon === "right",
            "with-icon-left": icon === "left",
            "button--loading": isLoading
          })}
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
            {icon && renderIcon}
            {icon !== "only" && children}
          </div>
        </a>
      </Tooltip>
    ) : (
      <Tooltip
        label={tooltipLabel}
        withCaret={withCaret}
        position={tooltipPosition}
        open={tooltipOpen}
        disabled={disabled || (!showTooltip && icon !== "only")}
        className={cx({ "button--fluid": fluid && icon !== "only" }, className)}
      >
        <button
          type="button"
          ref={ref as ForwardedRef<HTMLButtonElement>}
          className={cx(`button button--${size} button--${kind}`, {
            "icon-only": icon === "only",
            "button--disabled": disabled,
            "button--fluid": fluid && icon !== "only",
            "with-icon-right": icon === "right",
            "with-icon-left": icon === "left",
            "button--loading": isLoading
          })}
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
            {icon && renderIcon}
            {icon !== "only" && children}
          </div>
        </button>
      </Tooltip>
    )}
  </>
);

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  Button
);
