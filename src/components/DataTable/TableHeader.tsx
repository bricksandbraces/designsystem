import React from "react";
import { prefix } from "../../settings";

export type TableHeaderProps = {
  /**
   * Table Children
   */
  children?: React.ReactNode;
};

const TableHeader = ({ children }: TableHeaderProps) => {
  return <div className={`${prefix}--datatable-header`}>{children}</div>;
};

export default React.forwardRef(TableHeader);
