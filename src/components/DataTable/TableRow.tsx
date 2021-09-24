import React, { ReactNode } from "react";

type TableRowProps = {
  /**
   * React children
   */
  children: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr className="datatable--row">{children}</tr>;
};

export default TableRow;
