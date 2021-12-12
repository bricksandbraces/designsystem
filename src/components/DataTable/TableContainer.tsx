import React from "react";
import { prefix } from "../../settings";

export type TableContainerProps = {
  /**
   * React children
   */
  children: React.ReactNode;

  /**
   * Table title
   */
  title?: string;
};

const TableContainer = ({ children, title }: TableContainerProps) => {
  return (
    <div className={`${prefix}--datatable-container`}>
      {title && (
        <div className={`${prefix}--datatable-container__header`}>{title}</div>
      )}
      <div className={`${prefix}--datatable-container__content`}>
        {children}
      </div>
    </div>
  );
};

export default React.forwardRef(TableContainer);
