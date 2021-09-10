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

  /**
   * Renders the divider
   */
  withDivider: ReactNode;
};

const TableHead = ({ children, headers, withDivider }: TableHeadProps) => {
  return (
    <>
      <thead className="datatable--head">
        {children}
        <tr>
          <td colSpan={headers.length}>
            {withDivider && (
              <Divider
                margin={false}
                size="thin"
                kind="subtle"
                className="datatable--head-divider"
              />
            )}
          </td>
        </tr>
      </thead>
    </>
  );
};

export default TableHead;
