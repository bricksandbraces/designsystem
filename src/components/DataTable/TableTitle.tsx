import React from "react";
import { prefix } from "../../settings";

export type TableTitleProps = {
  /**
   * Table Title Children
   */
  children: React.ReactNode;
};

const TableTitle = ({ children }: TableTitleProps) => {
  return <p className={`${prefix}--datatable-title`}>{children}</p>;
};

export default React.forwardRef(TableTitle);
