import React, { ReactNode } from "react";

type TableContainerProps = {
  /**
   * React children
   */
  children: ReactNode;

  /**
   * Table title
   */
  title?: string;
};

const TableContainer = ({ children, title }: TableContainerProps) => {
  return (
    <div className="datatable--container">
      <div className="datatable--container-header">{title}</div>
      <div className="datatable--container-content">{children}</div>
    </div>
  );
};

export default TableContainer;
