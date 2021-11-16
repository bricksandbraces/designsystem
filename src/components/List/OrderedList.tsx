import React, { ReactNode } from "react";
import cx from "classnames";
import { prefix } from "../../settings";

type OrderedListProps = {
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

const OrderedList = ({ nested, children, className }: OrderedListProps) => {
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

export default OrderedList;
