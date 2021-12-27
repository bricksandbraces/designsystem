import React from "react";
import { prefix } from "../../settings";

export type TableContainerProps = {
  /**
   * React children
   */
  children: React.ReactNode;
};

export const TableContainer = function TableContainer({
  children
}: TableContainerProps) {
  return (
    <div className={`${prefix}--datatable-container`}>
      <div className={`${prefix}--datatable-container__content`}>
        {children}
      </div>
    </div>
  );
};
