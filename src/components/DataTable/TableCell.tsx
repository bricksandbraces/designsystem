import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

export type TableCellProps = {
  /**
   * React children
   */
  children: React.ReactNode;

  /**
   * TableCell ClassName
   */
  className?: string;
};

const TableCell = (
  { children, className, ...rest }: TableCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <td
      className={cx(`${prefix}--datatable-body__cell`, className)}
      {...rest}
      ref={ref}
    >
      {children}
    </td>
  );
};

export default React.forwardRef(TableCell);
