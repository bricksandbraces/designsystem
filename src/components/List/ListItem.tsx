import React from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type ListItemProps = {
  /**
   * ListItem Children
   */
  children?: string;

  /**
   * ListItem ClassName
   */
  className?: string;
};

const ListItem = ({ children, className }: ListItemProps) => {
  return <li className={cx(`${prefix}--list-item`, className)}>{children}</li>;
};

export default ListItem;
