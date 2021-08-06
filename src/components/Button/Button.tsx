import React, {
  FocusEvent,
  forwardRef,
  MutableRefObject,
  ReactNode
} from "react";
import cx from "classnames";

type ForwardedRef<T> =
  | ((instance: T | null) => void)
  | MutableRefObject<T | null>
  | null;

export type ButtonProps = {
  /** Unique identifier for your button */
  id?: string;

  /** Specify the content of your button */
  children?: ReactNode;

  /** Specify button kind */
  kind?: string;

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

  /** Hide the button */
  hidden?: boolean;

  /** Set the button disabled */
  disabled?: boolean;

  /** Set the button large */
  large?: boolean;

  /** Set the button small */
  small?: boolean;

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
  outline: {
    "": "button--outline"
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
    large,
    small,
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
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => (
  <div
    className={cx({ "button--notallowed": isLoading || disabled }, className)}
  >
    {href ? (
      <a
        href={href}
        ref={ref as ForwardedRef<HTMLAnchorElement>}
        className={cx(
          "button",
          {
            "button--large": large && !small,
            "button--small": small && !large,
            "icon-only": iconOnly,
            "button--disabled": disabled,
            "button--fluid": fluid && !iconOnly,
            "with-icon-right": withIconRight && !iconOnly,
            "with-icon-left": withIconLeft && !iconOnly,
            "button--loading": isLoading
          },
          kindStyles[kind][""]
        )}
        {...rest}
      >
        {isLoading && (
          <div className="spinner-border loading" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
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
    ) : (
      <button
        type="button"
        ref={ref as ForwardedRef<HTMLButtonElement>}
        className={cx(
          "button",
          {
            "button--large": large && !small,
            "button--small": small && !large,
            "icon-only": iconOnly,
            "button--disabled": disabled,
            "button--fluid": fluid && !iconOnly,
            "with-icon-right": withIconRight && !iconOnly,
            "with-icon-left": withIconLeft && !iconOnly,
            "button--loading": isLoading
          },
          kindStyles[kind][""]
        )}
        disabled={disabled}
        {...rest}
      >
        {isLoading && (
          <div className="spinner-border loading" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
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
  </div>
);

export default forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  Button
);
