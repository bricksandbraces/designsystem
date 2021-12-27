import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type UnorderedListProps = {
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

export const UnorderedList = function UnorderedList({
  nested,
  children,
  className
}: UnorderedListProps) {
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
