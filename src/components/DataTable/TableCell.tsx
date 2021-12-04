import React from "react";
import { prefix } from "../../settings";

export type TableCellProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

const TableCell = (
  { children, ...rest }: TableCellProps,
  ref: React.ForwardedRef<HTMLTableCellElement>
) => {
  return (
    <td className={`${prefix}--datatable-cell`} {...rest} ref={ref}>
      {children}
    </td>
  );
};

export default React.forwardRef(TableCell);
