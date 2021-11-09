import React, { ReactNode } from "react";
import { prefix } from "../../settings";

type TableRowProps = {
  /**
   * React children
   */
  children: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr className={`${prefix}--datatable-row`}>{children}</tr>;
};

export default TableRow;
