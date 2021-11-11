import React, { ForwardedRef, forwardRef, ReactNode, useState } from "react";
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
  children?: ReactNode;

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
   * Button size
   */
  size?: "large" | "default" | "small";

  /**
   * Button icon
   */
  icon?: ReactNode;

  /**
   * Button iconPosition
   */
  iconPosition?: "right" | "left";

  /**
   * Button loading
   */
  isLoading?: boolean;

  /**
   * Button fluid
   */
  fluid?: boolean;

  /**
   * Button title
   */
  title?: string;

  /**
   * Tab index for the button
   */
  tabIndex?: number;
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
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<ButtonOrAnchor>
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
      [`${prefix}--button__focus`]: focused
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

  return (
    <>
      {href ? (
        <a
          href={href}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          className={classes}
          onBlur={(event) => {
            onBlur?.(event);
            setFocused(false);
          }}
          onFocus={(event) => {
            onFocus?.(event);
            setFocused(true);
          }}
          {...rest}
        >
          {loader}
          {content}
        </a>
      ) : (
        <button
          type="button"
          ref={ref as ForwardedRef<HTMLButtonElement>}
          className={classes}
          disabled={disabled}
          onBlur={(event) => {
            onBlur?.(event);
            setFocused(false);
          }}
          onFocus={(event) => {
            onFocus?.(event);
            setFocused(true);
          }}
          {...rest}
        >
          {loader}
          {content}
        </button>
      )}
    </>
  );
};

export default forwardRef<ButtonOrAnchor, ButtonProps>(Button);
