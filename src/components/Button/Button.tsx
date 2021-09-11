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

  /** Specify if inline or not */
  inline?: boolean;

  /** Specify an optional HTML title attribute */
  title?: string;

  /** Specify an optional className to be added to your button */
  className?: string;

  /** Use the button as an anchor link. Sets component wrapping type to 'a' instead of 'button'. */
  href?: string;

  /** Provide the click handler for the button */
  onClick?: (event: any) => void;
  onHover?: (event: any) => void;

  /** Specify the type of the button */
  type?: "button" | "submit" | "reset";

  /** Specify the role of the button */
  role?: string;

  /** Specify the Loading description of the button */
  loadingDescription?: string;

  /** Hide the button */
  hidden?: boolean;

  /** Set the button disabled */
  disabled?: boolean;

  /** Button size */
  size?: "large" | "default" | "small";

  /** Set the button to icon only button */
  iconOnly?: boolean;

  /** Set the button loading */
  isLoading?: boolean;

  /** Set the button fluid */
  fluid?: boolean;

  /** Set the icon position and icon */
  withIconRight?: boolean;
  withIconLeft?: boolean;
  renderIcon?: ReactNode;

  /** Automatically focus the button */
  autoFocus?: boolean;

  /** Triggered when the event receives focus */
  onFocus?: (event: FocusEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
};

const kindStyles: Record<string, Record<string, string>> = {
  primary: {
    "": "button--primary"
  },
  secondary: {
    "": "button--secondary"
  },
  tertiary: {
    "": "button--tertiary"
  },
  danger: {
    "": "button--danger"
  },
  ghost: {
    "": "button--ghost"
  }
};

const Button = (
  {
    kind = "primary",
    size,
    disabled,
    isLoading,
    iconOnly,
    children,
    withIconRight,
    withIconLeft,
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
      <div className={cx({ "button--notallowed": isLoading || disabled })}>
        <a
          href={href}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={cx(
            "button",
            {
              "button--large": size === "large",
              "button--small": size === "small",
              "button--default": size === "default" || undefined,
              "icon-only": iconOnly,
              "button--disabled": disabled,
              "button--fluid": fluid && !iconOnly,
              "with-icon-right": withIconRight && !iconOnly,
              "with-icon-left": withIconLeft && !iconOnly,
              "button--loading": isLoading
            },
            className,
            kindStyles[kind][""]
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
            {(withIconRight || withIconLeft || iconOnly) && renderIcon}
            {!iconOnly && children}
          </div>
        </a>
      </div>
    ) : (
      <button
        type="button"
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={cx(
          "button",
          {
            "button--large": size === "large",
            "button--small": size === "small",
            "button--default": size === "default" || undefined,
            "icon-only": iconOnly,
            "button--disabled": disabled,
            "button--fluid": fluid && !iconOnly,
            "with-icon-right": withIconRight && !iconOnly,
            "with-icon-left": withIconLeft && !iconOnly,
            "button--loading": isLoading
          },
          className,
          kindStyles[kind][""]
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
          {(withIconRight || withIconLeft || iconOnly) && renderIcon}
          {!iconOnly && children}
        </div>
      </button>
    )}
  </>
);

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  Button
);
