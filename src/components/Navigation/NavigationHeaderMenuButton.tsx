import { IconMenu2, IconX } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type NavigationHeaderMenuButtonProps = {
  /**
   * NavigationHeaderMenuButton open
   */
  open?: boolean;

  /**
   * NavigationHeaderMenuButton ClassName
   */
  className?: string;

  /**
   * NavigationHeaderMenuButton Href
   */
  href?: string;

  /**
   * NavigationHeaderMenuButton Selected
   */
  selected?: boolean;

  /**
   * NavigationHeaderMenuButton OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const NavigationHeaderMenuButton = React.forwardRef(function NavigationHeaderMenuButton(
  { className, href, open, onClick, selected, ...rest }: NavigationHeaderMenuButtonProps,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <>
      <button
        onClick={onClick}
        {...rest}
        className={cx(
          `${prefix}--navigation-header__action-item ${prefix}--navigation-header__menu-button`,
          {
            [`${prefix}--navigation-header__action-item--selected`]: open
          },
          className
        )}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
      >
        {open ? <IconX /> : <IconMenu2 />}
      </button>
    </>
  );
});
