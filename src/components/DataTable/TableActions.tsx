import React from "react";
import TableBodyCell from "./TableBodyCell";
import { prefix } from "../../settings";

export type TableActionsProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

const TableActions = (
  { children, ...rest }: TableActionsProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <TableBodyCell
      className={`${prefix}--datatable-body__cell-actions`}
      {...rest}
      ref={ref}
    >
      {children}
    </TableBodyCell>
  );
};

export default React.forwardRef(TableActions);
