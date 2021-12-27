import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

export type ListItemProps = {
  /**
   * ListItem Children
   */
  children?: string;

  /**
   * ListItem ClassName
   */
  className?: string;
};

export const ListItem = function ListItem({
  children,
  className
}: ListItemProps) {
  return <li className={cx(`${prefix}--list-item`, className)}>{children}</li>;
};
