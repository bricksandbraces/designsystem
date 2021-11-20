import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type SideNavItemProps = {
  /**
   * SideNavItem Href
   */
  href?: string;

  /**
   * SideNavItem Label
   */
  label?: string;

  /**
   * SideNavItem ClassName
   */
  className?: string;

  /**
   * SideNavItem Children
   */
  children?: ReactNode;

  /**
   * SideNavItem Icon
   */
  icon: ReactNode;

  /**
   * SideNavItem Selected
   */
  selected?: boolean;

  /**
   * SideNavItem OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const SideNavItem = (
  { href, label, icon, selected, className, onClick }: SideNavItemProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  return (
    <>
      {href ? (
        <a
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          href={href}
          className={cx(
            `${prefix}--sidenav-item`,
            {
              [`${prefix}--sidenav-item__selected`]: selected
            },
            className
          )}
        >
          <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
          <div className={`${prefix}--sidenav-item__label`}>{label}</div>
        </a>
      ) : (
        <button
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          onClick={onClick}
          className={cx(
            `${prefix}--sidenav-item`,
            {
              [`${prefix}--sidenav-item__selected`]: selected
            },
            className
          )}
        >
          <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
          <div className={`${prefix}--sidenav-item__label`}>{label}</div>
        </button>
      )}
    </>
  );
};

export default React.forwardRef(SideNavItem);
