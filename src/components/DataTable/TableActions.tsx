import React from "react";
import TableCell from "./TableCell";

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
    <TableCell {...rest} ref={ref}>
      {children}
    </TableCell>
  );
};

export default React.forwardRef(TableActions);
