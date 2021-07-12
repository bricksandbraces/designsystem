import React, { ReactNode } from "react";
import cx from "classnames";

export type ButtonProps = {
  /** Unique identifier for your button */
  id?: string;

  /** Specify the content of your button */
  children?: ReactNode;

  /** Specify classic label text for the button */
  label?: string;

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

  /** Set the button to icon only button */
  iconOnly?: boolean;

  /** Set the button to icon + label */
  withIcon?: boolean;

  /** Set the button loading */
  isLoading?: boolean;

  /** Set the button fluid */
  fluid?: boolean;

  /** Set the icon position if the button is fluid */
  iconPosition?: string;
};

const kindStyles: Record<string, Record<string, string>> = {
  primary: {
    "": "primary"
  },
  outline: {
    "": "outline"
  },
  danger: {
    "": "danger"
  },
  ghost: {
    "": "ghost"
  }
};

const Button = ({
  label,
  kind = "primary",
  large,
  disabled,
  isLoading,
  iconOnly,
  withIcon,
  children,
  iconPosition = "left",
  fluid,
  ...rest
}: ButtonProps) => (
  <div className={cx({ "button-notallowed": isLoading || disabled })}>
    <button
      type="button"
      className={cx(
        "button",
        {
          "button-large": large,
          "icon-only": iconOnly,
          "with-icon": withIcon,
          "button-disabled": disabled,
          "button-fluid": fluid && !iconOnly,
          "with-icon-right": iconPosition === "right",
          "with-icon-left": iconPosition === "left",
          "button-loading": isLoading
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
        className={cx("button-label", {
          "button-hidden": isLoading
        })}
      >
        {iconOnly || withIcon ? children : label}
      </div>
    </button>
  </div>
);

export default Button;
