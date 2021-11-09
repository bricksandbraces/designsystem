import React from "react";
import { prefix } from "../../settings";

type TableHeadCellProps = {
  /**
   * Header item title
   */
  title: string;
};

const TableHeadCell = ({ title }: TableHeadCellProps) => {
  return (
    <th className={`${prefix}--datatable-head__cell`} scope="col">
      <div className={`${prefix}--datatable-head__cell-label`}>{title}</div>
    </th>
  );
};

export default TableHeadCell;
