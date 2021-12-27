import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";
import { IconMenu2, IconX } from "@tabler/icons";

export type HeaderMenuButtonProps = {
  /**
   * HeaderMenuButton open
   */
  open?: boolean;

  /**
   * HeaderMenuButton ClassName
   */
  className?: string;

  /**
   * HeaderMenuButton Href
   */
  href?: string;

  /**
   * HeaderMenuButton Selected
   */
  selected?: boolean;

  /**
   * HeaderMenuButton OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const HeaderMenuButton = React.forwardRef(function HeaderMenuButton(
  { className, href, open, onClick, selected, ...rest }: HeaderMenuButtonProps,
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
