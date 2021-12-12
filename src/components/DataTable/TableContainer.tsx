import React from "react";
import { prefix } from "../../settings";

export type TableContainerProps = {
  /**
   * React children
   */
  children: React.ReactNode;

  /**
   * Table Title
   */
  title?: string;
};

const TableContainer = ({ children, title }: TableContainerProps) => {
  return (
    <div className={`${prefix}--datatable-container`}>
      <div className={`${prefix}--datatable-container__content`}>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef(TableContainer);
