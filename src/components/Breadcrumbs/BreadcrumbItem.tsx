import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";
import { Link } from "../..";
import { LinkProps } from "../Link/Link";
import { IconChevronRight } from "@tabler/icons";

type BreadcrumbItemProps = {
  /**
   * BreadcrumbItem Children
   */
  children?: ReactNode;

  /**
   * BreadcrumbItem Icon
   */
  icon?: ReactNode;

  /**
   * BreadcrumbItem IsOverflow
   */
  isOverflow?: boolean;

  /**
   * BreadcrumbItem CurrentItem
   */
  currentItem?: boolean;
} & LinkProps;

const BreadcrumbItem = ({
  children,
  currentItem,
  isOverflow,
  icon,
  ...rest
}: BreadcrumbItemProps) => {
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
        <Link>{children}</Link>
      </div>
      <IconChevronRight aria-hidden />
    </li>
  );
};

export default BreadcrumbItem;
