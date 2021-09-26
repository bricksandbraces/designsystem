import React, { ReactNode } from "react";

type TableBodyProps = {
  /**
   * React children
   */
  children: ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

export default TableBody;
