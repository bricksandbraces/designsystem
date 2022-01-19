import Tippy from "@tippyjs/react";
import cx from "classnames";
import React from "react";
import { roundArrow } from "tippy.js";
import { prefix } from "../../settings";

export type NavigationHeaderNavMenuProps = {
  /**
   * NavigationHeaderNavMenu Label
   */
  label?: string;

  /**
   * NavigationHeaderNavMenu Children
   */
  children: React.ReactNode;

  /**
   * NavigationHeaderNavMenu ClassName
   */
  className?: string;

  /**
   * NavigationHeaderNavMenu Open
   */
  open?: boolean;

  /**
   * NavigationHeaderNavMenu Selected
   */
  selected?: boolean;

  /**
   * NavigationHeaderNavMenu OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const NavigationHeaderNavMenu = React.forwardRef(
  function NavigationHeaderNavMenu(
    {
      className,
      label,
      onClick,
      open,
      selected,
      children,
      ...props
    }: NavigationHeaderNavMenuProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) {
    return (
      <Tippy
        ref={ref}
        interactive
        className={cx(
          `${prefix}--overflowmenu ${prefix}--overflowmenu-default ${prefix}--navigation-header__nav-menu`
        )}
        animation="bbds-animation"
        trigger="click"
        placement="bottom-start"
        theme="dark"
        {...props}
        offset={[0, 8]}
        allowHTML
        content={children}
        arrow={roundArrow}
      >
        <button
          onClick={onClick}
          className={cx(
            `${prefix}--navigation-header__nav-link ${prefix}--navigation-header__nav-menu--button`,
            {
              [`${prefix}--navigation-header__nav-link--selected`]: selected,
              [`${prefix}--navigation-header__nav-menu--open`]: open
            },
            className
          )}
          ref={ref}
        >
          {label}
        </button>
      </Tippy>
    );
  }
);
