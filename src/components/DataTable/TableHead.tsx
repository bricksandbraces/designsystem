import React, { ReactNode } from "react";

type TableHeadProps = {
  /**
   * React children
   */
  children: ReactNode;
};

const TableHead = ({ children }: TableHeadProps) => {
  return <thead className="datatable--head">{children}</thead>;
};

export default TableHead;
