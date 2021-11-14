import React, { useState } from "react";
import cx from "classnames";
import Loading from "../Loading/Loading";
import { prefix } from "../../settings";

export type ButtonOrAnchor = HTMLButtonElement | HTMLAnchorElement;

export type ButtonProps = {
  /**
   * Button Id
   */
  id?: string;

  /**
   * Button Children
   */
  children?: React.ReactNode;

  /**
   * Button Kind
   */
  kind?: "primary" | "secondary" | "tertiary" | "ghost";

  /**
   * Danger
   */
  danger?: boolean;

  /**
   * Button ClassName
   */
  className?: string;

  /**
   * Button Href (sets the button to anchor)
   */
  href?: string;

  /**
   * Button onClick
   */
  onClick?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * Button onMouseEnter
   */
  onMouseEnter?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * Button onMouseLeave
   */
  onMouseLeave?: React.MouseEventHandler<ButtonOrAnchor>;

  /**
   * Button onFocus
   */
  onFocus?: (event: React.FocusEvent<ButtonOrAnchor>) => void;

  /**
   * Button onBlur
   */
  onBlur?: (event: React.FocusEvent<ButtonOrAnchor>) => void;

  /**
   * Button type
   */
  type?: "button" | "submit" | "reset";

  /**
   * Button role
   */
  role?: string;

  /**
   * Button loadingDescription
   */
  loadingDescription?: string;

  /**
   * Button disabled
   */
  disabled?: boolean;

  /**
   * Button Size
   */
  size?: "large" | "default" | "small";

  /**
   * Button Icon
   */
  icon?: React.ReactNode;

  /**
   * Button IconPosition
   */
  iconPosition?: "right" | "left";

  /**
   * Button IsLoading
   */
  isLoading?: boolean;

  /**
   * Button Fluid
   */
  fluid?: boolean;

  /**
   * Button Title
   */
  title?: string;

  /**
   * Button TabIndex
   */
  tabIndex?: number;

  /**
   * Button ManualFocus used for overwriting focus-visible behaviour
   */
  manualFocus?: boolean;
};

const Button = (
  {
    kind = "primary",
    size = "default",
    danger,
    disabled,
    isLoading,
    icon,
    className,
    iconPosition,
    children,
    fluid,
    href,
    loadingDescription = "Loading",
    onFocus,
    onBlur,
    manualFocus,
    ...rest
  }: ButtonProps,
  ref: React.ForwardedRef<ButtonOrAnchor>
) => {
  /**
   * To maintain a consistent focus on our controls, we have to manually listen for the focus
   * state and can NOT use the focus-visible selector.
   * See discussion under https://github.com/WICG/focus-visible/issues/88 .
   */
  const [focused, setFocused] = useState<boolean>(false);

  const classes = cx(
    `${prefix}--button ${prefix}--button-${size} ${prefix}--button-${kind}`,
    {
      [`${prefix}--button-disabled`]: disabled,
      [`${prefix}--button-fluid`]: fluid,
      [`${prefix}--button-icon-right`]: icon && iconPosition === "right",
      [`${prefix}--button-icon-left`]: icon && iconPosition === "left",
      [`${prefix}--button-loading`]: isLoading,
      [`${prefix}--button-danger`]: danger,
      [`${prefix}--button__focus`]: focused && manualFocus
    },
    className
  );

  const loader = isLoading && (
    <Loading
      active
      loadingDescription={loadingDescription}
      disabled={disabled}
      size="inline"
    />
  );

  const content = (
    <div
      className={cx(`${prefix}--button-label`, {
        [`${prefix}--button-hidden`]: isLoading
      })}
    >
      {children ? iconPosition && icon : icon}
      {children}
    </div>
  );

  const focusHandler = {
    onBlur: (event: React.FocusEvent<ButtonOrAnchor, Element>) => {
      onBlur?.(event);
      setFocused(false);
    },
    onFocus: (event: React.FocusEvent<ButtonOrAnchor, Element>) => {
      onFocus?.(event);
      setFocused(true);
    }
  };

  return (
    <>
      {href ? (
        <a
          href={href}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          className={classes}
          {...focusHandler}
          {...rest}
        >
          {loader}
          {content}
        </a>
      ) : (
        <button
          type="button"
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          className={classes}
          disabled={disabled}
          {...focusHandler}
          {...rest}
        >
          {loader}
          {content}
        </button>
      )}
    </>
  );
};

export default React.forwardRef(Button);
