import cx from "classnames";
import React from "react";
import { ButtonOrAnchor } from "../..";
import { prefix } from "../../settings";

export type NavigationHeaderActionItemProps = {
  /**
   * NavigationHeaderActionItem Children
   */
  children?: React.ReactNode;

  /**
   * NavigationHeaderActionItem ClassName
   */
  className?: string;

  /**
   * NavigationHeaderActionItem Href
   */
  href?: string;

  /**
   * NavigationHeaderActionItem Selected
   */
  selected?: boolean;

  /**
   * NavigationHeaderActionItem OnClick Function
   */
  onClick?: React.MouseEventHandler<ButtonOrAnchor>;
};

export const NavigationHeaderActionItem = React.forwardRef(
  function NavigationHeaderActionItem(
    {
      className,
      href,
      children,
      onClick,
      selected,
      ...rest
    }: NavigationHeaderActionItemProps,
    ref: React.ForwardedRef<ButtonOrAnchor>
  ) {
    return (
      <>
        {href ? (
          <a
            href={href}
            {...rest}
            className={cx(
              `${prefix}--navigation-header__action-item`,
              {
                [`${prefix}--navigation-header__action-item--selected`]:
                  selected
              },
              className
            )}
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          >
            {children}
          </a>
        ) : (
          <button
            onClick={onClick}
            {...rest}
            className={cx(
              `${prefix}--navigation-header__action-item`,
              {
                [`${prefix}--navigation-header__action-item--selected`]:
                  selected
              },
              className
            )}
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
          >
            {children}
          </button>
        )}
      </>
    );
  }
);
