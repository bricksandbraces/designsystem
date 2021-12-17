import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Link } from "../..";
import { LinkProps } from "../Link/Link";
import { IconChevronRight } from "@tabler/icons";

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
   * BreadcrumbItem IsOverflow
   */
  isOverflow?: boolean;

  /**
   * BreadcrumbItem CurrentItem
   */
  currentItem?: boolean;

  /**
   * BreadcrumbItem LinkProps
   */
  linkProps?: Omit<LinkProps, "children">;
};

const BreadcrumbItem = (
  {
    children,
    currentItem,
    isOverflow,
    icon,
    linkProps,
    ...rest
  }: BreadcrumbItemProps,
  ref: React.ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
) => {
  return (
    <li
      className={cx(`${prefix}--breadcrumb-item`, {
        [`${prefix}--breadcrumb-item__current`]: currentItem,
        [`${prefix}--breadcrumb-item__overflow`]: isOverflow
      })}
      {...rest}
    >
      <div>
        {icon}
        <Link {...linkProps} ref={ref}>
          {children}
        </Link>
      </div>
      <IconChevronRight aria-hidden />
    </li>
  );
};

export default React.forwardRef(BreadcrumbItem);
