import cx from "classnames";
import React, { ReactNode } from "react";
import { prefix } from "../../settings";

export type OrderedListProps = {
  /**
   * OrderedList Children
   */
  children?: ReactNode;

  /**
   * OrderedList ClassName
   */
  className?: string;

  /**
   * OrderedList Nested
   */
  nested?: boolean;
};

export const OrderedList = function OrderedList({
  nested,
  children,
  className
}: OrderedListProps) {
  return (
    <ol
      className={cx(
        `${prefix}--list ${prefix}--list-ordered`,
        { [`${prefix}--list-nested`]: nested },
        className
      )}
    >
      {children}
    </ol>
  );
};
