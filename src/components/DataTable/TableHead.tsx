import React from "react";
import { prefix } from "../../settings";
import { HeaderEntry } from "./DataTable";

export type TableHeadProps = {
  /**
   * React children
   */
  children: React.ReactNode;

  /**
   * Header column calculation
   */
  headers: HeaderEntry[];
};

export const TableHead = React.forwardRef(function TableHead(
  { children, headers }: TableHeadProps,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) {
  return (
    <thead className={`${prefix}--datatable-head`} ref={ref}>
      {children}
      <tr>
        <td colSpan={headers.length} />
      </tr>
    </thead>
  );
});
