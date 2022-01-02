import cx from "classnames";
import React from "react";
import { prefix } from "../../settings";

export type TableBodyCellProps = {
  /**
   * TableBodyCell Children
   */
  children: React.ReactNode;

  /**
   * TableBodyCell ClassName
   */
  className?: string;
};

export const TableBodyCell = React.forwardRef(function TableBodyCell(
  { children, className, ...rest }: TableBodyCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  return (
    <td
      className={cx(`${prefix}--datatable-body__cell`, className)}
      {...rest}
      ref={ref}
    >
      {children}
    </td>
  );
});
