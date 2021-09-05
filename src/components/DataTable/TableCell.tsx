import React, { ReactNode } from "react";

type TableCellProps = {
  /**
   * React children
   */
  children: ReactNode;
};

const TableCell = ({ children }: TableCellProps) => {
  return <td className="datatable--cell">{children}</td>;
};

export default TableCell;
