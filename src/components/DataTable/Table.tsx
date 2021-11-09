import React, { ReactNode } from "react";
import { prefix } from "../../settings";

type TableProps = {
  /**
   * Children
   */
  children?: ReactNode;
};

const Table = ({ children }: TableProps) => {
  return <table className={`${prefix}--datatable-table`}>{children}</table>;
};

export default Table;
