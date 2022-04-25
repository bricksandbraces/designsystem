import { IconArrowRight } from "@tabler/icons";
import cx from "classnames";
import React from "react";
import { Link } from "../..";
import { prefix } from "../../settings";
import { LinkProps } from "../Link/Link";

export type BreadcrumbItemProps = {
  /**
   * BreadcrumbItem Children
   */
  children?: React.ReactNode;

  /**
   * BreadcrumbItem Icon
   */
  icon?: React.ReactElement;

  /**
   * BreadcrumbItem OverflowMenu
   */
  overflowMenu?: React.ReactNode;

  /**
   * BreadcrumbItem CurrentItem
   */
  currentItem?: boolean;

  /**
   * BreadcrumbItem LinkProps
   */
  linkProps?: Omit<LinkProps, "children">;
};

export const BreadcrumbItem = React.forwardRef(function BreadcrumpItem(
  {
    children,
    currentItem,
    overflowMenu,
    icon,
    linkProps,
    ...rest
  }: BreadcrumbItemProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) {
  return (
    <li
      className={cx(`${prefix}--breadcrumb-item`, {
        [`${prefix}--breadcrumb-item__current`]: currentItem,
        [`${prefix}--breadcrumb-item__overflow`]: !!overflowMenu
      })}
      {...rest}
    >
      <div>
        {overflowMenu ? (
          overflowMenu
        ) : (
          <>
            <Link icon={icon} iconPosition="start" {...linkProps} ref={ref}>
              {children}
            </Link>
          </>
        )}
      </div>
      <IconArrowRight aria-hidden />
    </li>
  );
});
