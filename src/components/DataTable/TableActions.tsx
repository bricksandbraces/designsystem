import React from "react";
import TableCell from "./TableCell";
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
    <TableCell
      className={`${prefix}--datatable-body__cell-actions`}
      {...rest}
      ref={ref}
    >
      {children}
    </TableCell>
  );
};

export default React.forwardRef(TableActions);
