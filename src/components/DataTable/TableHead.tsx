import React from "react";
import { HeaderEntry } from "./DataTable";
import { prefix } from "../../settings";

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

const TableHead = (
  { children, headers }: TableHeadProps,
  ref: React.ForwardedRef<HTMLTableSectionElement>
) => {
  return (
    <thead className={`${prefix}--datatable-head`} ref={ref}>
      {children}
      <tr>
        <td colSpan={headers.length} />
      </tr>
    </thead>
  );
};

export default React.forwardRef(TableHead);
