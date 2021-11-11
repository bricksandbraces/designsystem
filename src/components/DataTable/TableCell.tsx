import React, { ReactNode } from "react";
import { prefix } from "../../settings";

type TableCellProps = {
  /**
   * React children
   */
  children: ReactNode;
};

const TableCell = ({ children }: TableCellProps) => {
  return <td className={`${prefix}--datatable-cell`}>{children}</td>;
};

export default TableCell;
