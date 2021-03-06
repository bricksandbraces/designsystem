import React from "react";
import { prefix } from "../../settings";
import { TableBodyCell } from "./TableBodyCell";

export type TableActionsProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

export const TableActions = React.forwardRef(function TableActions(
  { children, ...rest }: TableActionsProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) {
  return (
    <TableBodyCell
      className={`${prefix}--datatable-body__cell-actions`}
      {...rest}
      ref={ref}
    >
      <div className={`${prefix}--datatable-body__cell-actions--label`}>
        {children}
      </div>
    </TableBodyCell>
  );
});
