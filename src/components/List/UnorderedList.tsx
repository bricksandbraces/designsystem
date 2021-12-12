import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type UnorderedListProps = {
  /**
   * UnorderedList Children
   */
  children?: ReactNode;

  /**
   * UnorderedList ClassName
   */
  className?: string;

  /**
   * UnorderedList Nested
   */
  nested?: boolean;
};

const UnorderedList = ({ nested, children, className }: UnorderedListProps) => {
  return (
    <ul
      className={cx(
        `${prefix}--list ${prefix}--list-unordered`,
        { [`${prefix}--list-nested`]: nested },
        className
      )}
    >
      {children}
    </ul>
  );
};

export default UnorderedList;
