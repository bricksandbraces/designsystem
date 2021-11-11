import React, { ReactNode } from "react";
import { prefix } from "../../settings";

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
    <div className={`${prefix}--datatable-container`}>
      <div className={`${prefix}--datatable-container__header`}>{title}</div>
      <div className={`${prefix}--datatable-container__content`}>
        {children}
      </div>
    </div>
  );
};

export default TableContainer;
