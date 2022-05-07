import cx from "classnames";
import React, { ReactNode } from "react";
import { Tooltip, TooltipProps } from "../..";
import { prefix } from "../../settings";

export type SideNavItemProps = {
  /**
   * SideNavItem Href
   */
  href?: string;

  /**
   * SideNavItem TooltipProps
   */
  tooltipProps?: TooltipProps;

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
  icon?: ReactNode;

  /**
   * SideNavItem FromHeader
   */
  fromHeader?: boolean;

  /**
   * SideNavItem Selected
   */
  selected?: boolean;

  /**
   * SideNavItem Hide Tooltip
   */
  hideTooltip?: boolean;

  /**
   * SideNavItem OnClick Function
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SideNavItem = React.forwardRef(function SideNavItem(
  {
    href,
    label,
    icon,
    selected,
    hideTooltip,
    fromHeader,
    tooltipProps = { tooltipContent: "Tooltip content" },
    className,
    onClick
  }: SideNavItemProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  const WrapperElement: any = hideTooltip ? React.Fragment : Tooltip;
  const wrapperProps = hideTooltip
    ? {}
    : {
        placement: "left",
        offset: [0, 16],
        ...tooltipProps
      };
  return (
    <>
      {href ? (
        <WrapperElement {...wrapperProps}>
          <a
            ref={ref as React.ForwardedRef<HTMLAnchorElement>}
            href={href}
            className={cx(
              `${prefix}--sidenav-item`,
              {
                [`${prefix}--sidenav-item__selected`]: selected,
                [`${prefix}--sidenav-item__with-icon`]: icon,
                [`${prefix}--sidenav-from-header`]: fromHeader
              },
              className
            )}
          >
            {icon && (
              <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
            )}
            <div className={`${prefix}--sidenav-item__label`}>{label}</div>
          </a>
        </WrapperElement>
      ) : (
        <WrapperElement {...wrapperProps}>
          <button
            ref={ref as React.ForwardedRef<HTMLButtonElement>}
            onClick={onClick}
            className={cx(
              `${prefix}--sidenav-item`,
              {
                [`${prefix}--sidenav-item__selected`]: selected,
                [`${prefix}--sidenav-item__with-icon`]: icon,
                [`${prefix}--sidenav-from-header`]: fromHeader
              },
              className
            )}
          >
            {icon && (
              <div className={`${prefix}--sidenav-item__icon`}>{icon}</div>
            )}
            <div className={`${prefix}--sidenav-item__label`}>{label}</div>
          </button>
        </WrapperElement>
      )}
    </>
  );
});
