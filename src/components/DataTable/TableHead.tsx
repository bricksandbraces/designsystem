import React, { ReactNode } from "react";
import Divider from "../Divider/Divider";
import { HeaderData } from "./DataTable";

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
      <thead className="datatable--head">
        {children}
        <tr>
          <td colSpan={headers.length} />
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
