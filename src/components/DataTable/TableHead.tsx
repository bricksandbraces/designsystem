import React, { ReactNode } from "react";
import { HeaderData } from "./DataTable";
import { prefix } from "../../settings";

type TableHeadProps = {
  /**
   * React children
   */
  children: ReactNode;

  /**
   * Header column calculation
   */
  headers: HeaderData;
};

const TableHead = ({ children, headers }: TableHeadProps) => {
  return (
    <>
      <thead className={`${prefix}--datatable-head`}>
        {children}
        <tr>
          <td colSpan={headers.length} />
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
