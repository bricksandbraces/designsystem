import React, { ReactNode } from "react";

type TableProps = {
  /**
   * Children
   */
  children?: ReactNode;
};

const Table = ({ children }: TableProps) => {
  return <table className="datatable--table">{children}</table>;
};

export default Table;
