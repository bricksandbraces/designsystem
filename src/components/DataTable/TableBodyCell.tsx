import React from "react";
import { prefix } from "../../settings";
import cx from "classnames";

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
